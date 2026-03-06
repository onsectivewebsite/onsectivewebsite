import React from 'react';
import { Users, Calendar, MessageSquare } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';

const Alumni: React.FC = () => {
  return (
    <>
      <SEOHead title="Alumni Network" description="Connect with former colleagues and stay part of the Onsective family." />
      
      <section className="pt-40 pb-20 bg-brand-primary text-brand-black text-center">
          <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-serif mb-6">Once Onsective,<br/>Always Onsective.</h1>
              <p className="text-xl text-brand-black/80 mb-8">
                  A global community of leaders, innovators, and friends.
              </p>
              <Button variant="secondary" size="lg">Alumni Portal Login</Button>
          </div>
      </section>

      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  <div>
                      <Users size={48} className="mx-auto text-brand-primary mb-6" />
                      <h3 className="text-2xl font-serif font-bold mb-4">Directory</h3>
                      <p className="text-gray-600">Find former colleagues and expand your professional network.</p>
                  </div>
                  <div>
                      <Calendar size={48} className="mx-auto text-brand-primary mb-6" />
                      <h3 className="text-2xl font-serif font-bold mb-4">Events</h3>
                      <p className="text-gray-600">Exclusive reunions and networking mixers in major cities.</p>
                  </div>
                  <div>
                      <MessageSquare size={48} className="mx-auto text-brand-primary mb-6" />
                      <h3 className="text-2xl font-serif font-bold mb-4">Mentorship</h3>
                      <p className="text-gray-600">Give back by mentoring the next generation of Onsective talent.</p>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default Alumni;