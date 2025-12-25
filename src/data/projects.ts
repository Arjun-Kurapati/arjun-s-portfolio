import { Gamepad2, Map, Mountain, Compass, Building, Layers } from "lucide-react";
import React from "react";

export interface FocusArea {
  title: string;
  description: string;
  bullets?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  role: string;
  tools: string[];
  icon: string;
  category: "personal" | "group";
  image?: string;
  modalImage?: string;
  genre?: string;
  projectOverview?: string;
  focusAreas?: FocusArea[];
}

export const projects: Project[] = [
  // Personal Projects
  {
    id: 1,
    title: "The Light Remains",
    description: "A third-person exploration adventure through mysterious landscapes",
    fullDescription: "An immersive third-person exploration adventure set in a beautifully crafted low-poly world. Players navigate through towering rock formations, ancient bridges, and atmospheric environments while uncovering the secrets of this forgotten realm.",
    role: "Game Design & Level Design",
    tools: ["Unreal Engine 5"],
    icon: "Gamepad2",
    category: "personal",
    genre: "Third Person · Exploration Adventure",
    image: "/images/the-light-remains-thumb.jpg",
    modalImage: "/images/the-light-remains.jpg",
    projectOverview: `The Light Remains is a solo third-person action-adventure project that I created to show my skills in Level Design and Game Design. I made this project completely in Unreal Engine 5. My main focus was on level layout, exploration, environment storytelling, and Art. Instead of using lots of UI, I guided the player using lighting, paths, landmarks, and world design.

The project took around 3 weeks to complete.
• First week: planning the idea, world layout, and gameplay flow
• Next two weeks: building and iterating on the blockout

The final result is a ~30-minute playable experience where the player explores floating islands, dangerous paths, and a mysterious light that drives the story forward.

This project shows:
• How I design levels from blockout to playable gameplay
• How I guide players using environment and lighting
• My ability to complete a full solo project from start to finish`,
    focusAreas: [
      {
        title: "Level Design",
        description: "Designed the full game layout from start to finish, including the main path, alternate routes, vertical traversal, and final encounter area. The level is structured to gradually increase tension and scale, leading the player naturally toward the final goal."
      },
      {
        title: "Environmental Storytelling",
        description: "Used the environment to tell the story instead of heavy UI or text. Lighting, landmarks, broken paths, floating islands, and level composition guide the player and explain what happened to the world."
      },
      {
        title: "Gameplay Flow & Player Guidance",
        description: "Focused on player guidance using light beams, visibility cues, level shapes, and natural paths. The player is encouraged to explore and move forward without using a minimap or on-screen arrows."
      },
      {
        title: "Blueprint Scripting (Unreal Engine 5)",
        description: "Implemented gameplay logic using Blueprints, including:",
        bullets: [
          "Trigger-based events",
          "Playing dialogue and sound at specific moments",
          "Making objects and lights appear / disappear",
          "Progression logic tied to exploration and player movement"
        ]
      },
      {
        title: "Blockout & World Building",
        description: "Created almost the entire level using Unreal Engine's modeling tools. A few small and complex props were modeled in Maya and integrated into the level. The focus was on strong blockout, readable spaces, and playable scale."
      }
    ],
  },
  {
    id: 2,
    title: "Forgotten Valley",
    description: "Open-world exploration zone with dynamic weather systems",
    fullDescription: "An expansive open-world environment featuring dynamic weather systems and time-of-day progression. The valley rewards exploration with hidden caves, ancient ruins, and emergent gameplay opportunities scattered throughout the landscape.",
    role: "Level Designer",
    tools: ["Unity", "World Machine", "Photoshop"],
    icon: "Map",
    category: "personal",
    genre: "Open World - Adventure",
    image: "/placeholder.svg", // Replace with your actual project image
  },
  // Group Projects
  {
    id: 3,
    title: "Metro Descent",
    description: "Underground subway system with branching narrative paths",
    fullDescription: "A sprawling underground subway network featuring multiple branching paths that reflect player choices. Environmental storytelling reveals the history of the collapsed civilization above through artifacts and architectural details.",
    role: "Level Designer",
    tools: ["Unreal Engine 5", "3ds Max", "Quixel"],
    icon: "Building",
    category: "group",
  },
  {
    id: 4,
    title: "Layer Zero",
    description: "Puzzle platformer with dimensional shifting mechanics",
    fullDescription: "An innovative puzzle platformer where players shift between dimensional layers to solve intricate environmental puzzles. Each layer presents the same space differently, requiring creative thinking and precise timing.",
    role: "Level Designer",
    tools: ["Unity", "ProBuilder", "Substance"],
    icon: "Layers",
    category: "group",
  },
];

export const getProjectsByCategory = (category: Project["category"]) => 
  projects.filter(p => p.category === category);

export const getIconComponent = (iconName: string) => {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    Gamepad2,
    Map,
    Mountain,
    Compass,
    Building,
    Layers,
  };
  return icons[iconName];
};
