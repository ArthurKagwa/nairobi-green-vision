
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-heat-dark/70 to-heat-light/70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" fill=\"none\" stroke=\"%23FFFFFF\" stroke-width=\"0.5\" stroke-dasharray=\"5,5\" /></svg>')] bg-repeat opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Nairobi's Urban Heat Islands
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            A community-powered initiative using digital tools and Earth Observation data to create 
            cooler, greener, and more sustainable urban spaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              Explore The Map
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Learn How It Works
            </Button>
          </div>
          
          {/* SDG Icons */}
          <div className="mt-12 flex items-center gap-4">
            <p className="text-white/80 text-sm">Supporting SDGs:</p>
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center" title="SDG 11: Sustainable Cities & Communities">
                <span className="font-bold text-white">11</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center" title="SDG 13: Climate Action">
                <span className="font-bold text-white">13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;
