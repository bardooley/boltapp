import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/ChatGPT Image Jul 8, 2025, 08_51_17 PM.png" 
              alt="Wild Horse Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-gray-900">Wild Horse</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 hover:opacity-90" style={{backgroundColor: '#EF233C'}}>
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2">About</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2">Contact</a>
              <button className="text-white px-6 py-2 rounded-lg mx-4 transition-all hover:opacity-90" style={{backgroundColor: '#EF233C'}}>
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;