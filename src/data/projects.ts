import { Gamepad2, Map, Mountain, Compass, Building, Layers } from "lucide-react";
import React from "react";

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
