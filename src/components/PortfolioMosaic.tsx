import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, X } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MockupItem {
  id: number;
  src: string;
  alt: string;
  height: string;
  width: string;
}

const mockups: MockupItem[] = [
  { id: 1, src: '/hotel.png', alt: 'Boutique Hotel Concept', height: 'h-[400px]', width: 'col-span-12 md:col-span-6' },
  { id: 2, src: '/restaurant.png', alt: 'Fine Dining Concept', height: 'h-[600px]', width: 'col-span-12 md:col-span-6' },
  { id: 3, src: '/lawfirm.png', alt: 'Corporate Law Concept', height: 'h-[500px]', width: 'col-span-12 md:col-span-4' },
  { id: 4, src: '/architecture_website_mockup_1773555982374.png', alt: 'Modern Architecture Concept', height: 'h-[700px]', width: 'col-span-12 md:col-span-8' },
  { id: 5, src: '/fitness_website_mockup_1773556019156.png', alt: 'Boutique Fitness Studio Concept', height: 'h-[600px]', width: 'col-span-12 md:col-span-5' },
  { id: 6, src: '/realestate_website_mockup_1773556036637.png', alt: 'Luxury Real Estate Concept', height: 'h-[450px]', width: 'col-span-12 md:col-span-7' },
];

export const PortfolioMosaic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePreview, setActivePreview] = useState<MockupItem | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const cards = gsap.utils.toArray<Element>('.portfolio-card');
    
    cards.forEach((card, i) => {
      const speed = i % 2 === 0 ? 0.04 : -0.02;
      
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
      
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter mb-4">
          <span className="text-gray-500">The </span>
          <span className="text-luxury-white">Archive.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
          Design concepts exploring modern digital aesthetics for various industries. All items below are exploratory design concepts.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {mockups.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setActivePreview(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActivePreview(item); }}
              className={`portfolio-card group relative overflow-hidden rounded-2xl bg-[#111] border border-luxury-border ${item.width} ${item.height} cursor-pointer transition-all duration-500 hover:border-white/30`}
            >
              {/* Concept Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/75 text-amber-300 border border-amber-500/30 backdrop-blur-md shadow-lg">
                  Concept
                </span>
              </div>

              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-md">
                  <Eye className="w-3.5 h-3.5" />
                  Preview
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              
              <img 
                src={item.src} 
                alt={`${item.alt} (Design Concept)`}
                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500 ease-out"
                loading="lazy"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                <div className="inline-block mb-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400/90 font-medium">Design Concept</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1">{item.alt}</h3>
                <p className="text-gray-400 font-light text-xs md:text-sm">Click to view full concept preview</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Concept Lightbox Preview Modal */}
      {activePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md"
          onClick={() => setActivePreview(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#111] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-black/60">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Concept Design
                </span>
                <h4 className="text-lg font-bold text-white tracking-tight">{activePreview.alt}</h4>
              </div>
              <button 
                onClick={() => setActivePreview(null)}
                aria-label="Close preview"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Scrollable Image */}
            <div className="overflow-y-auto p-4 md:p-8 flex justify-center bg-black/40">
              <img 
                src={activePreview.src} 
                alt={`${activePreview.alt} Full Concept Preview`}
                className="max-w-full h-auto rounded-lg border border-white/10 shadow-2xl"
              />
            </div>

            {/* Modal Footer Notice */}
            <div className="p-4 border-t border-white/10 bg-black/80 text-center text-xs text-gray-400">
              This preview is a creative concept design mockup and does not represent an active client endorsement.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
