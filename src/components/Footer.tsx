import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 text-center relative z-10 text-gray-400 font-light text-sm border-t border-luxury-border bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="tracking-wide leading-relaxed break-words text-center md:text-left">
          Townframe, a Margalla Inc. company · Calgary, AB ·{' '}
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 break-all">
            TODO: &#123;&#123;phone&#125;&#125;
          </span>
          {' '}·{' '}
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 break-all">
            TODO: &#123;&#123;email&#125;&#125;
          </span>
          {' '}· © {currentYear}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/contractors" className="hover:text-white transition-colors">For Contractors</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
