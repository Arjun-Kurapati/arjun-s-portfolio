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
  category: "personal" | "professional" | "group";
}

export const projects: Project[] = [
  // Personal Projects
  {
    id: 1,
    title: "Abandoned Station",
    description: "A atmospheric horror level set in a derelict space station",
    fullDescription: "A meticulously crafted atmospheric horror experience set within the decaying corridors of a once-thriving orbital research station. Players navigate through environmental storytelling, discovering the fate of the crew through subtle visual cues and deliberate level pacing.",
    role: "Level Designer",
    tools: ["Unreal Engine 5", "Maya", "Substance"],
    icon: "Gamepad2",
    category: "personal",
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
  },
  // Professional Work
  {
    id: 3,
    title: "Summit Protocol",
    description: "Vertical gameplay focused mountain climbing experience",
    fullDescription: "A vertical slice demonstrating innovative mountain climbing mechanics with dynamic handholds, weather hazards, and breathtaking vistas. Each section of the climb presents unique challenges while maintaining fluid player progression.",
    role: "Level Designer",
    tools: ["Unreal Engine 5", "Houdini", "ZBrush"],
    icon: "Mountain",
    category: "professional",
  },
  {
    id: 4,
    title: "Nexus Hub",
    description: "Central multiplayer hub with seamless instance transitions",
    fullDescription: "A sophisticated multiplayer hub environment designed for seamless player interaction and instance transitions. The space balances social gathering areas with clear navigation pathways to various game modes.",
    role: "Level Designer",
    tools: ["Unity", "Blender", "Figma"],
    icon: "Compass",
    category: "professional",
  },
  // Group Projects
  {
    id: 5,
    title: "Metro Descent",
    description: "Underground subway system with branching narrative paths",
    fullDescription: "A sprawling underground subway network featuring multiple branching paths that reflect player choices. Environmental storytelling reveals the history of the collapsed civilization above through artifacts and architectural details.",
    role: "Level Designer",
    tools: ["Unreal Engine 5", "3ds Max", "Quixel"],
    icon: "Building",
    category: "group",
  },
  {
    id: 6,
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
