import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Globe, Cpu, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Level Design",
    icon: <Gamepad2 className="w-6 h-6 text-primary" />,
    skills: ["Environmental Storytelling", "Player Flow", "Spatial Composition", "Lighting Design"],
  },
  {
    title: "World Building",
    icon: <Globe className="w-6 h-6 text-primary" />,
    skills: ["Lore Integration", "Atmospheric Design", "Landmark Creation", "Cultural Authenticity"],
  },
  {
    title: "Game Engines",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    skills: ["Unreal Engine 5", "Unity", "CryEngine", "Godot"],
  },
  {
    title: "3D & Tools",
    icon: <Palette className="w-6 h-6 text-primary" />,
    skills: ["Maya", "Blender", "Substance Painter", "World Machine"],
  },
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
          className="mb-20 text-center"
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

        {/* Skills grid - Glassmorphism cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group relative p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px -20px hsla(262, 83%, 58%, 0.2)",
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, hsla(262, 83%, 58%, 0.08) 0%, transparent 70%)",
                }}
              />

              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:shadow-[0_0_20px_hsla(262,83%,58%,0.3)] transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-gradient">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="badge-primary"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* HUD corners */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;