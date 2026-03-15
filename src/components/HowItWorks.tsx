import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Laptop, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'We review your presence.',
    description:
      'We take a look at your current website — or lack of one — and put together a custom mockup showing exactly what your business could look like online. No commitment, no pitch. Just proof.',
  },
  {
    number: '02',
    icon: Laptop,
    title: 'We build it. Free.',
    description:
      'If you like what you see, we build the full site at zero upfront cost. Design, copy, mobile optimization, SSL — everything. Live within a week. The only thing you pay is a simple monthly retainer.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'We maintain it every month.',
    description:
      'Hosting, security, updates, changes — all handled. You focus on running your business. We make sure your site keeps working, looking sharp, and bringing in customers.',
  },
];

export const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.how-card');
    cards.forEach((card: any, i) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-32 relative bg-luxury-black z-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter mb-4">
            <span className="text-gray-500">How It </span>
            <span className="text-luxury-white">Works.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light">
            No upfront costs. No long sales process. A site that's live in days, not months.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="how-card glass-panel rounded-2xl p-10 relative group hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 border border-luxury-border"
              >
                {/* Step number — large ghost text */}
                <span className="absolute top-6 right-8 text-7xl font-bold text-white/5 font-display select-none">
                  {step.number}
                </span>

                <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-5 h-5 text-gray-300" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Divider line */}
        <div className="mt-20 border-t border-luxury-border" />
      </div>
    </section>
  );
};
