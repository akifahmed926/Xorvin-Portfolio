'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';

export default function SMManagerTahaNabeelPage() {
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
            
            {/* Left Column: Eyebrow + Main Display Heading */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span 
                className="font-heading text-xs sm:text-sm font-extrabold tracking-[0.2em] text-white uppercase mb-3 block"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Social Media Management
              </span>
              <h1 
                className="font-heading text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}
              >
                Building Authority Through Content
              </h1>
            </div>

            {/* Right Column: Chat/Social Icon + Label + Description Paragraph */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4 lg:pl-8">
              
              {/* Top Row: Icon + Plain Static SM Manager Label */}
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <span className="text-2xl sm:text-3xl leading-none select-none">💬</span>
                <span 
                  className="font-heading text-xs sm:text-sm lg:text-base font-extrabold text-[#0087ED] tracking-wide uppercase"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  SM Manager
                </span>
              </div>

              {/* Description Body Paragraph */}
              <p className="font-body text-xs sm:text-sm lg:text-base text-white/90 font-normal leading-relaxed max-w-md">
                A complete social media management service built to position Taha Nabeel as a trusted authority in reverse engineering and mentorship, turning his expertise into consistent, engaging content.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Main Case Media: Large Mockup Image Section */}
      <section className="relative w-full bg-black pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 z-30">
        <div className="max-w-6xl w-full mx-auto">
          
          {/* Frame Container with Glow Border */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] p-2 sm:p-3 shadow-[0_0_50px_rgba(0,135,237,0.18)] overflow-hidden flex items-center justify-center">
            
            {/* Inner Mockup Container */}
            <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl z-10 bg-[#02050E] flex items-center justify-center">
              <Image
                src="/sm-manager-mockup-1.jpg"
                alt="SM Manager Mockup 1"
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
                    Taha Nabeel had strong technical expertise but lacked a consistent social media presence to showcase it, making it hard to attract mentees and build authority in a niche, technical field.
                  </p>

                  {/* Bulleted List */}
                  <ul className="space-y-3 font-body text-xs sm:text-sm text-text-muted/70 list-none pl-1 mb-8">
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Inconsistent posting with no clear content direction.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Difficulty translating technical expertise into engaging, easy-to-understand content.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Low visibility in a niche, competitive space.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>No clear path turning followers into mentorship inquiries.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Limited brand identity across his social handle.</span>
                    </li>
                  </ul>

                  {/* Image Stack: Mockup 2 & Mockup 3 */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* First Image */}
                    <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                      <Image
                        src="/sm-manager-mockup-2.jpg"
                        alt="SM Manager Mockup 2"
                        width={800}
                        height={450}
                        className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)]"
                      />
                    </div>

                    {/* Second Image */}
                    <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                      <Image
                        src="/sm-manager-mockup-3.jpg"
                        alt="SM Manager Mockup 3"
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
                    We built a content strategy centered on positioning Taha as a go-to mentor in reverse engineering — breaking down technical concepts into simple, digestible posts and Reels, sharing behind-the-scenes insights, and mixing educational content with personal brand storytelling. A consistent posting schedule and cohesive visual identity were introduced to build trust and keep the audience engaged over time.
                  </p>

                  {/* Image: Mockup 4 */}
                  <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                    <Image
                      src="/sm-manager-mockup-4.jpg"
                      alt="SM Manager Solution Showcase 4"
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
                    Consistent, expertise-driven content strengthened Taha&apos;s authority in his niche, leading to stronger engagement and a steady increase in mentorship inquiries.
                  </p>

                  {/* 3-Column Stat Block Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 border border-white/15 rounded-xl overflow-hidden shadow-2xl">
                    {/* Cell 1: Light bg */}
                    <div className="bg-white p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-black/10">
                      <div>
                        <div 
                          className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-black tracking-tight leading-tight mb-2"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          120%
                        </div>
                        <p className="font-body text-xs sm:text-sm text-black/70 font-semibold leading-tight">
                          Follower Growth
                        </p>
                      </div>
                    </div>

                    {/* Cell 2: Dark bg #010513 */}
                    <div className="bg-[#010513] p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-white/10">
                      <div>
                        <div 
                          className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-white tracking-tight leading-tight mb-2"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          3x
                        </div>
                        <p className="font-body text-xs sm:text-sm text-white/70 font-semibold leading-tight">
                          Engagement Rate
                        </p>
                      </div>
                    </div>

                    {/* Cell 3: Light bg */}
                    <div className="bg-white p-4 sm:p-5 flex flex-col justify-between">
                      <div>
                        <div 
                          className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-black tracking-tight leading-tight mb-2"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          2 months
                        </div>
                        <p className="font-body text-xs sm:text-sm text-black/70 font-semibold leading-tight">
                          Management Duration
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* RIGHT COLUMN: Project Information (Sticky) */}
              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 sticky top-28 flex flex-col justify-between self-start">
                
                <div className="space-y-8">
                  {/* Heading */}
                  <h2 
                    className="font-heading text-base sm:text-lg lg:text-xl font-normal text-white uppercase tracking-tight whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    PROJECT INFORMATION
                  </h2>

                  {/* Metadata List */}
                  <div className="space-y-4 font-body text-xs sm:text-sm border-t border-b border-white/10 py-6">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Date:</span>
                      <span className="text-white font-semibold">2025</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Client:</span>
                      <span className="text-white font-semibold">Taha Nabeel</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Industry:</span>
                      <span className="text-white font-semibold">Reverse Engineering &amp; Mentoring</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Services:</span>
                      <span className="text-white font-semibold text-right">Social Media Management, Content Strategy, Reels Editing</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Project Duration:</span>
                      <span className="text-white font-semibold">2 months (ongoing)</span>
                    </div>
                  </div>

                  {/* Book a Demo Button */}
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-black bg-white hover:bg-white/90 transition-all duration-300 font-body group"
                    >
                      <span>Book a demo</span>
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>

      {/* MORE CASE STUDIES SECTION */}
      <section className="relative w-full bg-black pb-20 sm:pb-32 px-4 sm:px-6 lg:px-12 z-30">
        <div className="max-w-6xl w-full mx-auto">
          
          {/* Section Header */}
          <div className="relative mb-12 flex flex-col items-center justify-center text-center">
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {moreCaseStudies.map((study, idx) => (
              <a
                key={idx}
                href={study.href}
                className="group relative flex flex-col rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] overflow-hidden shadow-[0_0_35px_rgba(0,135,237,0.12)] hover:border-[#2989FF]/60 hover:shadow-[0_0_45px_rgba(0,135,237,0.25)] transition-all duration-300"
              >
                {/* Image Top Area */}
                <div className="relative w-full h-48 overflow-hidden bg-[#02050E] border-b border-[#2989FF]/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-transparent to-transparent z-10 opacity-50" />
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={500}
                    height={300}
                    unoptimized
                    className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)] transform group-hover:scale-110 group-hover:blur-[2px] transition-all duration-500 ease-out relative z-0"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1 justify-between relative z-10">
                  <div>
                    <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#0087ED] uppercase block mb-2">
                      {study.category}
                    </span>
                    <h3 
                      className="font-heading text-sm sm:text-base font-normal text-white leading-snug group-hover:text-[#0087ED] transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {study.title}
                    </h3>
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted/70 group-hover:text-white transition-colors">
                    <span className="font-body">View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0087ED] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Last CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
}
