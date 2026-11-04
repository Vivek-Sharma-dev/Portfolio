import Navbar from "./components/layout/Navbar";
import AboutSection from "./pages/AboutSection";
import HeroSection from "./pages/HeroSection";
import WorkSection from "./pages/WorkSection";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-340 px-6 pt-5 pb-10 md:px-14">
        <HeroSection />
        <WorkSection />
        <AboutSection />
      </main>
    </>
  );
};

export default App;
