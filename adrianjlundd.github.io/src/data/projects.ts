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
    title: "TV2 Editorial ML",
    description:
      "Machine learning models for predicting article performance using time series and embeddings.",
    tech: ["Python", "scikit-learn", "Pandas", "Embeddings"],
    links: [{ label: "GitHub", href: "https://example.com" }],
  },
  
  {
    
    title: "TV2 Editorial ML",
    description:
      "An interactive Tic Tac Toe game controlled entirely by hand gestures, built with Python, OpenCV, MediaPipe, and cvzone.",
    tech: ["Python", "scikit-learn", "CVzone","MediaPipe", "OpenCV"],
    links: [{ label: "GitHub", href: "https://github.com/adrianjlundd/tic-tac-toe-computer-vision-AR" }],
  },


  {
    title: "Battleship (JavaFX)",
    description:
      "Two-player Battleship game with JavaFX UI, turn switching, and tested game logic.",
    tech: ["Java", "JavaFX", "JUnit"],
    links: [{ label: "GitHub", href: "https://github.com/USERNAME/battleship" }],
  },
  {
    title: "Personal Info Dashboard",
    description:
      "A personal dashboard for displaying upcoming calendar events, bus departures, and weather information. Features automatic dark/light mode based on time of day",
    tech: ["Python", "Tkinter", "APIs"],
    links: [{ label: "GitHub", href: "https://github.com/adrianjlundd/Personal-info-screen" }],
  }
];
