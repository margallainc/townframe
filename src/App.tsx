import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { PortfolioMosaic } from './components/PortfolioMosaic';
import { Pricing } from './components/Pricing';
import { RecentWork } from './components/RecentWork';
import { ContactCard } from './components/ContactCard';
import { ContractorsPage } from './components/ContractorsPage';
import { Footer } from './components/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AppProps {
  path?: string;
}

export function App({ path }: AppProps) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (path) return path;
    if (typeof window !== 'undefined') {
      return window.location.pathname.replace(/\/$/, '') || '/';
    }
    return '/';
  });

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Sync path on popstate (browser back/forward)
    const handlePopState = () => {
      setCurrentPath(window.location.pathname.replace(/\/$/, '') || '/');
    };
    window.addEventListener('popstate', handlePopState);

    // Initialize Lenis
    const isMobile = window.innerWidth < 768;
    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    // Section transitions for desktop
    if (!isMobile) {
      const sections = document.querySelectorAll('.page-section');
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { scale: 1.03, filter: 'blur(6px)', opacity: 0.85 },
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
      });
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
      cancelAnimationFrame(animId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [currentPath]);

  const isContractors = currentPath === '/contractors' || currentPath === '/contractors/';

  return (
    <div className="relative bg-luxury-black text-luxury-white w-full overflow-hidden font-sans">
      <Navigation currentPath={currentPath} />
      
      <main className="relative z-10">
        {isContractors ? (
          <ContractorsPage />
        ) : (
          <>
            <div className="page-section"><Hero /></div>
            <div className="page-section"><HowItWorks /></div>
            <div className="page-section"><PortfolioMosaic /></div>
            <div className="page-section"><Pricing /></div>
            <div className="page-section"><RecentWork id="recent-work" /></div>
            <div className="page-section"><ContactCard /></div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
