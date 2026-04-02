import React, { useCallback, useEffect, useRef } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ScrollSequence from './components/ScrollSequence';
import FeatureSection from './components/sections/FeatureSection';
import SpecsSection from './components/sections/SpecsSection';
import ExperienceSection from './components/sections/ExperienceSection';

const SECTION_IDS = {
  hero: 'hero',
  scrollSequence: 'scroll-sequence',
  features: 'features',
  specs: 'specs',
  experience: 'experience',
  footer: 'footer',
};

const sectionAnchorStyle = { scrollMarginTop: '96px' };

function App() {
  const heroRef = useRef(null);
  const scrollSequenceRef = useRef(null);
  const featuresRef = useRef(null);
  const specsRef = useRef(null);
  const experienceRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = useCallback((sectionKey, options = {}) => {
    const { updateHash = true } = options;
    const targetMap = {
      hero: heroRef.current,
      scrollSequence: scrollSequenceRef.current,
      features: featuresRef.current,
      specs: specsRef.current,
      experience: experienceRef.current,
      footer: footerRef.current,
    };

    const target = targetMap[sectionKey];
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (updateHash) {
      const nextHash = `#${SECTION_IDS[sectionKey]}`;
      if (window.location.hash !== nextHash) {
        window.history.replaceState(null, '', nextHash);
      }
    }
  }, []);

  const handleHashNavigation = useCallback(() => {
    const currentHash = window.location.hash.replace('#', '');
    const matchedSection = Object.entries(SECTION_IDS).find(([, value]) => value === currentHash);

    if (!matchedSection) {
      return;
    }

    const [sectionKey] = matchedSection;
    window.requestAnimationFrame(() => {
      scrollToSection(sectionKey, { updateHash: false });
    });
  }, [scrollToSection]);

  useEffect(() => {
    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [handleHashNavigation]);

  const handleConfigureNavigation = useCallback(() => {
    scrollToSection('specs');
  }, [scrollToSection]);

  const handlePreorderAction = useCallback(() => {
    window.alert('Pre-order enquiries are enabled. In a production flow this would continue into concierge-led configuration.');
  }, []);

  const handleFooterLinkClick = useCallback((link) => {
    if (link === 'Contact') {
      scrollToSection('footer');
      window.alert('Contact routing is connected. This placeholder can be replaced with a live concierge form or CRM handoff.');
      return;
    }

    window.alert(`${link} content can be connected next without changing the current website design.`);
  }, [scrollToSection]);

  return (
    <div className="grain" style={{ backgroundColor: '#f8f5f0', color: '#0f0f0f', minHeight: '100vh' }}>
      <Navbar
        onLogoClick={() => scrollToSection('hero')}
        onNavigate={scrollToSection}
        onConfigureClick={handleConfigureNavigation}
      />

      <main>
        <div id={SECTION_IDS.hero} ref={heroRef}>
          <Hero />
        </div>

        <div id={SECTION_IDS.scrollSequence} ref={scrollSequenceRef} style={sectionAnchorStyle}>
          <ScrollSequence />
        </div>

        <div id={SECTION_IDS.features} ref={featuresRef} style={sectionAnchorStyle}>
          <FeatureSection
            title="Aerodynamic Sculpting"
            subtitle="Design Language"
            description="Every curve of the Chiron is sculpted for absolute efficiency. The signature C-line forcefully channels air to the massive 8.0-liter W16 engine, keeping it cool under immense pressure."
            stats={[
              { label: 'Drag Coefficient', value: '0.35' },
              { label: 'Active Aero', value: 'Yes' },
            ]}
            imageSrc="/buggati-frames/ezgif-frame-001.jpg"
            isReversed={false}
          />

          <FeatureSection
            title="Heart of a Beast"
            subtitle="Engineering Marvel"
            description="At the core lies an 8.0-liter quad-turbocharged W16 engine capable of 1,500 horsepower. It propels the Chiron to 420 km/h â€” a realm previously reserved for aviation."
            stats={[
              { label: 'Cylinders', value: '16' },
              { label: 'Turbochargers', value: '4' },
            ]}
            imageSrc="/buggati-frames/ezgif-frame-120.jpg"
            isReversed={true}
          />
        </div>

        <div id={SECTION_IDS.specs} ref={specsRef} style={sectionAnchorStyle}>
          <SpecsSection />
        </div>

        <div id={SECTION_IDS.experience} ref={experienceRef} style={sectionAnchorStyle}>
          <ExperienceSection
            onConfigureClick={handlePreorderAction}
            onExploreModelsClick={() => scrollToSection('features')}
          />
        </div>
      </main>

      <div id={SECTION_IDS.footer} ref={footerRef} style={sectionAnchorStyle}>
        <Footer
          onBrandClick={() => scrollToSection('hero')}
          onLinkClick={handleFooterLinkClick}
        />
      </div>
    </div>
  );
}

export default App;
