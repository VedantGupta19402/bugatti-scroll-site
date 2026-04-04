import React from 'react';

const Footer = ({ onBrandClick, onLinkClick }) => {
  const handleBrandKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onBrandClick?.();
    }
  };

  return (
    <footer
      className="py-12 px-6 md:px-12 text-xs tracking-widest uppercase font-sub relative z-50"
      style={{
        background: '#0f0f0f',
        color: '#6b6b6b',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
        <div
          className="font-display font-bold text-sm tracking-[0.2em]"
          style={{ color: '#f8f5f0' }}
          role="button"
          tabIndex={0}
          onClick={onBrandClick}
          onKeyDown={handleBrandKeyDown}
        >
          BUGATTI
        </div>

      
        <div style={{ color: '#6b6b6b' }}>
          Â© {new Date().getFullYear()} Bugatti Automobiles S.A.S.
        </div>

      
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="transition-colors duration-200"
              style={{ color: '#6b6b6b', textDecoration: 'none' }}
              onClick={(event) => {
                event.preventDefault();
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4AF5A'}
              onMouseLeave={e => e.currentTarget.style.color = '#6b6b6b'}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
