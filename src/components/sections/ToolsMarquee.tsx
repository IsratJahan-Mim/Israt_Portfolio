import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function ToolsMarquee() {
  const tools = PORTFOLIO_DATA.marqueeTools;
  // Duplicate for seamless infinite loop
  const list = [...tools, ...tools, ...tools];

  return (
    <div
      className="relative w-full py-6 border-y border-border-subtle bg-background-secondary/60 backdrop-blur-xs overflow-hidden select-none"
      aria-label="Core Tools & Technologies"
    >
      {/* Edge gradient masks */}
      <div
        className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background-primary to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background-primary to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        {list.map((tool, idx) => (
          <div
            key={`${tool}-${idx}`}
            className="flex items-center gap-2 mx-3 sm:mx-4 px-4 py-2 rounded-full border border-border-subtle bg-background-primary/80 text-content-primary text-sm font-semibold tracking-wide whitespace-nowrap shadow-2xs hover:border-accent-violet hover:text-accent-violet transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-coral" />
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}

