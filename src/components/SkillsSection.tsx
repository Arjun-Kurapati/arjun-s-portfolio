import { motion, useInView } from "framer-motion";
import { useRef, FC, SVGProps } from "react";
import { 
  Lightbulb, Users, Map, Compass, Sparkles, Brush, 
  Camera, Monitor, Cog, Zap, Code, Target, Gamepad2, PenTool
} from "lucide-react";
import {
  UnrealEngineIcon,
  UnityIcon,
  BlenderIcon,
  MayaIcon,
  SubstanceIcon,
  WorldMachineIcon,
  GodotIcon,
  CryEngineIcon,
  PhotoshopIcon,
  ZBrushIcon,
  HoudiniIcon,
  AfterEffectsIcon,
  FigmaIcon,
} from "./ToolIcons";

type IconComponent = FC<SVGProps<SVGSVGElement>>;

interface Skill {
  name: string;
  icon: IconComponent;
  color: string;
}

const skills: Skill[] = [
  { name: "Unreal Engine 5", icon: UnrealEngineIcon, color: "147, 112, 219" },
  { name: "Unity", icon: UnityIcon, color: "100, 100, 100" },
  { name: "Blender", icon: BlenderIcon, color: "235, 122, 47" },
  { name: "Maya", icon: MayaIcon, color: "0, 186, 188" },
  { name: "Substance Painter", icon: SubstanceIcon, color: "227, 78, 58" },
  { name: "World Machine", icon: WorldMachineIcon, color: "86, 156, 214" },
  { name: "Godot", icon: GodotIcon, color: "72, 144, 209" },
  { name: "CryEngine", icon: CryEngineIcon, color: "0, 173, 239" },
  { name: "ZBrush", icon: ZBrushIcon, color: "129, 93, 78" },
  { name: "Houdini", icon: HoudiniIcon, color: "255, 77, 0" },
  { name: "Photoshop", icon: PhotoshopIcon, color: "49, 168, 255" },
  { name: "After Effects", icon: AfterEffectsIcon, color: "153, 102, 255" },
  { name: "Figma", icon: FigmaIcon, color: "162, 89, 255" },
  { name: "Level Design", icon: Map as IconComponent, color: "139, 92, 246" },
  { name: "Environmental Storytelling", icon: Lightbulb as IconComponent, color: "251, 191, 36" },
  { name: "Player Flow", icon: Compass as IconComponent, color: "34, 197, 94" },
  { name: "Lighting Design", icon: Sparkles as IconComponent, color: "250, 204, 21" },
  { name: "3D Modeling", icon: Cog as IconComponent, color: "168, 162, 158" },
  { name: "Texturing", icon: Brush as IconComponent, color: "236, 72, 153" },
  { name: "Game Mechanics", icon: Gamepad2 as IconComponent, color: "139, 92, 246" },
  { name: "Prototyping", icon: Zap as IconComponent, color: "234, 179, 8" },
  { name: "Blueprint Scripting", icon: Code as IconComponent, color: "14, 165, 233" },
  { name: "Cinematics", icon: Camera as IconComponent, color: "244, 63, 94" },
  { name: "UI/UX Design", icon: Monitor as IconComponent, color: "99, 102, 241" },
  { name: "Collaboration", icon: Users as IconComponent, color: "45, 212, 191" },
  { name: "Playtesting", icon: Target as IconComponent, color: "239, 68, 68" },
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
                {/* Multi-layer glow effect */}
                <div 
                  className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"
                  style={{ backgroundColor: `rgba(${skill.color}, 0.4)` }}
                />
                <div 
                  className="absolute inset-0 rounded-xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 scale-110"
                  style={{ backgroundColor: `rgba(${skill.color}, 0.3)` }}
                />
                
                {/* Glass card */}
                <div className="relative px-4 py-3 rounded-xl bg-white/[0.08] dark:bg-white/[0.05] backdrop-blur-2xl border border-white/[0.15] dark:border-white/[0.1] flex items-center gap-3 cursor-default overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] group-hover:border-white/[0.25] transition-all duration-300">
                  
                  {/* Inner glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none" />
                  
                  {/* Shine sweep effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.15] to-transparent rotate-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>
                  
                  {/* Icon container with glow */}
                  <div className="relative flex items-center justify-center">
                    {/* Icon glow layers */}
                    <div 
                      className="absolute inset-0 blur-md rounded-full opacity-0 group-hover:opacity-80 transition-all duration-300 scale-150"
                      style={{ backgroundColor: `rgba(${skill.color}, 0.6)` }}
                    />
                    <div 
                      className="absolute inset-0 blur-sm rounded-full opacity-30 group-hover:opacity-60 transition-all duration-300"
                      style={{ backgroundColor: `rgba(${skill.color}, 0.4)` }}
                    />
                    <IconComponent 
                      className="relative w-5 h-5 transition-all duration-300 drop-shadow-lg"
                      style={{ 
                        color: `rgb(${skill.color})`,
                        filter: `drop-shadow(0 0 6px rgba(${skill.color}, 0.5))`
                      }}
                    />
                  </div>
                  
                  {/* Skill name */}
                  <span className="relative text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
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