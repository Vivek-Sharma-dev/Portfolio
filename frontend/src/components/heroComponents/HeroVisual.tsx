import { Fragment } from "react/jsx-runtime";
import { HeroData } from "../../data/hero";

type ChipProps = {
  title: string;
  sub: string;
  pos: string;
};
const Chip = ({ title, sub, pos }: ChipProps) => (
  <div
    className={`absolute rounded-full border border-brand/70 bg-[#151d27]/95 px-[max(10px,3.3cqw)] py-[max(5px,1.2cqw)] animate-float-cq motion-reduce:animate-none ${pos}`}
  >
    <div className="text-[max(10px,2cqw)] font-bold leading-tight text-text">
      {title}
    </div>
    <div className="whitespace-nowrap font-mono text-[max(9px,1.6cqw)] leading-tight text-muted">
      {sub}
    </div>
  </div>
);
const Dot = ({ color }: { color: string }) => (
  <span className={`size-[max(8px,1.6cqw)] rounded-full ${color}`} />
);
export default function HeroVisual({ photo = "/vivek.jpg" }) {
  return (
    <div className="@container relative mx-auto w-full max-w-187.5 sm:aspect-751/960">
      {/* ORBIT: tile + tag + ring + photo + chips */}
      <div className="relative aspect-751/700 sm:absolute sm:inset-0 sm:aspect-auto">
        {/* </> tile */}
        <div className="absolute left-[6%] top-0 grid aspect-square w-[10.3%] place-items-center rounded-[2.4cqw] border border-line bg-surface">
          <span className="grid size-[58%] place-items-center rounded-[1.2cqw] bg-brand/15 font-mono text-[max(11px,2.6cqw)] font-bold text-brand">
            {"</>"}
          </span>
        </div>

        {/* [ 01 / DEV ] */}
        <span className="absolute right-[2.9%] top-[3.1cqw] font-mono text-[max(10px,2cqw)] font-medium tracking-wider text-brand">
          [ 01 / DEV ]
        </span>

        {/* RING + PHOTO (photo is a sibling, so it does not spin and never leaves the ring) */}
        <div className="absolute left-[12.4%] top-[12.25cqw] aspect-square w-[79.4%]">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand animate-spin-slow motion-reduce:animate-none" />
          <div className="absolute inset-[5.5%] overflow-hidden rounded-full border border-line bg-surface-2">
            <img
              src={photo}
              alt="Vivek Sharma"
              className="size-full object-cover object-top"
            />
          </div>
        </div>
        {HeroData.chips.map((chip) => (
          <Fragment key={chip.title}>
            <Chip title={chip.title} sub={chip.sub} pos={chip.pos} />
          </Fragment>
        ))}

        {/* CHIPS */}
      </div>

      {/* CODE CARD: below the orbit on mobile, overlapping bottom-left from sm up */}
      <div className="mt-4 overflow-hidden rounded-[max(14px,2.6cqw)] border border-line bg-surface sm:absolute sm:bottom-0 sm:left-0 sm:mt-0 sm:w-[64.8%]">
        <div className="flex items-center gap-[max(6px,1.2cqw)] border-b border-line px-[max(14px,3.3cqw)] py-[max(10px,2.1cqw)]">
          <Dot color="bg-[#ef4444]" />
          <Dot color="bg-[#eab308]" />
          <Dot color="bg-[#22c55e]" />
          <span className="flex-1 text-center font-mono text-[max(11px,2cqw)] text-muted">
            vivek.ts
          </span>
          <span className="font-mono text-[max(10px,1.9cqw)] font-bold text-brand">
            TS
          </span>
        </div>

        <div className="whitespace-nowrap px-[max(14px,3.3cqw)] py-[max(12px,3.2cqw)] font-mono text-[max(12px,2cqw)] leading-[max(20px,4.65cqw)] text-muted">
          <div>
            <span className="text-[#c084fc]">const</span>{" "}
            <span className="text-[#7dd3fc]">developer</span> = {"{"}
          </div>
          <div className="pl-[2ch]">
            <span className="text-[#7dd3fc]">name</span>:{" "}
            <span className="text-[#86efac]">"Vivek Sharma"</span>,
          </div>
          <div className="pl-[2ch]">
            <span className="text-[#7dd3fc]">role</span>:{" "}
            <span className="text-[#86efac]">"Full-Stack Developer"</span>,
          </div>
          <div className="pl-[2ch]">
            <span className="text-[#7dd3fc]">stack</span>: [
            <span className="text-[#86efac]">"React"</span>,{" "}
            <span className="text-[#86efac]">"Node.js"</span>,
          </div>
          <div className="pl-[10ch]">
            <span className="text-[#86efac]">"Express"</span>,{" "}
            <span className="text-[#86efac]">"PostgreSQL"</span>],
          </div>
          <div className="pl-[2ch]">
            <span className="text-[#7dd3fc]">mindset</span>:{" "}
            <span className="text-[#86efac]">"Always learning"</span>,
          </div>
          <div className="pl-[2ch]">
            <span className="text-[#7dd3fc]">building</span>:{" "}
            <span className="text-[#86efac]">"Ideas into reality"</span>
            <span className="cursor ml-1" />
          </div>
          <div>{"};"}</div>
        </div>

        <div className="flex items-center justify-between border-t border-line px-[max(14px,3.3cqw)] py-[max(8px,1.9cqw)] font-mono text-[max(9px,1.5cqw)] uppercase text-muted">
          <span>UTF-8 · TypeScript</span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-brand" /> Ready to build
          </span>
        </div>
      </div>

      {/* DB CARD: only when the stage is wide enough (container query) */}
      <div className="absolute right-[3.7%] top-[85.4cqw] hidden items-center gap-[1.6cqw] rounded-[2.2cqw] border border-line bg-surface px-[2.4cqw] py-[1.6cqw] @[600px]:flex">
        <span className="grid aspect-square w-[5.7cqw] place-items-center rounded-[1.2cqw] bg-brand/15 font-mono text-[2.4cqw] font-bold text-brand">
          DB
        </span>
        <div>
          <div className="text-[2cqw] font-bold leading-tight text-text">
            PostgreSQL
          </div>
          <div className="font-mono text-[1.5cqw] leading-tight text-muted">
            Database layer
          </div>
        </div>
      </div>
    </div>
  );
}
