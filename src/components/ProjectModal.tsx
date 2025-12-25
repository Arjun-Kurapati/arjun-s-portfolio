import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface Project {
  id: number | string;
  title: string;
  description: string;
  fullDescription: string;
  role: string;
  tools: string[];
  icon: React.ReactNode;
  image?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content - Fullscreen */}
          <motion.div
            className="relative w-full h-full max-w-[95vw] max-h-[95vh] md:max-w-[90vw] md:max-h-[90vh] overflow-y-auto bg-gradient-to-br from-card to-background-secondary rounded-2xl border border-border/50"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-background/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header area */}
            <div className="relative h-48 md:h-80 bg-gradient-to-b from-primary/10 to-transparent flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(187,100%,50%,0.1),transparent_70%)]" />
                  <motion.div
                    className="text-8xl md:text-9xl opacity-20"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {project.icon}
                  </motion.div>
                </>
              )}
              
              {/* HUD elements */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-heading text-xs tracking-wider text-primary uppercase">
                  Project Data
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  {project.icon}
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {project.title}
                  </h2>
                  <p className="font-heading text-sm text-primary tracking-wider uppercase">
                    {project.role}
                  </p>
                </div>
              </div>

              <div className="gradient-line mb-8" />

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Project Overview */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Project Overview
                  </h3>
                  <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                    <p>
                      The Light Remains is a solo third-person action-adventure project that I created to show my skills in Level Design and Game Design. I made this project completely in Unreal Engine 5. My main focus was on level layout, exploration, environment storytelling, and Art.
                    </p>
                    <p>
                      Instead of using lots of UI, I guided the player using lighting, paths, landmarks, and world design. The project took around 3 weeks to complete.
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>First week: planning the idea, world layout, and gameplay flow</li>
                      <li>Next two weeks: building and iterating on the blockout</li>
                    </ul>
                    <p>
                      The final result is a ~30-minute playable experience where the player explores floating islands, dangerous paths, and a mysterious light that drives the story forward.
                    </p>
                    <p className="font-medium text-foreground">This project shows:</p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>How I design levels from blockout to playable gameplay</li>
                      <li>How I guide players using environment and lighting</li>
                      <li>My ability to complete a full solo project from start to finish</li>
                    </ul>
                  </div>
                </div>

                {/* Focus Areas */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Focus Areas
                  </h3>
                  <div className="space-y-5 font-body text-sm">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Level Design</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Designed the full game layout from start to finish, including the main path, alternate routes, vertical traversal, and final encounter area. The level is structured to gradually increase tension and scale, leading the player naturally toward the final goal.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Environmental Storytelling</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Used the environment to tell the story instead of heavy UI or text. Lighting, landmarks, broken paths, floating islands, and level composition guide the player and explain what happened to the world.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Gameplay Flow & Player Guidance</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Focused on player guidance using light beams, visibility cues, level shapes, and natural paths. The player is encouraged to explore and move forward without using a minimap or on-screen arrows.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Blueprint Scripting (Unreal Engine 5)</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        Implemented gameplay logic using Blueprints, including:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2 text-muted-foreground">
                        <li>Trigger-based events</li>
                        <li>Playing dialogue and sound at specific moments</li>
                        <li>Making objects and lights appear / disappear</li>
                        <li>Progression logic tied to exploration and player movement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Blockout & World Building</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Created almost the entire level using Unreal Engine's modeling tools. A few small and complex props were modeled in Maya and integrated into the level. The focus was on strong blockout, readable spaces, and playable scale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 font-body text-sm text-foreground bg-primary/10 border border-primary/30 rounded-lg"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <div className="glass-card p-6 text-center">
                    <p className="font-body text-muted-foreground text-sm">
                      Full project documentation and walkthrough available upon request
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HUD corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/30" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/30" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/30" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
