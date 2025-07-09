import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how AI can drive growth and efficiency in your organization. 
            Schedule a consultation with our experts today.
          </p>
        </div>

      <div className="flex justify-center">

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg border border-red-200">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">harrinfa@bc.edu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-2xl p-8 text-white" style={{backgroundColor: '#EF233C'}}>
              <h4 className="text-xl font-bold mb-4">Schedule a Free Consultation</h4>
              <p className="mb-6">
                Book a 30-minute discovery call to discuss your AI implementation needs 
                and explore how we can help transform your business.
              </p>
              <a 
                href="https://calendly.com/bradhh2005/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-100" 
                style={{color: '#EF233C'}}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;