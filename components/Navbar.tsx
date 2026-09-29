'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = lastScrollY.current;

      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else {
        if (currentScrollY > prevScrollY + 4) {
          // Scrolling DOWN (from Hero toward Footer) -> Hide navbar
          setIsVisible(false);
        } else if (currentScrollY < prevScrollY - 4) {
          // Scrolling UP (back toward Hero) -> Show navbar
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/#hero', targetId: 'hero' },
    { label: 'Services', href: '/#services', targetId: 'services' },
    { label: 'Portfolio', href: '/#portfolio', targetId: 'portfolio' },
    { label: 'FAQ', href: '/#faq', targetId: 'faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      if (targetId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border-subtle transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Sleek Compact Nav Bar Height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left: XORVIN Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group py-0">
          <div className="relative h-16 sm:h-20 md:h-22 lg:h-24 w-auto flex items-center">
            <Image
              src="/logo.png"
              alt="Xorvin — For The Ones Ahead"
              width={340}
              height={100}
              priority
              className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(40,137,255,0.3)] group-hover:drop-shadow-[0_0_22px_rgba(40,137,255,0.5)] transition-all duration-300"
            />
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.targetId)}
              className="group relative inline-flex overflow-hidden text-sm font-normal text-text-primary hover:text-white transition-colors duration-300"
            >
              <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:-translate-y-full">
                {link.label}
              </span>
              <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0 text-secondary font-medium">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right: Contact Us Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-primary border border-primary/60 shadow-glow-electric hover:bg-none hover:bg-surface-secondary hover:border-primary/50 hover:shadow-glow-subtle hover:scale-[1.03] transition-all duration-300 ease-in-out"
          >
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-text-primary hover:text-primary focus:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-text-primary" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-surface/95 border-b border-border-subtle backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.targetId);
                }}
                className="text-base font-medium text-text-primary hover:text-secondary transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-primary shadow-glow-electric"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
