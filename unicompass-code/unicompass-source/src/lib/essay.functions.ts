import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const reviewEssayFn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) =>
    z.object({ essay: z.string().min(50).max(12000), prompt: z.string().max(1000) }).parse(d),
  )
  .handler(async ({ data }) => {
    const { reviewEssay } = await import("./ai/essay.server");
    return reviewEssay(data.essay, data.prompt);
  });
