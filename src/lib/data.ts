// ─── Site-wide content data ─────────────────────────────────────────
// Single source of truth for all portfolio content.
// Keeps components pure — swap content here, UI updates everywhere.

export const siteConfig = {
  name: "Suman Mishra",
  role: "Full-Stack Developer · AI Engineer",
  tagline:
    "I build AI-powered products end-to-end — from browser-automation extensions and computer-vision pipelines to production backend systems on AWS.",
  location: "Kathmandu, Nepal",
  email: "sm0532204@gmail.com",
  phone: "+977-9845902185",
  availability: "Available for freelance & full-time roles",
  social: {
    github: "https://github.com/mishrasuman7",
    linkedin: "https://www.linkedin.com/in/suman-mishra-887446390/",
  },
  resumeUrl: "/resume.pdf", // TODO: add resume PDF to /public
} as const;

// ─── Projects ───────────────────────────────────────────────────────

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  context?: string; // e.g. "eSewa × WWF Hackathon 2026"
  problem: string;
  bullets: string[];
  result: string;
  tech: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    slug: "shieldkyc",
    title: "ShieldKYC",
    subtitle: "AI-Powered KYC Fraud Detection System",
    context: "eSewa × WWF Hackathon 2026",
    problem:
      "KYC pipelines auto-reject legitimate users and miss sophisticated forgeries — costing fintechs revenue and trust.",
    bullets: [
      "Built an explainable fraud-detection pipeline fusing 6 modules — document forensics, face matching, liveness, duplicate detection, fingerprint biometrics, and OCR verification.",
      "Developed document-forgery detection using Error Level Analysis, EXIF inspection, and FFT-based screen-replay detection.",
      "Implemented duplicate-identity detection via FAISS vector search over 512-dim face embeddings, plus SIFT/FLANN-based fingerprint matching.",
      "Designed a risk-tiered routing engine with plain-English fraud explanations, cutting false auto-rejections to zero.",
    ],
    result: "Shortlisted for the in-person final round in Chitwan",
    tech: [
      "Python",
      "FastAPI",
      "OpenCV",
      "DeepFace",
      "FAISS",
      "EasyOCR",
      "React",
    ],
    github: "https://github.com/mishrasuman7/shieldkyc",
  },
  {
    slug: "flowmine",
    title: "FlowMine",
    subtitle: "AI Behavioral Process Discovery Platform (B2B SaaS)",
    problem:
      "Enterprise teams waste hours on repetitive browser workflows without realising they share the same patterns.",
    bullets: [
      "Engineered a Chrome MV3 extension capturing passive browser telemetry across an entire team with zero user configuration.",
      "Implemented sliding-window subsequence mining to detect cross-employee behavioral patterns at team scale.",
      "Built an AI-generated skill library that autonomously executes repetitive tasks via structured, agentic action sequences.",
      "Designed a polyglot persistence architecture (DynamoDB + Aurora/pgvector) with real-time dashboard and Pusher Channels.",
    ],
    result: "Production-ready B2B SaaS architecture with real-time pattern detection",
    tech: [
      "Next.js",
      "TypeScript",
      "AWS DynamoDB",
      "Aurora",
      "pgvector",
      "Chrome Extension MV3",
      "Gemini API",
    ],
    github: "https://github.com/mishrasuman7/flowmine",
  },
  {
    slug: "autosense",
    title: "AutoSense",
    subtitle: "Behavior-Based Browser Automation Extension",
    context: "Protobytes Hackathon 2.0",
    problem:
      "Users repeat the same browsing sequences daily but have no way to detect and automate them without cloud lock-in.",
    bullets: [
      "Designed a privacy-first Chrome extension detecting repeated browsing sequences with zero cloud dependency, built in 48 hours.",
      "Engineered a sliding-window sequence-detection algorithm with time-gap filtering and confidence scoring to suppress false positives.",
      "Built full automation lifecycle management (create, pause/resume, edit, delete) and a live analytics dashboard.",
    ],
    result: "Fully functional privacy-first automation tool built in 48 hours",
    tech: [
      "JavaScript",
      "Chrome Extension APIs",
      "Manifest V3",
      "Local Storage",
    ],
    github: "https://github.com/mishrasuman7/protobytes-2.0-team-TheMatrix",
  },
];

// ─── Skills ─────────────────────────────────────────────────────────

export interface SkillCategory {
  label: string;
  icon: string; // emoji as lightweight icon
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    icon: "⌨️",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C", "HTML5", "CSS3"],
  },
  {
    label: "AI / Machine Learning",
    icon: "🧠",
    items: [
      "OpenCV",
      "DeepFace",
      "FAISS",
      "EasyOCR",
      "NumPy",
      "Pillow",
      "SIFT/FLANN",
    ],
  },
  {
    label: "Full-Stack",
    icon: "🔧",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    label: "Cloud & DevOps",
    icon: "☁️",
    items: [
      "AWS (DynamoDB, Aurora, Lambda)",
      "Vercel",
      "Docker",
      "Microsoft Azure",
      "Git",
      "GitHub",
    ],
  },
];

// ─── Credentials ────────────────────────────────────────────────────

export interface Credential {
  title: string;
  issuer: string;
  date: string;
  type: "certification" | "hackathon";
  url?: string; // link to certificate
}

export const credentials: Credential[] = [
  {
    title: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    date: "Mar 2026",
    type: "certification",
    url: "https://drive.google.com/file/d/1pmAngib9XvgGsiYcEMde8l1NNsOjusyC/view?usp=sharing",
  },
  {
    title: "eSewa Hackathon 2026 — ShieldKYC",
    issuer: "eSewa × WWF Nepal",
    date: "May 2026",
    type: "hackathon",
    url: "https://drive.google.com/file/d/1wcc3zfkr0vN0WPxVrf7OnE1ujVozEp8C/view?usp=sharing",
  },
  {
    title: "Protobytes Hackathon 2.0 — AutoSense",
    issuer: "PACE, Advanced College of Engineering",
    date: "Feb 2026",
    type: "hackathon",
    url: "https://drive.google.com/file/d/1fLYcNy8cI6YZhlc02OIKKHss9qlhPzkp/view?usp=drive_link",
  },
];

// ─── About ──────────────────────────────────────────────────────────

export const about = {
  bio: `I'm a full-stack developer and civil engineering student at Tribhuvan University's Institute of Engineering (IOE), Thapathali Campus. My engineering background isn't a detour — it trained me to think in systems, optimise under constraints, and build things that don't fall apart under load.`,
  differentiator: `I bring the same structural thinking to software: breaking complex problems into stable, well-architected solutions. Whether it's designing a fraud-detection pipeline or architecting a real-time SaaS platform, I approach every build with an engineer's discipline.`,
  education: {
    degree: "B.E. Civil Engineering",
    institution: "Tribhuvan University, IOE — Thapathali Campus",
    period: "2023 – 2027 (Expected)",
  },
};
