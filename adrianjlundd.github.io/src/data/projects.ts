export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Mentaro",
    description:
      "AI-driven exam practice platform for Norwegian students with structured task solving and feedback.",
    tech: ["TypeScript", "Next.js", "Tailwind", "Prisma"],
    links: [
      { label: "GitHub", href: "https://github.com/USERNAME/mentaro" },
      { label: "Demo", href: "https://example.com" },
    ],
  },
  {
    title: "TV2 Editorial ML",
    description:
      "Machine learning models for predicting article performance using time series and embeddings.",
    tech: ["Python", "scikit-learn", "Pandas", "Embeddings"],
    links: [{ label: "Case", href: "https://example.com" }],
  },
  {
    title: "Battleship (JavaFX)",
    description:
      "Two-player Battleship game with JavaFX UI, turn switching, and tested game logic.",
    tech: ["Java", "JavaFX", "JUnit"],
    links: [{ label: "GitHub", href: "https://github.com/USERNAME/battleship" }],
  },
];
