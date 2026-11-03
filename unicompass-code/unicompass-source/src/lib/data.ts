export const FIELDS = [
  "Computer Science",
  "Engineering",
  "Business",
  "Medicine & Health",
  "Data Science",
  "Economics",
  "Design & Architecture",
  "Environmental Science",
  "Law",
  "Psychology",
] as const;
export type Field = (typeof FIELDS)[number];

export type University = {
  name: string;
  country: string;
  city: string;
  rank: number;
  tuition: number; // approx. USD per year, international
  minGpa: number;
  scholarship: boolean;
  language: string;
  fields: Field[];
};

const ALL: Field[] = [...FIELDS];

export const UNIVERSITIES: University[] = [
  { name: "Massachusetts Institute of Technology", country: "United States", city: "Cambridge", rank: 1, tuition: 61000, minGpa: 3.9, scholarship: true, language: "English", fields: ["Computer Science", "Engineering", "Data Science", "Economics", "Business"] },
  { name: "Stanford University", country: "United States", city: "Stanford", rank: 6, tuition: 62000, minGpa: 3.9, scholarship: true, language: "English", fields: ALL },
  { name: "Arizona State University", country: "United States", city: "Tempe", rank: 200, tuition: 33000, minGpa: 3.0, scholarship: true, language: "English", fields: ALL },
  { name: "University of Toronto", country: "Canada", city: "Toronto", rank: 25, tuition: 49900, minGpa: 3.3, scholarship: true, language: "English", fields: ALL },
  { name: "University of British Columbia", country: "Canada", city: "Vancouver", rank: 38, tuition: 42000, minGpa: 3.2, scholarship: true, language: "English", fields: ["Computer Science", "Engineering", "Environmental Science", "Psychology", "Business"] },
  { name: "University of Oxford", country: "United Kingdom", city: "Oxford", rank: 3, tuition: 45000, minGpa: 3.8, scholarship: true, language: "English", fields: ["Law", "Medicine & Health", "Economics", "Computer Science", "Psychology"] },
  { name: "University of Manchester", country: "United Kingdom", city: "Manchester", rank: 34, tuition: 32000, minGpa: 3.2, scholarship: true, language: "English", fields: ALL },
  { name: "Technical University of Munich", country: "Germany", city: "Munich", rank: 28, tuition: 4500, minGpa: 3.3, scholarship: false, language: "English / German", fields: ["Engineering", "Computer Science", "Data Science", "Environmental Science"] },
  { name: "ETH Zurich", country: "Switzerland", city: "Zurich", rank: 7, tuition: 1600, minGpa: 3.6, scholarship: true, language: "English / German", fields: ["Engineering", "Computer Science", "Data Science", "Design & Architecture", "Environmental Science"] },
  { name: "Delft University of Technology", country: "Netherlands", city: "Delft", rank: 47, tuition: 19000, minGpa: 3.2, scholarship: true, language: "English", fields: ["Engineering", "Design & Architecture", "Computer Science"] },
  { name: "Sciences Po", country: "France", city: "Paris", rank: 250, tuition: 15000, minGpa: 3.3, scholarship: true, language: "English / French", fields: ["Economics", "Law", "Business"] },
  { name: "KTH Royal Institute of Technology", country: "Sweden", city: "Stockholm", rank: 73, tuition: 17000, minGpa: 3.1, scholarship: true, language: "English", fields: ["Engineering", "Computer Science", "Environmental Science"] },
  { name: "University of Melbourne", country: "Australia", city: "Melbourne", rank: 13, tuition: 33000, minGpa: 3.2, scholarship: true, language: "English", fields: ALL },
  { name: "University of Auckland", country: "New Zealand", city: "Auckland", rank: 65, tuition: 28000, minGpa: 3.0, scholarship: true, language: "English", fields: ALL },
  { name: "National University of Singapore", country: "Singapore", city: "Singapore", rank: 8, tuition: 30000, minGpa: 3.6, scholarship: true, language: "English", fields: ALL },
  { name: "University of Tokyo", country: "Japan", city: "Tokyo", rank: 32, tuition: 5000, minGpa: 3.4, scholarship: true, language: "English / Japanese", fields: ["Engineering", "Computer Science", "Economics", "Environmental Science"] },
  { name: "KAIST", country: "South Korea", city: "Daejeon", rank: 53, tuition: 8000, minGpa: 3.2, scholarship: true, language: "English / Korean", fields: ["Engineering", "Computer Science", "Data Science", "Business"] },
  { name: "Tsinghua University", country: "China", city: "Beijing", rank: 20, tuition: 6000, minGpa: 3.5, scholarship: true, language: "English / Chinese", fields: ALL },
  { name: "University of Hong Kong", country: "Hong Kong", city: "Hong Kong", rank: 17, tuition: 23000, minGpa: 3.4, scholarship: true, language: "English", fields: ALL },
  { name: "Indian Institute of Technology Bombay", country: "India", city: "Mumbai", rank: 118, tuition: 4000, minGpa: 3.4, scholarship: true, language: "English", fields: ["Engineering", "Computer Science", "Data Science", "Design & Architecture"] },
  { name: "Khalifa University", country: "United Arab Emirates", city: "Abu Dhabi", rank: 202, tuition: 20000, minGpa: 2.9, scholarship: true, language: "English", fields: ["Engineering", "Computer Science", "Business", "Medicine & Health"] },
  { name: "King Abdulaziz University", country: "Saudi Arabia", city: "Jeddah", rank: 149, tuition: 0, minGpa: 3.0, scholarship: true, language: "English / Arabic", fields: ["Engineering", "Medicine & Health", "Business"] },
  { name: "Koç University", country: "Turkey", city: "Istanbul", rank: 300, tuition: 18000, minGpa: 3.0, scholarship: true, language: "English", fields: ALL },
  { name: "Universiti Malaya", country: "Malaysia", city: "Kuala Lumpur", rank: 60, tuition: 7000, minGpa: 2.8, scholarship: true, language: "English", fields: ALL },
  { name: "University of Cape Town", country: "South Africa", city: "Cape Town", rank: 171, tuition: 9000, minGpa: 2.9, scholarship: true, language: "English", fields: ALL },
  { name: "University of Nairobi", country: "Kenya", city: "Nairobi", rank: 900, tuition: 4000, minGpa: 2.6, scholarship: false, language: "English", fields: ["Medicine & Health", "Engineering", "Business", "Law", "Economics"] },
  { name: "Addis Ababa University", country: "Ethiopia", city: "Addis Ababa", rank: 1000, tuition: 2500, minGpa: 2.5, scholarship: true, language: "English", fields: ["Medicine & Health", "Engineering", "Law", "Economics", "Computer Science"] },
  { name: "University of Lagos", country: "Nigeria", city: "Lagos", rank: 1001, tuition: 3000, minGpa: 2.6, scholarship: false, language: "English", fields: ["Law", "Business", "Engineering", "Medicine & Health"] },
  { name: "Ashesi University", country: "Ghana", city: "Berekuso", rank: 1100, tuition: 11000, minGpa: 2.8, scholarship: true, language: "English", fields: ["Computer Science", "Business", "Engineering", "Economics"] },
  { name: "American University in Cairo", country: "Egypt", city: "Cairo", rank: 485, tuition: 19000, minGpa: 2.8, scholarship: true, language: "English", fields: ALL },
  { name: "University of São Paulo", country: "Brazil", city: "São Paulo", rank: 92, tuition: 0, minGpa: 3.0, scholarship: false, language: "Portuguese", fields: ALL },
  { name: "Tecnológico de Monterrey", country: "Mexico", city: "Monterrey", rank: 185, tuition: 16000, minGpa: 2.9, scholarship: true, language: "English / Spanish", fields: ALL },
  { name: "Pontificia Universidad Católica de Chile", country: "Chile", city: "Santiago", rank: 93, tuition: 12000, minGpa: 3.0, scholarship: true, language: "Spanish", fields: ALL },
  { name: "University of Buenos Aires", country: "Argentina", city: "Buenos Aires", rank: 84, tuition: 0, minGpa: 2.7, scholarship: false, language: "Spanish", fields: ALL },
  { name: "Trinity College Dublin", country: "Ireland", city: "Dublin", rank: 87, tuition: 27000, minGpa: 3.1, scholarship: true, language: "English", fields: ALL },
  { name: "University of Copenhagen", country: "Denmark", city: "Copenhagen", rank: 101, tuition: 17000, minGpa: 3.1, scholarship: true, language: "English", fields: ["Medicine & Health", "Environmental Science", "Economics", "Psychology", "Data Science"] },
  { name: "Politecnico di Milano", country: "Italy", city: "Milan", rank: 111, tuition: 4000, minGpa: 3.0, scholarship: true, language: "English / Italian", fields: ["Engineering", "Design & Architecture", "Computer Science"] },
  { name: "IE University", country: "Spain", city: "Madrid", rank: 400, tuition: 25000, minGpa: 2.9, scholarship: true, language: "English", fields: ["Business", "Law", "Economics", "Design & Architecture"] },
];

export type Program = University & { field: Field; level: "Bachelors" | "Masters"; title: string; slug: string };

export const PROGRAMS: Program[] = UNIVERSITIES.flatMap((u) =>
  u.fields.flatMap((field) =>
    (["Bachelors", "Masters"] as const).map((level) => ({
      ...u,
      field,
      level,
      tuition: level === "Masters" ? Math.round(u.tuition * 1.15) : u.tuition,
      title: `${level === "Bachelors" ? "BSc" : "MSc"} ${field}`,
      slug: `${u.name}-${field}-${level}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    })),
  ),
);

export type Profile = {
  fields: Field[];
  level: "Bachelors" | "Masters" | "Any";
  budget: number;
  gpa: number;
  countries: string[];
  language: string;
};

export const DEFAULT_PROFILE: Profile = {
  fields: ["Computer Science"],
  level: "Any",
  budget: 30000,
  gpa: 3.4,
  countries: [],
  language: "English",
};

export function scoreProgram(p: Program, profile: Profile) {
  const checks = [
    { label: "Field of interest", ok: profile.fields.length === 0 || profile.fields.includes(p.field) },
    { label: "Within budget", ok: p.tuition <= profile.budget },
    { label: `GPA ≥ ${p.minGpa}`, ok: profile.gpa >= p.minGpa },
    { label: "Preferred country", ok: profile.countries.length === 0 || profile.countries.includes(p.country) },
    { label: "Language of instruction", ok: p.language.includes(profile.language) },
    { label: "Scholarship available", ok: p.scholarship },
  ];
  const passed = checks.filter((c) => c.ok).length;
  return { checks, passed, percent: Math.round((passed / checks.length) * 100) };
}

/* ---------- Summer programs ---------- */
export type Opportunity = {
  name: string;
  org: string;
  location: string;
  interests: string[];
  ages: string;
  cost: string;
  deadline: string;
  url: string;
  why: string;
  tip: string;
};

export const INTERESTS = [
  "STEM & Research",
  "Math",
  "Computer Science",
  "Medicine & Health",
  "Business & Entrepreneurship",
  "Humanities & Writing",
  "Leadership & Policy",
  "Engineering",
  "Arts & Design",
] as const;

export const SUMMER_PROGRAMS: Opportunity[] = [
  { name: "Research Science Institute (RSI)", org: "MIT & Center for Excellence in Education", location: "Cambridge, USA", interests: ["STEM & Research", "Math", "Computer Science", "Engineering"], ages: "High school juniors", cost: "Free", deadline: "Mid December", url: "https://www.cee.org/programs/research-science-institute", why: "Six weeks doing real research with mentors; open to international students.", tip: "Show sustained curiosity — past projects or olympiad work matter more than grades alone." },
  { name: "Summer Science Program (SSP)", org: "SSP International", location: "USA (multiple campuses)", interests: ["STEM & Research", "Math", "Computer Science"], ages: "Ages 15–18", cost: "Need-based aid, often free", deadline: "February", url: "https://summerscience.org", why: "Hands-on team research in astrophysics, biochemistry or genomics.", tip: "Write clearly about why you love the problem, not just the prestige." },
  { name: "Yale Young Global Scholars", org: "Yale University", location: "New Haven, USA / Online", interests: ["Leadership & Policy", "Humanities & Writing", "STEM & Research"], ages: "Ages 16–18", cost: "Paid, generous aid", deadline: "January", url: "https://globalscholars.yale.edu", why: "Two-week sessions with students from 150+ countries.", tip: "Highlight a community issue you've acted on." },
  { name: "PROMYS", org: "Boston University", location: "Boston, USA", interests: ["Math"], ages: "Ages 14–18", cost: "Need-based aid", deadline: "March", url: "https://promys.org", why: "Deep number theory for students who love proofs.", tip: "Spend real time on the entrance problem set — it is the application." },
  { name: "Ross Mathematics Program", org: "Ross Program", location: "Ohio & Indiana, USA", interests: ["Math"], ages: "Ages 15–18", cost: "Need-based aid", deadline: "March", url: "https://rossprogram.org", why: "Six weeks of intense mathematical thinking.", tip: "Show your working and reasoning, even when stuck." },
  { name: "Stanford Institutes of Medicine Summer Research (SIMR)", org: "Stanford Medicine", location: "Stanford, USA", interests: ["Medicine & Health", "STEM & Research"], ages: "Ages 16+", cost: "Paid with stipend for some", deadline: "February", url: "https://simr.stanford.edu", why: "Eight weeks in a biomedical lab.", tip: "Mention lab, science-fair or hospital volunteering experience." },
  { name: "LaunchX", org: "LaunchX", location: "USA / Online", interests: ["Business & Entrepreneurship"], ages: "High school", cost: "Paid, aid available", deadline: "Rolling, early spring", url: "https://launchx.com", why: "Build and launch a real startup with a team.", tip: "Bring an idea and evidence you've tried to build something." },
  { name: "Iowa Young Writers' Studio", org: "University of Iowa", location: "Iowa City, USA / Online", interests: ["Humanities & Writing"], ages: "Ages 15–18", cost: "Paid, aid available", deadline: "February", url: "https://iyws.clas.uiowa.edu", why: "Workshops run by a top writing program.", tip: "Submit your strongest, most personal writing sample." },
  { name: "Oxford Summer Courses", org: "Oxford Summer Courses", location: "Oxford, UK", interests: ["Humanities & Writing", "Business & Entrepreneurship", "Medicine & Health", "STEM & Research"], ages: "Ages 13–24", cost: "Paid, scholarships available", deadline: "Rolling", url: "https://www.oxfordsummercourses.com", why: "Two-week tutorial-style courses in many subjects.", tip: "Apply early — scholarships go fast." },
  { name: "Canada/USA Mathcamp", org: "Mathcamp", location: "North America", interests: ["Math", "Computer Science"], ages: "Ages 13–18", cost: "Need-based aid, often free", deadline: "March", url: "https://www.mathcamp.org", why: "Five weeks of maths you choose yourself.", tip: "The qualifying quiz matters most — partial solutions count." },
  { name: "Women's Technology Program", org: "MIT EECS", location: "Cambridge, USA", interests: ["Computer Science", "Engineering"], ages: "Rising seniors", cost: "Need-based aid", deadline: "January", url: "https://wtp.mit.edu", why: "Four weeks of engineering and coding for young women.", tip: "Show interest in engineering even without prior experience." },
  { name: "Africa Science Week / AIMS Summer Schools", org: "African Institute for Mathematical Sciences", location: "Across Africa", interests: ["STEM & Research", "Math"], ages: "Secondary & university", cost: "Mostly free", deadline: "Varies", url: "https://nexteinstein.org", why: "Science and maths events across the continent.", tip: "Follow your local AIMS centre for announcements." },
  { name: "Harvard Pre-College Program", org: "Harvard Summer School", location: "Cambridge, USA", interests: ["Humanities & Writing", "Leadership & Policy", "STEM & Research", "Business & Entrepreneurship"], ages: "Ages 16–18", cost: "Paid, aid available", deadline: "Spring", url: "https://summer.harvard.edu/high-school-programs/pre-college-program", why: "Two-week, non-credit college-style courses.", tip: "Choose a course that links to the major you want." },
  { name: "Rhode Island School of Design Pre-College", org: "RISD", location: "Providence, USA", interests: ["Arts & Design"], ages: "Ages 16–18", cost: "Paid, scholarships", deadline: "Spring", url: "https://precollege.risd.edu", why: "Studio art and design in a top art school.", tip: "Build a small portfolio before applying for scholarships." },
];

export const INTERNSHIPS: Opportunity[] = [
  { name: "NASA OSTEM Internships", org: "NASA", location: "USA / Remote", interests: ["STEM & Research", "Engineering", "Computer Science"], ages: "High school (16+) & university, US citizens", cost: "Paid", deadline: "Feb (summer), May (fall)", url: "https://intern.nasa.gov", why: "Work on real NASA missions with mentors.", tip: "Apply to several projects in one application to boost your chances." },
  { name: "NIH Summer Internship Program", org: "National Institutes of Health", location: "Maryland, USA", interests: ["Medicine & Health", "STEM & Research"], ages: "Ages 17+", cost: "Paid stipend", deadline: "February", url: "https://www.training.nih.gov/research-training/hs/sip/", why: "Biomedical research in NIH labs.", tip: "Email investigators whose research you like after applying." },
  { name: "Google STEP Internship", org: "Google", location: "Worldwide", interests: ["Computer Science"], ages: "1st/2nd-year university", cost: "Paid", deadline: "Autumn", url: "https://buildyourfuture.withgoogle.com/programs/step", why: "Software engineering internship for early university students.", tip: "Practice coding problems and build one project you can explain deeply." },
  { name: "Microsoft Explore / Internships", org: "Microsoft", location: "Worldwide", interests: ["Computer Science", "Business & Entrepreneurship"], ages: "University students", cost: "Paid", deadline: "Autumn", url: "https://careers.microsoft.com/students", why: "Rotations across engineering and product roles.", tip: "Show teamwork and curiosity on your CV." },
  { name: "United Nations Internship Programme", org: "United Nations", location: "Global duty stations", interests: ["Leadership & Policy", "Humanities & Writing"], ages: "Graduate or final-year university", cost: "Unpaid (some stipends)", deadline: "Rolling", url: "https://careers.un.org", why: "Work inside UN agencies on global issues.", tip: "Tailor each application to the office's mandate; languages help." },
  { name: "Smithsonian Internships", org: "Smithsonian Institution", location: "Washington DC, USA / Virtual", interests: ["Humanities & Writing", "STEM & Research", "Arts & Design"], ages: "Ages 16+", cost: "Many paid", deadline: "Varies", url: "https://www.smithsonianofi.com", why: "Museums, research centres and archives.", tip: "Name the specific unit and mentor you'd like to work with." },
  { name: "World Bank Youth Summit & Internships", org: "World Bank", location: "Washington DC / Country offices", interests: ["Leadership & Policy", "Business & Entrepreneurship"], ages: "Graduate students", cost: "Paid", deadline: "Oct–Jan", url: "https://www.worldbank.org/en/about/careers/programs-and-internships", why: "Development economics and policy work.", tip: "Quantitative skills and field experience stand out." },
  { name: "CERN Summer Student Programme", org: "CERN", location: "Geneva, Switzerland", interests: ["STEM & Research", "Engineering", "Computer Science"], ages: "University (physics, CS, engineering)", cost: "Paid allowance", deadline: "January", url: "https://careers.cern/summer", why: "Join physics experiments at the world's largest lab.", tip: "Members of CERN states and non-member states both can apply — check your list." },
  { name: "Mastercard Foundation Scholars Internships", org: "Mastercard Foundation partners", location: "Africa", interests: ["Business & Entrepreneurship", "Leadership & Policy"], ages: "University students", cost: "Paid", deadline: "Varies", url: "https://mastercardfdn.org/all/scholars/", why: "Placements for young African leaders.", tip: "Focus your story on impact in your community." },
  { name: "Bank of America Student Leaders", org: "Bank of America", location: "USA", interests: ["Leadership & Policy", "Business & Entrepreneurship"], ages: "High school juniors & seniors", cost: "Paid", deadline: "January", url: "https://about.bankofamerica.com/en/making-an-impact/student-leaders", why: "Paid nonprofit internship plus a leadership summit.", tip: "Show volunteering you've led, not just joined." },
  { name: "Adobe Design / Creative Internships", org: "Adobe", location: "Worldwide", interests: ["Arts & Design", "Computer Science"], ages: "University students", cost: "Paid", deadline: "Autumn", url: "https://www.adobe.com/careers/university.html", why: "Product design and creative tech roles.", tip: "A clean portfolio of 3–5 case studies beats 20 pieces." },
  { name: "WHO Internship Programme", org: "World Health Organization", location: "Geneva & regional offices", interests: ["Medicine & Health", "Leadership & Policy"], ages: "University (20+)", cost: "Stipend for some", deadline: "Rolling", url: "https://www.who.int/careers/internship-programme", why: "Public health work at global scale.", tip: "Mention any public-health or research coursework." },
];

export const COMPETITIVE_TIPS = [
  "Start a small project of your own — a blog, app, research question or club — and keep it going for months.",
  "Keep a one-page CV updated with dates, roles and results (numbers help).",
  "Ask a teacher or mentor early for a recommendation and give them notes about your work.",
  "Apply to 5–10 programs: a mix of reach, match and likely options.",
  "Write short, specific answers: what you did, what you learned, what you'll do next.",
  "Online courses (Coursera, edX, Khan Academy) show initiative when you have no local options.",
];

/* ---------- Essays ---------- */
export type EssayPrompt = { category: string; prompt: string; source: string };

export const ESSAY_PROMPTS: EssayPrompt[] = [
  { category: "Personal story", source: "Common App", prompt: "Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story." },
  { category: "Challenge", source: "Common App", prompt: "The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?" },
  { category: "Beliefs", source: "Common App", prompt: "Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?" },
  { category: "Gratitude", source: "Common App", prompt: "Reflect on something that someone has done for you that has made you happy or thankful in a surprising way. How has this gratitude affected or motivated you?" },
  { category: "Growth", source: "Common App", prompt: "Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others." },
  { category: "Curiosity", source: "Common App", prompt: "Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?" },
  { category: "Community", source: "Common style", prompt: "Describe a community you belong to and how you have contributed to it." },
  { category: "Why this university", source: "Supplemental style", prompt: "Why do you want to study at this university, and how will you use its resources?" },
  { category: "Why this major", source: "Supplemental style", prompt: "What experiences led you to choose your intended field of study?" },
  { category: "Personal statement", source: "UCAS style (UK)", prompt: "Why do you want to study this course, and how have your studies and activities prepared you for it?" },
  { category: "Scholarship", source: "Scholarship style", prompt: "Describe a problem in your country or community and how your education will help you solve it." },
  { category: "Creative", source: "UChicago style", prompt: "Pick an everyday object and use it to tell us something important about who you are." },
];

export type EssaySample = { school: string; title: string; summary: string; url: string };

export const ESSAY_SAMPLES: EssaySample[] = [
  { school: "Johns Hopkins University", title: "Essays That Worked", summary: "Each year admissions publishes real student essays with notes on why they stood out.", url: "https://apply.jhu.edu/application-process/essays-that-worked/" },
  { school: "Hamilton College", title: "College Essays That Worked", summary: "Personal essays chosen by admission officers, from humour to deep reflection.", url: "https://www.hamilton.edu/admission/apply/college-essays-that-worked" },
  { school: "Connecticut College", title: "Essays That Worked", summary: "Short, memorable essays with staff comments on what made them work.", url: "https://www.conncoll.edu/admission/apply/essays-that-worked/" },
  { school: "Tufts University", title: "Essays That Worked", summary: "Responses to Tufts' supplemental prompts, shared by admissions.", url: "https://admissions.tufts.edu/blogs/inside-admissions/" },
  { school: "MIT Admissions", title: "Blogs & essay advice", summary: "Current students write about their applications and what they'd do differently.", url: "https://mitadmissions.org/blogs/" },
  { school: "Carleton College", title: "Essays That Worked", summary: "A collection of admitted students' essays with brief commentary.", url: "https://www.carleton.edu/admissions/apply/steps/essays/" },
];
