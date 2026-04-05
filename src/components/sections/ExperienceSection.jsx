import React from 'react';
import ScrollReveal from '../ScrollReveal';

const ExperienceSection = ({ onConfigureClick, onExploreModelsClick }) => {
  return (
    <section
      className="relative overflow-hidden z-20 flex flex-col items-center justify-center text-center"
      style={{
        background: 'linear-gradient(160deg, #fdfaf6 0%, #ede7dc 60%, #e2d9cc 100%)',
        paddingTop: 'clamp(6rem, 14vw, 12rem)',
        paddingBottom: 'clamp(6rem, 14vw, 12rem)',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        minHeight: '85vh',
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-display font-black uppercase"
          style={{
            fontSize: 'clamp(9rem, 30vw, 32rem)',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(0,0,0,0.045)',
            letterSpacing: '0.04em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          CHIRON
        </span>
      </div>
      <div
        className="absolute top-0 left-1/2 pointer-events-none"
        style={{ transform: 'translateX(-50%)', width: '1px', height: '80px', background: 'linear-gradient(to bottom, transparent, #B8962E)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(200,163,85,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <ScrollReveal direction="up">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, transparent, #B8962E)' }} />
            <span className="font-sub font-semibold uppercase" style={{ fontSize: '9px', letterSpacing: '0.55em', color: '#B8962E' }}>
              Ownership Experience
            </span>
            <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to left, transparent, #B8962E)' }} />
          </div>

          
          <h2
            className="font-display font-black uppercase leading-none mb-8"
            style={{
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
              color: '#0f0f0f',
              letterSpacing: '-0.015em',
            }}
          >
            Beyond<br />Driving
          </h2>
          <p
            className="font-sans leading-relaxed mb-12 mx-auto"
            style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.05rem)', color: '#555', maxWidth: '38rem', lineHeight: 1.9 }}
          >
            To own a Bugatti is to possess a piece of automotive history. It's a statement of
            uncompromising excellence and an experience that transcends mere transportation.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="font-sub font-semibold uppercase transition-all duration-300"
              style={{
                padding: '1rem 2.5rem',
                background: '#0f0f0f',
                color: '#f8f5f0',
                border: '1px solid #0f0f0f',
                fontSize: '10px',
                letterSpacing: '0.4em',
                cursor: 'pointer',
              }}
              onClick={onConfigureClick}
              onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0f0f0f'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0f0f0f'; e.currentTarget.style.color = '#f8f5f0'; }}
            >
              Configure Your Chiron
            </button>

            <button
              className="font-sub font-semibold uppercase transition-all duration-300"
              style={{
                padding: '1rem 2.5rem',
                background: 'transparent',
                color: '#0f0f0f',
                border: '1px solid rgba(0,0,0,0.2)',
                fontSize: '10px',
                letterSpacing: '0.4em',
                cursor: 'pointer',
              }}
              onClick={onExploreModelsClick}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#B8962E'; e.currentTarget.style.color = '#B8962E'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'; e.currentTarget.style.color = '#0f0f0f'; }}
            >
              Explore Models
            </button>
          </div>
        </ScrollReveal>
      </div>

      <div
        className="absolute bottom-0 left-1/2 pointer-events-none"
        style={{ transform: 'translateX(-50%)', width: '1px', height: '80px', background: 'linear-gradient(to top, transparent, #B8962E)' }}
      />
    </section>
  );
};

export default ExperienceSection;
