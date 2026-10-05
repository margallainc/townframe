import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactCard = () => {
  const [status, setStatus] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Spam honeypot validation
    const honeypot = formData.get('bot_trap');
    if (honeypot && String(honeypot).trim() !== '') {
      // Bot detected, silently fake success
      setIsSuccess(true);
      setStatus("Message received.");
      return;
    }

    setIsSubmitting(true);
    setStatus('Submitting...');
    setIsSuccess(false);
    
    // Web3Forms endpoint & access key
    formData.append("access_key", "a0452f3b-0639-4e65-a1b7-616370a17641");
    formData.append("subject", "New Website Inquiry - Townframe Homepage");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        setStatus("Message sent successfully. We'll be in touch.");
        form.reset();
      } else {
        setIsSuccess(false);
        setStatus("Something went wrong. Please try again or call us.");
      }
    } catch {
      setIsSuccess(false);
      setStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative flex items-center justify-center min-h-[80vh] bg-luxury-black z-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-4xl w-full mx-auto px-6 relative z-10">
        <div className="glass-panel p-8 md:p-14 rounded-[2rem] border-luxury-border shadow-2xl backdrop-blur-xl bg-black/40 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4 text-white">Start the Transformation.</h2>
            <p className="text-gray-400 font-light text-base md:text-lg">Let's discuss how Townframe can elevate your business online.</p>
          </div>

          {/* Quick contact strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 py-3 px-6 rounded-xl bg-white/[0.03] border border-white/10 text-xs md:text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  TODO: &#123;&#123;phone&#125;&#125;
                </span>
                {' '}(tap to call)
              </span>
            </div>
            <span className="text-gray-600">·</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>Calgary, AB</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field */}
            <input 
              type="text" 
              name="bot_trap" 
              tabIndex={-1} 
              autoComplete="off"
              className="hidden absolute -left-[9999px]" 
              aria-hidden="true" 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium tracking-wide">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 focus:bg-white/10"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 focus:bg-white/10"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium tracking-wide">Project Details</label>
              <textarea 
                name="message" 
                required 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 resize-none focus:bg-white/10"
                placeholder="Tell us about your business and goals..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-gray-200 transition-all duration-300 mt-8 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] flex justify-center items-center disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Request Consultation'}
            </button>
            
            {status && (
              <div className={`flex items-center justify-center gap-2 p-3 rounded-xl text-sm ${isSuccess ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30' : 'bg-red-500/10 text-red-300 border border-red-500/30'}`}>
                {isSuccess ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{status}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
