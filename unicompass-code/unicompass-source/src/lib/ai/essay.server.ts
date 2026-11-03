import { createOpenAI } from "@ai-sdk/openai";
import { NoObjectGeneratedError, Output, streamText } from "ai";
import { z } from "zod";

import { createLovableAiGatewayRunIdFetch } from "./run-id.server";

export const essayReviewSchema = z.object({
  score: z.number(),
  verdict: z.string(),
  categories: z.array(z.object({ name: z.string(), score: z.number(), comment: z.string() })),
  strengths: z.array(z.string()),
  improvements: z.array(z.string()),
});
export type EssayReview = z.infer<typeof essayReviewSchema>;

const INSTRUCTIONS = `You are an experienced university admissions essay reviewer.
Rate the student's essay honestly but kindly.
Give an overall score from 0 to 100 and a one-sentence verdict.
Score exactly these 5 categories from 0 to 10, each with a short comment: Hook & opening, Structure & flow, Personal voice, Specific details, Grammar & clarity.
List 3-5 specific strengths (quote short phrases from the essay when possible) and 3-5 concrete improvements with how to fix them.
Use simple English suitable for high-school students worldwide.`;

export async function reviewEssay(essay: string, prompt: string) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("AI is not configured.");
  const runIdFetch = createLovableAiGatewayRunIdFetch();
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });
  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    instructions: INSTRUCTIONS,
    messages: [
      {
        role: "user",
        content: `${prompt ? `Essay prompt: ${prompt}\n\n` : ""}Essay:\n${essay}`,
      },
    ],
    output: Output.object({ schema: essayReviewSchema }),
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  } as Parameters<typeof streamText>[0]);
  try {
    const out = (await result.output) as EssayReview;
    return {
      ...out,
      score: Math.max(0, Math.min(100, Math.round(out.score))),
      categories: out.categories.slice(0, 5).map((c) => ({ ...c, score: Math.max(0, Math.min(10, c.score)) })),
    };
  } catch (e) {
    if (NoObjectGeneratedError.isInstance(e)) throw new Error("The reviewer couldn't finish. Please try again.");
    const status = (e as { statusCode?: number }).statusCode;
    if (status === 429) throw new Error("Too many reviews right now. Please wait a minute and try again.");
    if (status === 402) throw new Error("AI credits have run out for this site. Please try again later.");
    throw e;
  }
}
