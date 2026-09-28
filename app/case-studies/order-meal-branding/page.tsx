'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';

export default function OrderMealCaseStudyPage() {
  const moreCaseStudies = [
    {
      title: 'Vortex — Restaurant Automation',
      category: 'RESTAURANT & AUTOMATION',
      image: '/card-1.jpg',
      href: '/case-studies/vortex',
    },
    {
      title: 'EduLedger — School Management System',
      category: 'EDUCATION & SCHOOL MANAGEMENT',
      image: '/card-2.jpg',
      href: '/case-studies/eduledger-school-management',
    },
    {
      title: 'Aura Jewelry — Web Design',
      category: 'JEWELRY & E-COMMERCE',
      image: '/card-3.png',
      href: '/case-studies/aura-jewelry-web-design',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-text-primary selection:bg-primary selection:text-white flex flex-col justify-between overflow-x-clip">
      <Navbar />

      {/* Hero Heading Section */}
      <section className="relative w-full bg-black pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 z-30 flex items-center justify-center">
        
        {/* Main Box Container with Light Side Border Lines */}
        <div className="max-w-6xl w-full mx-auto relative border border-white/15 bg-black p-8 sm:p-12 lg:p-16 rounded-sm shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            
            {/* Left Column: Eyebrow + Large Display Heading */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span 
                className="font-heading text-xs sm:text-sm font-extrabold tracking-[0.2em] text-white uppercase mb-3 block"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Branding
              </span>
              <h1 
                className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.15' }}
              >
                Order Meal Company
              </h1>
            </div>

            {/* Right Column: Food Icon + Static Label + Description Paragraph */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4 lg:pl-8">
              
              {/* Top Row: Food Icon + Plain Static Order Meal Label */}
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <span className="text-2xl sm:text-3xl leading-none select-none">🍽️</span>
                <span 
                  className="font-heading text-xs sm:text-sm lg:text-base font-extrabold text-[#0087ED] tracking-wide uppercase"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Order Meal
                </span>
              </div>

              {/* Description Body Paragraph */}
              <p className="font-body text-xs sm:text-sm lg:text-base text-white/90 font-normal leading-relaxed max-w-md">
                A bold and modern food brand experience designed to capture attention, showcase premium food offerings, and create an engaging digital ordering journey.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Large Mockup Image Showcase Section */}
      <section className="relative w-full bg-black pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 z-30">
        <div className="max-w-6xl w-full mx-auto">
          
          {/* Frame Container with Glow Border */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] p-2 sm:p-3 shadow-[0_0_50px_rgba(0,135,237,0.18)] overflow-hidden flex items-center justify-center">
            
            {/* Inner Mockup Image with Rounded Corners */}
            <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl z-10">
              <Image
                src="/order-meal-mockup-1.png"
                alt="Order Meal Company Showcase 1"
                width={1310}
                height={606}
                priority
                className="w-full h-auto object-cover rounded-xl sm:rounded-2xl filter drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              />
            </div>

          </div>

        </div>
      </section>

      {/* CASE DETAIL SECTION: 2-Column Side-by-Side Layout */}
      <section className="relative w-full bg-black pb-20 sm:pb-32 px-4 sm:px-6 lg:px-12 z-30">
        
        {/* Section Header Divider */}
        <div className="max-w-6xl w-full mx-auto mb-10">
          <div className="flex items-center space-x-3 text-white/40 mb-2">
            <span className="font-heading text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-heading)' }}>
              | CASE DETAIL |
            </span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          {/* Top Border Divider Line */}
          <div className="w-full flex items-center">
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-white/40 block" />
              <span className="w-[2px] h-3.5 bg-white/40 block" />
            </div>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          {/* Main Box Outer Container wrapping both columns */}
          <div className="w-full rounded-2xl border border-white/10 bg-[#030712]/90 backdrop-blur-md shadow-2xl mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-start">
              
              {/* LEFT COLUMN: Project Challenges, The Solution, Mockup Images, & The Result */}
              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col space-y-10 border-b lg:border-b-0 lg:border-r border-white/10">
                
                {/* SECTION 1: Project Challenges */}
                <div>
                  {/* Heading */}
                  <h2 
                    className="font-heading text-base sm:text-lg lg:text-xl font-normal text-white uppercase tracking-tight whitespace-nowrap mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    PROJECT CHALLENGES
                  </h2>

                  {/* Paragraph */}
                  <p className="font-body text-sm sm:text-base text-text-muted/70 opacity-70 font-normal leading-relaxed mb-6">
                    Order Meal needed a visually engaging digital experience that could feel vibrant and appetizing while maintaining a clean, modern interface focused on food discovery and conversion.
                  </p>

                  {/* Bulleted List */}
                  <ul className="space-y-3 font-body text-xs sm:text-sm text-text-muted/70 list-none pl-1 mb-8">
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Creating a bold and memorable food brand identity.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Showcasing featured meals through strong visual presentation.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Making food discovery and ordering navigation simple.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Keeping the interface modern while maintaining an appetizing visual experience.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Encouraging customers to complete online food orders.</span>
                    </li>
                  </ul>

                  {/* Image Stack: Mockup 2 & Mockup 3 */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* First Image */}
                    <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                      <Image
                        src="/order-meal-mockup-2.png"
                        alt="Order Meal Showcase 2"
                        width={800}
                        height={450}
                        className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)]"
                      />
                    </div>

                    {/* Second Image */}
                    <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                      <Image
                        src="/order-meal-mockup-3.png"
                        alt="Order Meal Showcase 3"
                        width={800}
                        height={450}
                        className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)]"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 2: The Solution */}
                <div className="pt-8 border-t border-white/10">
                  {/* Heading */}
                  <h2 
                    className="font-heading text-base sm:text-lg lg:text-xl font-normal text-white uppercase tracking-tight whitespace-nowrap mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    THE SOLUTION
                  </h2>

                  {/* Paragraph */}
                  <p className="font-body text-sm sm:text-base text-text-muted/70 opacity-70 font-normal leading-relaxed mb-6">
                    We designed a vibrant food-focused digital experience with strong product visuals, clear navigation, and a conversion-driven ordering journey. The interface combines bold visual storytelling with an intuitive structure that makes featured meals easy to discover and order.
                  </p>

                  {/* Image: Mockup 4 */}
                  <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                    <Image
                      src="/order-meal-mockup-4.png"
                      alt="Order Meal Solution Showcase 4"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)]"
                    />
                  </div>
                </div>

                {/* SECTION 3: The Result */}
                <div className="pt-8 border-t border-white/10">
                  {/* Heading */}
                  <h2 
                    className="font-heading text-base sm:text-lg lg:text-xl font-normal text-white uppercase tracking-tight whitespace-nowrap mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    THE RESULT
                  </h2>

                  {/* Paragraph */}
                  <p className="font-body text-sm sm:text-base text-text-muted/70 opacity-70 font-normal leading-relaxed mb-8">
                    The final design delivered a more engaging food experience with stronger product presentation, clearer navigation, and a smoother ordering journey.
                  </p>

                  {/* 3-Column Stat Block Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 border border-white/15 rounded-xl overflow-hidden shadow-2xl">
                    {/* Cell 1: Light bg */}
                    <div className="bg-white p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-black/10">
                      <span className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-black tracking-tight whitespace-nowrap mb-2">85%</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-black/80 leading-snug">Stronger Brand Engagement</span>
                    </div>

                    {/* Cell 2: #010513 bg */}
                    <div className="bg-[#010513] p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-white/10">
                      <span className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-white tracking-tight whitespace-nowrap mb-2">3x</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-white/80 leading-snug">Better Product Visibility</span>
                    </div>

                    {/* Cell 3: Light bg */}
                    <div className="bg-white p-4 sm:p-5 flex flex-col justify-between">
                      <span className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-black tracking-tight whitespace-nowrap mb-2">5 weeks</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-black/80 leading-snug">Design &amp; Delivery</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Project Information + Book a Demo (Sticky throughout left column scroll) */}
              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-start lg:sticky lg:top-28">
                {/* Heading */}
                <h2 
                  className="font-heading text-base sm:text-lg lg:text-xl font-normal text-white uppercase tracking-tight whitespace-nowrap mb-8"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  PROJECT INFORMATION
                </h2>

                {/* Information Rows */}
                <div className="divide-y divide-white/10 font-body text-xs sm:text-sm mb-8">
                  {/* Row 1: Date */}
                  <div className="py-4 sm:py-5 flex items-center justify-between">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium">Date:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium">2026</span>
                  </div>

                  {/* Row 2: Client */}
                  <div className="py-4 sm:py-5 flex items-center justify-between">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium">Client:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium">Order Meal Company</span>
                  </div>

                  {/* Row 3: Industry */}
                  <div className="py-4 sm:py-5 flex items-center justify-between">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium">Industry:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium">Food Delivery</span>
                  </div>

                  {/* Row 4: Services */}
                  <div className="py-4 sm:py-5 flex items-start justify-between space-x-4">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium flex-shrink-0">Services:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right leading-relaxed max-w-[340px]">
                      Branding, Web Design, UI/UX Design, E-commerce Design
                    </span>
                  </div>

                  {/* Row 5: Project Duration */}
                  <div className="py-4 sm:py-5 flex items-start justify-between space-x-4">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium flex-shrink-0">Project Duration:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right leading-relaxed max-w-[360px]">
                      5 weeks
                    </span>
                  </div>
                </div>

                {/* Book a Demo Button */}
                <div className="pt-8">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-between px-6 py-3.5 bg-white text-black font-semibold text-sm rounded-none hover:bg-white/90 transition-colors w-fit space-x-3 group"
                  >
                    <span>Book a demo</span>
                    <span className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>

      </section>

      {/* MORE CASE STUDIES SECTION */}
      <section className="relative w-full bg-black pb-20 sm:pb-32 px-4 sm:px-6 lg:px-12 z-30 border-t border-white/10 pt-16">
        <div className="max-w-6xl w-full mx-auto">
          
          {/* Section Heading */}
          <div className="relative mb-12 sm:mb-16 flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#0087ED]/40 bg-[#050C1A]/80 backdrop-blur-md text-xs font-semibold tracking-wider text-white uppercase shadow-glow-subtle mb-4">
              <span className="w-2 h-2 rounded-full bg-[#0087ED] animate-pulse mr-2.5" />
              EXPLORE MORE
            </div>
            <h2 
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.25]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              More Case Studies
            </h2>
            <Link 
              href="/case-studies"
              className="mt-4 sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 font-body text-xs sm:text-sm text-text-muted hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>View all</span>
              <ArrowUpRight className="w-4 h-4 text-[#0087ED]" />
            </Link>
          </div>

          {/* 3 Cards Horizontal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {moreCaseStudies.map((cs, idx) => (
              <Link key={idx} href={cs.href} className="group flex flex-col space-y-4">
                {/* Image Container with Zoom & Blur Hover Effect */}
                <div className="relative w-full h-60 sm:h-64 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A] shadow-xl">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:blur-[2px]"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/20 uppercase font-heading">
                      {cs.category}
                    </span>
                  </div>

                  {/* Arrow Hover Icon */}
                  <div className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#0087ED] group-hover:border-[#0087ED] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 
                  className="font-heading text-sm sm:text-base font-semibold text-white group-hover:text-[#0087ED] transition-colors leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {cs.title}
                </h3>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* LAST CTA SECTION */}
      <CtaSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
