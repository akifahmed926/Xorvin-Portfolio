'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const companyLinks = [
    { 
      label: 'Case study', 
      href: '/case-studies',
    },
    { 
      label: 'Services', 
      href: '/#services',
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (typeof window !== 'undefined' && window.location.pathname === '/') {
          e.preventDefault();
          const el = document.getElementById('services') || document.getElementById('services-mobile');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      },
    },
    { 
      label: 'Our website', 
      href: 'https://xorvin-eight.vercel.app/',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];

  return (
    <footer className="w-full bg-background pt-12 lg:pt-16 pb-8 px-4 sm:px-6 lg:px-12 relative z-30">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            {/* Logo (Increased size) */}
            <a href="#" className="inline-block mb-4 group">
              <div className="relative h-14 sm:h-16 lg:h-20 w-auto flex items-center">
                <Image
                  src="/logo.png"
                  alt="XORVIN"
                  width={280}
                  height={90}
                  className="h-full w-auto object-contain drop-shadow-[0_0_18px_rgba(40,137,255,0.35)] group-hover:drop-shadow-[0_0_26px_rgba(40,137,255,0.55)] transition-all duration-300"
                />
              </div>
            </a>

            {/* Paragraph Description */}
            <p className="font-body text-xs sm:text-sm text-text-muted/80 leading-relaxed max-w-sm mb-6">
              Empowering businesses with intelligent AI solutions, automation, and custom digital experiences built for the future.
            </p>

            {/* Newsletter Input Box */}
            <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md">
              <div className="flex items-center w-full bg-[#050C1A] border border-[#2989FF]/30 rounded-2xl p-1.5 focus-within:border-[#2989FF]/60 transition-colors shadow-[0_0_25px_rgba(0,135,237,0.15)]">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent px-3 sm:px-4 py-2 text-xs sm:text-sm text-white placeholder:text-text-muted/50 focus:outline-none font-body"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-primary border border-primary/60 shadow-glow-electric hover:bg-none hover:bg-surface-secondary hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 ease-in-out whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <span>Subscribe</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </form>

          </div>

          {/* Right Section: Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pt-2 lg:pt-0">
            
            {/* Column 1: Capabilities (Static items) */}
            <div>
              <h4 
                className="font-heading text-sm sm:text-base font-normal text-white mb-4 tracking-wide"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Capabilities
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <span className="font-body text-xs sm:text-sm text-text-muted/80 block">
                    AI Automation
                  </span>
                </li>
                <li>
                  <span className="font-body text-xs sm:text-sm text-text-muted/80 block">
                    WhatsApp Chatbots
                  </span>
                </li>
                <li>
                  <span className="font-body text-xs sm:text-sm text-text-muted/80 block">
                    Workflow Automation
                  </span>
                </li>
                <li>
                  <span className="font-body text-xs sm:text-sm text-text-muted/80 block">
                    Custom AI Solutions
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 2: Company (ONLY these 3 links have Text Roll-Up Reveal effect) */}
            <div>
              <h4 
                className="font-heading text-sm sm:text-base font-normal text-white mb-4 tracking-wide"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Company
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      target={link.target}
                      rel={link.rel}
                      className="group relative inline-flex overflow-hidden font-body text-xs sm:text-sm text-text-muted/80 whitespace-nowrap"
                    >
                      <span className="inline-block whitespace-nowrap transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:-translate-y-full">
                        {link.label}
                      </span>
                      <span className="absolute top-0 left-0 w-full whitespace-nowrap inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0 text-[#0087ED] font-medium">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact (Static items) */}
            <div>
              <h4 
                className="font-heading text-sm sm:text-base font-normal text-white mb-4 tracking-wide"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Contact
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:xorvin@gmail.com" className="font-body text-xs sm:text-sm text-text-muted/80 block">
                    xorvin@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+031323434" className="font-body text-xs sm:text-sm text-text-muted/80 block">
                    +031323434
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal (Static items) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-body text-xs text-text-muted/70">
            &copy; 2026 XORVIN, All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="font-body text-xs text-text-muted/70 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="font-body text-xs text-text-muted/70 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
