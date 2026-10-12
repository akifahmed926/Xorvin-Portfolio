'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, easeInOut, AnimatePresence } from 'framer-motion';
import BadgeTextReveal from './BadgeTextReveal';

export default function FeatureShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [mobileSlide, setMobileSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const capabilities = [
    {
      stat: '150+ IQ',
      eyebrow: 'Thinks like a high-IQ specialist.',
      title: 'AI Automation & MCPs',
      description: 'XORVIN builds intelligent automation systems, AI agents, and MCPs that connect your tools, workflows, and business operations into one smarter system.',
    },
    {
      stat: 'Not a Threat',
      eyebrow: 'High-Performance & Creative',
      title: 'Web Development & Video Editing',
      description: 'High-performance websites and AI-powered web applications designed to feel seamless, intelligent, and built around the way your business actually works.',
    },
    {
      stat: '96% Human Motion',
      eyebrow: '96% of human movement capability',
      title: 'AI Chatbots & Agents',
      description: 'AI chatbots and conversational agents that understand customers, answer questions, qualify leads, handle requests, and work around the clock.',
    },
    {
      stat: '24h Runtime',
      eyebrow: '24h of battery life',
      description: 'Powerful AI-driven mobile applications built for iOS and Android, combining intelligent features, seamless experiences, and smart backend automation.',
      title: 'AI Mobile Applications & Calling Agents',
    },
  ];

  // Track scroll progress through the outer container (Desktop only)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.0001,
  });

  // ----------------------------------------------------
  // DESKTOP SCROLL PROGRESS TRANSFORMS (Smooth & Extended Hold Pacing):
  // ----------------------------------------------------
  const blockAOpacity = useTransform(smoothProgress, [0.03, 0.08, 0.20, 0.25], [0, 1, 1, 0], { ease: easeInOut });
  const blockATranslateY = useTransform(smoothProgress, [0.03, 0.08, 0.20, 0.25], [60, 0, 0, -60], { ease: easeInOut });

  const blockCOpacity = useTransform(smoothProgress, [0.26, 0.32, 0.46, 0.51], [0, 1, 1, 0], { ease: easeInOut });
  const blockCTranslateY = useTransform(smoothProgress, [0.26, 0.32, 0.46, 0.51], [60, 0, 0, -60], { ease: easeInOut });

  const blockDOpacity = useTransform(smoothProgress, [0.52, 0.58, 0.72, 0.77], [0, 1, 1, 0], { ease: easeInOut });
  const blockDTranslateY = useTransform(smoothProgress, [0.52, 0.58, 0.72, 0.77], [60, 0, 0, -60], { ease: easeInOut });

  const blockFOpacity = useTransform(smoothProgress, [0.78, 0.84, 0.96, 1.0], [0, 1, 1, 0], { ease: easeInOut });
  const blockFTranslateY = useTransform(smoothProgress, [0.78, 0.84, 0.96, 1.0], [60, 0, 0, -60], { ease: easeInOut });

  // Touch Swipe Handlers for Mobile Viewport
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 40) {
      // Swiped Left -> Next
      setMobileSlide((prev) => (prev < capabilities.length - 1 ? prev + 1 : 0));
    } else if (diff < -40) {
      // Swiped Right -> Prev
      setMobileSlide((prev) => (prev > 0 ? prev - 1 : capabilities.length - 1));
    }
    setTouchStartX(null);
  };

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -30) {
      setMobileSlide((prev) => (prev < capabilities.length - 1 ? prev + 1 : 0));
    } else if (info.offset.x > 30) {
      setMobileSlide((prev) => (prev > 0 ? prev - 1 : capabilities.length - 1));
    }
  };

  return (
    <>
      {/* ============================================================ */}
      {/* MOBILE VIEWPORT (< 768px): Static Robot + Swipeable Carousel */}
      {/* ============================================================ */}
      <section id="services-mobile" className="block md:hidden relative w-full bg-background pt-14 pb-16 px-6 z-30 overflow-hidden border-b border-border-subtle">
        
        {/* Background Ambient Grid & Glow */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#2889FF_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#0087ED]/15 blur-[100px] rounded-full pointer-events-none z-0" />

        {/* Section Header Pill */}
        <div className="relative z-10 text-center mb-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/40 bg-surface/80 backdrop-blur-md text-xs font-semibold tracking-wider text-text-primary uppercase shadow-glow-subtle">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2.5" />
            <BadgeTextReveal text="OUR CAPABILITIES" />
          </div>
        </div>

        {/* Static Robot Image Container with Dark Gradient Fade at Bottom */}
        <div className="relative z-10 w-full max-w-[260px] sm:max-w-[300px] h-[320px] sm:h-[360px] mx-auto flex justify-center items-center pointer-events-none">
          <Image
            src="/full-robot.png"
            alt="Xorvin Genuine Full Standing Robot"
            fill
            priority
            sizes="(max-width: 768px) 260px, 300px"
            className="object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.95)] z-0"
          />
          {/* Dark Gradient Overlay directly over Robot's Lower Legs */}
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#010513] via-[#010513]/90 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Swipeable Feature Content Area (Overlapping Robot Legs, Left-Aligned, Direct Overlay) */}
        <div 
          className="relative z-30 max-w-sm mx-auto -mt-16 sm:-mt-20 px-2 touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileSlide}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full text-left cursor-grab active:cursor-grabbing"
            >
              {/* Eyebrow Label */}
              <div className="text-[#0087ED] font-body text-xs font-semibold tracking-wider uppercase mb-1.5 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0087ED] flex-shrink-0 shadow-[0_0_6px_#0087ED]" />
                <span>{capabilities[mobileSlide].eyebrow}</span>
              </div>

              {/* Heading */}
              <h3 
                className="font-heading text-xl sm:text-2xl font-normal text-white mb-2.5 leading-snug tracking-tight drop-shadow-[0_0_12px_rgba(40,137,255,0.25)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {capabilities[mobileSlide].title}
              </h3>

              {/* Description Body Paragraph */}
              <p className="font-body text-xs sm:text-sm text-text-muted/90 leading-relaxed font-normal max-w-sm">
                {capabilities[mobileSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dot Indicators */}
          <div className="flex items-center justify-start space-x-2.5 mt-6 relative z-20">
            {capabilities.map((_, idx) => {
              const isActive = mobileSlide === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setMobileSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-7 bg-[#0087ED] shadow-[0_0_10px_rgba(0,135,237,0.8)]'
                      : 'w-2.5 bg-white/20 border border-white/20 hover:bg-white/40'
                  }`}
                />
              );
            })}
          </div>
        </div>

      </section>

      {/* ============================================================ */}
      {/* DESKTOP VIEWPORT (>= 768px): Scroll-pinned Animated Circle */}
      {/* ============================================================ */}
      <section id="services" ref={targetRef} className="hidden md:block relative w-full h-[1300vh] bg-background">
        {/* Sticky Inner Container pinned to viewport (position: sticky, top: 0, height: 100vh) */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center border-b border-border-subtle z-20">
          
          {/* Ambient Background Grid Texture */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#2889FF_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Section Top Header Pill */}
          <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/40 bg-surface/80 backdrop-blur-md text-xs font-semibold tracking-wider text-text-primary uppercase shadow-glow-subtle">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2.5" />
              <BadgeTextReveal text="OUR CAPABILITIES" />
            </div>
          </div>

          {/* Left Side Vertical HUD Graphic Deco */}
          <div className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none flex-col items-center space-y-6 text-text-muted/60 opacity-60">
            <div className="flex flex-col items-center -space-y-1">
              <div className="w-2.5 h-2.5 rounded-full border border-text-muted/80" />
              <div className="w-2.5 h-2.5 rounded-full border border-text-muted/80 bg-text-muted/20" />
            </div>
            <div className="flex flex-col items-center space-y-6 font-mono text-[10px] tracking-[0.25em] uppercase text-text-muted select-none">
              <span className="[writing-mode:vertical-rl] rotate-180">( CODE - CREATE )</span>
              <span className="[writing-mode:vertical-rl] rotate-180">( BUILD )</span>
            </div>
          </div>

          {/* Right Side Vertical HUD Date-Time Deco */}
          <div className="hidden lg:flex absolute right-4 xl:left-[96%] top-1/2 -translate-y-1/2 z-20 pointer-events-none flex-col items-center space-y-4 text-text-muted/60 opacity-60">
            <div className="flex flex-col items-center space-y-3 font-mono text-[10px] tracking-[0.25em] uppercase text-text-muted select-none">
              <span className="text-xs font-bold text-text-muted/80">(</span>
              <span className="[writing-mode:vertical-rl]">9 / 3 / 2 0 2 6</span>
              <span className="[writing-mode:vertical-rl]">0 2 : 2 9 : 4 6</span>
              <span className="text-xs font-bold text-text-muted/80">)</span>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* CENTER FIXED GENUINE FULL ROBOT CONTAINER */}
          {/* ---------------------------------------------------- */}
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px] h-[78vh] px-4 flex justify-center items-center pointer-events-none transform translate-y-4">
            <Image
              src="/full-robot.png"
              alt="Xorvin Genuine Full Standing Robot"
              fill
              priority
              sizes="(max-width: 768px) 280px, 390px"
              className="object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)] z-10"
            />
          </div>

          {/* BLOCK A: LEFT SIDE TEXT BLOCK */}
          <motion.div
            style={{ opacity: blockAOpacity, y: blockATranslateY }}
            className="absolute inset-0 pointer-events-none z-30 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-start"
          >
            <div className="relative pointer-events-auto max-w-[280px] sm:max-w-[330px] lg:max-w-[360px]">
              <div className="flex items-center space-x-2 text-primary font-body text-[11px] sm:text-xs font-semibold tracking-wide mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_6px_#0275FA]" />
                <span>Thinks like a high-IQ specialist.</span>
              </div>
              <h2 
                className="font-heading text-xl sm:text-2xl lg:text-[30px] font-normal text-text-primary mb-3 leading-[1.25] tracking-tight drop-shadow-[0_0_12px_rgba(40,137,255,0.25)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                AI Automation &amp; MCPs
              </h2>
              <p className="font-body text-[11px] sm:text-xs lg:text-sm text-text-muted leading-relaxed font-normal">
                XORVIN builds intelligent automation systems, AI agents, and MCPs that connect your tools, workflows, and business operations into one smarter system.
              </p>
            </div>
          </motion.div>

          {/* BLOCK C: RIGHT SIDE TEXT BLOCK */}
          <motion.div
            style={{ opacity: blockCOpacity, y: blockCTranslateY }}
            className="absolute inset-0 pointer-events-none z-30 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-end"
          >
            <div className="relative pointer-events-auto max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] flex flex-col items-end text-right">
              <div className="text-[#0087ED] font-body text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-2">
                Not a Threat
              </div>
              <h2 
                className="font-heading text-lg sm:text-xl lg:text-[26px] font-normal text-text-primary mb-3 leading-[1.2] tracking-tight drop-shadow-[0_0_12px_rgba(40,137,255,0.25)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Web Development &amp; Video Editing
              </h2>
              <p className="font-body text-[11px] sm:text-xs lg:text-sm text-text-muted leading-relaxed font-normal">
                High-performance websites and AI-powered web applications designed to feel seamless, intelligent, and built around the way your business actually works.
              </p>
            </div>
          </motion.div>

          {/* BLOCK D: LEFT SIDE TEXT BLOCK */}
          <motion.div
            style={{ opacity: blockDOpacity, y: blockDTranslateY }}
            className="absolute inset-0 pointer-events-none z-30 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-start"
          >
            <div className="relative pointer-events-auto max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] flex flex-col items-start text-left">
              <div className="text-[#0087ED] font-body text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-2">
                96% of human movement capability
              </div>
              <h2 
                className="font-heading text-xl sm:text-2xl lg:text-[30px] font-normal text-text-primary mb-3 leading-[1.25] tracking-tight drop-shadow-[0_0_12px_rgba(40,137,255,0.25)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                AI Chatbots &amp; Agents
              </h2>
              <p className="font-body text-[11px] sm:text-xs lg:text-sm text-text-muted leading-relaxed font-normal">
                AI chatbots and conversational agents that understand customers, answer questions, qualify leads, handle requests, and work around the clock.
              </p>
            </div>
          </motion.div>

          {/* BLOCK F: RIGHT SIDE TEXT BLOCK */}
          <motion.div
            style={{ opacity: blockFOpacity, y: blockFTranslateY }}
            className="absolute top-[45%] sm:top-[46%] right-6 sm:right-10 lg:right-16 xl:right-24 pointer-events-none z-30 flex justify-end"
          >
            <div className="relative pointer-events-auto max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] flex flex-col items-end text-right">
              <div className="text-[#0087ED] font-body text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-1.5">
                24h of battery life
              </div>
              <h2 
                className="font-heading text-xl sm:text-2xl lg:text-[28px] font-normal text-text-primary mb-3 leading-[1.2] tracking-tight drop-shadow-[0_0_12px_rgba(40,137,255,0.25)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                AI Mobile Applications &amp; Calling Agents
              </h2>
              <p className="font-body text-[11px] sm:text-xs lg:text-sm text-text-muted leading-relaxed font-normal">
                Powerful AI-driven mobile applications built for iOS and Android, combining intelligent features, seamless experiences, and smart backend automation.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
