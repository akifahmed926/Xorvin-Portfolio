'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const filterParam = new URLSearchParams(window.location.search).get('filter');
      if (filterParam && ['All', 'Automation', 'Video Editing', 'Web Design'].includes(filterParam)) {
        return filterParam;
      }
    }
    return 'All';
  });

  const [visibleCount, setVisibleCount] = React.useState(() => {
    if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('all') === 'true') {
      return 100;
    }
    return 3;
  });

  const filterCategories = ['All', 'Automation', 'Video Editing', 'Web Design'];

  const caseStudies = [
    {
      category: 'RESTAURANT & AUTOMATION',
      filterGroup: 'Automation',
      title: 'Vortex — Restaurant Automation',
      image: '/card-1.jpg',
      fit: 'object-cover',
      href: '/case-studies/vortex',
    },
    {
      category: 'EDUCATION & SCHOOL MANAGEMENT',
      filterGroup: 'Automation',
      title: 'EduLedger — School Management System',
      image: '/card-2.jpg',
      fit: 'object-cover',
      href: '/case-studies/eduledger-school-management',
    },
    {
      category: 'JEWELRY & E-COMMERCE',
      filterGroup: 'Web Design',
      title: 'Aura Jewelry — Web Design',
      image: '/card-3.png',
      fit: 'object-cover',
      href: '/case-studies/aura-jewelry-web-design',
    },
    {
      category: 'SOCIAL MEDIA MANAGEMENT',
      filterGroup: 'Automation',
      title: 'SM Manager — Social Media Management',
      image: '/card-4-sm-manager.jpg',
      fit: 'object-cover',
      href: '/case-studies/sm-manager-taha-nabeel',
    },
    {
      category: 'RESTAURANT & WEB DESIGN',
      filterGroup: 'Web Design',
      title: 'Order Meal — Restaurant Web Design',
      image: '/card-5-order-meal.png',
      fit: 'object-cover',
      href: '/case-studies/order-meal-branding',
    },
    {
      category: 'VIDEO EDITING',
      filterGroup: 'Video Editing',
      title: 'Kinetic × CETA EV',
      image: '/ev-charger-mockup-1-replaced.jpg',
      fit: 'object-cover',
      href: '/case-studies/kinetic-ceta-ev',
    },
    {
      category: 'VIDEO EDITING',
      filterGroup: 'Video Editing',
      title: 'Kinetic × ChargeX',
      image: '/kinetic-chargex-mockup-1.png',
      fit: 'object-cover',
      href: '/case-studies/kinetic-chargex',
    },
    {
      category: 'VIDEO EDITING',
      filterGroup: 'Video Editing',
      title: 'Kinetic × Maison Vérité',
      image: '/kinetic-maison-verite-mockup-2.jpg',
      fit: 'object-cover',
      href: '/case-studies/kinetic-maison-verite',
    },
  ];

  // Stagger animation variants for cards grid entrance
  const gridContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const handleFilterSelect = (cat: string) => {
    setActiveFilter(cat);
    setVisibleCount(3);
  };

  const filteredCaseStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.filterGroup === activeFilter);

  const visibleCaseStudies = filteredCaseStudies.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCaseStudies.length;

  return (
    <main className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-white flex flex-col justify-between">
      <Navbar />

      {/* Case Studies Heading Section */}
      <section className="relative w-full bg-background pt-28 sm:pt-36 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 z-30">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0087ED]/10 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/40 bg-surface/80 backdrop-blur-md text-xs font-semibold tracking-wider text-text-primary uppercase shadow-glow-subtle mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2.5" />
            FEATURED WORK
          </div>

          {/* Main Heading */}
          <h1 
            className="font-heading text-2xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight leading-[1.25] drop-shadow-[0_0_20px_rgba(40,137,255,0.25)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What We&apos;ve Built
          </h1>

          {/* Subheading Body Paragraph */}
          <p className="font-body text-xs sm:text-sm lg:text-base text-text-muted/80 max-w-xl mx-auto mt-4 font-normal leading-relaxed">
            A selection of projects where design, automation, and AI come together to solve real-world problems.
          </p>

          {/* Filter Categories Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8 sm:mt-10 z-10 relative">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterSelect(cat)}
                  className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase transition-all duration-300 font-heading cursor-pointer border ${
                    isActive
                      ? 'bg-[#0087ED] text-white border-[#0087ED] shadow-[0_0_20px_rgba(0,135,237,0.4)] scale-[1.03]'
                      : 'bg-[#030814]/80 text-white/70 border-white/10 hover:border-[#2989FF]/40 hover:text-white hover:bg-[#050C1A]'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

      </section>

      {/* 3-Column Case Study Cards Grid */}
      <section className="relative w-full pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12 z-30">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8"
              variants={gridContainerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            >
              {visibleCaseStudies.map((study, idx) => (
                <motion.a
                  key={study.href || idx}
                  variants={cardVariants}
                  href={study.href || '#'}
                  className="group relative flex flex-col rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] overflow-hidden shadow-[0_0_35px_rgba(0,135,237,0.12)] hover:border-[#2989FF]/60 hover:shadow-[0_0_45px_rgba(0,135,237,0.25)] transition-all duration-300"
                >
                  {/* Image Top Area */}
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#02050E] border-b border-[#2989FF]/20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-transparent to-transparent z-10 opacity-50" />
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={500}
                      height={300}
                      unoptimized
                      className={`w-full h-full ${study.fit} filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)] transform group-hover:scale-110 group-hover:blur-[2px] transition-all duration-500 ease-out relative z-0`}
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-1 justify-between relative z-10">
                    <div>
                      {/* Category Label */}
                      <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#0087ED] uppercase block mb-2">
                        {study.category}
                      </span>

                      {/* Title Heading */}
                      <h3 
                        className="font-heading text-sm sm:text-base font-normal text-white leading-snug group-hover:text-[#0087ED] transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {study.title}
                      </h3>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted/70 group-hover:text-white transition-colors">
                      <span className="font-body">View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-[#0087ED] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Centered Load More Button */}
          {hasMore && (
            <div className="mt-12 sm:mt-16 flex justify-center">
              <button
                onClick={() => setVisibleCount(filteredCaseStudies.length)}
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-white uppercase bg-[#030814]/80 border border-[#2989FF]/40 hover:border-[#2989FF]/80 hover:bg-[#050C1A] hover:shadow-[0_0_30px_rgba(0,135,237,0.3)] hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span>Load More</span>
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaSection />

      <Footer />
    </main>
  );
}
