import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%23080810'/%3E%3C/svg%3E"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-dark-blue-futuristic-technology-background-9783-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Video overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Floating HUD elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-lg opacity-30"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-24 h-24 border border-primary/10 rounded-full opacity-20"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-20 blur-[100px]"
        style={{ background: "hsl(262.1, 83.3%, 57.8%)" }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full opacity-15 blur-[80px]"
        style={{ background: "hsl(320, 70%, 60%)" }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Accent lines */}
      <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent" />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        >
          {/* Purple glow behind name */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-32 bg-primary/20 blur-[100px] rounded-full" />
          </div>
          
          <motion.p
            className="font-heading text-sm md:text-base tracking-[0.3em] text-muted-foreground uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Level Designer
          </motion.p>
          
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="text-foreground">KURAPATI</span>
            <span className="block text-glow text-gradient">ARJUN</span>
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center gap-3 text-muted-foreground font-body text-sm md:text-base mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span>Future Games</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary neon-pulse" />
            <span>Warsaw, Poland</span>
          </motion.div>
          
          <motion.p
            className="font-heading text-lg md:text-xl text-muted-foreground max-w-xl mx-auto italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            "Designing immersive worlds players remember"
          </motion.p>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-body text-xs tracking-widest text-muted-foreground uppercase">
          Scroll
        </span>
        <motion.div
          className="animate-scroll-bounce"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
      
      {/* HUD corners */}
      <div className="absolute bottom-20 left-10 hud-corner hud-corner-bl opacity-30" />
      <div className="absolute top-20 right-10 hud-corner hud-corner-tr opacity-30" />
    </section>
  );
};

export default HeroSection;