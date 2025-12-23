import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  { 
    name: "Unreal Engine 5", 
    description: "Primary game engine for AAA-quality projects with advanced lighting and Nanite technology",
    color: "#0E1128",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <path fill="currentColor" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 1.886c7.785 0 14.114 6.329 14.114 14.114S23.785 30.114 16 30.114 1.886 23.785 1.886 16 8.215 1.886 16 1.886zm-2.998 5.97c-3.835 1.472-6.475 5.186-6.475 9.522 0 .858.107 1.69.307 2.487l5.479-3.758v5.383c0 .429.214.858.643 1.072l.643.429c-.321-.643-.429-1.393-.429-2.143 0-2.465 1.608-4.394 3.837-5.145v-2.679l3.622-2.465c-.429-.107-.965-.214-1.501-.214-2.358 0-4.394 1.179-5.687 2.894v-5.383h-.439zm8.452 2.787l-4.609 3.115v2.358c1.072.429 1.929 1.286 2.358 2.358l4.716-3.222c-.214-1.822-.965-3.437-2.143-4.716l-.322.107z"/>
      </svg>
    )
  },
  { 
    name: "Unity", 
    description: "Versatile engine for rapid prototyping and cross-platform game development",
    color: "#000000",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <path fill="currentColor" d="M27.26 26.24l-2.64-4.58-2.66 4.58h-3.22l4.36-7.54-4.36-7.54h3.22l2.66 4.58 2.64-4.58h3.22l-4.36 7.54 4.36 7.54zM15.32 21.66l-2.64 4.58H9.46l4.36-7.54V11.16h3.22v7.54zM13.18 5.76l2.64 4.58v7.54H12.6V10.34L8.24 2.8h3.22z"/>
      </svg>
    )
  },
  { 
    name: "Level Design", 
    description: "Crafting immersive game spaces with intuitive player flow and memorable landmarks",
    color: "#4CAF50",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  { 
    name: "World Building", 
    description: "Creating cohesive game worlds with rich lore and environmental storytelling",
    color: "#2196F3",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  { 
    name: "Environmental Storytelling", 
    description: "Conveying narrative through visual details and environmental cues",
    color: "#FF9800",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
      </svg>
    )
  },
  { 
    name: "Maya", 
    description: "Industry-standard 3D software for modeling, animation, and rigging",
    color: "#0D9488",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <path fill="currentColor" d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 2.5L25.5 9 16 13.5 6.5 9 16 4.5zM6 10.5l9 4.5v11l-9-4.5v-11zm20 0v11l-9 4.5v-11l9-4.5z"/>
      </svg>
    )
  },
  { 
    name: "Blender", 
    description: "Open-source 3D creation suite for modeling, sculpting, and rendering",
    color: "#F5792A",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <path fill="currentColor" d="M16.61 12.57c3.46 0 6.56 1.39 8.82 3.64 2.27 2.25 3.67 5.36 3.67 8.79 0 3.43-1.4 6.54-3.67 8.79-2.26 2.25-5.36 3.64-8.82 3.64s-6.56-1.39-8.82-3.64c-2.27-2.25-3.67-5.36-3.67-8.79 0-3.43 1.4-6.54 3.67-8.79 2.26-2.25 5.36-3.64 8.82-3.64zM6.75 12.21L.5 17.5l6.25.04 8.25-5.33H6.75zM15 6.75l-6.25 6.25h6.25L21.25.5 15 6.75z"/>
      </svg>
    )
  },
  { 
    name: "Substance Painter", 
    description: "Advanced texturing tool for creating realistic PBR materials",
    color: "#E91E63",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>
      </svg>
    )
  },
  { 
    name: "World Machine", 
    description: "Procedural terrain generation for realistic landscapes at scale",
    color: "#795548",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
      </svg>
    )
  },
  { 
    name: "Player Flow", 
    description: "Designing intuitive navigation paths and player guidance systems",
    color: "#9C27B0",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
      </svg>
    )
  },
  { 
    name: "Lighting Design", 
    description: "Creating mood and atmosphere through strategic light placement",
    color: "#FFEB3B",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z"/>
      </svg>
    )
  },
  { 
    name: "3D Modeling", 
    description: "Creating optimized game-ready assets with clean topology",
    color: "#00BCD4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/>
      </svg>
    )
  },
  { 
    name: "Texturing", 
    description: "Hand-painting and procedural texturing for stylized and realistic art",
    color: "#8BC34A",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/><circle cx="6.5" cy="11.5" r="1.5" fill="currentColor"/><circle cx="9.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="14.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="17.5" cy="11.5" r="1.5" fill="currentColor"/>
      </svg>
    )
  },
  { 
    name: "Game Mechanics", 
    description: "Designing engaging gameplay systems and balanced interactions",
    color: "#607D8B",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
      </svg>
    )
  },
  { 
    name: "Prototyping", 
    description: "Rapid iteration and testing of gameplay concepts and mechanics",
    color: "#FF5722",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
      </svg>
    )
  },
  { 
    name: "Blueprint Scripting", 
    description: "Visual programming in Unreal Engine for gameplay logic and systems",
    color: "#3F51B5",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    )
  },
  { 
    name: "Cinematics", 
    description: "Creating in-engine cutscenes and dramatic camera sequences",
    color: "#673AB7",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
      </svg>
    )
  },
  { 
    name: "UI/UX Design", 
    description: "Designing intuitive game interfaces and player-centric experiences",
    color: "#009688",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
      </svg>
    )
  },
  { 
    name: "Collaboration", 
    description: "Working effectively with artists, designers, and programmers in teams",
    color: "#E91E63",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    )
  },
  { 
    name: "Playtesting", 
    description: "Gathering and analyzing player feedback for iterative improvement",
    color: "#4CAF50",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path fill="currentColor" d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    )
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.15, y: -8, zIndex: 10 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Glow effect behind card */}
              <div 
                className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500"
                style={{ backgroundColor: skill.color, filter: 'blur(20px)' }}
              />
              
              {/* Glass card */}
              <div className="relative px-4 py-3 rounded-xl bg-white/[0.08] dark:bg-white/[0.05] backdrop-blur-xl border border-white/[0.15] dark:border-white/[0.1] flex items-center gap-3 cursor-pointer overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:border-white/[0.25] transition-all duration-300">
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` }}
                />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.15] to-transparent rotate-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </div>
                
                {/* Icon with glow */}
                <div className="relative">
                  <div 
                    className="absolute inset-0 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  />
                  <div 
                    className="relative transition-colors duration-300"
                    style={{ color: hoveredSkill === skill.name ? skill.color : 'hsl(var(--primary))' }}
                  >
                    {skill.svg}
                  </div>
                </div>
                
                {/* Skill name */}
                <span className="relative text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>

              {/* Tooltip on hover */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 pointer-events-none"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={hoveredSkill === skill.name ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative px-4 py-3 rounded-xl bg-background/95 dark:bg-background/90 backdrop-blur-xl border border-white/[0.15] shadow-2xl">
                  {/* Tooltip arrow */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 rotate-45 bg-background/95 dark:bg-background/90 border-r border-b border-white/[0.15]" />
                  
                  {/* Tooltip content */}
                  <div className="flex items-start gap-3">
                    <div 
                      className="p-2 rounded-lg shrink-0"
                      style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                    >
                      {skill.svg}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{skill.name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;