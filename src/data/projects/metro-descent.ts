import { Project } from "./types";

export const metroDescent: Project = {
  id: "metro-descent",
  title: "Metro Descent",
  description: "Underground subway system with branching narrative paths",
  category: "group",
  icon: "Building",
  genre: "Narrative Adventure",
  thumbnailImage: "/placeholder.svg",
  coverImage: "/placeholder.svg",
  
  // Different section structure for this project
  sections: [
    {
      type: "twoColumn",
      left: {
        title: "Project Overview",
        paragraphs: [
          {
            text: "A sprawling underground subway network featuring multiple branching paths that reflect player choices.",
            highlights: ["branching paths", "player choices"],
          },
          {
            text: "Environmental storytelling reveals the history of the collapsed civilization above through artifacts and architectural details.",
            highlights: ["Environmental storytelling", "collapsed civilization"],
          },
        ],
      },
      right: {
        title: "My Role",
        paragraphs: [
          {
            text: "As Level Designer on this group project, I was responsible for designing the main hub station and two branching tunnel routes.",
            highlights: ["Level Designer", "main hub station"],
          },
        ],
      },
    },
    
    {
      type: "text",
      title: "Narrative Integration",
      paragraphs: [
        {
          text: "The level design supports multiple story outcomes based on which paths players choose to explore.",
          highlights: ["multiple story outcomes"],
        },
      ],
    },
    
    {
      type: "credits",
      title: "Team Credits",
      items: [
        { label: "Level Design", credit: "Felipe Fleming" },
        { label: "Environment Art", credit: "Team Member A" },
        { label: "Narrative Design", credit: "Team Member B" },
      ],
    },
  ],
};
