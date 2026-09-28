import Navbar from '@/components/Navbar';
import HeroContent from '@/components/HeroContent';
import MarqueeBand from '@/components/MarqueeBand';
import FeatureShowcase from '@/components/FeatureShowcase';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-white">
      <Navbar />
      <HeroContent />
      <MarqueeBand />
      <FeatureShowcase />
      <CaseStudiesSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
