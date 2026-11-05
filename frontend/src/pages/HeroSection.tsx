import HeroIntro from "../components/heroComponents/HeroIntro";
import HeroVisual from "../components/heroComponents/HeroVisual";
import SkillsMarquee from "../components/sections/SkillsMarkquee";
import { personalInfo } from "../data/personal";


const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="mx-auto w-full max-w-340 px-5 sm:px-0 pt-0 pb-8 sm:pt-5 "
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* Left: Introduction */}
          <div className="min-w-0">
            <HeroIntro />
          </div>

          {/* Right: Developer Visual */}
          <div className="min-w-0">
            {" "}
            <HeroVisual photo={personalInfo.image} />{" "}
          </div>
        </div>
      </section>

      <SkillsMarquee />
    </>
  );
};

export default HeroSection;
