import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 text-center relative z-10 text-gray-400 font-light text-sm border-t border-luxury-border bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="tracking-wide leading-relaxed break-words text-center md:text-left">
          Townframe, a Margalla Inc. company · Calgary, AB ·{' '}
          <a href="tel:+14039888659" className="text-white hover:text-amber-300 transition-colors font-medium">403-988-8659</a>
          {' '}·{' '}
          <a href="mailto:saadijaz@townframe.net" className="hover:text-white transition-colors break-all">saadijaz@townframe.net</a>
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
