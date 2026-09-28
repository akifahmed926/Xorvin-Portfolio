'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much does it cost?',
      answer:
        "It depends on what you need, so we don't have one flat price. After a short call about your business and what you want to fix, we send a clear fixed quote. You'll know the full cost before we start, with no surprise charges later.",
    },
    {
      question: 'How long does it take to get live?',
      answer:
        'Chatbots and automations usually go live within a couple of weeks, and websites take a few weeks. Bigger systems take longer. You get a clear timeline in your quote, and we keep you updated along the way.',
    },
    {
      question: "What's the process? What do you need from me?",
      answer:
        'We start with a short call to understand your business. Then we send a plan and quote, build it, and let you test everything before launch. From your side, we mostly need your menu, service details or workflow, plus a few quick approvals.',
    },
    {
      question: "Will the chatbot get things wrong? What if a customer asks something it can't handle?",
      answer:
        "We test it against real customer messages before launch. If it doesn't know an answer, it passes the chat to someone on your team instead of guessing. You can also see the conversations and update its answers anytime.",
    },
    {
      question: 'Do I own the system, and what happens after launch?',
      answer:
        'Yes, you own what we build for you. After launch we help fix any issues, and if you want ongoing changes or monitoring, we offer a monthly support option. You can also just reach out when you need something.',
    },
    {
      question: "I'm not technical. Can I still manage it?",
      answer:
        "Yes. We build things so you can run them without coding, and we walk you through everything after launch. If you'd rather not touch anything, we can handle updates for you.",
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
