import React from 'react';
import { CheckCircle, Target, Users, Award } from 'lucide-react';

const About = () => {
  const steps = [
    {
      number: '01',
      title: 'Business Analysis',
      description: 'We analyze your current processes and identify AI opportunities that deliver the highest ROI.'
    },
    {
      number: '02',
      title: 'Flexible Development',
      description: 'We suggest certain AI agents, you decide which ones we build.'
    },
    {
      number: '03',
      title: 'Deployment',
      description: 'We build, deploy, and implement your hand-picked agents into your business.'
    },
    {
      number: '04',
      title: 'Training & Support',
      description: 'We ensure successful adoption through comprehensive training and ongoing technical support.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Track Record of Success',
      description: 'We have successfully built 10+ AI agents and saved 1000+ annual billable hours for clients.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We partner with you throughout the entire journey, ensuring your success is our priority.'
    },
    {
      icon: Award,
      title: 'Lean Team',
      description: 'Wild Horse was founded by two college students. We bring scrappy, hungry, and authentic energy to every engagement.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How We Work */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Transform Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI implementation 
              that delivers real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#EF233C'}}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Wild Horse?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver AI solutions 
              that drive sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="p-4 rounded-lg inline-block mb-4" style={{backgroundColor: '#EF233C'}}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;