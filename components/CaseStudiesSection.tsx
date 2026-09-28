'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const caseStudies = [
    { name: 'Vortex — Restaurant Automation', year: '2025', href: '/case-studies/vortex' },
    { name: 'EduLedger — School Management System', year: '2025', href: '/case-studies/eduledger-school-management' },
    { name: 'Aura Jewelry — Web Design', year: '2025', href: '/case-studies/aura-jewelry-web-design' },
    { name: 'SM Manager — Social Media Management', year: '2024', href: '/case-studies/sm-manager-taha-nabeel' },
    { name: 'Order Meal — Restaurant Web Design', year: '2024', href: '/case-studies/order-meal-branding' },
    { name: 'Kinetic × CETA EV', year: '2025', href: '/case-studies/kinetic-ceta-ev' },
  ];

  return (
    <section id="portfolio" className="relative w-full bg-background border-t border-border-subtle/40 py-12 lg:py-20 px-4 sm:px-6 lg:px-12 z-30">
      <div className="max-w-7xl mx-auto border border-white/[0.08] bg-[#030712]/80 rounded-xl overflow-hidden backdrop-blur-md shadow-2xl">
        
        {/* Header Row across the section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] border-b border-white/[0.08]">
          
          {/* Header Left (68% width on desktop) */}
          <div className="lg:col-span-8 flex items-center justify-between px-6 sm:px-8 py-5">
            <span className="font-heading text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-text-muted/80 uppercase">
              MORE CASE STUDIES
            </span>
            <span className="font-heading text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-text-muted/80 uppercase pr-8 sm:pr-14">
              YEAR
            </span>
          </div>

          {/* Header Right (32% width on desktop) */}
          <div className="lg:col-span-4 flex items-center justify-between px-6 sm:px-8 py-3.5 bg-[#050C1A]/40">
            <span className="font-mono text-xs text-text-muted/70 tracking-wider">
              SINCE (2013 · 2026)
            </span>
            <div className="relative h-9 sm:h-11 w-36 sm:w-44 flex items-center justify-end">
              <Image
                src="/logo.png"
                alt="Xorvin Logo"
                width={200}
                height={50}
                className="h-full w-auto object-contain filter drop-shadow-[0_0_12px_rgba(40,137,255,0.4)]"
              />
            </div>
          </div>

        </div>

        {/* Main Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          
          {/* LEFT COLUMN: Case Study List + Button */}
          <div className="lg:col-span-8 flex flex-col justify-between p-6 sm:p-8 space-y-6">
            
            {/* Case Studies List */}
            <div 
              className="divide-y divide-white/[0.06]"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {caseStudies.map((item, idx) => {
                const isHovered = hoveredIndex === idx;

                return (
                  <Link
                    key={idx}
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    className="relative group flex items-center justify-between py-4 sm:py-5 px-3 sm:px-4 -mx-2 sm:-mx-4 rounded-lg transition-all duration-200"
                  >
                    {/* Smooth Sliding Solid Black Background Fill */}
                    {isHovered && (
                      <motion.div
                        layoutId="caseStudyHoverHighlight"
                        className="absolute inset-0 bg-black rounded-lg z-0"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}

                    {/* Case Study Title */}
                    <h3 
                      className={`relative z-10 font-heading text-sm sm:text-base lg:text-lg tracking-tight transition-all duration-200 pr-4 ${
                        isHovered ? 'text-[#0087ED] font-bold' : 'text-text-primary/90 font-normal'
                      }`}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.name}
                    </h3>

                    {/* Right Side: Year + Arrow Icon */}
                    <div className="relative z-10 flex items-center space-x-6 sm:space-x-12 flex-shrink-0">
                      <span className={`font-mono text-xs sm:text-sm transition-colors duration-200 ${
                        isHovered ? 'text-[#0087ED] font-semibold' : 'text-text-muted/60'
                      }`}>
                        {item.year}
                      </span>
                      <ArrowUpRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 ${
                        isHovered ? 'text-[#0087ED] translate-x-1 -translate-y-1' : 'text-text-muted/60'
                      }`} />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Button matching Navbar Contact Us Primary Button */}
            <div className="pt-2">
              <Link
                href="/case-studies"
                className="w-full py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-[0.2em] text-white bg-gradient-primary border border-primary/60 shadow-glow-electric hover:bg-none hover:bg-surface-secondary hover:border-primary/50 hover:shadow-glow-subtle hover:scale-[1.01] transition-all duration-300 ease-in-out flex items-center justify-center text-center font-heading"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span>VIEW ALL CASE STUDIES</span>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: Envelope Graphic Visual (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-end p-6 sm:p-8 relative min-h-[320px] lg:min-h-[420px] bg-gradient-to-b from-transparent via-[#020713]/30 to-[#050C1A]/80 overflow-hidden">
            
            <div className="relative w-full max-w-[270px] sm:max-w-[290px] mx-auto flex justify-center items-end">
              <Image
                src="/envelope.png"
                alt="Envelope graphic with chip card and Xorvin logo"
                width={400}
                height={340}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] transition-all duration-300"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
