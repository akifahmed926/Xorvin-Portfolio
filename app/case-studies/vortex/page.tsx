'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';

export default function VortexDetailPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#0087ED] selection:text-white flex flex-col justify-between">
      <Navbar />

      {/* Hero Heading Section */}
      <section className="relative w-full bg-black pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 z-30 flex items-center justify-center">
        
        {/* Main Box Container with Light Side Border Lines (border-x border-white/20 + border-y border-white/10) */}
        <div className="max-w-6xl w-full mx-auto relative border border-white/15 bg-black p-8 sm:p-12 lg:p-16 rounded-sm shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            
            {/* Left Column: 3-Line Bold Display Heading with Michroma Font and Balanced Moderate Line Gap */}
            <div className="lg:col-span-7 flex flex-col">
              <h1 
                className="font-heading text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-white uppercase tracking-tight flex flex-col space-y-1 sm:space-y-1.5"
                style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.25' }}
              >
                <span className="block font-heading" style={{ fontFamily: 'var(--font-heading)' }}>VORTEX —</span>
                <span className="block font-heading" style={{ fontFamily: 'var(--font-heading)' }}>RESTAURANT</span>
                <span className="block font-heading" style={{ fontFamily: 'var(--font-heading)' }}>AUTOMATION</span>
              </h1>
            </div>

            {/* Right Column: Chef Icon + VORTEX + Paragraph Description */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 lg:pl-8">
              
              {/* Top Row: Chef Emoji Icon + Bold Orange VORTEX */}
              <div className="flex items-center space-x-3.5">
                <span className="text-3xl sm:text-4xl leading-none select-none">🧑‍🍳</span>
                <span 
                  className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F97316] tracking-wide uppercase"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  VORTEX
                </span>
              </div>

              {/* Description Body Paragraph */}
              <p className="font-body text-xs sm:text-sm lg:text-base text-white/90 font-normal leading-relaxed max-w-md">
                A smart restaurant automation system that connects digital menus, WhatsApp ordering, and customer interactions into one seamless experience.
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
                src="/mockup-1-cropped.png"
                alt="Vortex WhatsApp Fast Food Assistant Laptop Mockup Showcase"
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
                  <p className="font-body text-sm sm:text-base text-text-muted/70 font-normal leading-relaxed mb-6">
                    Al Basit Restaurant needed a simpler way to manage customer orders on WhatsApp while keeping the ordering experience smooth and easy.
                  </p>

                  {/* Bulleted List */}
                  <ul className="space-y-3 font-body text-xs sm:text-sm text-text-muted/70 list-none pl-1">
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Making the menu easy to browse on WhatsApp.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Handling different customer requests without confusion.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Keeping quantities and order details accurate.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Connecting WhatsApp orders with the restaurant workflow.</span>
                    </li>
                  </ul>
                </div>

                {/* Image Stack: Mockup 1 & Mockup 2 */}
                <div className="space-y-6 sm:space-y-8">
                  {/* First Image */}
                  <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                    <Image
                      src="/card-1.jpg"
                      alt="Vortex Restaurant Automation Ordering System Visual 1"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)]"
                    />
                  </div>

                  {/* Second Image */}
                  <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                    <Image
                      src="/vortex-mockup-2.jpg"
                      alt="Vortex Restaurant Automation Live Orders Room Showcase 2"
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

                  {/* Paragraph */}
                  <p className="font-body text-sm sm:text-base text-text-muted/70 font-normal leading-relaxed mb-6">
                    We built Vortex to simplify restaurant ordering through WhatsApp, giving customers an easy way to browse the menu, select items, and place orders through an automated conversation.
                  </p>

                  {/* Bulleted List */}
                  <ul className="space-y-3 font-body text-xs sm:text-sm text-text-muted/70 list-none pl-1 mb-8">
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Digital menu for quick and easy browsing.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>WhatsApp automation to guide customers through orders.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Accurate handling of items, quantities, and order details.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>A smoother ordering flow for both customers and the restaurant team.</span>
                    </li>
                  </ul>

                  {/* Third Image */}
                  <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                    <Image
                      src="/vortex-mockup-3.jpg"
                      alt="Vortex Restaurant Automation Solution Showcase 3"
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
                  <p className="font-body text-sm sm:text-base text-text-muted/70 font-normal leading-relaxed mb-8">
                    Vortex brought the restaurant&apos;s menu, WhatsApp conversations, and ordering process into one smoother automated experience.
                  </p>

                  {/* 3-Column Stat Block Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 border border-white/15 rounded-xl overflow-hidden shadow-2xl">
                    {/* Cell 1: Light bg */}
                    <div className="bg-white p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-black/10">
                      <span className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-black tracking-tight whitespace-nowrap mb-2">24/7</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-black/80 leading-snug">WhatsApp Ordering</span>
                    </div>

                    {/* Cell 2: #010513 bg */}
                    <div className="bg-[#010513] p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-white/10">
                      <span className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-white tracking-tight whitespace-nowrap mb-2">7 Days</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-white/80 leading-snug">Customer Assistance</span>
                    </div>

                    {/* Cell 3: Light bg */}
                    <div className="bg-white p-4 sm:p-5 flex flex-col justify-between">
                      <span className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-black tracking-tight whitespace-nowrap mb-2">3-Step</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-black/80 leading-snug">Menu-to-Order Flow</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Project Information + Book a Demo + Testimonial (Sticky throughout left column scroll) */}
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
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right">2025</span>
                  </div>

                  {/* Row 2: Client */}
                  <div className="py-4 sm:py-5 flex items-start justify-between">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium">Client:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right">Al Basit Restaurant</span>
                  </div>

                  {/* Row 3: Industry */}
                  <div className="py-4 sm:py-5 flex items-start justify-between">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium">Industry:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right">Restaurant &amp; Food Services</span>
                  </div>

                  {/* Row 4: Services */}
                  <div className="py-4 sm:py-5 flex items-start justify-between space-x-4">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium flex-shrink-0">Services:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right leading-relaxed max-w-[340px]">
                      Restaurant Automation, WhatsApp Ordering, Digital Menu
                    </span>
                  </div>

                  {/* Row 5: Technology stack */}
                  <div className="py-4 sm:py-5 flex items-start justify-between space-x-4">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium flex-shrink-0">Technology stack:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right leading-relaxed max-w-[360px]">
                      WhatsApp Business API, Vortex Automation, Digital Menu, Order Management
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

                {/* Testimonial Section */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="font-body text-xs sm:text-sm text-white/90 font-normal leading-relaxed mb-6">
                    &ldquo;Vortex completely changed how we handle orders. Customers order faster, and our team spends way less time managing WhatsApp chats manually.&rdquo;
                  </p>

                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0087ED] to-[#00C6FF] flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                      AR
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body text-sm font-semibold text-white">Ahmed Raza</span>
                      <span className="font-body text-xs text-text-muted/80 font-normal">Owner, Al Basit Restaurant</span>
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
            {/* Card 1: EduLedger */}
            <Link
              href="/case-studies/eduledger-school-management"
              className="group relative flex flex-col rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] overflow-hidden shadow-[0_0_35px_rgba(0,135,237,0.12)] hover:border-[#2989FF]/60 hover:shadow-[0_0_45px_rgba(0,135,237,0.25)] transition-all duration-300"
            >
              <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#02050E] border-b border-[#2989FF]/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-transparent to-transparent z-10 opacity-50" />
                <Image
                  src="/card-2.jpg"
                  alt="EduLedger — School Management System"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)] transform group-hover:scale-110 group-hover:blur-[2px] transition-all duration-500 ease-out relative z-0"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between relative z-10">
                <div>
                  <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#0087ED] uppercase block mb-2">
                    EDUCATION &amp; SCHOOL MANAGEMENT
                  </span>
                  <h3 
                    className="font-heading text-sm sm:text-base font-normal text-white leading-snug group-hover:text-[#0087ED] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    EduLedger — School Management System
                  </h3>
                </div>
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted/70 group-hover:text-white transition-colors">
                  <span className="font-body">View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0087ED] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Card 2: Aura Jewelry */}
            <Link
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
            </Link>

            {/* Card 3: SM Manager */}
            <Link
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
            </Link>
          </div>

        </div>
      </section>

      {/* Last CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
}
