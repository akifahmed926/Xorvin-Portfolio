'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does Vortex make WhatsApp ordering easier?',
      answer:
        'Vortex keeps the ordering process simple, from browsing the menu to choosing delivery or pickup.',
    },
    {
      question: 'What does SM Manager help businesses with?',
      answer:
        'SM Manager helps businesses manage their social media work in a more organized way.',
    },
    {
      question: 'How does lead automation help businesses?',
      answer:
        'It collects and manages leads automatically, reducing repetitive manual work.',
    },
    {
      question: 'What makes a website conversion-focused?',
      answer:
        'We keep the design clear and guide visitors toward the action that matters.',
    },
    {
      question: 'Where can AI automation help a business?',
      answer:
        'It can handle repetitive tasks, save time, and make everyday workflows easier.',
    },
    {
      question: 'How do you keep modern websites easy to use?',
      answer:
        'We focus on clean layouts, clear content, and simple user flows.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-background border-t border-border-subtle/40 py-16 lg:py-28 px-4 sm:px-6 lg:px-12 z-30">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0087ED]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Area */}
        <div className="text-center mb-12 sm:mb-16 flex flex-col items-center">
          
          {/* FAQs Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/40 bg-surface/80 backdrop-blur-md text-xs font-semibold tracking-wider text-text-primary uppercase shadow-glow-subtle mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2.5" />
            FAQs
          </div>

          {/* Heading */}
          <h2 
            className="font-heading text-2xl sm:text-4xl lg:text-[42px] font-normal text-text-primary tracking-tight leading-[1.25] drop-shadow-[0_0_20px_rgba(40,137,255,0.25)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Got questions? <br />
            <span className="text-white">we&apos;ve got clear answers</span>
          </h2>

          {/* Subheading Paragraph */}
          <p className="font-body text-xs sm:text-sm lg:text-base text-text-muted/80 max-w-xl mx-auto mt-4 font-normal leading-relaxed">
            Considering AI automation for your business but have questions about implementation, costs, or results? You&apos;re not alone.
          </p>

        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? 'border-[#0087ED]/60 bg-gradient-to-b from-[#050C1A] to-[#030712] shadow-[0_0_30px_rgba(0,135,237,0.18)]'
                    : 'border-white/[0.08] bg-[#030712]/80 hover:border-white/20 hover:bg-[#050C1A]/60'
                }`}
              >
                {/* Question Header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group cursor-pointer"
                >
                  <span 
                    className="font-heading text-sm sm:text-base lg:text-lg font-normal text-white pr-4 leading-snug tracking-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {faq.question}
                  </span>

                  {/* Circular Blue Toggle Button */}
                  <div 
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0087ED] flex items-center justify-center flex-shrink-0 text-white shadow-[0_0_12px_rgba(0,135,237,0.6)] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'group-hover:scale-105'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Expandable Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="font-body text-xs sm:text-sm lg:text-base text-[#0087ED] leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
