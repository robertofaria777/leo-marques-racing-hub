import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";
import gallerySim from "@/assets/gallery-sim.jpg";

type SimPoint = {
  title: string;
  text: string;
};

const SimRacing = () => {
  const { ref, inView } = useInView();
  const { t } = useTranslation();
  const points = t("simRacing.points", { returnObjects: true }) as SimPoint[];

  return (
    <section id="sim" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-3">
            {t("simRacing.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase text-foreground">
            {t("simRacing.title")}
          </h2>
        </div>

        <div
          ref={ref}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        >
          <div
            className={`rounded-sm overflow-hidden ${
              inView ? "animate-fade-up opacity-0" : "opacity-0"
            }`}
          >
            <img
              src={gallerySim}
              alt={t("simRacing.imageAlt")}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            {points.map((p, i) => (
              <div
                key={p.title}
                className={`${
                  inView ? "animate-fade-up opacity-0" : "opacity-0"
                }`}
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
              >
                <h3 className="font-heading text-lg uppercase text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimRacing;
