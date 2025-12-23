import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Globe, Cpu, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Level Design",
    icon: <Gamepad2 className="w-6 h-6 text-primary" />,
    skills: ["Environmental Storytelling", "Player Flow", "Spatial Composition", "Lighting Design", "Puzzle Design", "Combat Spaces", "Pacing & Rhythm", "Verticality", "Cover Systems", "Navigation Mesh", "Playtest Iteration", "Greyboxing"],
  },
  {
    title: "World Building",
    icon: <Globe className="w-6 h-6 text-primary" />,
    skills: ["Lore Integration", "Atmospheric Design", "Landmark Creation", "Cultural Authenticity", "Biome Design", "Weather Systems", "Day/Night Cycles", "NPC Placement", "Audio Ambience", "Visual Hierarchy", "Open World Design"],
  },
  {
    title: "Game Engines",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    skills: ["Unreal Engine 5", "Unity", "CryEngine", "Godot", "Blueprints", "C# Scripting", "Nanite", "Lumen", "Terrain Tools", "Material Editor", "Sequencer"],
  },
  {
    title: "3D & Tools",
    icon: <Palette className="w-6 h-6 text-primary" />,
    skills: ["Maya", "Blender", "Substance Painter", "World Machine", "ZBrush", "Photoshop", "Houdini", "Gaea", "Quixel Mixer", "SpeedTree", "Marmoset Toolbag"],
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group relative p-8 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
              }}
            >
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-white/[0.05] dark:bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.15] dark:border-white/[0.08]" />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-accent/[0.05] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent rotate-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>

              {/* Inner glow */}
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center shadow-[0_0_30px_hsla(262,83%,58%,0.2)] group-hover:shadow-[0_0_40px_hsla(262,83%,58%,0.4)] transition-all duration-500">
                    {category.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gradient">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list - Glass pills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-white/[0.08] dark:bg-white/[0.05] backdrop-blur-md border border-white/[0.12] text-foreground/90 hover:bg-primary/20 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Subtle corner accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary/20 group-hover:border-primary/50 rounded-tl-lg transition-colors duration-300" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/50 rounded-tr-lg transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/50 rounded-bl-lg transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary/20 group-hover:border-primary/50 rounded-br-lg transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;