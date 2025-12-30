import { motion, AnimatePresence } from "framer-motion";
import { X, Compass, BookOpen } from "lucide-react";
import { useEffect, useRef } from "react";
import ScreenshotGallery from "./ScreenshotGallery";

// Project screenshots in sequence
const projectScreenshots = ["/images/screenshot-01.png", "/images/screenshot-02.jpg", "/images/screenshot-03.jpg", "/images/screenshot-04.jpg", "/images/screenshot-05.jpg", "/images/screenshot-06.jpg", "/images/screenshot-07.jpg", "/images/screenshot-08.jpg", "/images/screenshot-09.jpg", "/images/screenshot-10.jpg"];
interface Project {
  id: number | string;
  title: string;
  description: string;
  fullDescription: string;
  role: string;
  tools: string[];
  icon: React.ReactNode;
  image?: string;
  videoGif?: string;
  videoUrl?: string;
}
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}
const ProjectModal = ({
  project,
  onClose
}: ProjectModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
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
  return <AnimatePresence>
      {project && <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} transition={{
      duration: 0.3
    }}>
          {/* Backdrop */}
          <motion.div className="absolute inset-0 bg-background/90 backdrop-blur-xl" onClick={onClose} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} />

          {/* Modal content - Fullscreen */}
          <motion.div className="relative w-screen h-screen overflow-y-auto bg-gradient-to-br from-card to-background-secondary" initial={{
        scale: 0.9,
        opacity: 0,
        y: 50
      }} animate={{
        scale: 1,
        opacity: 1,
        y: 0
      }} exit={{
        scale: 0.9,
        opacity: 0,
        y: 50
      }} transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }}>
            {/* Close button */}
            <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-background/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300">
              <X className="w-5 h-5" />
            </button>

            {/* Header area */}
            <div className="relative h-48 md:h-80 bg-gradient-to-b from-primary/10 to-transparent flex items-center justify-center overflow-hidden">
              <img src="/images/the-light-remains-cover.jpg" alt={project.title} className="w-full h-full object-scale-down" />
              
              {/* HUD elements */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-heading text-xs tracking-wider text-primary uppercase">
                  Project Data
                </span>
              </div>
            </div>

            {/* Content - Centered with max-width for readability */}
            <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-10">

              {/* Video Section - Before Overview */}
              {project.videoUrl && <div className="mb-8 flex justify-center">
                  <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-xl max-w-4xl w-full">
                    <video ref={videoRef} src={project.videoUrl} className="w-full h-auto object-cover cursor-pointer" onClick={handleVideoClick} autoPlay loop muted playsInline />
                  </div>
                </div>}

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-8">
                {/* Project Overview */}
                <div className="max-w-prose">
                  <div className="bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-6">
                    <h3 className="font-display text-lg font-semibold text-foreground text-center">
                      Project Overview
                    </h3>
                  </div>
                  <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                    <p>
                      <span className="text-primary">The Light Remains</span> is a <span className="text-primary">solo</span> third-person action-adventure project made in <span className="text-primary">Unreal Engine 5</span>.
                    </p>
                    <p>The main focus of this project is level design, exploration, and environment storytelling. Player guidance is done using lighting, paths, and landmarks, without heavy UI.<span className="text-primary">level design</span>, <span className="text-primary">exploration</span>, and <span className="text-primary">environment storytelling</span>. Player guidance is done using lighting, paths, and landmarks, without heavy UI.
                    </p>
                    <p>
                      The project was completed in <span className="text-primary">~30-minute playable experience</span> and results in a <span className="text-primary">~30-minute playable experience</span> set in floating islands and dangerous traversal areas.
                    </p>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="max-w-prose">
                  <div className="bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-6">
                    <h3 className="font-display text-lg font-semibold text-foreground text-center">
                      Focus Areas
                    </h3>
                  </div>
                  <ul className="space-y-5 list-disc list-outside ml-5">
                    <li className="font-body text-muted-foreground leading-relaxed">
                      <span className="text-primary font-semibold">Level Design & Player Flow:</span> Designed the full level from start to finish, focusing on clear paths, vertical traversal, exploration routes, and a strong sense of progression toward the final goal.
                    </li>
                    <li className="font-body text-muted-foreground leading-relaxed">
                      <span className="text-primary font-semibold">Environmental Storytelling & Guidance:</span> Told the story through the environment using lighting, landmarks, broken paths, and world composition—guiding the player naturally without maps or heavy UI.
                    </li>
                    <li className="font-body text-muted-foreground leading-relaxed">
                      <span className="text-primary font-semibold">Blockout & Blueprint Implementation:</span> Built the level mainly using Unreal Engine's modeling tools, with a few custom props made in Maya. Implemented gameplay logic using Blueprints, including triggers, dialogue, sound, and object visibility tied to player progression.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Screenshot Gallery */}
              <ScreenshotGallery images={projectScreenshots} />

              {/* Video/GIF Section */}
              {project.videoGif && <div className="mt-8">
                  <div className="rounded-xl overflow-hidden border border-border/50 shadow-xl">
                    <img src={project.videoGif} alt={`${project.title} gameplay`} className="w-full h-auto object-cover" />
                  </div>
                </div>}

              {/* Game Design Section */}
              <div className="mt-12 mb-8">
                <div className="bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-6">
                  <h3 className="font-display text-lg font-semibold text-foreground text-center">
                    Game Design
                  </h3>
                </div>
                <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                  <p>
                    In <span className="text-primary font-semibold">The Light Remains</span>, the focus is on <span className="text-primary font-semibold">exploration</span> and <span className="text-primary font-semibold">atmosphere</span>. The player learns about the world through <span className="text-primary">movement</span>, <span className="text-primary">level layout</span>, and <span className="text-primary">light</span>, without relying on heavy UI or complex systems.
                  </p>
                  <p>
                    The gameplay uses simple <span className="text-primary font-semibold">Blueprint-based triggers</span> such as <span className="text-primary">lighting changes</span>, <span className="text-primary">object visibility</span>, and <span className="text-primary">dialogue moments</span> that react to player progress. The full experience lasts around <span className="text-primary font-semibold">30 minutes</span> and tells its story through <span className="text-primary">environment</span> and <span className="text-primary">pacing</span>.
                  </p>
                </div>
              </div>

              {/* Narrative Summary & Design Pillars - Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mt-12 mb-8">
                {/* Narrative Summary */}
                <div className="max-w-prose">
                  <div className="bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-6">
                    <h3 className="font-display text-lg font-semibold text-foreground text-center">
                      Narrative Summary
                    </h3>
                  </div>
                  <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                    <p>
                      In <span className="text-primary font-semibold">The Light Remains</span>, the player explores a <span className="text-primary">broken world</span> shaped by a <span className="text-primary font-semibold">mysterious light</span> from the sky. <span className="text-primary">Floating islands</span> and <span className="text-primary">ruined paths</span> show that something went wrong long ago.
                    </p>
                    <p>
                      At the end, the player learns that the light is not dangerous, but something that <span className="text-primary font-semibold">keeps the world alive</span>. The world is still broken, but it is <span className="text-primary">calm</span>.
                    </p>
                  </div>
                </div>

                {/* Design Pillars */}
                <div className="max-w-prose">
                  <div className="bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-6">
                    <h3 className="font-display text-lg font-semibold text-foreground text-center">
                      Design Pillars
                    </h3>
                  </div>
                  <div className="flex justify-center gap-12 pt-4">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <Compass className="w-8 h-8 text-primary" />
                      </div>
                      <span className="font-heading text-sm text-foreground">Exploration</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-primary" />
                      </div>
                      <span className="font-heading text-sm text-foreground">Storytelling</span>
                    </div>
                  </div>
                  <div className="flex justify-center mt-8">
                    <a href="#" className="px-6 py-3 font-heading text-sm text-foreground bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 flex items-center gap-2">
                      Link to Game Design Document
                      <span className="text-primary">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Explorative Items Section */}
              <div className="mt-12 mb-8">
                <div className="bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-6">
                  <h3 className="font-display text-lg font-semibold text-foreground text-center">
                    Explorative Items
                  </h3>
                </div>
                <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Exploration is rewarded through simple <span className="text-primary">interactive items</span> placed along the player's journey. Instead of complex systems, I focused on <span className="text-primary font-semibold">discoverability</span> and <span className="text-primary font-semibold">curiosity</span>, encouraging players to explore optional paths and hidden areas.
                  </p>
                  <ul className="space-y-4 list-disc list-outside ml-5">
                    <li>
                      <span className="text-primary font-semibold">Loot Objects:</span> Small loot boxes are placed in side paths and hard-to-reach locations. These rewards give players a sense of <span className="text-primary">progress</span> and reinforce exploration without interrupting gameplay flow.
                    </li>
                    <li>
                      <span className="text-primary font-semibold">Key Item:</span> A key is collected during the journey without explaining its purpose. The player only learns its importance at the <span className="text-primary">final door</span>, creating a <span className="text-primary font-semibold">delayed payoff</span> and a stronger narrative moment. This approach allows the player to discover meaning through gameplay, rather than direct explanation.
                    </li>
                  </ul>
                </div>
                
                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center gap-3">
                    <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg">
                      <img src="/images/explorative-key.png" alt="Key Item" className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110" />
                    </div>
                    <span className="font-heading text-sm text-primary">Key Item</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg">
                      <img src="/images/explorative-lootbox.png" alt="Loot Box" className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110" />
                    </div>
                    <span className="font-heading text-sm text-primary">Loot Box</span>
                  </div>
                </div>
              </div>

              {/* Level Design Section */}
              <div className="mt-12 mb-8">
                <div className="bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-6">
                  <h3 className="font-display text-lg font-semibold text-foreground text-center">
                    Level Design
                  </h3>
                </div>
                <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                  <p>
                    The level is designed as a <span className="text-primary font-semibold">three-part journey</span>, where each section gradually increases in <span className="text-primary">scale</span>, <span className="text-primary">challenge</span>, and <span className="text-primary">atmosphere</span>. This structure helps the player learn the world naturally, build tension over time, and reach a meaningful ending.
                  </p>
                  <p>
                    The design focuses on <span className="text-primary font-semibold">clear paths</span>, <span className="text-primary font-semibold">strong landmarks</span>, and <span className="text-primary font-semibold">visual guidance</span> so the player always understands where to go without needing a map or heavy UI.
                  </p>
                  <p>
                    Exploration is encouraged through <span className="text-primary">optional routes</span>, <span className="text-primary">vertical spaces</span>, and <span className="text-primary">hidden areas</span> that reward curiosity. Instead of relying on complex mechanics, the level uses <span className="text-primary font-semibold">space</span>, <span className="text-primary font-semibold">lighting</span>, and <span className="text-primary font-semibold">pacing</span> to guide the experience.
                  </p>
                  <p>Each section is carefully arranged to keep the player engaged, create moments of danger and calm, and support the story told through the environment.<span className="text-primary">danger</span> and <span className="text-primary">calm</span>, and support the story told through the environment.
                  </p>
                </div>
                
                {/* Level Layout Map */}
                <div className="mt-8 flex justify-center">
                  <img src="/images/level-layout-map.png" alt="Level Layout Map" className="w-full max-w-4xl h-auto object-contain" />
                </div>
              </div>

              {/* Level Beats & Walkthrough Section */}
              <div className="mt-12 mb-8">
                <div className="bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-8">
                  <h3 className="font-display text-lg font-semibold text-foreground text-center">
                    Level Beats & Walkthrough
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Phases Column */}
                  <div className="space-y-4">
                    {/* Phase 1 */}
                    <div>
                      <h4 className="font-display text-sm font-semibold text-foreground mb-2">
                        Phase 1: The Journey Begins
                      </h4>
                      <ul className="space-y-1 font-body text-xs text-muted-foreground">
                        <li><span className="text-primary">1.</span> Player Start</li>
                        <li><span className="text-primary">2.</span> First Environment</li>
                        <li><span className="text-primary">3.</span> Early Exploration</li>
                      </ul>
                    </div>
                    
                    {/* Phase 2 */}
                    <div>
                      <h4 className="font-display text-sm font-semibold text-foreground mb-2">
                        Phase 2: Following the Light
                      </h4>
                      <ul className="space-y-1 font-body text-xs text-muted-foreground">
                        <li><span className="text-primary">4.</span> Guided Path</li>
                        <li><span className="text-primary">5.</span> Exploration + Challenge</li>
                        <li><span className="text-primary">6.</span> Key Landmark</li>
                      </ul>
                    </div>
                    
                    {/* Phase 3 */}
                    <div>
                      <h4 className="font-display text-sm font-semibold text-foreground mb-2">
                        Phase 3: The Truth
                      </h4>
                      <ul className="space-y-1 font-body text-xs text-muted-foreground">
                        <li><span className="text-primary">7.</span> Major Reveal</li>
                        <li><span className="text-primary">8.</span> Enemy Fight</li>
                        <li><span className="text-primary">9.</span> Final Path</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Images Grid */}
                  <div className="lg:col-span-3 grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => <div key={num} className="relative rounded-lg overflow-hidden border border-border/30">
                        <img src={`/images/level-beat-0${num}.jpg`} alt={`Level Beat ${num}`} className="w-full h-auto aspect-video object-contain border-dotted border-0 shadow-none" />
                      </div>)}
                  </div>
                </div>
              </div>

              {/* Pacing & Tension Graph Section */}
              <div className="mt-12 mb-8">
                <div className="bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-6">
                  <h3 className="font-display text-lg font-semibold text-foreground text-center">
                    Pacing & Tension Graph
                  </h3>
                </div>
                <div className="flex justify-center">
                  <img src="/images/pacing-tension-graph.png" alt="Pacing & Tension Graph" className="w-full max-w-5xl h-auto object-contain" />
                </div>
              </div>

              {/* Pre-Production & Development Approach Section */}
              <div className="mt-12 mb-8">
                <div className="bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-6">
                  <h3 className="font-display text-lg font-semibold text-foreground text-center">
                    Pre-Production & Development Approach
                  </h3>
                </div>
                
                <p className="font-body text-muted-foreground leading-relaxed mb-10">
                  For <span className="text-primary">The Light Remains</span>, I followed a simple and{' '}
                  <span className="text-primary">iterative workflow</span> inspired by{' '}
                  <span className="text-primary">real-world level design processes</span>.
                  Before production, I focused on the core idea, player journey, and overall level flow, then refined the experience through quick iteration and playtesting.
                  The project was completed in <span className="text-primary">3 weeks</span>, with each week focused on a clear goal.
                </p>

                {/* Planning & Development Approach - Two Column */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                    <h4 className="font-display text-base font-semibold text-foreground italic">
                      Planning & Development Approach
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                    <div className="space-y-3 font-body text-muted-foreground leading-relaxed max-w-prose">
                      <p><span className="text-primary">Week 1:</span> Defined the core idea and theme, planned the player path, key locations, and player guidance using light and landmarks.</p>
                      <p><span className="text-primary">Week 2:</span> Built the full level blockout in Unreal Engine, testing scale, pacing, traversal, and exploration flow.</p>
                      <p><span className="text-primary">Week 3:</span> Improved level readability, added gameplay triggers (light, dialogue, progression), fixed flow issues, and polished the level into a complete playable experience.</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-full max-w-md h-48 bg-muted/30 rounded-lg border border-border/50 flex items-center justify-center">
                        <p className="text-muted-foreground text-sm text-center px-4">Development workflow image placeholder - upload your image</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Production & Process - Two Column */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                    <h4 className="font-display text-base font-semibold text-foreground italic">
                      Production & Process
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    <div className="space-y-4 font-body text-muted-foreground leading-relaxed max-w-prose">
                      <p>My level design process focuses on <span className="text-primary">clarity</span>, <span className="text-primary">iteration</span>, and <span className="text-primary">playtesting</span>. I begin by planning the core idea and player journey, outlining the level flow, key locations, and how the player should move through the space before building anything.</p>
                      <p>I then create a rough blockout to test scale, traversal, and pacing, constantly playtesting and refining the layout. Once the level feels good to play, I move into a <span className="text-primary">refined blockout phase</span>—improving shapes, adding detail, and using lighting and landmarks to guide the player and set the overall mood.</p>
                    </div>
                    
                    <div className="flex justify-center items-center">
                      <div className="w-full max-w-md overflow-hidden rounded-lg border border-border/50">
                        <video src="/videos/blockout-walkthrough.mp4" autoPlay loop muted playsInline className="w-full h-auto object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post-Mortem Section */}
              <div className="mt-12 mb-8">
                <div className="bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-6">
                  <h3 className="font-display text-lg font-semibold text-foreground text-center">
                    Post-Mortem
                  </h3>
                </div>
                
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    If I had more time, I would focus more on <span className="text-primary">playtesting</span>, especially near the final section of the level. I would also spend extra time refining the ending to improve pacing and make the final moments feel more impactful and clear for the player.
                  </p>
                  <p>
                    Overall, working on <span className="text-primary">The Light Remains</span> was a valuable learning experience. From planning the player journey to building and refining the level through blockouts, I learned how important iteration and playtesting are in level design. Completing this project helped me better balance creativity with technical work, manage time effectively, and confidently finish a complete playable experience. Seeing the level come together step by step was very rewarding and strengthened my confidence as a level designer.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, i) => <span key={i} className="px-4 py-2 font-body text-sm text-foreground bg-primary/10 border border-primary/30 rounded-lg">
                        {tool}
                      </span>)}
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
        </motion.div>}
    </AnimatePresence>;
};
export default ProjectModal;