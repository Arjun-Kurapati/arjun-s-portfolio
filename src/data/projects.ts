// Re-export from the new modular project structure
// This file is kept for backward compatibility

export { projects, getProjectById, getProjectsByCategory } from "./projects/index";
export type { Project, ProjectSection } from "./projects/types";

// Icon component helper (kept for backward compatibility)
import { Gamepad2, Map, Mountain, Compass, Building, Layers } from "lucide-react";
import React from "react";

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
