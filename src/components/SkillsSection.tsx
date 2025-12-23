import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Gamepad2, Sword, Ghost, Puzzle, Rocket } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface GroupProject {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  role: string;
  teamSize: string;
  tools: string[];
  icon: React.ReactNode;
}

const groupProjects: GroupProject[] = [
  {
    id: "echoes-of-eternity",
    title: "Echoes of Eternity",
    description: "A narrative-driven puzzle adventure exploring time manipulation mechanics",
    fullDescription: "Echoes of Eternity is a cooperative puzzle adventure where players manipulate time to solve environmental puzzles. As part of a 6-person team, I designed interconnected level layouts that encouraged player collaboration and created memorable 'aha' moments through temporal mechanics.",
    role: "Level Designer",
    teamSize: "6 members",
    tools: ["Unreal Engine 5", "Perforce", "Miro"],
    icon: <Puzzle className="w-6 h-6" />
  },
  {
    id: "phantom-protocol",
    title: "Phantom Protocol",
    description: "Stealth-action game with dynamic AI and emergent gameplay systems",
    fullDescription: "Phantom Protocol is a stealth-action experience featuring advanced AI that adapts to player strategies. I collaborated with programmers to design guard patrol routes, hiding spots, and distraction opportunities that created tense, rewarding infiltration scenarios.",
    role: "Game Designer",
    teamSize: "8 members",
    tools: ["Unity", "Git", "Notion"],
    icon: <Ghost className="w-6 h-6" />
  },
  {
    id: "starfall-arena",
    title: "Starfall Arena",
    description: "Fast-paced multiplayer arena shooter with unique character abilities",
    fullDescription: "Starfall Arena is a competitive multiplayer shooter where each character has unique traversal and combat abilities. I balanced character kits, designed arena layouts for competitive play, and worked closely with the art team on visual clarity during chaotic team fights.",
    role: "Systems Designer",
    teamSize: "12 members",
    tools: ["Unreal Engine 5", "Jira", "Discord"],
    icon: <Rocket className="w-6 h-6" />
  },
  {
    id: "blade-of-the-fallen",
    title: "Blade of the Fallen",
    description: "Souls-like action RPG with challenging combat and dark fantasy world",
    fullDescription: "Blade of the Fallen is a challenging action RPG inspired by the Souls series. I designed boss encounters with multiple phases, created interconnected world shortcuts, and ensured enemy placement taught players mechanics progressively before major challenges.",
    role: "Combat Designer",
    teamSize: "10 members",
    tools: ["Unreal Engine 5", "Maya", "Substance Painter"],
    icon: <Sword className="w-6 h-6" />
  },
  {
    id: "tiny-legends",
    title: "Tiny Legends",
    description: "Cozy co-op adventure game for families with accessible gameplay",
    fullDescription: "Tiny Legends is a family-friendly co-op adventure designed for players of all skill levels. I focused on creating asymmetric cooperation puzzles where both players feel essential, with adjustable difficulty and clear visual language for young players.",
    role: "UX Designer",
    teamSize: "5 members",
    tools: ["Unity", "Figma", "Trello"],
    icon: <Users className="w-6 h-6" />
  },
  {
    id: "neon-drift",
    title: "Neon Drift",
    description: "Arcade racing game with synthwave aesthetics and tight controls",
    fullDescription: "Neon Drift is a retro-futuristic racing game with drift-focused mechanics and a pulsing synthwave soundtrack. I designed track layouts that rewarded mastery of the drift system, created progression unlocks, and balanced vehicle stats for varied playstyles.",
    role: "Level Designer",
    teamSize: "7 members",
    tools: ["Unity", "Blender", "After Effects"],
    icon: <Gamepad2 className="w-6 h-6" />
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<GroupProject | null>(null);

  return (
    <section className="relative py-32 px-6 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
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
              Collaboration
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient">
            Group Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Collaborative game development projects where I contributed as part of talented teams
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }
            }
          }}
        >
          {groupProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative cursor-pointer"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 40,
                  scale: 0.9,
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                  }
                }
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative p-6 rounded-xl bg-card/50 backdrop-blur-xl border border-border/50 group-hover:border-primary/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  {project.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Meta info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{project.teamSize}</span>
                  </div>
                  <span className="text-primary/60">•</span>
                  <span>{project.role}</span>
                </div>
                
                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary/80 border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-primary">View Details →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject ? {
          id: selectedProject.id,
          title: selectedProject.title,
          description: selectedProject.description,
          fullDescription: selectedProject.fullDescription,
          role: selectedProject.role,
          tools: selectedProject.tools,
          icon: selectedProject.icon,
        } : null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default SkillsSection;
