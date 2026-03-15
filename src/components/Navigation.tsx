import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Lenis will naturally make this smooth if integrated globally,
      // but we add a small delay to allow mobile menu to close smoothly first
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav
      className={twMerge(
        clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b border-transparent',
          scrolled ? 'glass-panel py-3 border-luxury-border' : 'bg-transparent py-5'
        )
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xl font-bold tracking-tighter"
        >
          Townframe.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors">How It Works</button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Portfolio</button>
          <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Testimonials</button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-luxury-black bg-luxury-white px-5 py-2 rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-4 shadow-2xl border-t border-luxury-border">
          <button onClick={() => scrollToSection('home')} className="text-left text-gray-300 hover:text-white text-lg">Home</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-left text-gray-300 hover:text-white text-lg">How It Works</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-300 hover:text-white text-lg">Portfolio</button>
          <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-300 hover:text-white text-lg">Pricing</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-300 hover:text-white text-lg">Testimonials</button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-center mt-4 text-luxury-black bg-luxury-white px-5 py-3 rounded-full font-medium"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};
