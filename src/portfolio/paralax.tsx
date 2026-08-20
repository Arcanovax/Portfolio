import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0,
        }
      });

      const layers = [
        { layer: "1", yPercent: 70 }, // Arrière-plan (bouge le plus)
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 }, // Texte
        { layer: "4", yPercent: 10 }  // Premier plan (bouge le moins)
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    // Initialisation de Lenis pour le smooth scroll
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-black" ref={parallaxRef}>

      {/* SECTION PARALLAXE */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Conteneur des calques */}
        <div data-parallax-layers className="absolute inset-0 w-full h-full pointer-events-none">

          {/* Layer 1 (Fond) */}
          <img
            src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp"
            loading="eager"
            data-parallax-layer="1"
            alt="Layer 1"
            className="absolute top-[-20%] left-0 w-full h-[140%] object-cover z-0"
          />

          {/* Layer 2 (Milieu) */}
          <img
            src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp"
            loading="eager"
            data-parallax-layer="2"
            alt="Layer 2"
            className="absolute top-[-10%] left-0 w-full h-[120%] object-cover z-10"
          />

          {/* Layer 3 (Texte) */}
          <div
            data-parallax-layer="3"
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <h2 className="text-6xl md:text-9xl font-bold text-white uppercase tracking-widest drop-shadow-2xl mix-blend-overlay">
              Parallax
            </h2>
          </div>

          {/* Layer 4 (Premier plan) */}
          <img
            src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp"
            loading="eager"
            data-parallax-layer="4"
            alt="Layer 4"
            className="absolute bottom-0 left-0 w-full h-[110%] object-cover object-bottom z-30"
          />

          {/* Dégradé (Fade) optionnel pour adoucir la transition avec la section suivante */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-900 to-transparent z-40"></div>
        </div>
      </section>

      {/* SECTION CONTENU (qui scrolle par dessus ou à la suite) */}
      <section className="relative z-50 w-full min-h-screen bg-zinc-900 flex flex-col items-center justify-center text-white p-10">

        <div className="max-w-2xl text-center space-y-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 160"
            fill="none"
            className="w-24 h-24 mx-auto text-white"
          >
            <path d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z" fill="currentColor"></path>
          </svg>

          <h3 className="text-3xl font-semibold">Contenu suivant</h3>
          <p className="text-zinc-400">
            Faites défiler vers le haut pour revoir l'effet de parallaxe. Lenis assure la fluidité du scroll, et Tailwind gère toute la mise en page.
          </p>
        </div>

      </section>
    </div>
  );
}
