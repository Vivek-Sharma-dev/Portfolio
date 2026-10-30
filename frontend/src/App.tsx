import Navbar from "./components/layout/Navbar";
import SkillsMarquee from "./components/sections/SkillsMarkquee";
import HeroSection from "./pages/HeroSection";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1360px] px-6 pt-5 pb-10 md:px-14">
        <HeroSection />
        <SkillsMarquee />
      </main>
    </>
  );
};

export default App;
