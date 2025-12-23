import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Level Design",
    skills: ["Environmental Storytelling", "Player Flow", "Spatial Composition", "Lighting Design"],
  },
  {
    title: "World Building",
    skills: ["Lore Integration", "Atmospheric Design", "Landmark Creation", "Cultural Authenticity"],
  },
  {
    title: "Game Engines",
    skills: ["Unreal Engine 5", "Unity", "CryEngine", "Godot"],
  },
  {
    title: "3D & Tools",
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
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Skills & Tools
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4 pl-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="group flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.15 + skillIndex * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsla(187,100%,50%,0.5)] transition-all duration-300" />
                    <span className="font-body text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative line */}
              <motion.div
                className="mt-8 h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"
                initial={{ scaleX: 0, originX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: categoryIndex * 0.2 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
