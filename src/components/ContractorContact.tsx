import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';

export const ContractorContact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Spam honeypot validation
    const honeypot = formData.get('website_trap');
    if (honeypot && String(honeypot).trim() !== '') {
      // Bot detected, fail silently to confuse scraper
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again or call us.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-luxury-black z-20">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Tap-to-Call */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-medium">
                Free Mockup · No Obligation
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mt-2 mb-4">
                Get your free homepage mockup.
              </h2>
              <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed">
                Send your business details. I’ll review what you have and build a homepage concept with your name and services before you pay a single dollar.
              </p>
            </div>

            {/* Tap-to-call & location details */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 bg-white/[0.02]">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Tap to Call</p>
                  <div className="mt-0.5">
                    <a href="tel:+14039888659" className="text-white hover:text-amber-300 transition-colors font-medium">403-988-8659</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Service Base</p>
                  <p className="text-white text-sm font-medium">Calgary, AB</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300 pt-2 border-t border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <p className="text-xs text-gray-400">
                  No sales rep. You deal directly with Saad from initial concept to launch.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-xl">
              
              <form method="post" action="https://api.web3forms.com/submit" onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="a0452f3b-0639-4e65-a1b7-616370a17641" />
                <input type="hidden" name="subject" value="New Calgary Contractor Quote Request - Townframe" />
                <input type="hidden" name="from_name" value="Townframe Contractor Form" />
                {/* Honeypot field (hidden from real users, caught by bots) */}
                <input 
                  type="text" 
                  name="website_trap" 
                  tabIndex={-1} 
                  autoComplete="off"
                  className="hidden absolute -left-[9999px]" 
                  aria-hidden="true" 
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-amber-400/50 transition-colors placeholder:text-gray-600 focus:bg-white/10 text-sm"
                      placeholder="e.g. Mike Vance"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      Business Name <span className="text-amber-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="business_name" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-amber-400/50 transition-colors placeholder:text-gray-600 focus:bg-white/10 text-sm"
                      placeholder="e.g. Foothills Framing & Reno"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-amber-400/50 transition-colors placeholder:text-gray-600 focus:bg-white/10 text-sm"
                      placeholder="e.g. (403) 555-0192"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-amber-400/50 transition-colors placeholder:text-gray-600 focus:bg-white/10 text-sm"
                      placeholder="e.g. mike@foothillsreno.ca"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Current Website <span className="text-gray-600 normal-case">(optional, or leave blank if none)</span>
                  </label>
                  <input 
                    type="text" 
                    name="current_website" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-amber-400/50 transition-colors placeholder:text-gray-600 focus:bg-white/10 text-sm"
                    placeholder="e.g. www.myoldsite.com or 'none'"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Tell us about your trades & services <span className="text-amber-400">*</span>
                  </label>
                  <textarea 
                    name="message" 
                    required 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-amber-400/50 transition-colors placeholder:text-gray-600 resize-none focus:bg-white/10 text-sm"
                    placeholder="e.g. Basement developments, kitchen remodels in SW/SE Calgary. Need more steady quote requests..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-amber-400 hover:bg-amber-300 text-luxury-black font-semibold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.35)] flex justify-center items-center text-base disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending Request...' : 'Get Your Free Homepage Mockup'}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                    <span>Your mockup request was received! Saad will review your details and be in touch promptly.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
