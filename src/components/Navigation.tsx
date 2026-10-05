import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface NavigationProps {
  currentPath?: string;
}

export const Navigation = ({ currentPath = '/' }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isContractors = currentPath.startsWith('/contractors');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, fallbackPath?: string) => {
    setIsOpen(false);
    if (typeof window === 'undefined') return;

    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (fallbackPath) {
      window.location.href = `${fallbackPath}#${id}`;
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
          href="/" 
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <span>Townframe.</span>
          {isContractors && (
            <span className="text-xs uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Contractors
            </span>
          )}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          {!isContractors ? (
            <>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">
                Work
              </button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">
                Pricing
              </button>
              <a 
                href="/contractors" 
                className="text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1 font-semibold"
              >
                Contractors
              </a>
              <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                Contact
              </button>
            </>
          ) : (
            <>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
              <button onClick={() => scrollToSection('work')} className="hover:text-white transition-colors">
                Work
              </button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                Contact
              </button>
            </>
          )}

          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-luxury-black bg-luxury-white px-5 py-2 rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-4 shadow-2xl border-t border-luxury-border bg-black/95 backdrop-blur-xl">
          {!isContractors ? (
            <>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-300 hover:text-white text-lg">
                Work
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-300 hover:text-white text-lg">
                Pricing
              </button>
              <a href="/contractors" className="text-left text-amber-300 font-semibold text-lg">
                Contractors →
              </a>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-300 hover:text-white text-lg">
                Contact
              </button>
            </>
          ) : (
            <>
              <a href="/" className="text-left text-gray-300 hover:text-white text-lg">
                Home
              </a>
              <button onClick={() => scrollToSection('work')} className="text-left text-gray-300 hover:text-white text-lg">
                Work
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-300 hover:text-white text-lg">
                Pricing
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-300 hover:text-white text-lg">
                About
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-300 hover:text-white text-lg">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-300 hover:text-white text-lg">
                Contact
              </button>
            </>
          )}

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
