import { Gauge, BarChart3, Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useInView } from "@/hooks/useInView";

const icons = [Gauge, BarChart3, Monitor];

type ValueCard = {
  title: string;
  description: string;
};

const ValueCards = () => {
  const { ref, inView } = useInView();
  const { t } = useTranslation();
  const cards = t("valueCards.cards", { returnObjects: true }) as ValueCard[];

  return (
    <section id="services" className="relative py-24 bg-telemetry">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-3">
            {t("valueCards.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase text-foreground">
            {t("valueCards.title")}
          </h2>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={card.title}
                className={`group p-8 rounded-sm bg-card border border-border hover:border-primary/40 transition-all duration-500 ${
                  inView
                    ? `animate-fade-up opacity-0`
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <Icon
                  size={28}
                  className="text-primary mb-5 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-heading text-xl uppercase text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueCards;
