import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "../App.css"; // Add custom styles for animations

const ScrollAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger only once when the element comes into view
    threshold: 0.5, // 50% of the element is visible before triggering
  });

  return (
    <div ref={ref} className={`animated-element ${inView ? "visible" : ""}`}>
      <h2>This element will animate when it comes into view!</h2>
    </div>
  );
};

export default ScrollAnimation;
