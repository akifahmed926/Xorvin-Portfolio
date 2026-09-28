'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          {/* Policy Content Container */}
          <div className="space-y-8 font-body text-sm sm:text-base text-text-muted/90 leading-relaxed bg-[#050C1A]/60 border border-[#2989FF]/20 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-[0_0_35px_rgba(0,135,237,0.12)]">
            
            {/* Last Updated */}
            <p className="text-xs sm:text-sm font-semibold text-text-muted">
              <strong className="text-white font-semibold">Last updated:</strong> 01/02/2026.
            </p>

            {/* Intro Paragraphs */}
            <p>
              <strong className="text-white font-semibold">xorvin (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)</strong> respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website, products, or services.
            </p>

            <p>
              By accessing or using xorvin, you agree to the terms outlined in this Privacy Policy.
            </p>

            {/* Section 1 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect the following types of information
              </p>

              {/* Subsection a */}
              <div className="mb-5 pl-2 sm:pl-4">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-white mb-2">
                  a. Personal Information
                </h3>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Company name</li>
                  <li>Contact details</li>
                  <li>Any information you submit through forms</li>
                </ul>
              </div>

              {/* Subsection b */}
              <div className="mb-5 pl-2 sm:pl-4">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-white mb-2">
                  b. Usage Data
                </h3>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                </ul>
              </div>

              {/* Subsection c */}
              <div className="pl-2 sm:pl-4">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-white mb-2">
                  c. Cookies &amp; Tracking Technologies
                </h3>
                <p>
                  We use cookies and similar technologies to improve user experience, analyze traffic, and optimize our services.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Provide and maintain our services</li>
                <li>Improve website performance and user experience</li>
                <li>Communicate updates, offers, or important notices</li>
                <li>Respond to inquiries and support requests</li>
                <li>Analyze usage trends and product performance</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                3. Sharing of Information
              </h2>
              <p className="mb-3">
                We do <strong className="text-white font-bold">not sell</strong> your personal data.
              </p>
              <p className="mb-3">
                We may share information only with:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 mb-3">
                <li>Trusted third-party service providers (analytics, hosting, payment tools)</li>
                <li>Legal authorities if required by law</li>
                <li>Business partners strictly for service functionality</li>
              </ul>
              <p>
                All partners are required to keep your data secure.
              </p>
            </div>

            {/* Section 4 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                4. Data Security
              </h2>
              <p className="mb-3">
                We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, misuse, or alteration.
              </p>
              <p>
                However, no online system is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                5. Data Retention
              </h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations.
              </p>
            </div>

            {/* Section 6 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                6. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 mb-4">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Object to data processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                To exercise these rights, contact us at [<a href="mailto:xorvin@gmail.com" className="text-[#0087ED] hover:underline font-semibold">xorvin@gmail.com</a>].
              </p>
            </div>

            {/* Section 7 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                7. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.
              </p>
            </div>

            {/* Section 8 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                8. Children&apos;s Privacy
              </h2>
              <p>
                xorvin does not knowingly collect data from children under the age of 13. If we discover such data, we will delete it immediately.
              </p>
            </div>

            {/* Section 9 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
              </p>
            </div>

            {/* Section 10 */}
            <div className="pt-2">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                10. Contact Us
              </h2>
              <p className="mb-3">
                If you have any questions about this Privacy Policy, please contact us at:
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
