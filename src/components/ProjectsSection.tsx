import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Gamepad2, Map, Mountain, Compass, Building, Layers } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  role: string;
  tools: string[];
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Abandoned Station",
    description: "A atmospheric horror level set in a derelict space station",
    fullDescription: "A meticulously crafted atmospheric horror experience set within the decaying corridors of a once-thriving orbital research station. Players navigate through environmental storytelling, discovering the fate of the crew through subtle visual cues and deliberate level pacing.",
    role: "Level Designer",
    tools: ["Unreal Engine 5", "Maya", "Substance"],
    icon: <Gamepad2 className="w-8 h-8 text-primary" />,
  },
  {
    id: 2,
    title: "Forgotten Valley",
    description: "Open-world exploration zone with dynamic weather systems",
    fullDescription: "An expansive open-world environment featuring dynamic weather systems and time-of-day progression. The valley rewards exploration with hidden caves, ancient ruins, and emergent gameplay opportunities scattered throughout the landscape.",
    role: "Level Designer",
    tools: ["Unity", "World Machine", "Photoshop"],
    icon: <Map className="w-8 h-8 text-primary" />,
  },
  {
    id: 3,
    title: "Summit Protocol",
    description: "Vertical gameplay focused mountain climbing experience",
    fullDescription: "A vertical slice demonstrating innovative mountain climbing mechanics with dynamic handholds, weather hazards, and breathtaking vistas. Each section of the climb presents unique challenges while maintaining fluid player progression.",
    role: "Level Designer",
    tools: ["Unreal Engine 5", "Houdini", "ZBrush"],
    icon: <Mountain className="w-8 h-8 text-primary" />,
  },
  {
    id: 4,
    title: "Nexus Hub",
    description: "Central multiplayer hub with seamless instance transitions",
    fullDescription: "A sophisticated multiplayer hub environment designed for seamless player interaction and instance transitions. The space balances social gathering areas with clear navigation pathways to various game modes.",
    role: "Level Designer",
    tools: ["Unity", "Blender", "Figma"],
    icon: <Compass className="w-8 h-8 text-primary" />,
  },
  {
    id: 5,
    title: "Metro Descent",
    description: "Underground subway system with branching narrative paths",
    fullDescription: "A sprawling underground subway network featuring multiple branching paths that reflect player choices. Environmental storytelling reveals the history of the collapsed civilization above through artifacts and architectural details.",
    role: "Level Designer",
    tools: ["Unreal Engine 5", "3ds Max", "Quixel"],
    icon: <Building className="w-8 h-8 text-primary" />,
  },
  {
    id: 6,
    title: "Layer Zero",
    description: "Puzzle platformer with dimensional shifting mechanics",
    fullDescription: "An innovative puzzle platformer where players shift between dimensional layers to solve intricate environmental puzzles. Each layer presents the same space differently, requiring creative thinking and precise timing.",
    role: "Level Designer",
    tools: ["Unity", "ProBuilder", "Substance"],
    icon: <Layers className="w-8 h-8 text-primary" />,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative py-32 px-6" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="font-heading text-sm tracking-[0.2em] text-primary uppercase">
              Portfolio
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Personal Projects
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Select a project to explore the design process and final implementation
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              role={project.role}
              tools={project.tools}
              icon={project.icon}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
