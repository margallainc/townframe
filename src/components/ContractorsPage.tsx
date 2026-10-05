import React, { useState } from 'react';
import { 
  ArrowRight, 
  Smartphone, 
  Mail, 
  PhoneCall, 
  Image as ImageIcon, 
  MapPin, 
  BarChart3, 
  ChevronDown, 
  ChevronUp, 
  HardHat, 
  User 
} from 'lucide-react';
import { Pricing } from './Pricing';
import { RecentWork } from './RecentWork';
import { ContractorContact } from './ContractorContact';

export const ContractorsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    if (typeof window === 'undefined') return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contractorFeatures = [
    {
      icon: Mail,
      title: "Quote Request Form",
      description: "Emails you instantly the moment a homeowner submits project details so you can follow up before your competitors do."
    },
    {
      icon: PhoneCall,
      title: "Tap-to-Call Phone Number",
      description: "Prominently displayed on every page so homeowners on mobile can call your phone with one tap."
    },
    {
      icon: ImageIcon,
      title: "Project Photo Gallery",
      description: "Crisp, organized visual proof of your recent renovations, framing, millwork, or exterior projects."
    },
    {
      icon: MapPin,
      title: "Services & Calgary Service Areas",
      description: "Clear breakdown of the trades you specialize in and the specific Calgary neighbourhoods and surrounding areas you cover."
    },
    {
      icon: Smartphone,
      title: "Mobile-First, Fast-Loading & SSL",
      description: "Built for the 70%+ of homeowners searching on their phones. Fast loads, zero lag, secure HTTPS certificate included."
    },
    {
      icon: BarChart3,
      title: "SEO Setup & Google Analytics",
      description: "Proper local SEO meta tags, Google Business-friendly architecture, and traffic analytics wired up from day one."
    },
  ];

  const faqs = [
    {
      q: "How fast can it go live?",
      a: "Within a week of receiving your photos and details."
    },
    {
      q: "What do I need to provide?",
      a: "Your logo, 10–20 project photos, your services, and the areas you cover."
    },
    {
      q: "What happens after 6 months?",
      a: "It goes month to month; cancel anytime with 30 days' notice."
    },
    {
      q: "Who owns the domain and content?",
      a: "{{my answer}}"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04)_0%,transparent_65%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          
          <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs md:text-sm font-medium max-w-full">
            <HardHat className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="truncate">Calgary Renovation & Trade Contractors</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-tight mb-6 max-w-4xl">
            Websites that bring Calgary contractors <span className="text-amber-400">more quote requests.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed px-2">
            Built by a former construction project engineer and estimator. Free build, live in a week, $299/month for everything.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-2">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-luxury-black px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:shadow-[0_0_35px_rgba(245,158,11,0.4)]"
            >
              Get your free homepage mockup
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('work')}
              className="w-full sm:w-auto text-gray-300 font-medium hover:text-white px-6 py-3.5 rounded-full border border-white/10 hover:border-white/30 transition-colors text-sm sm:text-base"
            >
              See contractor work
            </button>
          </div>

        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-20 relative bg-black/60 border-y border-luxury-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden">
            <p className="text-2xl md:text-3xl font-display font-medium text-gray-200 leading-snug tracking-tight">
              Homeowners check your website before they call.{' '}
              <span className="text-amber-400 font-semibold">
                If it's missing, slow, or broken on a phone, they call the next contractor on the list.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. How It Works (3 Steps) */}
      <section id="how-it-works" className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-4">
              How it works
            </h2>
            <p className="text-gray-400 font-light text-base md:text-lg">
              Simple 3-step process. No heavy lifting on your end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative bg-white/[0.02] flex flex-col justify-between">
              <div>
                <span className="text-4xl font-bold font-display text-amber-400/80 mb-4 block">01</span>
                <h3 className="text-xl font-bold text-white mb-3">Free mockup</h3>
                <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                  I look at your current site, or lack of one, and build a homepage concept with your name on it. No commitment.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative bg-white/[0.02] flex flex-col justify-between">
              <div>
                <span className="text-4xl font-bold font-display text-amber-400/80 mb-4 block">02</span>
                <h3 className="text-xl font-bold text-white mb-3">Free build</h3>
                <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                  Like it? I build the full site at no upfront cost: design, copy, photos, mobile, SSL. Live within a week of getting your photos and details.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative bg-white/[0.02] flex flex-col justify-between">
              <div>
                <span className="text-4xl font-bold font-display text-amber-400/80 mb-4 block">03</span>
                <h3 className="text-xl font-bold text-white mb-3">Monthly care</h3>
                <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                  Hosting, security, updates and up to 2 hours of changes every month for $299.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Every Contractor Site Includes */}
      <section className="py-24 relative bg-black/40 border-t border-luxury-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-4">
              What every contractor site includes
            </h2>
            <p className="text-gray-400 font-light text-base md:text-lg">
              Everything required to establish trust and win jobs in the Calgary market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contractorFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{feat.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Work Section */}
      <div id="work">
        {/* Galaxy Case Study */}
        <RecentWork id="contractor-case-study" isContractorsPage={true} />

        {/* Contractor Demos Labelled "Concept" */}
        <section className="pb-24 relative bg-luxury-black z-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white mb-2">
                Contractor Concepts
              </h3>
              <p className="text-gray-400 text-sm font-light">
                Demonstration concepts designed specifically for Calgary trade businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Demo 1 */}
              <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Concept
                    </span>
                    <span className="text-xs font-mono text-gray-500">Demo 1</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Contractor Demo 1</h4>
                  <p className="text-sm text-gray-400 mb-4">
                    Targeted demo mockup for custom framing, basement development, and renovation trades.
                  </p>
                  <div className="p-4 rounded-xl bg-black/60 border border-amber-500/30 space-y-2">
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-mono">Placeholder / TODO</p>
                    <div className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      TODO: &#123;&#123;demo 1 name + URL&#125;&#125;
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 font-mono">Concept prototype · Non-client demo</div>
              </div>

              {/* Demo 2 */}
              <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Concept
                    </span>
                    <span className="text-xs font-mono text-gray-500">Demo 2</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Contractor Demo 2</h4>
                  <p className="text-sm text-gray-400 mb-4">
                    Targeted demo mockup for exterior contracting, roofing, siding, and deck construction.
                  </p>
                  <div className="p-4 rounded-xl bg-black/60 border border-amber-500/30 space-y-2">
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-mono">Placeholder / TODO</p>
                    <div className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      TODO: &#123;&#123;demo 2 name + URL&#125;&#125;
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 font-mono">Concept prototype · Non-client demo</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 6. Pricing Section (Reused unchanged) */}
      <Pricing />

      {/* 7. About Saad Section */}
      <section id="about" className="py-24 relative bg-black/50 border-t border-luxury-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-panel p-8 md:p-14 rounded-3xl border border-white/10 bg-white/[0.02] relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Photo Slot */}
              <div className="md:col-span-4 flex flex-col items-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group shadow-xl">
                  <User className="w-16 h-16 text-gray-600 mb-2" />
                  <div className="p-2 rounded bg-amber-500/20 border border-amber-500/40 text-[11px] font-mono text-amber-300">
                    TODO: &#123;&#123;photo file, or leave a placeholder&#125;&#125;
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-mono mt-3">Saad Ijaz · Founder</p>
              </div>

              {/* Bio Copy */}
              <div className="md:col-span-8 space-y-5">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-medium">
                  Background
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white">
                  About Saad
                </h2>
                <div className="text-gray-300 font-light text-base md:text-lg space-y-4 leading-relaxed">
                  <p>
                    I'm Saad. Before Townframe, I spent five years in Texas construction as a project engineer and estimator, and I hold a master's in civil engineering from Texas A&M.
                  </p>
                  <p>
                    I know how jobs get won: a fast response, a clear scope, and trust. Your website should do the same. Based in Calgary.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section id="faq" className="py-24 relative bg-luxury-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-400 font-light text-base md:text-lg">
              Clear terms. No hidden surprises.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const isTodoAnswer = faq.a.includes('{{my answer}}');

              return (
                <div 
                  key={index}
                  className="glass-panel rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-base md:text-lg font-medium text-white">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-gray-300 font-light text-sm md:text-base border-t border-white/5">
                      {isTodoAnswer ? (
                        <div className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
                          TODO: &#123;&#123;my answer&#125;&#125;
                        </div>
                      ) : (
                        faq.a
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Contact Form */}
      <ContractorContact />

    </div>
  );
};
