import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // stagger delay in ms
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's preferences for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger animation once and unobserve
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // Trigger when at least 5% of the element is visible
        rootMargin: '0px 0px -40px 0px' // Offset slightly before coming fully into view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 750ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 750ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};
