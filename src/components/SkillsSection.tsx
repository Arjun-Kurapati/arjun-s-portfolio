import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Gamepad2, Globe, Cpu, Palette, Box, Layers, Mountain, 
  Lightbulb, Users, Map, Compass, Sparkles, Brush, PenTool,
  Camera, Monitor, Cog, Zap, Code, Target
} from "lucide-react";

const skills = [
  { name: "Unreal Engine 5", icon: Gamepad2 },
  { name: "Unity", icon: Box },
  { name: "Level Design", icon: Map },
  { name: "World Building", icon: Globe },
  { name: "Environmental Storytelling", icon: Lightbulb },
  { name: "Maya", icon: Layers },
  { name: "Blender", icon: Palette },
  { name: "Substance Painter", icon: Brush },
  { name: "World Machine", icon: Mountain },
  { name: "Player Flow", icon: Compass },
  { name: "Lighting Design", icon: Sparkles },
  { name: "3D Modeling", icon: Box },
  { name: "Texturing", icon: PenTool },
  { name: "Game Mechanics", icon: Cog },
  { name: "Prototyping", icon: Zap },
  { name: "Blueprint Scripting", icon: Code },
  { name: "Cinematics", icon: Camera },
  { name: "UI/UX Design", icon: Monitor },
  { name: "Collaboration", icon: Users },
  { name: "Playtesting", icon: Target },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              Expertise
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient">
            Skills & Tools
          </h2>
        </motion.div>

        {/* Skills grid - Individual glassmorphism cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                {/* Glow effect behind card */}
                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Glass card */}
                <div className="relative px-4 py-3 rounded-xl bg-white/[0.06] dark:bg-white/[0.04] backdrop-blur-xl border border-white/[0.12] dark:border-white/[0.08] flex items-center gap-3 cursor-default overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent rotate-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  </div>
                  
                  {/* Icon with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/40 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <IconComponent className="relative w-5 h-5 text-primary group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  {/* Skill name */}
                  <span className="relative text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;