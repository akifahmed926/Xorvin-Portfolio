'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative w-full bg-background py-10 lg:py-16 px-4 sm:px-6 z-30">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-[#0087ED]/15 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Main Centered Compact CTA Card */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto relative z-10 rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] p-6 sm:p-10 lg:p-12 shadow-[0_0_45px_rgba(0,135,237,0.22)] overflow-hidden text-center flex flex-col items-center">
        
        {/* Subtle Ambient Grid Texture Inside Card */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(#2889FF_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Eyebrow Pill Badge */}
        <div className="relative z-10 inline-flex items-center px-3.5 py-1 rounded-full border border-primary/40 bg-surface/80 backdrop-blur-md text-[11px] font-semibold tracking-wider text-text-primary uppercase shadow-glow-subtle mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mr-2" />
          LET&apos;S TALK
        </div>

        {/* Main Heading */}
        <h2 
          className="relative z-10 font-heading text-xl sm:text-3xl lg:text-[36px] font-normal text-white tracking-tight leading-[1.25] mb-4 drop-shadow-[0_0_20px_rgba(40,137,255,0.3)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Bring Your Project To<br />Xorvin
        </h2>

        {/* Body Paragraph */}
        <p className="relative z-10 font-body text-xs sm:text-sm lg:text-base text-text-muted/70 max-w-xl mx-auto mb-7 font-normal leading-relaxed">
          Tell us what you&apos;re building — we&apos;ll show you exactly how automation and AI systems can save you time and cut costs.
        </p>

        {/* Primary CTA Button */}
        <div className="relative z-10">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-white bg-gradient-primary border border-primary/60 shadow-glow-electric hover:bg-none hover:bg-surface-secondary hover:border-primary/50 hover:shadow-glow-subtle hover:scale-[1.02] transition-all duration-300 ease-in-out gap-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
