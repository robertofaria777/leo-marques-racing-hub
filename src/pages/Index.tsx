import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueCards from "@/components/ValueCards";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import SimRacing from "@/components/SimRacing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <div className="section-line" />
    <ValueCards />
    <div className="section-line" />
    <Timeline />
    <div className="section-line" />
    <Gallery />
    <div className="section-line" />
    <SimRacing />
    <div className="section-line" />
    <Testimonials />
    <div className="section-line" />
    <Contact />
    <Footer />
  </div>
);

export default Index;
