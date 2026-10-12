'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface BadgeTextRevealProps {
  text?: string;
  children?: string;
  className?: string;
}

export default function BadgeTextReveal({ text, children, className = '' }: BadgeTextRevealProps) {
  const content = (text || (typeof children === 'string' ? children : '')).trim();
  if (!content) return null;
  const words = content.split(/\s+/);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`inline-flex items-center ${className}`}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
          {word.split('').map((char, charIdx) => (
            <motion.span
              key={charIdx}
              variants={charVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
