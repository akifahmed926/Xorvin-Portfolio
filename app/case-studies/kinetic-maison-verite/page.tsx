'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { ArrowUpRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function KineticMaisonVeriteCaseStudyPage() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || !isFinite(timeInSeconds)) return '0:00';
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowControls(true);
      } else {
        videoRef.current.play();
        setShowControls(true);
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current);
        }
        controlsTimeoutRef.current = setTimeout(() => {
          setShowControls(false);
        }, 2500);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const moreCaseStudies = [
    {
      title: 'Kinetic × ChargeX',
      category: 'VIDEO EDITING',
      image: '/kinetic-chargex-mockup-1.png',
      href: '/case-studies/kinetic-chargex',
    },
    {
      title: 'Kinetic × CETA EV — Product Launch Ad',
      category: 'VIDEO EDITING',
      image: '/ev-charger-mockup-1-replaced.jpg',
      href: '/case-studies/kinetic-ceta-ev',
    },
    {
      title: 'Vortex — Restaurant Automation',
      category: 'RESTAURANT & AUTOMATION',
      image: '/card-1.jpg',
      href: '/case-studies/vortex',
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
                Video Editing
              </span>
              <h1 
                className="font-heading text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}
              >
                Kinetic × Maison Vérité
              </h1>
            </div>

            {/* Right Column: Perfume Icon + Static Label + Description Paragraph */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4 lg:pl-8">
              
              {/* Top Row: Perfume Icon + Plain Static Kinetic × Maison Vérité Label */}
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <span className="text-2xl sm:text-3xl leading-none select-none">✨</span>
                <span 
                  className="font-heading text-xs sm:text-sm lg:text-base font-extrabold text-[#0087ED] tracking-wide uppercase"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Kinetic × Maison Vérité
                </span>
              </div>

              {/* Description Body Paragraph */}
              <p className="font-body text-xs sm:text-sm lg:text-base text-white/90 font-normal leading-relaxed max-w-md">
                A confident, on-camera testimonial ad blended with luxury product cinematography to position Maison Vérité as a premium, aspirational fragrance.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Main Case Media: Video Player Section */}
      <section className="relative w-full bg-black pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 z-30">
        <div className="max-w-md w-full mx-auto">
          
          {/* Frame Container with Glow Border */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] p-2 sm:p-3 shadow-[0_0_50px_rgba(0,135,237,0.18)] overflow-hidden flex items-center justify-center">
            
            {/* Inner Video Container with Mouse Move Listeners for Auto-Hide */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl z-10 bg-black group"
            >
              <video
                ref={videoRef}
                src="/kinetic-maison-verite-video.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
                className="w-full h-auto object-cover rounded-xl sm:rounded-2xl filter drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)] cursor-pointer"
              />

              {/* Full Custom VLC-Style Video Control Bar */}
              <div 
                className={`absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 bg-black/75 backdrop-blur-md border border-white/15 px-3 py-2.5 sm:px-5 sm:py-3 rounded-xl flex items-center justify-between space-x-3 sm:space-x-4 shadow-2xl transition-all duration-300 ${
                  showControls || !isPlaying ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
                }`}
              >
                {/* Play / Pause Toggle Button */}
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                  className="p-1.5 sm:p-2 rounded-lg text-white hover:text-[#0087ED] hover:bg-white/10 transition-colors flex-shrink-0"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#0087ED]" />
                  )}
                </button>

                {/* Mute / Unmute Toggle Button */}
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute Video' : 'Mute Video'}
                  className="p-1.5 sm:p-2 rounded-lg text-white hover:text-[#0087ED] hover:bg-white/10 transition-colors flex-shrink-0"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                  ) : (
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0087ED]" />
                  )}
                </button>

                {/* Current Time / Total Duration Display */}
                <div className="text-[11px] sm:text-xs font-mono text-white/80 whitespace-nowrap select-none flex-shrink-0">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>

                {/* Scrubbable Progress / Seek Bar */}
                <div className="flex-1 flex items-center min-w-[100px]">
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    step={0.05}
                    value={currentTime}
                    onChange={handleSeekChange}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#0087ED] focus:outline-none transition-all"
                    style={{
                      background: `linear-gradient(to right, #0087ED 0%, #0087ED ${(currentTime / (duration || 1)) * 100}%, rgba(255, 255, 255, 0.2) ${(currentTime / (duration || 1)) * 100}%, rgba(255, 255, 255, 0.2) 100%)`
                    }}
                  />
                </div>
              </div>
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
              
              {/* LEFT COLUMN: Project Challenges, The Solution, Supporting Images, & The Result */}
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
                    Maison Vérité needed an ad that could sell a scent — something impossible to show directly on screen — while feeling authentic and trustworthy rather than like a typical staged commercial.
                  </p>

                  {/* Bulleted List */}
                  <ul className="space-y-3 font-body text-xs sm:text-sm text-text-muted/70 list-none pl-1 mb-8">
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Visually communicating a sensory experience (fragrance) through video alone.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Balancing a relatable, talking-head UGC feel with a premium, luxury brand identity.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Keeping the on-camera delivery natural and confident, not scripted-sounding.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Elevating simple product shots into a &quot;high-end&quot; visual language.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>Closing with a tagline that reinforces the brand&apos;s identity and sticks with the viewer.</span>
                    </li>
                  </ul>

                  {/* Supporting Image 1 */}
                  <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                    <Image
                      src="/kinetic-maison-verite-mockup-1.jpg"
                      alt="Kinetic x Maison Vérité Project Challenges Mockup 1"
                      width={800}
                      height={450}
                      unoptimized
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
                  <p className="font-body text-sm sm:text-base text-text-muted/70 opacity-70 font-normal leading-relaxed mb-6">
                    A warm, direct-to-camera testimonial built trust, cut with luxury product shots in dark, gold-toned lighting. A wrist-smelling close-up added a sensory touch, and a warm amber grade tied it all together, closing on the tagline &apos;Wear What Is True!&apos;
                  </p>

                  {/* Supporting Image 2 */}
                  <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-[#050C1A]">
                    <Image
                      src="/kinetic-maison-verite-mockup-2.jpg"
                      alt="Kinetic x Maison Vérité The Solution Mockup 2"
                      width={800}
                      height={450}
                      unoptimized
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
                    The final edit delivered a hybrid testimonial-and-product ad that felt personal and trustworthy while still carrying the visual weight of a luxury fragrance brand.
                  </p>

                  {/* 3-Column Stat Block Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 border border-white/15 rounded-xl overflow-hidden shadow-2xl">
                    {/* Cell 1: Light bg */}
                    <div className="bg-white p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-black/10">
                      <span className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-black tracking-tight whitespace-nowrap mb-2">30 sec</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-black/80 leading-snug">Runtime — Vertical Testimonial Format</span>
                    </div>

                    {/* Cell 2: #010513 bg */}
                    <div className="bg-[#010513] p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-white/10">
                      <span className="font-heading text-sm sm:text-base lg:text-lg font-extrabold text-white tracking-tight leading-tight mb-2">Talking-Head + Product</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-white/80 leading-snug">Hybrid Edit Style</span>
                    </div>

                    {/* Cell 3: Light bg */}
                    <div className="bg-white p-4 sm:p-5 flex flex-col justify-between">
                      <span className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-black tracking-tight whitespace-nowrap mb-2">1 day</span>
                      <span className="font-body text-xs sm:text-sm font-semibold text-black/80 leading-snug">Edit &amp; Color Grading</span>
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
                    <span className="font-body text-xs sm:text-sm text-white font-medium">2025</span>
                  </div>

                  {/* Row 2: Client */}
                  <div className="py-4 sm:py-5 flex items-center justify-between">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium">Client:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium">Maison Vérité</span>
                  </div>

                  {/* Row 3: Industry */}
                  <div className="py-4 sm:py-5 flex items-center justify-between">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium">Industry:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium">Fragrance / Luxury Goods</span>
                  </div>

                  {/* Row 4: Services */}
                  <div className="py-4 sm:py-5 flex items-start justify-between space-x-4">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium flex-shrink-0">Services:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right leading-relaxed max-w-[340px]">
                      Video Editing, Color Grading, UGC-Style Editing
                    </span>
                  </div>

                  {/* Row 5: Project Duration */}
                  <div className="py-4 sm:py-5 flex items-start justify-between space-x-4">
                    <span className="font-body text-xs sm:text-sm text-text-muted/70 font-medium flex-shrink-0">Project Duration:</span>
                    <span className="font-body text-xs sm:text-sm text-white font-medium text-right leading-relaxed max-w-[360px]">
                      1 day
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {moreCaseStudies.map((cs, idx) => (
              <a
                key={idx}
                href={cs.href}
                className="group relative flex flex-col rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] overflow-hidden shadow-[0_0_35px_rgba(0,135,237,0.12)] hover:border-[#2989FF]/60 hover:shadow-[0_0_45px_rgba(0,135,237,0.25)] transition-all duration-300"
              >
                {/* Image Top Area */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#02050E] border-b border-[#2989FF]/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030814] via-transparent to-transparent z-10 opacity-50" />
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    width={500}
                    height={300}
                    unoptimized
                    className="w-full h-full object-cover filter drop-shadow-[0_4px_20px_rgba(0,135,237,0.2)] transform group-hover:scale-110 group-hover:blur-[2px] transition-all duration-500 ease-out relative z-0"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1 justify-between relative z-10">
                  <div>
                    {/* Category Label */}
                    <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#0087ED] uppercase block mb-2">
                      {cs.category}
                    </span>

                    {/* Title Heading */}
                    <h3 
                      className="font-heading text-sm sm:text-base font-normal text-white leading-snug group-hover:text-[#0087ED] transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {cs.title}
                    </h3>
                  </div>

                  {/* Arrow Indicator */}
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

      {/* LAST CTA SECTION */}
      <CtaSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
