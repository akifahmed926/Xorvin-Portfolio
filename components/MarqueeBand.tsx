'use client';

import React from 'react';
import Image from 'next/image';

export default function MarqueeBand() {
  const techLogos = [
    { name: 'Antigravity', src: '/logos/antigravity.png', width: 198, height: 23 },
    { name: 'Next.js', src: '/logos/nextjs.png', width: 113, height: 23 },
    { name: 'WhatsApp', src: '/logos/whatsapp.png', width: 95, height: 23 },
    { name: 'n8n', src: '/logos/n8n.png', width: 80, height: 23 },
    { name: 'OpenAI', src: '/logos/openai.png', width: 83, height: 23 },
    { name: 'Vercel', src: '/logos/vercel.png', width: 113, height: 23 },
  ];

  // Duplicate array 4x for continuous seamless right-to-left scrolling ticker
  const tickerLogos = [...techLogos, ...techLogos, ...techLogos, ...techLogos];

  return (
    <section className="relative w-full bg-background border-t border-b border-border-subtle py-10 overflow-hidden z-20">
      {/* 1. Heading Text (Two centered lines, small, muted, Inter font) */}
      <div className="flex flex-col items-center justify-center text-center space-y-1 mb-8">
        <p className="font-body text-xs sm:text-sm font-semibold tracking-widest uppercase text-text-muted">
          POWERED BY AI.
        </p>
        <p className="font-body text-xs sm:text-sm font-semibold tracking-widest uppercase text-text-muted">
          BUILT WITH THE BEST TOOLS.
        </p>
      </div>

      {/* 2. Logo Ticker — Continuous Infinite Smooth Right-to-Left Scroll with Uniform 23px Height */}
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        {/* Left & Right Edge Fade Overlay Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Ticker Track */}
        <div className="inline-flex animate-[logoScroll_28s_linear_infinite] items-center space-x-14 sm:space-x-20">
          {tickerLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="inline-flex items-center space-x-14 sm:space-x-20 cursor-default flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                priority
                className="h-[23px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 filter brightness-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe Animation for Right-to-Left Smooth Infinite Ticker */}
      <style jsx>{`
        @keyframes logoScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
