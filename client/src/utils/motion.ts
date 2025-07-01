import { Variants } from "framer-motion";

export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay: number = 0): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: "spring" | "tween" | "keyframes" | "just",
  delay: number = 0,
  duration: number = 0.6
): Variants => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeInUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { x: -60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { x: 60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const slideInLeft = (delay: number = 0): Variants => ({
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
});

export const slideInRight = (delay: number = 0): Variants => ({
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
});

export const slideInBottom = (delay: number = 0): Variants => ({
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
});
