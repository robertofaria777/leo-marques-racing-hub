import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

type TestimonialQuote = {
  text: string;
  author: string;
  role: string;
};

const Testimonials = () => {
  const { ref, inView } = useInView();
  const { t } = useTranslation();
  const quotes = t("testimonials.quotes", { returnObjects: true }) as TestimonialQuote[];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-3">
            {t("testimonials.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase text-foreground">
            {t("testimonials.title")}
          </h2>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {quotes.map((q, i) => (
            <div
              key={i}
              className={`p-8 rounded-sm bg-card border border-border ${
                inView ? "animate-fade-up opacity-0" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Quote size={20} className="text-primary mb-4" />
              <p className="text-sm text-foreground leading-relaxed font-body mb-6 italic">
                "{q.text}"
              </p>
              <div>
                <p className="text-sm font-body font-medium text-foreground">
                  {q.author}
                </p>
                <p className="text-xs text-muted-foreground font-body">
                  {q.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
