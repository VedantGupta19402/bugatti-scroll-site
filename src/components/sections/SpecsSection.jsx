import React from 'react';
import ScrollReveal from '../ScrollReveal';

const specs = [
  { name: "Engine",       value: "8.0L W16",   sub: "Quad-Turbocharged" },
  { name: "Horsepower",   value: "1,500",       sub: "HP @ 6,700 RPM" },
  { name: "0–100 km/h",   value: "2.4",         sub: "Seconds" },
  { name: "Top Speed",    value: "420",         sub: "km/h (Limited)" },
  { name: "Transmission", value: "7-Speed",     sub: "Dual-Clutch DSG" },
  { name: "Drive",        value: "AWD",         sub: "All-Wheel Drive" },
];

const SpecsSection = () => {
  return (
    <section
      className="relative overflow-hidden z-20"
      style={{
        background: '#0f0f0f',
        paddingTop: 'clamp(5rem, 10vw, 9rem)',
        paddingBottom: 'clamp(5rem, 10vw, 9rem)',
        paddingLeft: 'clamp(1.5rem, 5vw, 6rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 6rem)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Ghost watermark heading */}
      <div
        className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden"
        aria-hidden
        style={{ paddingLeft: '3rem' }}
      >
        <span
          className="font-display font-black uppercase"
          style={{
            fontSize: 'clamp(6rem, 20vw, 20rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.04)',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
          }}
        >
          SPECS
        </span>
      </div>

      {/* Gold radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 85% 50%, rgba(184,150,46,0.07) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '28px', height: '1px', background: '#B8962E' }} />
            <span className="font-sub font-semibold uppercase" style={{ fontSize: '9px', letterSpacing: '0.55em', color: '#B8962E' }}>
              Technical Data
            </span>
          </div>
          <h2
            className="font-display font-black uppercase leading-none mb-20"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
              color: '#f8f5f0',
              letterSpacing: '-0.01em',
            }}
          >
            Unmatched<br />Specifications
          </h2>
        </ScrollReveal>

        {/* Specs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
          {specs.map((spec, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.07}>
              <div
                className="relative group cursor-default"
                style={{
                  padding: '1.75rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Index number */}
                <div className="font-display" style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(184,150,46,0.5)', marginBottom: '0.6rem' }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Spec name */}
                <div className="font-sub font-semibold uppercase" style={{ fontSize: '10px', letterSpacing: '0.35em', color: '#666', marginBottom: '0.5rem', transition: 'color 0.25s' }}>
                  {spec.name}
                </div>

                {/* Main value */}
                <div
                  className="font-display font-bold group-hover:text-[#D4AF5A] transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#f8f5f0', letterSpacing: '-0.01em', lineHeight: 1.1 }}
                >
                  {spec.value}
                </div>

                {/* Sub label */}
                <div className="font-sub uppercase mt-1" style={{ fontSize: '9px', letterSpacing: '0.3em', color: '#4a4a4a' }}>
                  {spec.sub}
                </div>

                {/* Hover gold left bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-0.5 transition-all duration-300"
                  style={{ background: '#B8962E' }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
