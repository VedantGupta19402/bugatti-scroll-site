🏎️ Bugatti Scroll Experience — Project Report
[1] Project Overview

This project is a cinematic, scroll-driven web experience inspired by the luxury and performance of Bugatti.

As users scroll, a high-resolution frame sequence is rendered on an HTML5 Canvas, creating a smooth, immersive, video-like animation that showcases the vehicle in motion. Combined with modern UI sections, transitions, and micro-interactions, the site delivers a premium storytelling experience.

[2] Folder Structure
/Bugatti Scroll Experience
├── public/
│   └── buggati-frames/        # Frame sequence: ezgif-frame-001.jpg → ezgif-frame-240.jpg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx     # Navigation Bar
│   │   │   └── Footer.jsx     # Footer
│   │   ├── sections/
│   │   │   ├── Hero.jsx       # Canvas Animation Section
│   │   │   ├── FeatureSection.jsx
│   │   │   ├── SpecsSection.jsx
│   │   │   └── ExperienceSection.jsx
│   │   ├── ScrollSequence.jsx # Frame Animation Engine
│   │   └── ScrollReveal.jsx   # Scroll-based reveal animations
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
[3] Technology Stack
Core: React (Vite)
Animation: GSAP (ScrollTrigger)
Scroll Engine: Lenis (smooth scrolling)
Rendering: HTML5 Canvas
Styling: Tailwind CSS + Custom CSS
Architecture: Component-based (modular sections)
[4] Animation Logic Explanation
🔹 Frame Preloading

All frame images are loaded into memory before animation starts to ensure zero flicker and smooth playback.

🔹 Canvas Rendering

The Hero section uses a <canvas> element:

Each frame is drawn manually using drawImage
Provides better performance than <img> swapping
🔹 Scroll Synchronization

Using GSAP ScrollTrigger:

Section is pinned during scroll
Scroll progress maps directly to frame index
🔹 Scrubbing Mechanism

As the user scrolls:

frameIndex = scrollProgress × totalFrames
🔹 Real-Time Drawing

On every scroll update:

Canvas is cleared
New frame is rendered
Achieves smooth 60fps cinematic effect
[5] Core Components
🎬 Hero (Canvas Engine)

Handles:

Frame rendering
Scroll syncing
Core animation logic
✨ Feature Section

Highlights:

Design philosophy
Key luxury elements
Visual storytelling blocks
⚙️ Specs Section

Displays:

Performance metrics
Technical specifications
Structured layout
🌌 Experience Section

Adds:

Immersive transitions
Scroll-triggered reveals
Premium storytelling
[6] Performance Optimization
✅ Canvas Rendering → smoother than DOM images
✅ Preloaded Frames → no lag or flicker
✅ Lenis Smooth Scroll → fluid experience
✅ GSAP Scrubbing → precise control
✅ Optimized Assets → faster load times
[7] How to Add / Replace Frames
Place images inside:
public/buggati-frames/
Naming format:
ezgif-frame-001.jpg → ezgif-frame-240.jpg
Update frame count in code:
const frameCount = 240;
[8] Setup & Run
Install dependencies
npm install
Start development server
npm run dev

👉 Open:

http://localhost:5173
Build for production
npm run build
npm run preview
[9] Key Features
🎬 Cinematic scroll animation
🏎️ Luxury-inspired UI
⚡ High-performance rendering
🎯 Smooth scroll + GSAP sync
📱 Responsive design
[10] Final Notes

This project focuses on delivering:

Emotion through motion + performance through engineering

It blends:

storytelling
animation
modern frontend architecture

to create a premium automotive web experience.