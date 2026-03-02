import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";

type TimelineEntry = {
  title: string;
  role: string;
  period: string;
  bullets: string[];
};

const Timeline = () => {
  const { ref, inView } = useInView();
  const { t } = useTranslation();
  const entries = t("timeline.entries", { returnObjects: true }) as TimelineEntry[];

  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-3">
            {t("timeline.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase text-foreground">
            {t("timeline.title")}
          </h2>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {entries.map((entry, i) => (
            <div
              key={entry.title}
              className={`relative mb-16 last:mb-0 md:flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${inView ? "animate-fade-up opacity-0" : "opacity-0"}`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 top-1 z-10" />

              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"
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
