import React from 'react';
import ScrollReveal from '../ScrollReveal';

const FeatureSection = ({ title, subtitle, description, stats, imageSrc, isReversed }) => {
  return (
    <section
      className="relative overflow-hidden z-20"
      style={{
        background: isReversed
          ? 'linear-gradient(135deg, #f0ebe1 0%, #e8e1d6 100%)'
          : 'linear-gradient(135deg, #fdfaf6 0%, #f5f0e8 100%)',
        paddingTop: 'clamp(5rem, 10vw, 9rem)',
        paddingBottom: 'clamp(5rem, 10vw, 9rem)',
        paddingLeft: 'clamp(1.5rem, 5vw, 6rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 6rem)',
      }}
    >
      {/* Large ghosted section number */}
      <div
        className="absolute pointer-events-none select-none"
        aria-hidden
        style={{
          top: '-0.15em',
          [isReversed ? 'right' : 'left']: '-0.05em',
          fontFamily: 'Orbitron, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(8rem, 22vw, 22rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(0,0,0,0.055)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          zIndex: 0,
        }}
      >
        {isReversed ? '02' : '01'}
      </div>

      {/* Top separator line */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent 5%, rgba(184,150,46,0.3) 40%, rgba(184,150,46,0.3) 60%, transparent 95%)',
        }}
      />

      <div
        className={`max-w-7xl mx-auto relative z-10 flex flex-col gap-16 lg:gap-20 items-center ${
          isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        {/* ── Text side ── */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <ScrollReveal direction={isReversed ? 'right' : 'left'}>
            {/* Subtitle with flanking line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{ width: '20px', height: '1px', background: '#B8962E', flexShrink: 0 }} />
              <span
                className="font-sub font-semibold uppercase"
                style={{ fontSize: '10px', letterSpacing: '0.55em', color: '#B8962E' }}
              >
                {subtitle}
              </span>
            </div>

            {/* Main heading */}
            <h2
              className="font-display font-black uppercase leading-none mb-8"
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                color: '#0f0f0f',
                letterSpacing: '-0.01em',
              }}
            >
              {title}
            </h2>

            {/* Description */}
            <p
              className="font-sans leading-relaxed mb-12 max-w-lg"
              style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)', color: '#555', letterSpacing: '0.01em', lineHeight: 1.85 }}
            >
              {description}
            </p>

            {/* Stats grid */}
            <div
              className="grid grid-cols-2 gap-8 pt-8"
              style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}
            >
              {stats && stats.map((stat, idx) => (
                <div key={idx} className="group">
                  <div
                    className="font-display font-light mb-1 group-hover:text-[#B8962E] transition-colors duration-300"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f0f0f', letterSpacing: '-0.02em', lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-sub uppercase"
                    style={{ fontSize: '9px', letterSpacing: '0.4em', color: '#9a8a6a' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── Image side ── */}
        <div className="w-full lg:w-1/2">
          <ScrollReveal direction={isReversed ? 'left' : 'right'} delay={0.15} scale={true}>
            <div className="relative" style={{ aspectRatio: '4/3' }}>
              {/* Image container */}
              <div
                className="relative w-full h-full overflow-hidden"
                style={{ borderRadius: '1px', boxShadow: '0 30px 90px rgba(0,0,0,0.14), 0 6px 20px rgba(0,0,0,0.08)' }}
              >
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
                  loading="lazy"
                  style={{ filter: 'brightness(0.97) contrast(1.07) saturate(1.04)' }}
                />

                {/* Top-left HUD bracket */}
                <div className="absolute top-3 left-3 pointer-events-none" style={{ width: '20px', height: '20px', borderTop: '1px solid rgba(184,150,46,0.7)', borderLeft: '1px solid rgba(184,150,46,0.7)' }} />
                {/* Bottom-right HUD bracket */}
                <div className="absolute bottom-3 right-3 pointer-events-none" style={{ width: '20px', height: '20px', borderBottom: '1px solid rgba(184,150,46,0.7)', borderRight: '1px solid rgba(184,150,46,0.7)' }} />

                {/* Gold bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '2px', background: 'linear-gradient(to right, transparent, rgba(184,150,46,0.6) 30%, rgba(184,150,46,0.6) 70%, transparent)' }} />
              </div>

              {/* Floating label badge */}
              <div
                className="absolute pointer-events-none"
                style={{
                  [isReversed ? 'left' : 'right']: '-1rem',
                  bottom: '2rem',
                  background: '#0f0f0f',
                  padding: '0.5rem 0.9rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}
              >
                <div className="font-sub uppercase" style={{ fontSize: '8px', letterSpacing: '0.4em', color: '#B8962E' }}>{subtitle}</div>
                <div className="font-display font-bold" style={{ fontSize: '11px', color: '#f8f5f0', letterSpacing: '0.1em', marginTop: '2px' }}>{title}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;