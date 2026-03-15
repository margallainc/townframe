import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { PortfolioMosaic } from './components/PortfolioMosaic';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { ContactCard } from './components/ContactCard';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scroll "infinite canvas" feel
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cinematic Section Transitions & Blurs
    const sections = document.querySelectorAll('.page-section');
    
    sections.forEach((section) => {
      // Zoom-out transition
      gsap.fromTo(section, 
        { scale: 1.05, filter: 'blur(10px)', opacity: 0.8 },
        { 
          scale: 1, 
          filter: 'blur(0px)', 
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
          }
        }
      );

      // Exit transition — fromTo so scrub reversal returns to the clean state
      gsap.fromTo(section,
        { filter: 'blur(0px)', opacity: 1, scale: 1 },
        {
          filter: 'blur(10px)',
          opacity: 0.8,
          scale: 0.98,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'bottom center',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative bg-luxury-black text-luxury-white w-full overflow-hidden font-sans pb-20">
      
      {/* 3D Spline Canvas Placeholder (Future Integration) */}
      <div 
        id="spline-canvas-layer" 
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
      >
        {/* Spline code will be attached here */}
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <div className="page-section"><Hero /></div>
        <div className="page-section"><HowItWorks /></div>
        <div className="page-section"><PortfolioMosaic /></div>
        <div className="page-section"><Pricing /></div>
        <div className="page-section"><Testimonials /></div>
        <div className="page-section"><ContactCard /></div>
      </main>

      {/* Footer */}
      <footer className="py-16 text-center relative z-10 text-gray-500 font-light text-sm border-t border-luxury-border">
        <p className="tracking-wide">© {new Date().getFullYear()} Townframe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
