import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProposalsSection from './components/ProposalsSection';
import VenueCarousel from './components/VenueCarousel';
import ExperienceCalculator from './components/ExperienceCalculator';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  const [selectedProposalTitle, setSelectedProposalTitle] = useState<string>('Cumpleaños Inolvidables');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  const handleSelectProposal = (title: string) => {
    setSelectedProposalTitle(title);
  };

  const handleOpenImageModal = (imgUrl: string, title: string) => {
    setModalImg(imgUrl);
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setModalOpen(false);
    setModalImg(null);
    setModalTitle(null);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-[#006bb3] selection:text-white pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <ProposalsSection 
          onSelectProposal={handleSelectProposal} 
          onOpenImageModal={handleOpenImageModal} 
        />
        <VenueCarousel 
          onOpenImageModal={handleOpenImageModal} 
        />
        <ExperienceCalculator 
          selectedProposalTitle={selectedProposalTitle} 
        />
        <Testimonials />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />

      <ImageModal
        isOpen={modalOpen}
        imgUrl={modalImg}
        title={modalTitle}
        onClose={handleCloseImageModal}
      />

      {/* Mobile App-like Bottom Navigation with adventure icons */}
      <MobileBottomNav />
    </div>
  );
}
