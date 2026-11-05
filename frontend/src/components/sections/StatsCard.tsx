import { techInfo } from "../../data/techStats";
const StatsSection = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {techInfo.techStats.map((stat) => (
          <div
            key={stat.label}
            className="
              flex min-h-43 flex-col justify-center
              rounded-[26px]
              border border-[#27272f]
              bg-surface
              px-8 py-7
              transition-all duration-300
              hover:border-[#c5ff31]/40
              hover:-translate-y-1
              overflow-hidden
            "
          >
            <h2 className="mb-2 text-[max(30px,3.6cqw)] leading-none font-bold tracking-tight text-[#c5ff31]">
              {stat.value}
            </h2>

            <p className="text-[15px] font-medium tracking-wide text-[#a1a1aa]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
