import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Basic',
    price: '200',
    period: '/month',
    minimum: '6-month minimum',
    description: 'Everything you need to look professional and get found online.',
    featured: false,
    features: [
      '5-page website (free build)',
      'Hosting & SSL certificate',
      'Uptime monitoring',
      'Security updates',
      'Up to 1hr of changes/month',
      '$75/hr after included hours',
    ],
  },
  {
    name: 'Growth',
    price: '350',
    period: '/month',
    minimum: '6-month minimum',
    description: 'For businesses ready to grow their online presence and capture more leads.',
    featured: true,
    features: [
      'Up to 10 pages (free build)',
      'Everything in Basic',
      'SEO setup & optimization',
      'Google Analytics',
      'Blog (up to 2 posts/month)',
      'Up to 2hrs of changes/month',
      '$75/hr after included hours',
    ],
  },
  {
    name: 'Premium',
    price: '600',
    period: '/month',
    minimum: '12-month minimum',
    description: 'Full-service digital presence with professional copywriting and advanced features.',
    featured: false,
    features: [
      'Up to 15 pages (free build)',
      'Everything in Growth',
      'Professional copywriting',
      'Booking or e-commerce',
      'Priority support',
      'Up to 4hrs of changes/month',
      '$75/hr after included hours',
    ],
  },
];

export const Pricing = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray('.pricing-card');
    cards.forEach((card: any, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
        }
      );
    });
  }, []);

  return (
    <section id="pricing" className="py-32 relative bg-luxury-black z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter mb-4">
            <span className="text-gray-500">The </span>
            <span className="text-luxury-white">Investment.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light">
            Your website is built for free. You pay a simple monthly retainer — and we handle everything.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card relative rounded-2xl p-10 flex flex-col transition-all duration-500 border ${
                plan.featured
                  ? 'bg-luxury-white text-luxury-black border-luxury-white shadow-[0_0_60px_rgba(255,255,255,0.12)]'
                  : 'glass-panel border-luxury-border hover:bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-luxury-black text-luxury-white text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-luxury-border">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${plan.featured ? 'text-gray-500' : 'text-gray-400'}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-5xl font-bold font-display tracking-tighter ${plan.featured ? 'text-luxury-black' : 'text-luxury-white'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-lg font-light mb-2 ${plan.featured ? 'text-gray-500' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-xs tracking-wide ${plan.featured ? 'text-gray-400' : 'text-gray-600'}`}>
                  {plan.minimum}
                </p>
              </div>

              <p className={`text-sm font-light leading-relaxed mb-8 ${plan.featured ? 'text-gray-600' : 'text-gray-400'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.featured ? 'text-luxury-black' : 'text-gray-400'}`} />
                    <span className={`text-sm font-light ${plan.featured ? 'text-gray-700' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                  plan.featured
                    ? 'bg-luxury-black text-luxury-white hover:bg-gray-900 shadow-[0_0_20px_rgba(0,0,0,0.3)]'
                    : 'border border-white/20 text-white hover:bg-white/10'
                }`}
              >
                Get Started — {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center text-gray-600 text-sm font-light mt-12">
          All plans include a free website build. No setup fees. Cancel after your minimum term with 30 days notice.
        </p>
      </div>
    </section>
  );
};
