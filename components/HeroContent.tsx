'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, RotateCw } from 'lucide-react';

export default function HeroContent() {
  const marqueeText = "XORVIN × AI — XORVIN, an AI automation agency, partners with AI to shape next-generation systems for intelligent, human-aligned automation.";
  
  const line1Words = "Digital Systems".split(' ');
  const line2Words = "Built To Save Money".split(' ');
  let charCounter = 0;

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-background pt-24 sm:pt-28 lg:pt-32 pb-10 md:pb-14 lg:pb-16 border-b border-border-subtle flex flex-col justify-start">
      {/* Background Image Layer (Position relative container with absolute image using object-fit: cover, opacity strictly 0.1 / 10%) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/background.jpg"
            alt="Xorvin Grid Background"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Left Side Text Element */}
      <div 
        className="hidden lg:flex absolute left-0 top-32 lg:top-36 z-10 pointer-events-none flex-col items-center space-y-6 text-text-muted animate-[slideInLeft_0.5s_ease-out_1s_forwards]"
        style={{ opacity: 0 }}
      >
        {/* Top Circles Graphic */}
        <div className="flex flex-col items-center -space-y-1">
          <div className="w-3 h-3 rounded-full border border-text-muted/80" />
          <div className="w-3 h-3 rounded-full border border-text-muted/80 bg-text-muted/20" />
        </div>

        {/* Vertical Text Lines with Brackets */}
        <div className="flex flex-col items-center space-y-6 font-mono text-[11px] tracking-[0.25em] uppercase text-text-muted select-none">
          <span className="[writing-mode:vertical-rl] rotate-180">( CODE - CREATE )</span>
          <span className="[writing-mode:vertical-rl] rotate-180">( BUILD )</span>
        </div>
      </div>

      {/* Right Side Text Element */}
      <div 
        className="hidden lg:flex absolute right-0 top-32 lg:top-36 z-10 pointer-events-none flex-col items-center space-y-4 text-text-muted animate-[slideInLeft_0.5s_ease-out_1s_forwards]"
        style={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center space-y-3 font-mono text-[11px] tracking-[0.25em] uppercase text-text-muted select-none">
          <span className="text-sm font-bold text-text-muted/80">(</span>
          <span className="[writing-mode:vertical-rl]">9 / 1 / 2 0 2 6</span>
          <span className="[writing-mode:vertical-rl]">0 6 : 3 4 : 1 6</span>
          <span className="text-sm font-bold text-text-muted/80">)</span>
        </div>
      </div>

      {/* Main Container Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-2 lg:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* Left Text Column (Eyebrow badge aligned vertically with left side stacked circles) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 pl-4 sm:pl-8 lg:pl-14 pt-1 sm:pt-2 lg:pt-3">
            
            {/* Eyebrow Badge (Positioned clearly below fixed navbar with ample clearance) */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/40 bg-surface/60 backdrop-blur-md text-xs font-semibold tracking-wider text-text-primary uppercase shadow-glow-subtle">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2.5" />
              WEB, APPS &amp; AI AUTOMATION AGENCY
            </div>

            {/* Main Heading */}
            <h1 
              className="font-heading text-3xl sm:text-4xl lg:text-[52px] xl:text-[56px] font-normal tracking-tight text-text-primary drop-shadow-[0_0_15px_rgba(40,137,255,0.3)] max-w-[620px]"
              style={{ lineHeight: '1.2em', fontFamily: 'var(--font-heading)' }}
            >
              {/* Line 1: "Digital Systems" ONLY */}
              <span className="block font-heading" style={{ fontFamily: 'var(--font-heading)' }}>
                {line1Words.map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em] font-heading" style={{ fontFamily: 'var(--font-heading)' }}>
                    {word.split('').map((char, charIndex) => {
                      const index = charCounter++;
                      return (
                        <span
                          key={charIndex}
                          className="inline-block font-heading animate-[charReveal_0.5s_cubic-bezier(0.2,0.65,0.3,0.9)_forwards]"
                          style={{
                            fontFamily: 'var(--font-heading)',
                            animationDelay: `${index * 25}ms`,
                            opacity: 0,
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                ))}
              </span>

              {/* Line 2: "Built To Save Money" */}
              <span className="block font-heading" style={{ fontFamily: 'var(--font-heading)' }}>
                {line2Words.map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em] font-heading" style={{ fontFamily: 'var(--font-heading)' }}>
                    {word.split('').map((char, charIndex) => {
                      const index = charCounter++;
                      return (
                        <span
                          key={charIndex}
                          className="inline-block font-heading animate-[charReveal_0.5s_cubic-bezier(0.2,0.65,0.3,0.9)_forwards]"
                          style={{
                            fontFamily: 'var(--font-heading)',
                            animationDelay: `${index * 25}ms`,
                            opacity: 0,
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                ))}
              </span>
            </h1>

            {/* Stat Block */}
            <div className="flex flex-col items-start space-y-2 pt-1 pb-1">
              <div className="font-heading text-5xl sm:text-6xl font-bold text-text-primary tracking-tight flex items-baseline">
                <span>40</span>
                <span className="font-body text-4xl sm:text-5xl font-normal ml-0.5 text-text-primary">%</span>
              </div>
              <div className="flex flex-col space-y-1 opacity-75">
                <span className="font-body text-[26px] font-medium text-text-primary leading-tight tracking-tight">
                  Cost reduction
                </span>
                <p className="font-body text-sm text-text-muted max-w-md">
                  Automating repetitive tasks significantly lowers operational expenses.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/case-studies"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-base font-semibold text-white bg-gradient-primary border border-primary/60 shadow-glow-electric hover:bg-none hover:bg-surface-secondary hover:border-primary/50 hover:shadow-glow-subtle hover:scale-[1.03] transition-all duration-300 ease-in-out"
              >
                <span>View Case Studies</span>
                <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-2xl text-base font-semibold text-white bg-surface-secondary border border-primary/40 shadow-glow-subtle hover:bg-gradient-primary hover:border-primary/60 hover:shadow-glow-electric hover:scale-[1.03] transition-all duration-300 ease-in-out"
              >
                <span>Let&apos;s Build Yours</span>
              </Link>
            </div>

          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center mt-4 lg:mt-2">
            
            {/* Open Top-Right L-Bracket */}
            <div 
              className="relative mb-1 w-52 lg:w-60 h-20 lg:h-24 pointer-events-none bg-transparent animate-[slideInLeftFull_0.5s_ease-out_1s_forwards]"
              style={{
                borderTop: '2px solid rgba(142, 153, 168, 0.5)',
                borderRight: '2px solid rgba(142, 153, 168, 0.5)',
                borderLeft: 'none',
                borderBottom: 'none',
                opacity: 0,
              }}
            >
              <div 
                className="absolute -top-3.5 -right-3.5 w-8 h-8 rounded-full bg-[#05070D] flex items-center justify-center shadow-md"
                style={{ border: '1px solid rgba(142, 153, 168, 0.5)' }}
              >
                <RotateCw className="w-3.5 h-3.5 text-white animate-[spin_10s_linear_infinite]" />
              </div>
            </div>

            {/* Robot Visual Container */}
            <div className="relative flex justify-center items-center w-full transform translate-y-1 lg:translate-y-2">
              <div 
                className="absolute w-[400px] h-[450px] top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 mix-blend-screen opacity-70"
                style={{
                  background: 'radial-gradient(ellipse at center, #0275FA 0%, rgba(2, 117, 250, 0) 70%)',
                }}
              />

              <div className="relative z-10 w-full max-w-[440px] lg:max-w-none">
                <Image
                  src="/robot.png"
                  alt="Xorvin Autonomous AI Robot Visual"
                  width={650}
                  height={780}
                  priority
                  className="w-full h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] transform hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Marquee Box */}
            <div className="relative w-full max-w-[400px] lg:max-w-[440px] -mt-36 sm:-mt-40 lg:-mt-48 z-30 transform lg:-translate-x-6">
              <div className="relative w-full py-3.5 px-5 bg-[#000000] rounded-xl overflow-hidden shadow-glow-subtle">
                <div className="overflow-hidden whitespace-nowrap flex items-center">
                  <div className="inline-flex animate-marquee space-x-6 items-center font-mono text-xs text-text-primary tracking-wider uppercase">
                    <span className="inline-flex items-center space-x-6">
                      <span>{marqueeText}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </span>
                    <span className="inline-flex items-center space-x-6">
                      <span>{marqueeText}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow-electric animate-[scanLine_3s_linear_infinite]" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 0.65;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeftFull {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes charReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scanLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
}
