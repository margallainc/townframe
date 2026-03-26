import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Custom website (free build — no upfront cost)',
  'Hosting, SSL & domain management',
  'Uptime monitoring & security updates',
  'Up to 2hrs of changes/month',
  'SEO setup & Google Analytics',
  'Mobile-optimized & fast-loading',
  '$75/hr for work beyond included hours',
];

export const Pricing = () => {
  useEffect(() => {
    const card = document.querySelector('.pricing-card');
    if (!card) return;
    gsap.fromTo(
      card,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
        },
      }
    );
  }, []);

  return (
    <section id="pricing" className="py-32 relative bg-luxury-black z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
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

        {/* Single Card */}
        <div
          className="pricing-card relative rounded-2xl p-12 border bg-luxury-white text-luxury-black border-luxury-white shadow-[0_0_80px_rgba(255,255,255,0.10)]"
        >
          <div className="mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">
              Monthly Retainer
            </p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-6xl font-bold font-display tracking-tighter text-luxury-black">
                $299
              </span>
              <span className="text-xl font-light mb-3 text-gray-500">
                /month
              </span>
            </div>
            <p className="text-xs tracking-wide text-gray-400">
              6-month minimum · cancel after with 30 days notice
            </p>
          </div>

          <p className="text-sm font-light leading-relaxed mb-10 text-gray-600">
            Everything you need to look professional, get found online, and never think about your website again.
          </p>

          <ul className="space-y-4 mb-12">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-luxury-black" />
                <span className="text-sm font-light text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full py-4 rounded-xl font-semibold text-sm tracking-wide bg-luxury-black text-luxury-white hover:bg-gray-900 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
          >
            Get Started
          </button>
        </div>

        {/* Fine print */}
        <p className="text-center text-gray-600 text-sm font-light mt-10">
          Free website build included. No setup fees. No surprises.
        </p>
      </div>
    </section>
  );
};
