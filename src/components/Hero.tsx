import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Wrench } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.from(Array.from(textRef.current.children), { 
          y: 40, 
          opacity: 0, 
          stagger: 0.12, 
          duration: 0.9, 
          ease: "power2.out" 
        });
      }

      if (ctaRef.current) {
        gsap.from(ctaRef.current, { 
          y: 20, 
          opacity: 0, 
          duration: 0.8, 
          delay: 0.3, 
          ease: "power2.out" 
        });
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Calgary Contractors Banner */}
        <a 
          href="/contractors" 
          className="mb-8 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] group"
        >
          <Wrench className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span className="text-sm tracking-wide font-medium">Contractor in Calgary? See websites built for the trades →</span>
        </a>

        <h1 ref={textRef} className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter leading-[0.9] mb-10 flex flex-col">
          <span className="text-gray-500">Stop Looking</span>
          <span className="text-luxury-white drop-shadow-2xl">Like A Small</span>
          <span className="text-luxury-white italic">Business.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-light tracking-wide leading-relaxed">
          Custom websites for Calgary businesses. Free build, live in a week, and $299/month for full hosting, updates and support.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-6">
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-3 bg-luxury-white text-luxury-black px-8 py-4 rounded-full font-medium text-lg hover:pr-6 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            Explore Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-gray-300 font-medium hover:text-white pb-1 border-b border-transparent hover:border-white transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
