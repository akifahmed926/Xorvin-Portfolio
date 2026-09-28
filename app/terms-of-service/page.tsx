'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-white flex flex-col justify-between">
      <Navbar />

      <div className="relative w-full pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 z-30 flex-grow">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#0087ED]/15 blur-[140px] rounded-full pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Main Title */}
          <h1 
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-8 text-center drop-shadow-[0_0_20px_rgba(40,137,255,0.3)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Terms &amp; Conditions
          </h1>

          {/* Policy Content Container */}
          <div className="space-y-8 font-body text-sm sm:text-base text-text-muted/90 leading-relaxed bg-[#050C1A]/60 border border-[#2989FF]/20 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-[0_0_35px_rgba(0,135,237,0.12)]">
            
            {/* Last Updated */}
            <p className="text-xs sm:text-sm font-semibold text-text-muted">
              <strong className="text-white font-semibold">Last updated:</strong> 01/02/2026.
            </p>

            {/* Intro Paragraphs */}
            <p>
              Welcome to xorvin. By accessing or using our website, products, or services, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use xorvin.
            </p>

            {/* Section 1 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                1. Definitions
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-white font-semibold">&quot;xorvin&quot;</strong>, <strong className="text-white font-semibold">&quot;we&quot;</strong>, <strong className="text-white font-semibold">&quot;our&quot;</strong>, or <strong className="text-white font-semibold">&quot;us&quot;</strong> refers to xorvin.
                </li>
                <li>
                  <strong className="text-white font-semibold">&quot;User&quot;</strong>, <strong className="text-white font-semibold">&quot;you&quot;</strong>, or <strong className="text-white font-semibold">&quot;your&quot;</strong> refers to anyone accessing or using our services.
                </li>
                <li>
                  <strong className="text-white font-semibold">&quot;Services&quot;</strong> refers to the xorvin website, products, features, and related offerings.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                2. Use of Services
              </h2>
              <p className="mb-3">
                You agree to use xorvin only for lawful purposes and in accordance with these Terms.
              </p>
              <p className="mb-2">You must not:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Use the service for illegal or unauthorized activities</li>
                <li>Attempt to disrupt or compromise system security</li>
                <li>Copy, modify, or redistribute any part of the service without permission</li>
                <li>Use xorvin to transmit harmful or malicious content</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                3. Account &amp; Access
              </h2>
              <p className="mb-2">If you create an account:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                4. Intellectual Property
              </h2>
              <p className="mb-2">All content, including but not limited to:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 mb-3">
                <li>Text</li>
                <li>Graphics</li>
                <li>Logos</li>
                <li>UI elements</li>
                <li>Code</li>
                <li>Design assets</li>
              </ul>
              <p className="mb-3">
                are the exclusive property of xorvin and are protected by intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, or exploit any content without prior written consent.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                5. Payments &amp; Subscriptions
              </h2>
              <p className="mb-2">If xorvin offers paid plans:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Prices and billing terms will be clearly communicated</li>
                <li>Payments are non-refundable unless stated otherwise</li>
                <li>We reserve the right to change pricing or plans with prior notice</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                6. Third-Party Services
              </h2>
              <p className="mb-3">
                xorvin may integrate or link to third-party tools or services.
              </p>
              <p className="mb-3">
                We are not responsible for the content, policies, or practices of third-party providers.
              </p>
              <p>
                Use of third-party services is at your own risk.
              </p>
            </div>

            {/* Section 7 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                7. Disclaimer of Warranties
              </h2>
              <p className="mb-3">
                xorvin is provided on an <strong className="text-white font-semibold">&quot;as is&quot;</strong> and <strong className="text-white font-semibold">&quot;as available&quot;</strong> basis.
              </p>
              <p className="mb-2">We do not guarantee:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Error-free or uninterrupted service</li>
                <li>Specific results or outcomes</li>
                <li>Accuracy or reliability of generated content</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                8. Limitation of Liability
              </h2>
              <p className="mb-2">
                To the maximum extent permitted by law, xorvin shall not be liable for any:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 mb-3">
                <li>Indirect or consequential damages</li>
                <li>Loss of data, revenue, or profits</li>
                <li>Business interruption</li>
              </ul>
              <p>
                arising from the use or inability to use our services.
              </p>
            </div>

            {/* Section 9 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                9. Termination
              </h2>
              <p className="mb-3">
                We reserve the right to suspend or terminate access to xorvin at any time, without prior notice, if you violate these Terms.
              </p>
              <p>
                Upon termination, your right to use the services will immediately cease.
              </p>
            </div>

            {/* Section 10 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                10. Changes to Terms
              </h2>
              <p className="mb-3">
                We may update these Terms &amp; Conditions at any time.
              </p>
              <p className="mb-3">
                Changes will be effective upon posting on this page.
              </p>
              <p>
                Continued use of xorvin constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Section 11 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                11. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and interpreted in accordance with the laws without regard to conflict of law principles.
              </p>
            </div>

            {/* Section 12 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                12. Contact Information
              </h2>
              <p className="mb-3">
                If you have any questions about these Terms &amp; Conditions, please contact us at:
              </p>
              <div className="space-y-1">
                <p>
                  <strong className="text-white font-semibold">Email:</strong>{' '}
                  <a href="mailto:xorvin@gmail.com" className="text-[#0087ED] hover:underline">
                    xorvin@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-white font-semibold">Phone:</strong>{' '}
                  <a href="tel:+031323434" className="text-[#0087ED] hover:underline">
                    +031323434
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
