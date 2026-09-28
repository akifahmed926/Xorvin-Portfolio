'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';

export default function EduLedgerDetailPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0087ED] selection:text-white flex flex-col justify-between">
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
                School Management System
              </span>
              <h1 
                className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.15' }}
              >
                EduLedger
              </h1>
            </div>

            {/* Right Column: Education Icon + Static Label + Description Paragraph */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4 lg:pl-8">
              
              {/* Top Row: Education Icon + Plain Static EduLedger Label */}
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <span className="text-2xl sm:text-3xl leading-none select-none">🎓</span>
                <span 
                  className="font-heading text-xs sm:text-sm lg:text-base font-extrabold text-[#0087ED] tracking-wide uppercase"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  EduLedger
                </span>
              </div>

              {/* Description Body Paragraph */}
              <p className="font-body text-xs sm:text-sm lg:text-base text-white/90 font-normal leading-relaxed max-w-md">
                A centralized school management platform designed to simplify academic, financial, administrative, and operational workflows for educational institutions — all from one connected system.
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
                src="/school-management-mockup-1.jpg"
                alt="EduLedger School Management System Overview Showcase"
                width={1310}
                height={606}
                priority
                className="w-full h-auto object-cover rounded-xl sm:rounded-2xl filter drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Project Challenges & Project Information Section */}
      <section className="relative w-full bg-black pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12 z-30">
        <div className="max-w-6xl w-full mx-auto relative">
          
          {/* Top Label Wrapper ("CASE DETAIL" with vertical accent line and horizontal extension) */}
          <div className="flex items-center space-x-3 mb-4 pl-1">
            <div className="flex items-center space-x-2">
              <span className="w-[2px] h-3.5 bg-white/40 block" />
              <span 
                className="font-heading text-xs font-semibold tracking-[0.2em] text-white/70 uppercase"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                CASE DETAIL
              </span>
              <span className="w-[2px] h-3.5 bg-white/40 block" />
            </div>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          {/* Main Box Outer Container wrapping both columns */}
          <div className="w-full rounded-2xl border border-white/10 bg-[#030712]/90 backdrop-blur-md shadow-2xl">
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
                    Schools often manage academics, student records, fee collection, staff operations, and administrative tasks across disconnected workflows. EduLedger was designed to bring these processes together while keeping sensitive school data organized and access-controlled.
                  </p>

                  {/* Bulleted List */}
                  <ul className="space-y-3 font-body text-xs sm:text-sm text-text-muted/70 list-none pl-1">
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Managing multiple school operations from one centralized platform.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Keeping student, academic, and financial records organized.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Creating separate access levels for Principal, Admin, Teacher, and Superadmin roles.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Supporting secure multi-tenant school architecture and data isolation.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Simplifying fee collection, vouchers, receipts, and student ledgers.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Making complex school workflows easier to understand and operate.</span>
                    </li>
                  </ul>
                </div>

                {/* Image Stack: Mockup 2 & Mockup 3 */}
                <div className="space-y-6 sm:space-y-8">
                  {/* First Image */}
                  <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                    <Image
                      src="/school-management-mockup-2.jpg"
                      alt="EduLedger School Management Admin Dashboard Showcase 2"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)]"
                    />
                  </div>

                  {/* Second Image */}
                  <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                    <Image
                      src="/school-management-mockup-3.jpg"
                      alt="EduLedger School Management Financial Ledgers Showcase 3"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)]"
                    />
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

                  {/* Paragraph 1 */}
                  <p className="font-body text-sm sm:text-base text-text-muted/70 opacity-70 font-normal leading-relaxed mb-4">
                    We designed EduLedger as a centralized school management system that connects academic, financial, administrative, and staff workflows in one platform. Role-based access ensures that each user sees the tools and information relevant to their responsibilities, while dedicated modules help schools manage everyday operations more efficiently.
                  </p>

                  {/* Paragraph 2 */}
                  <p className="font-body text-sm sm:text-base text-text-muted/70 opacity-70 font-normal leading-relaxed mb-6">
                    The platform brings together student management, fee collection, financial ledgers, teacher workflows, examinations, attendance, assignments, expenses, settings, and administrative controls into a structured dashboard experience.
                  </p>

                  {/* Image: Mockup 4 */}
                  <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                    <Image
                      src="/school-management-mockup-4.jpg"
                      alt="EduLedger School Management System Module Dashboard 4"
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
                    EduLedger provides schools with a more structured way to manage their daily operations, replacing scattered workflows with a centralized digital system. The platform makes key information easier to access while supporting role-based workflows across different areas of school administration.
                  </p>

                  {/* 3-Column Stat Block Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 border border-white/15 rounded-xl overflow-hidden shadow-2xl">
                    {/* Cell 1: Light bg */}
                    <div className="bg-white p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-black/10">
                      <span className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-black tracking-tight whitespace-nowrap mb-2">75%</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-black/80 leading-snug">Faster School Operations</span>
                    </div>

                    {/* Cell 2: #010513 bg */}
                    <div className="bg-[#010513] p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-white/10">
                      <span className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-white tracking-tight whitespace-nowrap mb-2">10+</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-white/80 leading-snug">Integrated Management Modules</span>
                    </div>

                    {/* Cell 3: Light bg */}
                    <div className="bg-white p-4 sm:p-5 flex flex-col justify-between">
                      <span className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-black tracking-tight whitespace-nowrap mb-2">24/7</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-black/80 leading-snug">Centralized School Access</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Project Information + Book a Demo + Product Quote (Sticky throughout left column scroll) */}
              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-start lg:sticky lg:top-28">
                {/* Heading */}
                <h2 
                  className="font-heading text-base sm:text-lg lg:text-xl font-normal text-white uppercase tracking-tight whitespace-nowrap mb-8"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  PROJECT INFORMATION
                </h2>

                {/* Information Rows List */}
                <div className="divide-y divide-white/10 border-t border-b border-white/10">
                  
                  {/* Row 1: Date */}
                  <div className="py-4 sm:py-5 flex items-start justify-between">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium">Date:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right">2026</span>
                  </div>

                  {/* Row 2: Client */}
                  <div className="py-4 sm:py-5 flex items-start justify-between">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium">Client:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right">Student&apos;s Grammar School</span>
                  </div>

                  {/* Row 3: Industry */}
                  <div className="py-4 sm:py-5 flex items-start justify-between">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium">Industry:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right">Education &amp; School Management</span>
                  </div>

                  {/* Row 4: Services */}
                  <div className="py-4 sm:py-5 flex items-start justify-between space-x-4">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium flex-shrink-0">Services:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right leading-relaxed max-w-[340px]">
                      UI/UX Design, Web Design, School Management System, Dashboard Design, Product Design
                    </span>
                  </div>

                  {/* Row 5: Technology stack */}
                  <div className="py-4 sm:py-5 flex items-start justify-between space-x-4">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium flex-shrink-0">Technology stack:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right leading-relaxed max-w-[360px]">
                      Next.js, TypeScript, Tailwind CSS, Vercel
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

                {/* Product Quote / Info Block */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="font-body text-xs sm:text-sm text-white/90 font-normal leading-relaxed mb-6">
                    &ldquo;EduLedger brings academics, administration, and financial management together in one structured platform, making everyday school operations easier to manage.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#050C1A] border border-[#0087ED]/40 flex items-center justify-center p-2 shadow-md flex-shrink-0">
                      <Image
                        src="/logo.png"
                        alt="Xorvin Logo"
                        width={24}
                        height={24}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body text-sm font-bold text-white">EduLedger</span>
                      <span className="font-body text-xs text-text-muted/80 font-normal">School Management Platform</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* More Case Studies Section */}
      <section className="relative w-full bg-black pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12 z-30">
        <div className="max-w-6xl w-full mx-auto relative">
          
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

          {/* 3-Column Case Study Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Vortex */}
            <a
              href="/case-studies/vortex"
              className="group relative flex flex-col rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] overflow-hidden shadow-[0_0_35px_rgba(0,135,237,0.12)] hover:border-[#2989FF]/60 hover:shadow-[0_0_45px_rgba(0,135,237,0.25)] transition-all duration-300"
            >
              <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#02050E] border-b border-[#2989FF]/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-transparent to-transparent z-10 opacity-50" />
                <Image
                  src="/card-1.jpg"
                  alt="Vortex — Restaurant Automation"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)] transform group-hover:scale-110 group-hover:blur-[2px] transition-all duration-500 ease-out relative z-0"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between relative z-10">
                <div>
                  <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#0087ED] uppercase block mb-2">
                    RESTAURANT &amp; AUTOMATION
                  </span>
                  <h3 
                    className="font-heading text-sm sm:text-base font-normal text-white leading-snug group-hover:text-[#0087ED] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Vortex — Restaurant Automation
                  </h3>
                </div>
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted/70 group-hover:text-white transition-colors">
                  <span className="font-body">View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0087ED] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>

            {/* Card 2: Aura Jewelry */}
            <a
              href="/case-studies/aura-jewelry-web-design"
              className="group relative flex flex-col rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] overflow-hidden shadow-[0_0_35px_rgba(0,135,237,0.12)] hover:border-[#2989FF]/60 hover:shadow-[0_0_45px_rgba(0,135,237,0.25)] transition-all duration-300"
            >
              <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#02050E] border-b border-[#2989FF]/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-transparent to-transparent z-10 opacity-50" />
                <Image
                  src="/card-3.png"
                  alt="Aura Jewelry — Web Design"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)] transform group-hover:scale-110 group-hover:blur-[2px] transition-all duration-500 ease-out relative z-0"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between relative z-10">
                <div>
                  <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#0087ED] uppercase block mb-2">
                    JEWELRY &amp; E-COMMERCE
                  </span>
                  <h3 
                    className="font-heading text-sm sm:text-base font-normal text-white leading-snug group-hover:text-[#0087ED] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Aura Jewelry — Web Design
                  </h3>
                </div>
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted/70 group-hover:text-white transition-colors">
                  <span className="font-body">View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0087ED] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>

            {/* Card 3: SM Manager */}
            <a
              href="/case-studies/sm-manager-taha-nabeel"
              className="group relative flex flex-col rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] overflow-hidden shadow-[0_0_35px_rgba(0,135,237,0.12)] hover:border-[#2989FF]/60 hover:shadow-[0_0_45px_rgba(0,135,237,0.25)] transition-all duration-300"
            >
              <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#02050E] border-b border-[#2989FF]/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-transparent to-transparent z-10 opacity-50" />
                <Image
                  src="/card-4-sm-manager.jpg"
                  alt="SM Manager — Social Media Management"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)] transform group-hover:scale-110 group-hover:blur-[2px] transition-all duration-500 ease-out relative z-0"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between relative z-10">
                <div>
                  <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#0087ED] uppercase block mb-2">
                    SOCIAL MEDIA MANAGEMENT
                  </span>
                  <h3 
                    className="font-heading text-sm sm:text-base font-normal text-white leading-snug group-hover:text-[#0087ED] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    SM Manager — Social Media Management
                  </h3>
                </div>
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted/70 group-hover:text-white transition-colors">
                  <span className="font-body">View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0087ED] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* Last CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
}
