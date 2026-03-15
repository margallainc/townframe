import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mockups = [
  { id: 1, src: '/hotel.png', alt: 'Luxury Hotel Concept', height: 'h-[400px]', width: 'col-span-12 md:col-span-6' },
  { id: 2, src: '/restaurant.png', alt: 'Fine Dining Concept', height: 'h-[600px]', width: 'col-span-12 md:col-span-6' },
  { id: 3, src: '/lawfirm.png', alt: 'Corporate Law Concept', height: 'h-[500px]', width: 'col-span-12 md:col-span-4' },
  { id: 4, src: '/architecture_website_mockup_1773555982374.png', alt: 'Brutalist Practice', height: 'h-[700px]', width: 'col-span-12 md:col-span-8' },
  { id: 5, src: '/fitness_website_mockup_1773556019156.png', alt: 'Boutique Fitness Studio', height: 'h-[600px]', width: 'col-span-12 md:col-span-5' },
  { id: 6, src: '/realestate_website_mockup_1773556036637.png', alt: 'Luxury Real Estate', height: 'h-[450px]', width: 'col-span-12 md:col-span-7' },
];

export const PortfolioMosaic = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.portfolio-card');
    
    // Parallax scrolling effect for individual cards to mimic "godly.website" infinite canvas
    cards.forEach((card: any, i) => {
      const speed = i % 2 === 0 ? 0.05 : -0.02; // Alternating subtle parallax speeds
      
      gsap.to(card, {
        y: () => (window.innerHeight - card.getBoundingClientRect().top) * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="portfolio" className="py-32 relative bg-luxury-black z-20" ref={containerRef}>
      
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter mb-4">
          <span className="text-gray-500">The </span>
          <span className="text-luxury-white">Archive.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light">
          A showcase of purely aesthetic, highly-converting digital experiences. The options are limitless.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {mockups.map((item, index) => (
            <div 
              key={item.id} 
              className={`portfolio-card group relative overflow-hidden rounded-2xl bg-[#111] border border-luxury-border ${item.width} ${item.height} transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <img 
                src={item.src} 
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">{item.alt}</h3>
                <p className="text-gray-300 font-light text-sm">High-Fidelity Storefront</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
