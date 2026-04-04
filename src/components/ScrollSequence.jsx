import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TOTAL_FRAMES = 240;
const getFrame = (i) => `/buggati-frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

const ScrollSequence = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(1);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const draw = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cW = canvas.width;
    const cH = canvas.height;
    const iRatio = img.naturalWidth / img.naturalHeight;
    const cRatio = cW / cH;

    let w, h, x, y;
    if (cRatio > iRatio) {
      w = cW; h = cW / iRatio;
      x = 0; y = (cH - h) / 2;
    } else {
      h = cH; w = cH * iRatio;
      x = (cW - w) / 2; y = 0;
    }

    ctx.clearRect(0, 0, cW, cH);
    ctx.drawImage(img, x, y, w, h);
  }, []);

  useEffect(() => {
    const imgs = [];
    let loaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrame(i);
      img.onload = () => {
        loaded++;
        setImagesLoaded(loaded);
        if (i === 1) { imagesRef.current = imgs; draw(1); }
      };
      img.onerror = () => { loaded++; setImagesLoaded(loaded); };
      imgs[i - 1] = img;
    }
    imagesRef.current = imgs;
  }, [draw]);

  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      draw(currentFrameRef.current);
    };
    window.addEventListener('resize', resize);
    requestAnimationFrame(resize);
    return () => window.removeEventListener('resize', resize);
  }, [draw]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const frameProgress = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  useEffect(() => {
    const unsub = frameProgress.on('change', (v) => {
      const idx = Math.round(Math.min(TOTAL_FRAMES, Math.max(1, v)));
      if (idx !== currentFrameRef.current) {
        currentFrameRef.current = idx;
        draw(idx);
      }
    });
    return unsub;
  }, [frameProgress, draw]);


  const ph1o = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [0, 1, 1, 0]);
  const ph2o = useTransform(scrollYProgress, [0.28, 0.35, 0.55, 0.62], [0, 1, 1, 0]);
  const ph3o = useTransform(scrollYProgress, [0.62, 0.70, 0.90, 1.0], [0, 1, 1, 0]);

  const ph1x = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.28], [-40, 0, 0, -40]);
  const ph2x = useTransform(scrollYProgress, [0.28, 0.35, 0.55, 0.62], [40, 0, 0, 40]);


  const frameDisplay = useTransform(frameProgress, v => String(Math.round(v)).padStart(3, '0'));
  const pctDisplay = useTransform(scrollYProgress, v => `${Math.round(v * 100)}%`);

  const loadPct = Math.round((imagesLoaded / TOTAL_FRAMES) * 100);
  const isReady = imagesLoaded >= TOTAL_FRAMES;

  return (
    <section ref={sectionRef} className="relative w-screen" style={{ height: '500vh' }}>
      <div
        className="sticky top-0 overflow-hidden"
        style={{
          height: '100vh',
          width: '100%',
          background: 'radial-gradient(ellipse 100% 90% at 50% 60%, #ede8df 0%, #e2dbd0 40%, #d6cfc2 100%)',
        }}
      >

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{
            zIndex: 10,
            filter: 'brightness(1.02) contrast(1.08) saturate(1.06)',
            mixBlendMode: 'multiply',
          }}
        />


        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 20,
            background: 'radial-gradient(ellipse 85% 80% at 50% 50%, transparent 40%, rgba(210,200,185,0.65) 100%)',
          }}
        />


        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            zIndex: 30,
            height: '1px',
            background: 'linear-gradient(to right, transparent 5%, rgba(184,150,46,0.5) 40%, rgba(184,150,46,0.5) 60%, transparent 95%)',
          }}
        />


        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            zIndex: 30,
            height: '1px',
            background: 'linear-gradient(to right, transparent 5%, rgba(184,150,46,0.5) 40%, rgba(184,150,46,0.5) 60%, transparent 95%)',
          }}
        />


        {isReady && (
          <div
            className="absolute pointer-events-none"
            style={{ zIndex: 35, bottom: '2rem', left: '2.5rem' }}
          >
            <motion.div style={{ fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(184,150,46,0.8)', fontFamily: 'Orbitron, sans-serif', lineHeight: 1.8 }}>
              <div>FRAME <motion.span>{frameDisplay}</motion.span> / 240</div>
              <div style={{ color: 'rgba(0,0,0,0.35)' }}>BUGATTI CHIRON · SUPERSPORT</div>
            </motion.div>
          </div>
        )}


        {isReady && (
          <div
            className="absolute pointer-events-none"
            style={{ zIndex: 35, bottom: '2rem', right: '2.5rem' }}
          >
            <motion.div style={{ fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(184,150,46,0.8)', fontFamily: 'Orbitron, sans-serif', textAlign: 'right', lineHeight: 1.8 }}>
              <div><motion.span>{pctDisplay}</motion.span> SCROLL</div>
              <div style={{ color: 'rgba(0,0,0,0.35)' }}>W16 · 8.0L QUAD-TURBO</div>
            </motion.div>
          </div>
        )}


        <div
          className="absolute pointer-events-none"
          style={{
            zIndex: 22,
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '55%',
            height: '50px',
            background: 'rgba(160,140,110,0.22)',
            filter: 'blur(34px)',
            borderRadius: '100%',
          }}
        />

        {/* Loader */}
        {!isReady && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ zIndex: 60, background: 'linear-gradient(160deg, #fdfaf6 0%, #f0ebe1 100%)' }}
          >

            {[
              { top: '38%', left: 'calc(50% - 120px)', borderTop: '1px solid', borderLeft: '1px solid', width: '16px', height: '16px' },
              { top: '38%', right: 'calc(50% - 120px)', borderTop: '1px solid', borderRight: '1px solid', width: '16px', height: '16px' },
              { bottom: '38%', left: 'calc(50% - 120px)', borderBottom: '1px solid', borderLeft: '1px solid', width: '16px', height: '16px' },
              { bottom: '38%', right: 'calc(50% - 120px)', borderBottom: '1px solid', borderRight: '1px solid', width: '16px', height: '16px' },
            ].map((s, i) => (
              <div key={i} className="absolute pointer-events-none" style={{ ...s, borderColor: 'rgba(184,150,46,0.5)', position: 'absolute' }} />
            ))}

            <p className="font-sub font-semibold uppercase mb-8" style={{ fontSize: '9px', letterSpacing: '0.55em', color: '#B8962E' }}>
              Initializing Experience
            </p>

            <div className="relative" style={{ width: '200px', height: '1px', background: 'rgba(0,0,0,0.1)' }}>
              <div
                className="absolute inset-y-0 left-0 transition-all duration-150"
                style={{ width: `${loadPct}%`, background: 'linear-gradient(to right, #B8962E, #D4AF5A)' }}
              />
              {/* Glint on bar end */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{ left: `${loadPct}%`, background: '#D4AF5A', boxShadow: '0 0 6px 2px rgba(200,163,85,0.5)', transform: 'translate(-50%, -50%)' }}
              />
            </div>

            <p className="font-display mt-6" style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#B8962E' }}>
              {loadPct}%
            </p>
          </div>
        )}


        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: 'clamp(2rem, 5vw, 5rem)',
            top: '50%',
            y: '-50%',
            zIndex: 40,
            opacity: ph1o,
            x: ph1x,
            maxWidth: '26rem',
          }}
        >

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ width: '24px', height: '1px', background: '#B8962E' }} />
            <span className="font-sub" style={{ fontSize: '9px', letterSpacing: '0.5em', color: '#B8962E', textTransform: 'uppercase' }}>Phase 01</span>
          </div>

          <h2
            className="font-display font-black uppercase leading-none"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              color: '#0f0f0f',
              letterSpacing: '-0.01em',
              textShadow: '2px 3px 0 rgba(255,255,255,0.8)',
            }}
          >
            Aero<br />Dynamic<br />Mastery
          </h2>

          <div style={{ marginTop: '16px', width: '48px', height: '2px', background: 'linear-gradient(to right, #B8962E, transparent)' }} />
        </motion.div>

        {/* ─── PHASE 2 — Right aligned ─── */}
        <motion.div
          className="absolute pointer-events-none text-right"
          style={{
            right: 'clamp(2rem, 5vw, 5rem)',
            bottom: '30%',
            zIndex: 40,
            opacity: ph2o,
            x: ph2x,
            maxWidth: '26rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', marginBottom: '12px' }}>
            <span className="font-sub" style={{ fontSize: '9px', letterSpacing: '0.5em', color: '#B8962E', textTransform: 'uppercase' }}>Phase 02</span>
            <div style={{ width: '24px', height: '1px', background: '#B8962E' }} />
          </div>

          <h2
            className="font-display font-black uppercase leading-none"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              color: '#0f0f0f',
              letterSpacing: '-0.01em',
              textShadow: '2px 3px 0 rgba(255,255,255,0.8)',
            }}
          >
            Engineered<br />For<br />Power
          </h2>

          <div style={{ marginTop: '16px', marginLeft: 'auto', width: '48px', height: '2px', background: 'linear-gradient(to left, #B8962E, transparent)' }} />
        </motion.div>

        {/* ─── PHASE 3 — Center fullscreen ─── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ zIndex: 40, opacity: ph3o }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to right, transparent, #B8962E)' }} />
            <span className="font-sub" style={{ fontSize: '9px', letterSpacing: '0.6em', color: '#B8962E', textTransform: 'uppercase' }}>The Legend</span>
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to left, transparent, #B8962E)' }} />
          </div>

          <h1
            className="font-display font-black uppercase text-center"
            style={{
              fontSize: 'clamp(4.5rem, 16vw, 15rem)',
              lineHeight: 0.9,
              letterSpacing: '0.04em',
              color: '#0f0f0f',
              textShadow: `
                0 0 120px rgba(200,163,85,0.2),
                3px 4px 0 rgba(255,255,255,0.7),
                -1px -1px 0 rgba(0,0,0,0.05)
              `,
            }}
          >
            BUGATTI
          </h1>

          <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2rem' }}>
            {[['1500', 'HP'], ['420', 'KM/H'], ['2.4S', '0–100']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div className="font-display" style={{ fontSize: '1.1rem', color: '#0f0f0f', letterSpacing: '0.05em' }}>{val}</div>
                <div className="font-sub" style={{ fontSize: '8px', letterSpacing: '0.4em', color: '#B8962E', textTransform: 'uppercase', marginTop: '3px' }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollSequence;