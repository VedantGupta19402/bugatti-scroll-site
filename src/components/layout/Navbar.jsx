import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Models', section: 'scrollSequence', href: '#scroll-sequence' },
  { label: 'Brand', section: 'features', href: '#features' },
  { label: 'Ownership', section: 'experience', href: '#experience' },
];

const Navbar = ({ onLogoClick, onNavigate, onConfigureClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onLogoClick?.();
    }
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 px-6 py-5 md:px-12 flex justify-between items-center transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(253,250,246,0.88)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      {/* Logo */}
      <div
        className="font-display text-xl tracking-[0.2em] font-bold uppercase cursor-pointer select-none"
        style={{ color: '#0f0f0f' }}
        role="button"
        tabIndex={0}
        onClick={onLogoClick}
        onKeyDown={handleLogoKeyDown}
      >
        Bugatti
      </div>

      {/* Links */}
      <div
        className="hidden md:flex gap-8 font-sub text-xs tracking-widest uppercase font-semibold"
        style={{ color: '#3a3a3a' }}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="relative group transition-colors duration-200"
            style={{ color: '#3a3a3a', textDecoration: 'none' }}
            onClick={(event) => {
              event.preventDefault();
              onNavigate?.(item.section);
            }}
          >
            {item.label}
            <span
              className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
              style={{ background: '#B8962E' }}
            />
          </a>
        ))}
      </div>

      {/* CTA */}
      <button
        className="text-xs uppercase tracking-widest px-6 py-2 transition-all duration-300 font-sub font-semibold"
        style={{
          color: '#0f0f0f',
          border: '1px solid rgba(0,0,0,0.25)',
        }}
        onClick={onConfigureClick}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#0f0f0f';
          e.currentTarget.style.color = '#f8f5f0';
          e.currentTarget.style.borderColor = '#0f0f0f';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#0f0f0f';
          e.currentTarget.style.borderColor = 'rgba(0,0,0,0.25)';
        }}
      >
        Configure
      </button>
    </nav>
  );
};

export default Navbar;
