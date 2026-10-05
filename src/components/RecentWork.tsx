import React from 'react';
import { Briefcase, Clock, Hammer, Quote } from 'lucide-react';

interface RecentWorkProps {
  id?: string;
  isContractorsPage?: boolean;
}

export const RecentWork = ({ id = "recent-work", isContractorsPage = false }: RecentWorkProps) => {
  return (
    <section id={id} className="py-24 relative bg-luxury-black overflow-hidden z-20">
      <div className="absolute inset-0 bg-glass opacity-40 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tighter mb-4">
            <span className="text-gray-500">Recent </span>
            <span className="text-luxury-white">work.</span>
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            {isContractorsPage 
              ? "Real custom website builds delivered for Calgary trade and fabrication businesses." 
              : "A recent project delivered for a local Calgary business."}
          </p>
        </div>

        {/* Galaxy Kitchen Cabinets Case Study Card */}
        <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-3xl border border-luxury-border relative bg-gradient-to-b from-white/[0.04] to-transparent shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Hammer className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Galaxy Kitchen Cabinets Ltd.</h3>
                <p className="text-xs sm:text-sm text-gray-400">Calgary, Alberta · Custom Cabinetry & Renovation</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-gray-300 border border-white/15">
                Case Study
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">Scope of Work</h4>
                  <p className="text-white text-sm sm:text-base font-light leading-relaxed">
                    Galaxy Kitchen Cabinets Ltd., Calgary:{' '}
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 break-words max-w-full">
                      TODO: &#123;&#123;what was built, e.g. new website with project gallery and quote form&#125;&#125;
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">Turnaround</h4>
                  <p className="text-white text-sm sm:text-base font-light leading-relaxed">
                    Live in{' '}
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      TODO: &#123;&#123;X&#125;&#125; days
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real quote placeholder */}
          <div className="pt-6 border-t border-white/10 bg-white/[0.02] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 md:-mx-12 md:-mb-12 p-6 sm:p-8 md:p-12 rounded-b-3xl">
            <div className="flex items-start gap-4">
              <Quote className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" />
              <div className="space-y-2 min-w-0 flex-1">
                <p className="text-sm text-gray-400 font-medium">Client Quote:</p>
                <div className="inline-block px-3 py-1.5 rounded-lg text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 break-words max-w-full">
                  TODO: &#123;&#123;real quote from Waqas Ali, or leave empty&#125;&#125;
                </div>
                <p className="text-xs text-gray-500 font-light mt-2">
                  — Waqas Ali, Owner of Galaxy Kitchen Cabinets Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
