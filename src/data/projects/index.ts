// Central export for all projects
// Each project is fully independent with its own data structure

import { Project } from "./types";
import { theLightRemains } from "./the-light-remains";
import { forgottenValley } from "./forgotten-valley";
import { metroDescent } from "./metro-descent";
import { layerZero } from "./layer-zero";

// Export all projects
export const projects: Project[] = [
  theLightRemains,
  forgottenValley,
  metroDescent,
  layerZero,
];

// Helper functions
export const getProjectById = (id: string): Project | undefined => 
  projects.find(p => p.id === id);

export const getProjectsByCategory = (category: Project["category"]): Project[] => 
  projects.filter(p => p.category === category);

// Re-export types
export type { Project, ProjectSection } from "./types";
