import React, { useState } from 'react';

export const ContactCard = () => {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    // Setup for Web3Forms (A public generic endpoint key is used here for demonstration)
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace with actual Web3Forms Key
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setStatus("Message sent successfully. We'll be in touch.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 relative flex items-center justify-center min-h-[80vh] bg-luxury-black z-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-3xl w-full mx-auto px-6 relative z-10">
        <div className="glass-panel p-10 md:p-16 rounded-[2rem] border-luxury-border shadow-2xl backdrop-blur-xl bg-black/40 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4 text-white">Start the Transformation.</h2>
            <p className="text-gray-400 font-light text-lg">Let's discuss how Townframe can elevate your enterprise.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-gray-200 transition-all duration-300 mt-8 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] flex justify-center items-center"
            >
              Request Consultation
            </button>
            
            {status && (
              <p className="text-center mt-4 text-sm text-gray-300 font-medium transition-opacity">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
