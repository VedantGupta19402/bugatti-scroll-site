import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fdfaf6 0%, #f0ebe1 55%, #e4ddd0 100%)' }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)',
        }}
      />

      {/* Gold radial glow at center */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(200,163,85,0.12) 0%, transparent 70%)',
        }}
      />

      {/* HUD corners */}
      {[
        { top: '2rem', left: '2rem', borderTop: '1px solid', borderLeft: '1px solid' },
        { top: '2rem', right: '2rem', borderTop: '1px solid', borderRight: '1px solid' },
        { bottom: '2rem', left: '2rem', borderBottom: '1px solid', borderLeft: '1px solid' },
        { bottom: '2rem', right: '2rem', borderBottom: '1px solid', borderRight: '1px solid' },
      ].map((style, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
          className="absolute pointer-events-none"
          style={{
            ...style,
            width: '2.5rem',
            height: '2.5rem',
            borderColor: 'rgba(184,150,46,0.4)',
          }}
        />
      ))}

      {/* Side labels */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none hidden md:flex"
        style={{ color: 'rgba(184,150,46,0.7)', fontSize: '9px', letterSpacing: '0.25em' }}
      >
        {['16 CYL', '1500 HP', '420 KM/H'].map((l, i) => (
          <span key={i} className="font-sub uppercase">{l}</span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
        style={{ color: 'rgba(184,150,46,0.7)', fontSize: '9px', letterSpacing: '0.25em', writingMode: 'vertical-rl' }}
      >
        <span className="font-sub uppercase">Bugatti Chiron · 2024</span>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: yTitle, opacity }}
        className="z-10 flex flex-col items-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="font-sub font-semibold uppercase mb-5"
          style={{ color: '#B8962E', fontSize: '10px', letterSpacing: '0.5em' }}
        >
          ─── The Pinnacle of Automotive Engineering ───
        </motion.p>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 60, skewY: 3 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black uppercase leading-none tracking-tighter"
            style={{
              fontSize: 'clamp(5rem, 17vw, 17rem)',
              color: '#0f0f0f',
              letterSpacing: '-0.01em',
            }}
          >
            CHIRON
          </motion.h1>

          {/* Ghost echo — dramatic text shadow duplicate */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(5rem, 17vw, 17rem)',
              letterSpacing: '-0.01em',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(184,150,46,0.15)',
              transform: 'translate(3px, 4px)',
              lineHeight: 1,
              textTransform: 'uppercase',
            }}
          >
            CHIRON
          </motion.div>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.9, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative h-px max-w-md mx-auto mt-6"
          style={{ background: 'linear-gradient(to right, transparent, #B8962E 40%, #B8962E 60%, transparent)' }}
        >
          <span
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 font-sub uppercase"
            style={{ fontSize: '8px', letterSpacing: '0.4em', color: '#B8962E', background: '#fdfaf6', top: '50%' }}
          >
            W16 · 8.0L
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 font-sub text-sm tracking-widest uppercase"
          style={{ color: '#888', letterSpacing: '0.3em' }}
        >
          Supersport · Limited Edition
        </motion.p>
      </motion.div>

      {/* Bottom scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-3 pointer-events-none"
      >
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          className="font-sub uppercase"
          style={{ fontSize: '9px', letterSpacing: '0.45em', color: '#B8962E' }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, #B8962E, transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
