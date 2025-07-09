import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Turning <span className="text-gray-500">workhorses</span> into <span style={{color: '#EF233C'}}>racehorses</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We build custom AI agents for your business, maximizing employee efficiency and driving bottom-line growth.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
  href="https://calendly.com/bradhh2005/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2 hover:opacity-90"
  style={{backgroundColor: '#EF233C'}}
>
  <span>Start Your AI Journey</span>
  <ArrowRight className="h-5 w-5" />
</a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: '#EF233C'}}>10+</div>
                <div className="text-gray-600">Agents Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: '#EF233C'}}>100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: '#EF233C'}}>24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;