import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant initial fade-in and slide-up
      gsap.fromTo(
        textRef.current?.children as unknown as Element[], 
        { y: 50, opacity: 0, rotateX: 10 },
        { y: 0, opacity: 1, rotateX: 0, stagger: 0.15, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background radial gradient to give it that 'godly' tech vibe */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-border bg-luxury-glow backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-gray-400" />
          <span className="text-sm tracking-wide text-gray-300 font-medium">Elevating Local Brands to Enterprise Standards</span>
        </div>

        <h1 ref={textRef} className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter leading-[0.9] mb-10 flex flex-col">
          <span className="text-gray-500">Stop Looking</span>
          <span className="text-luxury-white drop-shadow-2xl">Like A Small</span>
          <span className="text-luxury-white italic">Business.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-light tracking-wide leading-relaxed">
          Townframe creates insanely high-fidelity, cinematic digital storefronts for local visionaries. 
          Your unfair advantage starts here.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-6">
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-3 bg-luxury-white text-luxury-black px-8 py-4 rounded-full font-medium text-lg hover:pr-6 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            Explore Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-gray-300 font-medium hover:text-white pb-1 border-b border-transparent hover:border-white transition-colors"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
