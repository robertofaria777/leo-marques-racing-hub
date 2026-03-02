import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Instagram, Send } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Contact = () => {
  const { ref, inView } = useInView();
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("contact.form.success"));
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-3">
            {t("contact.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase text-foreground">
            {t("contact.title")}
          </h2>
        </div>

        <div
          ref={ref}
          className="max-w-2xl mx-auto"
        >
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 ${
              inView ? "animate-fade-up opacity-0" : "opacity-0"
            }`}
          >
            <a
              href="mailto:leo@leomarques.com"
              className="flex items-center gap-2 px-6 py-3 rounded-sm border border-border bg-secondary text-secondary-foreground text-sm font-body hover:border-primary transition-colors"
            >
              <Mail size={16} />
              {t("contact.emailCta")}
            </a>
            <a
              href="https://instagram.com/leo_marques__28"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-sm border border-border bg-secondary text-secondary-foreground text-sm font-body hover:border-primary transition-colors"
            >
              <Instagram size={16} />
              @leo_marques__28
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`space-y-5 ${
              inView ? "animate-fade-up opacity-0 delay-200" : "opacity-0"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder={t("contact.form.namePlaceholder")}
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-sm bg-background border border-border text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder={t("contact.form.emailPlaceholder")}
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-sm bg-background border border-border text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <textarea
              placeholder={t("contact.form.messagePlaceholder")}
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-sm bg-background border border-border text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity glow-red mx-auto"
            >
              <Send size={16} />
              {t("contact.form.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
