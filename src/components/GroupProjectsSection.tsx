import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, ExternalLink, Gamepad2, Sword, Ghost, Rocket } from "lucide-react";

interface GroupProject {
  id: string;
  title: string;
  description: string;
  role: string;
  teamSize: number;
  tools: string[];
  icon: React.ReactNode;
  color: string;
}

const groupProjects: GroupProject[] = [
  {
    id: "1",
    title: "Eternal Conquest",
    description: "A multiplayer fantasy RPG with real-time combat, guild systems, and procedural dungeons. Led the level design team in creating interconnected world zones.",
    role: "Lead Level Designer",
    teamSize: 12,
    tools: ["Unreal Engine 5", "Blender", "Perforce"],
    icon: <Sword className="w-6 h-6" />,
    color: "#E91E63"
  },
  {
    id: "2",
    title: "Phantom Protocol",
    description: "A co-op stealth action game where players coordinate to infiltrate high-security facilities. Designed the AI patrol systems and level layouts.",
    role: "Game Designer",
    teamSize: 8,
    tools: ["Unity", "Maya", "Git"],
    icon: <Ghost className="w-6 h-6" />,
    color: "#9C27B0"
  },
  {
    id: "3",
    title: "Stellar Exodus",
    description: "A space exploration game with procedurally generated planets and base building mechanics. Created the planetary terrain generation system.",
    role: "Technical Artist",
    teamSize: 15,
    tools: ["Unreal Engine 5", "World Machine", "Substance Painter"],
    icon: <Rocket className="w-6 h-6" />,
    color: "#2196F3"
  },
  {
    id: "4",
    title: "Arcade Mayhem",
    description: "A competitive party game featuring mini-games and chaotic multiplayer action. Designed multiple mini-game levels and balance mechanics.",
    role: "Level Designer",
    teamSize: 6,
    tools: ["Unity", "Blender", "Figma"],
    icon: <Gamepad2 className="w-6 h-6" />,
    color: "#FF9800"
  },
];

const GroupProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

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
              Collaborative Work
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient">
            Group Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Team-based game development projects showcasing collaboration and specialized roles
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              }
            }
          }}
        >
          {groupProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 40,
                  scale: 0.95
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }
                }
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500"
                style={{ backgroundColor: project.color }}
              />
              
              {/* Card */}
              <div className="relative p-6 rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="p-3 rounded-xl transition-all duration-300"
                    style={{ 
                      backgroundColor: `${project.color}20`,
                      color: project.color 
                    }}
                  >
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{project.teamSize} members</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{ 
                    backgroundColor: `${project.color}20`,
                    color: project.color 
                  }}
                >
                  {project.role}
                </span>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="px-2 py-1 rounded-md text-xs bg-white/[0.05] border border-white/[0.1] text-foreground/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-4 right-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hoveredProject === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="w-5 h-5 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GroupProjectsSection;
