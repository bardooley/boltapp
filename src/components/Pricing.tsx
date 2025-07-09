import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plan = {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Comprehensive AI transformation for large organizations',
    features: [
      '1-5 custom AI agents',
      'Complete design control',
      'Dedicated project team',
      '24/7 premium support',
      'Free employee training',
      'Ongoing optimization',
    ],
    cta: 'Contact Sales'
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment Plans That Scale
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">You choose how much of your business you want to supercharge. Pricing responds accordingly.</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <a
  href="https://calendly.com/bradhh2005/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 bg-[#EF233C] text-white hover:bg-[#d02035] transform hover:scale-105"
>
  <span>{plan.cta}</span>
  <ArrowRight className="h-4 w-4" />
</a>

          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            100% Success Guarantee
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            If you don't like the agents we deliver, you won't pay a cent. You only pay for the value we bring, never anything more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;