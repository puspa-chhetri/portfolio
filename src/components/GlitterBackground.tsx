import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GlitterBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous glitter elements
    const existingGlitters = containerRef.current.querySelectorAll('.glitter');
    existingGlitters.forEach(glitter => glitter.remove());

    // Create glitter particles
    const createGlitter = () => {
      const glitter = document.createElement('div');
      glitter.className = 'glitter';

      // Random properties for variety
      const size = Math.random() * 2 + 1; // Size between 1-3px (more subtle)
      const posX = Math.random() * 100; // Random horizontal position
      const posY = Math.random() * 100; // Random vertical position

      glitter.style.width = `${size}px`;
      glitter.style.height = `${size}px`;
      glitter.style.left = `${posX}%`;
      glitter.style.top = `${posY}%`;
      glitter.style.position = 'absolute';
      // Use a subtle light color that works well with dark backgrounds
      glitter.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`; // Very subtle transparency
      glitter.style.borderRadius = '50%';
      glitter.style.pointerEvents = 'none';
      glitter.style.zIndex = '1';

      // Add subtle glow effect appropriate for dark theme
      glitter.style.boxShadow = `0 0 ${size * 3}px rgba(255, 255, 255, 0.3)`;

      containerRef.current?.appendChild(glitter);

      // Animate the glitter with subtle twinkling
      gsap.to(glitter, {
        opacity: Math.random() > 0.3 ? 0.1 : 0.8, // More subtle opacity changes
        duration: Math.random() * 3 + 2, // Slower animations
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: Math.random() * 2, // Stagger the animations
      });

      // Move glitter slightly for a gentle twinkling effect
      gsap.to(glitter, {
        x: Math.random() * 10 - 5, // Smaller movement range
        y: Math.random() * 10 - 5,
        duration: Math.random() * 4 + 3, // Slower movements
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2,
      });
    };

    // Create multiple glitter particles (reduce count for better performance)
    const glitterCount = 30; // Reduced for better performance and subtlety
    for (let i = 0; i < glitterCount; i++) {
      setTimeout(() => createGlitter(), i * 150); // Stagger creation more gradually
    }

    // Cleanup function
    return () => {
      const glitters = containerRef.current?.querySelectorAll('.glitter');
      glitters?.forEach(glitter => {
        gsap.killTweensOf(glitter);
        glitter.remove();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none -z-20"
    />
  );
};

export default GlitterBackground;