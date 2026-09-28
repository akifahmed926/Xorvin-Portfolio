'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, easeInOut, AnimatePresence } from 'framer-motion';

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
      title: 'AI Mobile Applications',
    },
  ];

  // Track scroll progress through the outer container (Desktop only)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // ----------------------------------------------------
  // DESKTOP SCROLL PROGRESS TRANSFORMS:
  // ----------------------------------------------------
  const blockAOpacity = useTransform(scrollYProgress, [0.0, 0.04, 0.16, 0.20], [0, 1, 1, 0], { ease: easeInOut });
  const blockATranslateY = useTransform(scrollYProgress, [0.0, 0.08, 0.20], [220, 0, -220], { ease: easeInOut });

  const blockBOpacity = useTransform(scrollYProgress, [0.20, 0.26, 0.44, 0.50], [0, 1, 1, 0], { ease: easeInOut });
  const blockBTranslateY = useTransform(scrollYProgress, [0.20, 0.26, 0.40, 0.50], [220, 0, 0, -220], { ease: easeInOut });

  const blockCOpacity = useTransform(scrollYProgress, [0.20, 0.26, 0.44, 0.50], [0, 1, 1, 0], { ease: easeInOut });
  const blockCTranslateY = useTransform(scrollYProgress, [0.20, 0.26, 0.40, 0.50], [220, 0, 0, -220], { ease: easeInOut });

  const glowTop = useTransform(scrollYProgress, [0.20, 0.50], ['7%', '36%'], { ease: easeInOut });
  const glowLeft = useTransform(scrollYProgress, [0.20, 0.50], ['50%', '42%'], { ease: easeInOut });

  const elbowCalloutOpacity = useTransform(scrollYProgress, [0.30, 0.36, 0.44, 0.50], [0, 1, 1, 0], { ease: easeInOut });
  const elbowCalloutTranslateY = useTransform(scrollYProgress, [0.30, 0.36, 0.50], [15, 0, 0], { ease: easeInOut });

  const blockDOpacity = useTransform(scrollYProgress, [0.50, 0.56, 0.65, 0.72], [0, 1, 1, 0], { ease: easeInOut });
  const blockDTranslateY = useTransform(scrollYProgress, [0.50, 0.56, 0.72], [220, 0, -220], { ease: easeInOut });

  const precisionCalloutOpacity = useTransform(scrollYProgress, [0.66, 0.74, 0.88, 0.96], [0, 1, 1, 0], { ease: easeInOut });
  const precisionCalloutTranslateY = useTransform(scrollYProgress, [0.66, 0.74, 0.96], [15, 0, 0], { ease: easeInOut });

  const fullGlowOpacity = useTransform(scrollYProgress, [0.88, 0.96, 1.0], [0, 1, 1], { ease: easeInOut });

  const runtimeCalloutOpacity = useTransform(scrollYProgress, [0.88, 0.96, 1.0], [0, 1, 1], { ease: easeInOut });
  const runtimeCalloutTranslateY = useTransform(scrollYProgress, [0.88, 0.96, 1.0], [15, 0, 0], { ease: easeInOut });

  const blockFOpacity = useTransform(scrollYProgress, [0.66, 0.75, 1.0], [0, 1, 1], { ease: easeInOut });
  const blockFTranslateY = useTransform(scrollYProgress, [0.66, 0.75, 1.0], [220, 0, 0], { ease: easeInOut });

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
            OUR CAPABILITIES
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
      <section id="services" ref={targetRef} className="hidden md:block relative w-full h-[800vh] bg-background">
        {/* Sticky Inner Container pinned to viewport (position: sticky, top: 0, height: 100vh) */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center border-b border-border-subtle z-20">
          
          {/* Ambient Background Grid Texture */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#2889FF_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Section Top Header Pill */}
          <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/40 bg-surface/80 backdrop-blur-md text-xs font-semibold tracking-wider text-text-primary uppercase shadow-glow-subtle">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2.5" />
              OUR CAPABILITIES
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
          {/* 150PX #0087ED SVG RADIAL GRADIENT GLOW CIRCLE */}
          {/* ---------------------------------------------------- */}
          <motion.div
            style={{ 
              opacity: blockBOpacity,
              top: glowTop,
              left: glowLeft,
            }}
            className="absolute -translate-x-1/2 w-[150px] h-[150px] pointer-events-none z-5"
          >
            <svg width="150" height="150" viewBox="0 0 150 150" className="w-full h-full">
              <defs>
                <radialGradient id="iqGlowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#0087ED" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0087ED" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="75" cy="75" r="75" fill="url(#iqGlowGradient)" />
            </svg>
          </motion.div>

          {/* ---------------------------------------------------- */}
          {/* CENTER FIXED GENUINE FULL ROBOT CONTAINER */}
          {/* ---------------------------------------------------- */}
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px] h-[78vh] px-4 flex justify-center items-center pointer-events-none transform translate-y-4">
            
            {/* Full Body Soft Blue (#0087ED) Ambient Radial Glow behind Robot */}
            <motion.div
              style={{ opacity: fullGlowOpacity }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-5"
            >
              <svg width="280" height="750" viewBox="0 0 280 750" className="w-full h-full max-w-[280px] max-h-[750px] overflow-visible">
                <defs>
                  <radialGradient id="fullRobotBodyGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#0087ED" stopOpacity="1" />
                    <stop offset="45%" stopColor="#0087ED" stopOpacity="0.85" />
                    <stop offset="80%" stopColor="#0087ED" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0087ED" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx="140" cy="375" rx="140" ry="360" fill="url(#fullRobotBodyGlow)" />
              </svg>
            </motion.div>

            <Image
              src="/full-robot.png"
              alt="Xorvin Genuine Full Standing Robot"
              fill
              priority
              sizes="(max-width: 768px) 280px, 390px"
              className="object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)] z-10"
            />

            {/* BLOCK B: "150+ IQ" CALLOUT */}
            <motion.div
              style={{ opacity: blockBOpacity, y: blockBTranslateY }}
              className="absolute inset-0 pointer-events-none z-30"
            >
              <svg className="absolute top-[6%] sm:top-[7%] left-[55%] sm:left-[57%] w-[180px] sm:w-[220px] h-[120px] pointer-events-none overflow-visible z-20">
                <circle
                  cx="6"
                  cy="6"
                  r="3"
                  fill="none"
                  stroke="#0087ED"
                  strokeOpacity="1"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />
                <path
                  d="M 9 6 L 45 6 L 85 45"
                  fill="none"
                  stroke="#0087ED"
                  strokeOpacity="0.85"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </svg>
              <div className="absolute top-[12%] sm:top-[13%] left-[calc(55%+85px)] sm:left-[calc(57%+85px)] pointer-events-auto z-30">
                <div className="px-3.5 py-1.5 rounded-md bg-[#050C1A]/95 border border-primary flex items-center justify-center">
                  <span 
                    className="font-heading text-xs sm:text-sm font-bold text-white tracking-wider whitespace-nowrap select-none"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    150+ IQ
                  </span>
                </div>
              </div>
            </motion.div>

            {/* BLOCK: "96% Human Motion" CALLOUT */}
            <motion.div
              style={{ opacity: elbowCalloutOpacity, y: elbowCalloutTranslateY }}
              className="absolute inset-0 pointer-events-none z-30"
            >
              <svg className="absolute top-[32%] sm:top-[33%] right-[55%] sm:right-[57%] w-[200px] sm:w-[240px] h-[120px] pointer-events-none overflow-visible z-20">
                <circle
                  cx="190"
                  cy="10"
                  r="3"
                  fill="none"
                  stroke="#0087ED"
                  strokeOpacity="1"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />
                <path
                  d="M 187 10 L 140 10 L 100 45"
                  fill="none"
                  stroke="#0087ED"
                  strokeOpacity="0.85"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </svg>
              <div className="absolute top-[36%] sm:top-[37%] right-[calc(55%+100px)] sm:right-[calc(57%+100px)] pointer-events-auto z-30">
                <div className="px-4 py-2 rounded-md bg-[#050C1A]/95 border border-primary flex flex-col items-end text-right">
                  <span 
                    className="font-heading text-sm sm:text-base font-bold text-white tracking-wider select-none leading-tight mb-0.5"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    96 %
                  </span>
                  <span 
                    className="font-heading text-xs sm:text-sm font-medium text-white tracking-wider whitespace-nowrap select-none leading-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Human Motion
                  </span>
                </div>
              </div>
            </motion.div>

            {/* BLOCK E: "0.1mm Precision" CALLOUT */}
            <motion.div
              style={{ opacity: precisionCalloutOpacity, y: precisionCalloutTranslateY }}
              className="absolute inset-0 pointer-events-none z-30"
            >
              <svg className="absolute top-[45%] sm:top-[46%] left-[55%] sm:left-[57%] w-[180px] sm:w-[220px] h-[160px] pointer-events-none overflow-visible z-20">
                <circle
                  cx="6"
                  cy="110"
                  r="3"
                  fill="none"
                  stroke="#0087ED"
                  strokeOpacity="1"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />
                <path
                  d="M 9 110 L 45 110 L 85 20"
                  fill="none"
                  stroke="#0087ED"
                  strokeOpacity="0.85"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </svg>
              <div className="absolute top-[45%] sm:top-[46%] left-[calc(55%+85px)] sm:left-[calc(57%+85px)] pointer-events-auto z-30">
                <div className="px-4 py-2 rounded-md bg-[#050C1A]/95 border border-primary flex flex-col items-center justify-center text-center">
                  <span 
                    className="font-heading text-sm sm:text-base font-bold text-white tracking-wider select-none leading-tight mb-0.5"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    0.1mm
                  </span>
                  <span 
                    className="font-heading text-xs sm:text-sm font-medium text-white tracking-wider whitespace-nowrap select-none leading-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Precision
                  </span>
                </div>
              </div>
            </motion.div>

            {/* BLOCK: "24h Runtime" CALLOUT */}
            <motion.div
              style={{ opacity: runtimeCalloutOpacity, y: runtimeCalloutTranslateY }}
              className="absolute inset-0 pointer-events-none z-30"
            >
              <svg className="absolute top-[46%] sm:top-[47%] right-[55%] sm:right-[57%] w-[200px] sm:w-[240px] h-[120px] pointer-events-none overflow-visible z-20">
                <circle
                  cx="190"
                  cy="10"
                  r="3"
                  fill="none"
                  stroke="#0087ED"
                  strokeOpacity="1"
                  strokeWidth="1.2"
                  strokeDasharray="2 2"
                />
                <path
                  d="M 187 10 L 140 10 L 100 45"
                  fill="none"
                  stroke="#0087ED"
                  strokeOpacity="0.85"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </svg>
              <div className="absolute top-[50%] sm:top-[51%] right-[calc(55%+100px)] sm:right-[calc(57%+100px)] pointer-events-auto z-30">
                <div className="px-4 py-2 rounded-md bg-[#050C1A]/95 border border-primary flex flex-col items-end text-right">
                  <span 
                    className="font-heading text-sm sm:text-base font-bold text-white tracking-wider select-none leading-tight mb-0.5"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    24h
                  </span>
                  <span 
                    className="font-heading text-xs sm:text-sm font-medium text-white tracking-wider whitespace-nowrap select-none leading-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Runtime
                  </span>
                </div>
              </div>
            </motion.div>

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
            <div className="relative pointer-events-auto max-w-[290px] sm:max-w-[330px] lg:max-w-[360px] flex flex-col items-end text-right">
              <div className="text-[#0087ED] font-body text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-1.5">
                24h of battery life
              </div>
              <h2 
                className="font-heading text-xl sm:text-2xl lg:text-[30px] font-normal text-text-primary mb-3 leading-[1.2] tracking-tight drop-shadow-[0_0_12px_rgba(40,137,255,0.25)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                AI Mobile Applications
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
