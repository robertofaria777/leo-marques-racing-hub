import { useInView } from "@/hooks/useInView";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Leo's data analysis and debrief sessions completely transformed my approach to qualifying. I found over half a second within two weekends.",
    author: "GT4 Driver",
    role: "Aston Martin GT4 Challenge",
  },
  {
    text: "Having an engineer who understands both the real car and the sim is a rare advantage. Leo bridges that gap better than anyone I've worked with.",
    author: "Porsche Cup Competitor",
    role: "Porsche Carrera Cup",
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-3">
            From the Paddock
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase text-foreground">
            Testimonials
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
