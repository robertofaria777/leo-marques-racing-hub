import { useInView } from "@/hooks/useInView";

import leoSpa from "@/assets/leo-spa.png";
import leoTeam from "@/assets/leo-team.png";
import leoAwards from "@/assets/leo-awards.png";
import galleryPitwall from "@/assets/gallery-pitwall.jpg";
import galleryOnboard from "@/assets/gallery-onboard.jpg";
import galleryGarage from "@/assets/gallery-garage.jpg";
import gallerySim from "@/assets/gallery-sim.jpg";
import galleryData from "@/assets/gallery-data.jpg";
import galleryFerrari from "@/assets/gallery-ferrari.jpg";

const images = [
  { src: leoSpa, caption: "Spa-Francorchamps — Porsche Cup" },
  { src: galleryPitwall, caption: "Pitwall — Live Telemetry" },
  { src: galleryGarage, caption: "Garage — Pre-Session Prep" },
  { src: leoTeam, caption: "Team — Race Win Celebration" },
  { src: galleryData, caption: "Data — Stint Analysis" },
  { src: galleryOnboard, caption: "Onboard — Driver POV" },
  { src: leoAwards, caption: "Prize Giving — Season Awards" },
  { src: gallerySim, caption: "Sim Rig — Virtual Testing" },
  { src: galleryFerrari, caption: "Ferrari Challenge" },
];

const Gallery = () => {
  const { ref, inView } = useInView();

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-3">
            Behind the Scenes
          </p>
          <h2 className="font-heading text-3xl sm:text-5xl uppercase text-foreground">
            Featured Media
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {images.map((img, i) => (
            <div
              key={img.caption}
              className={`group relative overflow-hidden rounded-sm aspect-square ${
                inView ? "animate-fade-up opacity-0" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-body text-foreground tracking-wider uppercase">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
