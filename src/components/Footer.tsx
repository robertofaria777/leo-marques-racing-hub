import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs text-muted-foreground font-body">
          &copy; {new Date().getFullYear()} Leonardo Marques. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
