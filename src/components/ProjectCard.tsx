import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tools: string[];
  icon: React.ReactNode;
  accentColor?: string;
  index: number;
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  role,
  tools,
  icon,
  accentColor = "cyan",
  index,
  onClick,
}: ProjectCardProps) => {
  const getAccentClasses = () => {
    switch (accentColor) {
      case "magenta":
        return "from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-500/30 hover:border-fuchsia-500/60 hover:shadow-[0_0_30px_hsla(300,100%,50%,0.2)]";
      case "green":
        return "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-[0_0_30px_hsla(160,100%,50%,0.2)]";
      case "orange":
        return "from-orange-500/20 to-orange-500/5 border-orange-500/30 hover:border-orange-500/60 hover:shadow-[0_0_30px_hsla(30,100%,50%,0.2)]";
      default:
        return "from-primary/20 to-primary/5 border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_hsla(187,100%,50%,0.2)]";
    }
  };

  const getIconBgClasses = () => {
    switch (accentColor) {
      case "magenta":
        return "bg-gradient-to-br from-fuchsia-500/30 to-fuchsia-900/20 border-fuchsia-500/40";
      case "green":
        return "bg-gradient-to-br from-emerald-500/30 to-emerald-900/20 border-emerald-500/40";
      case "orange":
        return "bg-gradient-to-br from-orange-500/30 to-orange-900/20 border-orange-500/40";
      default:
        return "bg-gradient-to-br from-primary/30 to-cyan-900/20 border-primary/40";
    }
  };

  return (
    <motion.div
      className={`relative group cursor-pointer rounded-2xl p-6 md:p-8 bg-gradient-to-br ${getAccentClasses()} border backdrop-blur-xl transition-all duration-500`}
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ 
        scale: 1.02, 
        rotateY: 2,
        transition: { duration: 0.3 } 
      }}
      onClick={onClick}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
      >
        {/* Icon container */}
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl ${getIconBgClasses()} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>

        {/* Content */}
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-glow transition-all duration-300">
          {title}
        </h3>
        
        <p className="font-body text-sm md:text-base text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <span className="font-heading text-xs tracking-wider text-secondary-foreground uppercase">
            {role}
          </span>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-body text-muted-foreground bg-background/50 rounded-full border border-border/50"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Hover indicator */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <ExternalLink className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>

      {/* HUD corners */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
    </motion.div>
  );
};

export default ProjectCard;
