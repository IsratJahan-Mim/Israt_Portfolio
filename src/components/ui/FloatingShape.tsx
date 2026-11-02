"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

interface FloatingShapeProps {
  type: "circle" | "squiggle" | "star" | "blob";
  color: "coral" | "violet" | "yellow";
  className?: string;
  size?: number;
  initialX?: number;
  initialY?: number;
}

export function FloatingShape({
  type,
  color,
  className = "",
  size = 64,
}: FloatingShapeProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Subtle parallax transform
  const parallaxX = useTransform(springX, [-500, 500], [-15, 15]);
  const parallaxY = useTransform(springY, [-500, 500], [-15, 15]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const colorMap = {
    coral: "text-accent-coral fill-accent-coral/20 stroke-accent-coral",
    violet: "text-accent-violet fill-accent-violet/20 stroke-accent-violet",
    yellow: "text-accent-yellow fill-accent-yellow/20 stroke-accent-yellow",
  };

  const renderShape = () => {
    switch (type) {
      case "circle":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className={`${colorMap[color]} animate-float-slow drop-shadow-md`}
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              strokeWidth="5"
              strokeDasharray="4 4"
            />
          </svg>
        );

      case "star":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className={`${colorMap[color]} animate-float drop-shadow-md`}
            aria-hidden="true"
          >
            <path
              d="M50 5 L63 35 L95 38 L71 60 L78 92 L50 76 L22 92 L29 60 L5 38 L37 35 Z"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>
        );

      case "squiggle":
        return (
          <svg
            width={size * 1.5}
            height={size}
            viewBox="0 0 160 80"
            className={`${colorMap[color]} animate-float-reverse drop-shadow-sm`}
            aria-hidden="true"
          >
            <path
              d="M 10 40 Q 40 10, 70 40 T 130 40 T 190 40"
              fill="none"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        );

      case "blob":
        return (
          <svg
            width={size * 1.3}
            height={size * 1.3}
            viewBox="0 0 200 200"
            className={`${colorMap[color]} animate-pulse-slow drop-shadow-lg`}
            aria-hidden="true"
          >
            <path
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,73.1,42.1C64.9,55,54,66.4,40.7,73.3C27.4,80.3,13.7,82.8,-0.5,83.7C-14.7,84.5,-29.3,83.7,-42.2,76.9C-55.1,70.1,-66.2,57.3,-74.6,43.2C-82.9,29.1,-88.4,14.6,-88,-0.2C-87.6,-15.1,-81.3,-30.1,-72,-42.9C-62.7,-55.6,-50.4,-66,-37,-73.4C-23.6,-80.7,-11.8,-85.1,1.8,-88.2C15.4,-91.3,30.7,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
              strokeWidth="4"
            />
          </svg>
        );
    }
  };

  return (
    <motion.div
      style={{
        x: parallaxX,
        y: parallaxY,
      }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {renderShape()}
    </motion.div>
  );
}

