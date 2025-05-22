
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-heat-dark/70 to-heat-light/70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%220.5%22%20stroke-dasharray%3D%225%2C5%22%20%2F%3E%3C%2Fsvg%3E')] bg-repeat opacity-10"></div>
      
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
