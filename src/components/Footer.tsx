
import React from 'react';
import { Facebook, Twitter, Instagram, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span className="font-bold text-xl">GreenMap Nairobi</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              A community-powered initiative transforming Nairobi's urban heat islands through technology, 
              collaboration, and strategic tree planting for a cooler, greener future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Impact Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News & Updates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail size={14} className="mr-2 text-gray-400" />
                <a href="mailto:info@greenmapnairobi.org" className="text-gray-400 hover:text-white transition-colors">
                  info@greenmapnairobi.org
                </a>
              </li>
              <li className="text-gray-400">
                Community Center, <br/>
                Kibera Drive, <br/>
                Nairobi, Kenya
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="font-bold mb-2">Partners</h3>
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-8 bg-white/10 rounded flex items-center justify-center text-xs">UN</div>
                <div className="h-8 w-8 bg-white/10 rounded flex items-center justify-center text-xs">WRI</div>
                <div className="h-8 w-8 bg-white/10 rounded flex items-center justify-center text-xs">UNEP</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 GreenMap Nairobi. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
