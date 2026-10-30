import HeroIntro from "../components/heroComponents/HeroIntro";
import HeroImage from "../assets/static/hero_placeholder.png";

const HeroSection = () => {
  return (
    <>
      <div className="flex gap-10 ">
        <HeroIntro />
        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center py-10 lg:py-16">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute inset-10 rounded-full bg-brand/10 blur-[100px]" />

          {/* Main Developer Card */}
          <div className="relative ">
            <div className="border-2 border-brand border-dashed w-120 h-120 rounded-full hero-spin"></div>
            <div className="absolute top-15 left-15 w-90 h-90 border rounded-full flex justify-center items-center overflow-hidden">
              <img
                src={HeroImage}
                alt="my "
                className="w-full h-full object-co/"
              />
            </div>
            <div className="absolute left-0 top-10  px-5 py-1 border rounded-full border-brand bg-gray-800 float-animate">
              <p className="text-xs font-semibold text-text">PostgreSQL</p>
              <p className="font-mono text-[10px] text-muted">Database Layer</p>
            </div>
            <div className="absolute -right-12 top-30  px-5 py-1 border rounded-full border-brand bg-gray-800 float-animate">
              <p className="text-xs font-semibold text-text">Express</p>
              <p className="font-mono text-[10px] text-muted">Backend Layer</p>
            </div>
            <div className="absolute -right-25 bottom-20  px-5 py-1 border rounded-full border-brand bg-gray-800 float-animate">
              <p className="text-xs font-semibold text-text">Node.JS</p>
              <p className="font-mono text-[10px] text-muted">Runtime Environment Layer</p>
            </div>
            <div className="absolute -left-17 top-50  px-5 py-1 border rounded-full border-brand bg-gray-800 float-animate">
              <p className="text-xs font-semibold text-text">React.JS</p>
              <p className="font-mono text-[10px] text-muted">UI/UX Layer</p>
            </div>
            <div className="absolute top-8/11 -left-13 w-full max-w-sm rounded-2xl border border-line bg-surface shadow-2xl ">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <span className="font-mono text-xs text-muted">vivek.ts</span>

                <span className="font-mono text-xs text-brand">TS</span>
              </div>

              {/* Code Area */}
              <div className="overflow-x-auto p-3 sm:p-5">
                <div className="space-y-1 font-mono text-xs leading-6 sm:text-sm">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-sky-300">developer</span>{" "}
                    <span className="text-text">= {"{"}</span>
                  </p>

                  <p className="pl-6">
                    <span className="text-sky-300">name</span>
                    <span className="text-text">: </span>
                    <span className="text-green-300">"Vivek Sharma"</span>,
                  </p>

                  <p className="pl-6">
                    <span className="text-sky-300">role</span>
                    <span className="text-text">: </span>
                    <span className="text-green-300">
                      "Full-Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    <span className="text-sky-300">stack</span>
                    <span className="text-text">: [</span>
                    <span className="text-green-300">"React"</span>
                    <span className="text-text">, </span>
                    <span className="text-green-300">"Node.js"</span>
                    <span className="text-text">,</span>
                  </p>

                  <p className="pl-16">
                    <span className="text-green-300">"Express"</span>
                    <span className="text-text">, </span>
                    <span className="text-green-300">"PostgreSQL"</span>
                    <span className="text-text">],</span>
                  </p>

                  <p className="pl-6">
                    <span className="text-sky-300">mindset</span>
                    <span className="text-text">: </span>
                    <span className="text-green-300">"Always learning"</span>,
                  </p>

                  <p className="pl-6">
                    <span className="text-sky-300">building</span>
                    <span className="text-text">: </span>
                    <span className="text-green-300">"Ideas into reality"</span>
                    <span className="cursor ml-1" />
                  </p>

                  <p>
                    <span className="text-text">{"};"}</span>
                  </p>
                </div>
              </div>

              {/* Window Footer */}
              <div className="flex items-center justify-between border-t border-line px-5 py-3">
                <span className="font-mono text-[10px] text-muted sm:text-xs">
                  UTF-8 · TypeScript
                </span>

                <span className="flex items-center gap-2 font-mono text-[10px] text-muted sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  READY TO BUILD
                </span>
              </div>
            </div>

            {/* Floating Stack Card */}
          </div>

          {/* Floating Stack Card */}
          <div className="absolute -left-2 top-8 rounded-xl border border-line bg-surface px-4 py-3 shadow-xl sm:-left-8 sm:top-12">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 font-mono font-bold text-brand">
                {"</>"}
              </div>
            </div>
          </div>

          {/* Floating Database Card */}
          <div className="absolute -right-1 bottom-8 rounded-xl border border-line bg-surface px-4 py-3 shadow-xl sm:-right-8 sm:bottom-12">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 font-mono text-lg text-brand">
                DB
              </div>

              <div>
                <p className="text-xs font-semibold text-text">PostgreSQL</p>
                <p className="font-mono text-[10px] text-muted">
                  Database layer
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Index */}
          <div className="absolute -right-1 top-0 font-mono text-xs text-brand sm:right-0">
            [ 01 / DEV ]
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
