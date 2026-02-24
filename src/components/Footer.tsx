const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} Leonardo Marques. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
