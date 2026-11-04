import Navbar from "./components/layout/Navbar";
import AboutSection from "./pages/AboutSection";
import HeroSection from "./pages/HeroSection";
import JourneySection from "./pages/JourneySkills";
import ProcessSection from "./pages/ProcessSection";
import SkillsSection from "./pages/SkillsSection";
import WorkSection from "./pages/WorkSection";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-340 px-6 pt-5 pb-10 md:px-14">
        <HeroSection />
        <WorkSection />
        <SkillsSection />
        <JourneySection />  
        <AboutSection />
        <ProcessSection />
      </main>
    </>
  );
};

export default App;
