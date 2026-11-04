
const stats = [
  {
    value: "04",
    label: "Projects built",
  },
  {
    value: "05+",
    label: "Technologies used",
  },
  {
    value: "[2022]",
    label: "Started coding",
  },
  {
    value: "100%",
    label: "Responsive builds",
  },
];

const StatsSection = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              flex min-h-[172px] flex-col justify-center
              rounded-[26px]
              border border-[#27272f]
              bg-[#101014]
              px-8 py-7
              transition-all duration-300
              hover:border-[#c5ff31]/40
              hover:-translate-y-1
            "
          >
            <h3 className="mb-2 text-[48px] leading-none font-bold tracking-tight text-[#c5ff31]">
              {stat.value}
            </h3>

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
