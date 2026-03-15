import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Our conversion rate tripled within two weeks of launching the new Townframe site. It feels like we're a Fortune 500 company.",
    author: "Sarah J.",
    role: "Founder, Bloom & Co.",
    delay: "md:mt-0"
  },
  {
    quote: "I didn't think a local bakery needed a 'cinematic' website. I was wrong. The line out the door speaks for itself.",
    author: "David M.",
    role: "Owner, Hearth Artisans",
    delay: "md:mt-24"
  },
  {
    quote: "The team at Townframe understands digital hierarchy better than agencies charging ten times their rate.",
    author: "Elena R.",
    role: "Director, Luxe Interiors",
    delay: "md:mt-12"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative bg-luxury-black overflow-hidden z-20">
      <div className="absolute inset-0 bg-glass opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tighter mb-20 text-center">
          <span className="text-gray-500">The </span>
          <span className="text-luxury-white">Consensus.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`glass-panel p-10 rounded-2xl relative group hover:bg-[rgba(255,255,255,0.08)] transition-all duration-500 ${t.delay}`}
            >
              <Quote className="w-8 h-8 text-gray-600 mb-6 group-hover:text-white transition-colors duration-500" />
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div>
                <p className="text-white font-medium tracking-wide">{t.author}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
