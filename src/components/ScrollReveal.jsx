import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = ({ children, direction = 'up', delay = 0, scale = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getVariants = () => {
    const hidden = {
      opacity: 0,
    };
    const visible = {
      opacity: 1,
      transition: { duration: 1, delay, ease: [0.25, 1, 0.5, 1] }
    };

    if (direction === 'up') {
      hidden.y = 50;
      visible.y = 0;
    } else if (direction === 'down') {
      hidden.y = -50;
      visible.y = 0;
    } else if (direction === 'left') {
      hidden.x = 50;
      visible.x = 0;
    } else if (direction === 'right') {
      hidden.x = -50;
      visible.x = 0;
    }

    if (scale) {
      hidden.scale = 0.95;
      visible.scale = 1;
    }

    return { hidden, visible };
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;