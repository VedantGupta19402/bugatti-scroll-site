import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (sectionRef, totalFrames, onUpdate) => {
  useEffect(() => {
    if (!sectionRef.current) return;
    ScrollTrigger.getAll().forEach(t => t.kill());

    let rafId;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=2000",
      scrub: 1.2,
      pin: true,

      onUpdate: (self) => {
        const frame = Math.min(
          totalFrames,
          Math.max(1, Math.floor(self.progress * totalFrames))
        );

        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          onUpdate(frame);
        });
      },
    });

    return () => {
      trigger.kill();
      cancelAnimationFrame(rafId);
    };
  }, [sectionRef, totalFrames, onUpdate]);
};