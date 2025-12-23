import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import EasterEgg from "@/components/EasterEgg";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kurapati Arjun | Level Designer - Future Games</title>
        <meta 
          name="description" 
          content="Level Designer crafting immersive game worlds at Future Games. Specializing in environmental storytelling, player flow, and atmospheric design." 
        />
        <meta name="keywords" content="Level Designer, Game Developer, Unreal Engine, Unity, Environmental Design, Future Games" />
        <meta property="og:title" content="Kurapati Arjun | Level Designer" />
        <meta property="og:description" content="Designing immersive worlds players remember" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-x-hidden">
        {/* Atmospheric overlays */}
        <div className="noise-overlay" />
        <div className="vignette" />
        <div className="scan-lines" />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content */}
        <main>
          <HeroSection />
          
          <div id="about">
            <AboutSection />
          </div>
          
          <div id="projects">
            <ProjectsSection />
          </div>
          
          <div id="skills">
            <SkillsSection />
          </div>
          
          <div id="experience">
            <ExperienceSection />
          </div>
          
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        
        {/* Easter egg listener */}
        <EasterEgg />
      </div>
    </>
  );
};

export default Index;
