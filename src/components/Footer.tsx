import React from 'react';
import { Zap, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/ChatGPT Image Jul 8, 2025, 08_51_17 PM.png" 
                alt="Wild Horse Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold">Wild Horse</span>
            </div>
            <p className="text-gray-400">
              Transforming businesses through innovative AI solutions. 
              Turning workhorses into racehorses.
            </p>
            
          </div>

          
          

          
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Wild Horse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;