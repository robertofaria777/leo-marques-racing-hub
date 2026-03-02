import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";
import leoPortrait from "@/assets/leo-portrait.png";

const Hero = () => {
  const { t } = useTranslation();
  const series = t("hero.series", { returnObjects: true }) as string[];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-grid" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden mx-auto mb-8 border-2 border-primary/50 animate-fade-up opacity-0">
          <img src={leoPortrait} alt={t("hero.portraitAlt")} className="w-full h-full object-cover object-top" />
        </div>

        <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4 animate-fade-up opacity-0">
          {t("hero.eyebrow")}
        </p>

        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight text-foreground leading-none mb-4 animate-fade-up opacity-0 delay-100">
          Leonardo<br />
          <span className="text-primary">Marques</span>
        </h1>

        <p className="font-body text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-6 animate-fade-up opacity-0 delay-200">
          {t("hero.role")}
        </p>

        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8 animate-fade-up opacity-0 delay-300">
          <MapPin size={14} className="text-primary" />
          <span>{t("hero.location")}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up opacity-0 delay-400">
          {series.map((s) => (
            <span
              key={s}
              className="px-4 py-1.5 rounded-sm text-xs font-body font-medium tracking-wider uppercase border border-border bg-secondary text-secondary-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-500">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity glow-red"
          >
            {t("hero.ctaPrimary")}
          </a>
          <a
            href="#experience"
            className="px-8 py-3 border border-border text-foreground font-heading text-sm tracking-wider uppercase rounded-sm hover:border-primary hover:text-primary transition-colors"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
