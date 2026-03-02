import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppLocale, isSupportedLocale, withLocale } from "@/i18n/locales";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { locale } = useParams();

  const currentLocale: AppLocale = isSupportedLocale(locale) ? locale : "en";
  const links = useMemo(
    () => [
      { href: "#hero", label: t("navbar.links.home") },
      { href: "#services", label: t("navbar.links.services") },
      { href: "#experience", label: t("navbar.links.experience") },
      { href: "#gallery", label: t("navbar.links.gallery") },
      { href: "#sim", label: t("navbar.links.sim") },
      { href: "#contact", label: t("navbar.links.contact") },
    ],
    [t],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (nextLocale: AppLocale) => {
    const nextPath = withLocale(location.pathname, nextLocale);
    const nextUrl = `${nextPath}${location.hash}`;
    void i18n.changeLanguage(nextLocale);
    navigate(nextUrl);
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href={`/${currentLocale}#hero`} className="font-heading text-xl tracking-wider text-foreground uppercase">
          {t("navbar.brand")}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 border border-border rounded-sm p-1">
          <button
            type="button"
            onClick={() => switchLocale("pt")}
            className={`px-2 py-1 text-xs font-body uppercase ${
              currentLocale === "pt" ? "text-primary" : "text-muted-foreground"
            }`}
            aria-label={t("navbar.language")}
          >
            PT
          </button>
          <button
            type="button"
            onClick={() => switchLocale("en")}
            className={`px-2 py-1 text-xs font-body uppercase ${
              currentLocale === "en" ? "text-primary" : "text-muted-foreground"
            }`}
            aria-label={t("navbar.language")}
          >
            EN
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label={t("navbar.menuToggle")}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-6 pb-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}

          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => switchLocale("pt")}
              className={`px-3 py-1.5 text-xs font-body uppercase border border-border rounded-sm ${
                currentLocale === "pt" ? "text-primary border-primary" : "text-muted-foreground"
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className={`px-3 py-1.5 text-xs font-body uppercase border border-border rounded-sm ${
                currentLocale === "en" ? "text-primary border-primary" : "text-muted-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
