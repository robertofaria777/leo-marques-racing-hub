import { useInView } from "@/hooks/useInView";

const entries = [
  {
    title: "Porsche Carrera Cup",
    role: "Race Engineer",
    period: "2023 – Present",
    bullets: [
      "Developed session-specific run plans and qualifying strategies",
      "Managed setup direction across mechanical and aero platforms",
      "Optimised tyre pressure windows and compound allocation",
      "Delivered post-session telemetry and video debriefs",
      "Coordinated real-time radio strategy during races",
    ],
  },
  {
    title: "Aston Martin GT4 Challenge",
    role: "Performance Engineer",
    period: "2022 – 2023",
    bullets: [
      "Led data acquisition and analysis for multi-driver lineups",
      "Designed stint strategies for endurance-format rounds",
      "Provided driver-specific coaching via sector-level comparisons",
      "Built setup change matrices for varying track conditions",
    ],
  },
  {
    title: "Ferrari Challenge",
    role: "Data Engineer",
    period: "2021 – 2022",
    bullets: [
      "Processed and analysed onboard telemetry across practice, qualifying, and race",
      "Produced tyre degradation models to guide pit-stop timing",
      "Supported driver development with structured video review sessions",
      "Collaborated with team on damper and ride-height adjustments",
      "Delivered debrief reports within 30 minutes of each session",
    ],
  },
];

const Timeline = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-3">
            Track Record
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase text-foreground">
            Experience
          </h2>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {entries.map((entry, i) => (
            <div
              key={entry.title}
              className={`relative mb-16 last:mb-0 md:flex ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } ${inView ? "animate-fade-up opacity-0" : "opacity-0"}`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 top-1 z-10" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <span className="text-xs text-primary font-body tracking-wider">
                  {entry.period}
                </span>
                <h3 className="font-heading text-xl uppercase text-foreground mt-1">
                  {entry.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-3">
                  {entry.role}
                </p>
                <ul className="space-y-1.5">
                  {entry.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-muted-foreground font-body flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
