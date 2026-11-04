
import {
  ArrowRight,
  Bot,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

const suggestions = [
  "His projects?",
  "Skills?",
  "His development journey?",
];

const AskAISection = () => {
  const isActivated = false;

  return (
    <section id="ask-ai" className="section">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

        {/* Left Content */}
        <div>
          <p className="label">07 / ASK AI</p>

          <h2 className="max-w-lg text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Curious about me?
            <br />
            Just <span className="text-brand">ask.</span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-muted">
            My personal AI assistant can help you explore my projects,
            technical skills and development journey.
            Get to know more about how I work without searching
            through the entire portfolio.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface text-brand">
              <Sparkles size={17} />
            </span>

            <span className="text-sm text-muted">
              A little more about me, powered by AI.
            </span>
          </div>
        </div>

        {/* Chat Preview */}
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl">

          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-line px-5 py-5 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-brand">
                <Bot size={21} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-text">
                  Vivek's AI assistant
                </h3>
                <p className="mt-1 font-mono text-[10px] text-muted">
                  PERSONAL KNOWLEDGE ASSISTANT
                </p>
              </div>
            </div>

            <span className="flex items-center gap-2 font-mono text-xs text-muted">
              <span className={`h-2 w-2 rounded-full ${
                isActivated ? "bg-brand" : "bg-yellow-400"
              }`} />
              {isActivated ? "online" : "offline"}
            </span>
          </div>

          {/* Chat Messages */}
          <div className="space-y-5 p-5 sm:p-7">

            {/* Assistant Message */}
            <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-line bg-surface-2 px-4 py-4">
              <p className="text-sm leading-6 text-text">
                Hi! I'm Vivek's assistant. Ask me about his projects,
                technical skills or development journey.
              </p>
            </div>

            {/* User Message */}
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-brand px-4 py-4">
              <p className="text-sm font-medium text-ink">
                What has Vivek built so far?
              </p>
            </div>

            {/* Assistant Response */}
            <div className="max-w-[95%] rounded-2xl rounded-tl-sm border border-line bg-surface-2 px-4 py-4">
              <p className="text-sm leading-6 text-muted">
                Once activated, I'll help you explore Vivek's projects,
                the technologies he uses and the problems he's worked on.
              </p>
            </div>

            {/* Suggested Questions */}
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <span
                  key={suggestion}
                  className="rounded-full border border-line-strong px-3 py-2 font-mono text-[11px] text-muted"
                >
                  {suggestion}
                </span>
              ))}
            </div>
          </div>

          {/* Input Preview */}
          <div className="border-t border-line p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex-1 rounded-full border border-line-strong bg-bg px-5 py-4">
                <span className="text-sm text-muted">
                  Ask something about Vivek...
                </span>
              </div>

              <button
                type="button"
                disabled
                aria-label="Send message (unavailable)"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-ink opacity-50"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Activation Overlay */}
          {!isActivated && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-bg/65 p-5 backdrop-blur-[3px]">
              <div className="w-full max-w-sm rounded-2xl border border-line-strong bg-surface/95 p-6 shadow-2xl sm:p-7">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                  <LockKeyhole size={22} />
                </div>

                <h3 className="mt-5 text-center text-xl font-bold text-text">
                  Something is brewing.
                </h3>

                <p className="mt-3 text-center text-sm leading-6 text-muted">
                  I'm preparing my personal AI assistant.
                  It'll be ready to answer your questions soon.
                </p>

                {/* Activation Progress */}
                <div className="mt-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-wider text-brand">
                      SYSTEM INITIALIZATION
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      IN PROGRESS
                    </span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-line">
                    <div className="h-full w-1/3 rounded-full bg-brand animate-pulse" />
                  </div>

                  <p className="mt-3 text-center font-mono text-[10px] text-muted">
                    Knowledge base · Configuration · Testing
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
                  <span className="font-mono text-[10px] text-muted">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AskAISection;
