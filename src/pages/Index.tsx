
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ComparisonMap from '@/components/ComparisonMap';
import CommunitySection from '@/components/Community';
import DataSection from '@/components/DataSection';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ComparisonMap />
        <CommunitySection />
        <DataSection />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
