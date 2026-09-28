'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight, Mail, Phone, Globe } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you within 24 hours.');
  };

  return (
    <main className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-white flex flex-col justify-between">
      <Navbar />

      <section className="relative w-full pt-28 sm:pt-36 pb-16 px-4 sm:px-6 z-30">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#0087ED]/15 blur-[140px] rounded-full pointer-events-none z-0" />

        {/* Contact Hero Header */}
        <div className="max-w-3xl mx-auto text-center relative z-10 mb-12">
          
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-primary/40 bg-surface/80 backdrop-blur-md text-[11px] font-semibold tracking-wider text-text-primary uppercase shadow-glow-subtle mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mr-2" />
            CONTACT US
          </div>

          {/* Main Heading */}
          <h1 
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.2] mb-4 drop-shadow-[0_0_20px_rgba(40,137,255,0.3)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Contact XORVIN
          </h1>

          {/* Subheading Paragraph */}
          <p className="font-body text-xs sm:text-sm lg:text-base text-text-muted/80 max-w-xl mx-auto font-normal leading-relaxed">
            Tell us what you want to automate. We&apos;ll review your workflow and suggest the fastest AI solution for your business.
          </p>

        </div>

        {/* Contact Form Card */}
        <div className="max-w-2xl lg:max-w-3xl mx-auto relative z-10 rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] p-6 sm:p-10 shadow-[0_0_45px_rgba(0,135,237,0.22)] overflow-hidden mb-16">
          
          {/* Ambient Grid Texture */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(#2889FF_1px,transparent_1px)] [background-size:24px_24px]" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
            
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2 font-body">
                  First Name<span className="text-[#0087ED]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Hannah"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-[#020612]/80 border border-[#2989FF]/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-text-muted/40 focus:outline-none focus:border-[#0087ED] transition-colors font-body"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2 font-body">
                  Last Name<span className="text-[#0087ED]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Martinez"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-[#020612]/80 border border-[#2989FF]/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-text-muted/40 focus:outline-none focus:border-[#0087ED] transition-colors font-body"
                />
              </div>
            </div>

            {/* Business Email & Company Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2 font-body">
                  Business Email<span className="text-[#0087ED]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#020612]/80 border border-[#2989FF]/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-text-muted/40 focus:outline-none focus:border-[#0087ED] transition-colors font-body"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2 font-body">
                  Company Name<span className="text-[#0087ED]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Acme Technologies"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#020612]/80 border border-[#2989FF]/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-text-muted/40 focus:outline-none focus:border-[#0087ED] transition-colors font-body"
                />
              </div>
            </div>

            {/* Service Interested In */}
            <div>
              <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2 font-body">
                Service Interested In<span className="text-[#0087ED]">*</span>
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#020612]/80 border border-[#2989FF]/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-white/90 focus:outline-none focus:border-[#0087ED] transition-colors font-body cursor-pointer"
              >
                <option value="" disabled className="bg-[#030814] text-text-muted">
                  Select Category
                </option>
                <option value="AI Automation" className="bg-[#030814]">AI Automation</option>
                <option value="WhatsApp Chatbots" className="bg-[#030814]">WhatsApp Chatbots</option>
                <option value="Workflow Automation" className="bg-[#030814]">Workflow Automation</option>
                <option value="Custom AI Solutions" className="bg-[#030814]">Custom AI Solutions</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2 font-body">
                Message<span className="text-[#0087ED]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Write a message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#020612]/80 border border-[#2989FF]/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-text-muted/40 focus:outline-none focus:border-[#0087ED] transition-colors font-body resize-none"
              />
            </div>

            {/* Send Message Submit Button */}
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-primary border border-primary/60 shadow-glow-electric hover:bg-none hover:bg-surface-secondary hover:border-primary/50 hover:scale-[1.01] transition-all duration-300 ease-in-out"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span>Send Message</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

          </form>

        </div>

        {/* 3-Column Info Cards Row */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 relative z-10">
          
          {/* Card 1: Email */}
          <div className="rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] to-[#02050E] p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_35px_rgba(0,135,237,0.12)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0087ED]/15 border border-[#0087ED]/30 flex items-center justify-center text-[#0087ED] mb-5">
                <Mail className="w-5 h-5" />
              </div>
              <h3 
                className="font-heading text-lg font-normal text-white mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Email
              </h3>
              <p className="font-body text-xs sm:text-sm text-text-muted/80 leading-relaxed mb-6">
                Send us your project details. We usually respond within 24 hours w/ next steps.
              </p>
            </div>
            <a 
              href="mailto:xorvin@gmail.com"
              className="font-body text-xs sm:text-sm text-[#0087ED] font-medium hover:underline block"
            >
              xorvin@gmail.com
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] to-[#02050E] p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_35px_rgba(0,135,237,0.12)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0087ED]/15 border border-[#0087ED]/30 flex items-center justify-center text-[#0087ED] mb-5">
                <Phone className="w-5 h-5" />
              </div>
              <h3 
                className="font-heading text-lg font-normal text-white mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Phone
              </h3>
              <p className="font-body text-xs sm:text-sm text-text-muted/80 leading-relaxed mb-6">
                Available Monday to Friday for urgent calls and automation support.
              </p>
            </div>
            <a 
              href="tel:+031323434"
              className="font-body text-xs sm:text-sm text-[#0087ED] font-medium hover:underline block"
            >
              +031323434
            </a>
          </div>

          {/* Card 3: Address / Presence */}
          <div className="rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] to-[#02050E] p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_35px_rgba(0,135,237,0.12)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0087ED]/15 border border-[#0087ED]/30 flex items-center justify-center text-[#0087ED] mb-5">
                <Globe className="w-5 h-5" />
              </div>
              <h3 
                className="font-heading text-lg font-normal text-white mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Address
              </h3>
              <p className="font-body text-xs sm:text-sm text-text-muted/80 leading-relaxed mb-6">
                Location details coming soon.
              </p>
            </div>
            <span className="font-body text-xs sm:text-sm text-[#0087ED] font-medium uppercase tracking-wider block">
              REMOTE-FIRST AGENCY
            </span>
          </div>

        </div>

        {/* CTA Section: Start your business with Xorvin today */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto relative z-10 rounded-2xl border border-[#2989FF]/30 bg-gradient-to-b from-[#050C1A] via-[#030814] to-[#02050E] p-6 sm:p-10 lg:p-12 shadow-[0_0_45px_rgba(0,135,237,0.22)] overflow-hidden text-center flex flex-col items-center mb-12">
          
          {/* Subtle Grid Texture */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(#2889FF_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Eyebrow Pill Badge */}
          <div className="relative z-10 inline-flex items-center px-3.5 py-1 rounded-full border border-primary/40 bg-surface/80 backdrop-blur-md text-[11px] font-semibold tracking-wider text-text-primary uppercase shadow-glow-subtle mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mr-2" />
            GET STARTED
          </div>

          {/* Main Heading */}
          <h2 
            className="relative z-10 font-heading text-xl sm:text-3xl lg:text-[36px] font-normal text-white tracking-tight leading-[1.25] mb-4 drop-shadow-[0_0_20px_rgba(40,137,255,0.3)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Start your business with<br />
            <span className="bg-gradient-to-r from-[#0087ED] via-[#38BDF8] to-white bg-clip-text text-transparent">
              Xorvin today
            </span>
          </h2>

          {/* Paragraph */}
          <p className="relative z-10 font-body text-xs sm:text-sm lg:text-base text-text-muted/70 max-w-xl mx-auto mb-7 font-normal leading-relaxed">
            Join 500+ companies saving 40+ hours weekly with automated workflows. Get your free audit and see exactly how much you can save.
          </p>

          {/* Gradient Primary Button */}
          <div className="relative z-10">
            <a
              href="#"
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-white bg-gradient-primary border border-primary/60 shadow-glow-electric hover:bg-none hover:bg-surface-secondary hover:border-primary/50 hover:shadow-glow-subtle hover:scale-[1.02] transition-all duration-300 ease-in-out gap-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span>Free Audit Now</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}
