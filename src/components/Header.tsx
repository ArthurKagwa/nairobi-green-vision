
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight">GreenMap Nairobi</span>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</a>
          <a href="#visualization" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Map</a>
          <a href="#community" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Community</a>
          <a href="#data" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Data</a>
          <Button size="sm" className="bg-green-500 hover:bg-green-600">Get Involved</Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
