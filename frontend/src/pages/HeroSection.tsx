
import HeroIntro from "../components/heroComponents/HeroIntro";
import SkillsMarquee from "../components/sections/SkillsMarkquee";
import { personalInfo } from "../data/personal";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="mx-auto w-full max-w-[1360px] px-5 pt-0 pb-8 sm:px-8 sm:pt-14 md:px-14 lg:pt-16"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* Left: Introduction */}
          <div className="min-w-0">
            <HeroIntro />
          </div>

          {/* Right: Developer Visual */}
          <div className="relative mx-auto flex items-center h-full w-full max-w-[560px] items-center justify-center py-8 sm:py-12 lg:py-8">
            {/* Reserve space for the code window on mobile */}
            <div className="relative aspect-square w-full">
              {/* Ambient Glow */}
              <div className="pointer-events-none absolute inset-[10%] rounded-full bg-brand/10 blur-[70px] sm:blur-[100px]" />

              {/* Orbit */}
              <div className="hero-spin absolute inset-[3%] lg:inset-[6%_1%_0_6%] rounded-full border-2 border-dashed border-brand" />

              {/* Profile Image */}
              <div className="absolute inset-[10%] lg:inset-15 overflow-hidden rounded-full border border-line-strong">
                <img
                  src={personalInfo.image}
                  alt="Vivek Sharma working as a developer"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Technology Labels */}
              <div className="float-animate absolute left-[5%] top-[12%] z-10 rounded-full border border-brand bg-gray-800 px-3 py-1 sm:px-5">
                <p className="text-[10px] font-semibold text-text sm:text-xs">
                  PostgreSQL
                </p>
                <p className="font-mono text-[9px] text-muted sm:text-[10px]">
                  Database Layer
                </p>
              </div>

              <div className="float-animate absolute -right-10 lg:right-[-1%] top-[29%] z-10 rounded-full border border-brand bg-gray-800 px-3 py-1 sm:right-[-3%] sm:px-5">
                <p className="text-[10px] font-semibold text-text sm:text-xs">
                  Express
                </p>
                <p className="font-mono text-[9px] text-muted sm:text-[10px]">
                  Backend Layer
                </p>
              </div>

              <div className="float-animate absolute lg:bottom-[25%] lg:right-[-3%] z-10 hidden rounded-full border border-brand bg-gray-800 px-5 py-1 sm:block">
                <p className="text-xs font-semibold text-text">Node.js</p>
                <p className="font-mono text-[10px] text-muted">
                  Runtime Environment
                </p>
              </div>

              <div className="float-animate absolute left-[-2%] top-[49%] z-10 rounded-full border border-brand bg-gray-800 px-3 py-1 sm:left-[-4%] sm:px-5">
                <p className="text-[10px] font-semibold text-text sm:text-xs">
                  React.js
                </p>
                <p className="font-mono text-[9px] text-muted sm:text-[10px]">
                  UI/UX Layer
                </p>
              </div>

              {/* Code Window */}
              <div className="absolute bottom-[-50%] lg:-bottom-46 left-2/5 lg:left-2/7 z-20 w-[75%] max-w-[390px] -translate-x-1/2 overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl sm:bottom-[-40%]">
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-line px-3 py-3 sm:px-5 sm:py-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80 sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80 sm:h-3 sm:w-3" />
                  </div>

                  <span className="font-mono text-[10px] text-muted sm:text-xs">
                    vivek.ts
                  </span>

                  <span className="font-mono text-[10px] text-brand sm:text-xs">
                    TS
                  </span>
                </div>

                {/* Code Area */}
                <div className="overflow-x-auto p-3 sm:p-5">
                  <div className="space-y-0.5 font-mono text-[9px] leading-5 sm:space-y-1 sm:text-xs sm:leading-6">
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-sky-300">developer</span>{" "}
                      <span className="text-text">= {"{"}</span>
                    </p>

                    <p className="pl-4 sm:pl-6">
                      <span className="text-sky-300">name</span>
                      <span className="text-text">: </span>
                      <span className="text-green-300">
                        "{personalInfo.name}"
                      </span>
                      ,
                    </p>

                    <p className="pl-4 sm:pl-6">
                      <span className="text-sky-300">role</span>
                      <span className="text-text">: </span>
                      <span className="text-green-300">
                        "{personalInfo.role}"
                      </span>
                      ,
                    </p>

                    <p className="pl-4 sm:pl-6">
                      <span className="text-sky-300">stack</span>
                      <span className="text-text">: [</span>
                      <span className="text-green-300">"React"</span>
                      <span className="text-text">, </span>
                      <span className="text-green-300">"Node.js"</span>
                      <span className="text-text">,</span>
                    </p>

                    <p className="pl-10 sm:pl-16">
                      <span className="text-green-300">"Express"</span>
                      <span className="text-text">, </span>
                      <span className="text-green-300">"PostgreSQL"</span>
                      <span className="text-text">],</span>
                    </p>

                    <p className="pl-4 sm:pl-6">
                      <span className="text-sky-300">mindset</span>
                      <span className="text-text">: </span>
                      <span className="text-green-300">
                        "{personalInfo.mindset}"
                      </span>
                      ,
                    </p>

                    <p className="pl-4 sm:pl-6">
                      <span className="text-sky-300">building</span>
                      <span className="text-text">: </span>
                      <span className="text-green-300">
                        "{personalInfo.building}"
                      </span>
                      <span className="cursor ml-1" />
                    </p>

                    <p className="text-text">{"};"}</p>
                  </div>
                </div>

                {/* Window Footer */}
                <div className="flex items-center justify-between border-t border-line px-3 py-2.5 sm:px-5 sm:py-3">
                  <span className="font-mono text-[8px] text-muted sm:text-[10px]">
                    UTF-8 · TypeScript
                  </span>

                  <span className="flex items-center gap-1.5 font-mono text-[8px] text-muted sm:gap-2 sm:text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    READY TO BUILD
                  </span>
                </div>
              </div>

              {/* Floating Code Icon */}
              <div className="absolute -left-1 -top-10 z-10 rounded-xl border border-line bg-surface p-2.5 shadow-xl sm:p-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 font-mono text-sm font-bold text-brand sm:h-9 sm:w-9 sm:text-base">
                  {"</>"}
                </div>
              </div>

              {/* Floating Database Card */}
              <div className="absolute bottom-[2%] right-[1%] z-30 hidden rounded-xl border border-line bg-surface px-3 py-2.5 shadow-xl sm:block sm:px-4 sm:py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 font-mono text-lg text-brand">
                    DB
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-text">
                      PostgreSQL
                    </p>
                    <p className="font-mono text-[10px] text-muted">
                      Database layer
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Index */}
              <div className="absolute right-0 -top-6 font-mono text-[10px] text-brand sm:text-xs">
                [ 01 / DEV ]
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkillsMarquee />
    </>
  );
};

export default HeroSection;
