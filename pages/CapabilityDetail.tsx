import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronRight, Target } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { getCapabilityData } from '../data/capabilities';
import { SERVICES } from '../constants';

const CapabilityDetail: React.FC = () => {
  const { serviceId, capabilityId } = useParams<{ serviceId: string; capabilityId: string }>();
  
  const capabilityData = capabilityId ? getCapabilityData(capabilityId) : null;
  const parentService = SERVICES.find(s => s.path.includes(serviceId || ''));

  if (!capabilityData) {
    return <Navigate to={`/services/${serviceId}`} replace />;
  }

  const Icon = capabilityData.icon || Target;

  return (
    <>
      <SEOHead 
        title={`${capabilityData.title} | Strategic Domain Asset`} 
        description={capabilityData.tagline} 
      />

      <section className="relative pt-40 pb-32 bg-brand-black text-white overflow-hidden">
         <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-secondary/40 to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-primary/5 rounded-tr-[100px]"></div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8 animate-fade-up">
                 <Link to="/services" className="hover:text-white transition-colors">Core Domains</Link>
                 <ChevronRight size={12} className="text-brand-primary" />
                 {parentService && (
                    <>
                        <Link to={parentService.path} className="hover:text-white transition-colors">{parentService.title}</Link>
                        <ChevronRight size={12} className="text-brand-primary" />
                    </>
                 )}
                 <span className="text-brand-primary">{capabilityData.title}</span>
             </div>

             <div className="max-w-4xl">
                 <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-10 rounded-none animate-fade-up delay-100">
                     <Icon size={32} className="text-brand-primary" />
                 </div>
                 <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight animate-fade-up delay-200">
                     {capabilityData.title}
                 </h1>
                 <p className="text-2xl text-gray-300 font-light leading-relaxed mb-12 animate-fade-up delay-300">
                     {capabilityData.tagline}
                 </p>
                 <div className="flex flex-wrap gap-6 animate-fade-up delay-300">
                     <Link to="/contact">
                        <Button variant="primary" size="lg">Initiate Consultation</Button>
                     </Link>
                     <a href="/assets/company-profile.pdf" target="_blank" rel="noopener noreferrer">
                         <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brand-black font-black">
                             Download Technical Specification (PDF)
                         </Button>
                     </a>
                     {parentService && (
                         <Link to={parentService.path}>
                            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brand-black font-black">
                                Return to Domain Specifications
                            </Button>
                         </Link>
                     )}
                 </div>
             </div>
         </div>
      </section>

      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                  <div>
                      <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">The Strategic Imperative</span>
                      <h2 className="text-4xl font-serif text-brand-black mb-10 leading-tight">Objective Authority</h2>
                      <div className="prose prose-lg text-slate-500 font-medium">
                          <p className="lead text-brand-black">{capabilityData.description}</p>
                          <p className="leading-relaxed">{capabilityData.strategicImportance}</p>
                      </div>
                  </div>
                  <div className="bg-slate-900 text-white p-12 border-l-8 border-brand-primary shadow-2xl">
                      <h3 className="text-2xl font-serif text-brand-primary mb-10 uppercase tracking-widest">Target Outcomes</h3>
                      <div className="space-y-10">
                          {capabilityData.outcomes.map((outcome, idx) => (
                              <div key={idx} className="flex items-center gap-8">
                                  <div className="w-20 h-20 bg-brand-primary text-brand-black flex items-center justify-center font-bold text-2xl font-serif shrink-0">
                                      {outcome.value}
                                  </div>
                                  <div className="flex-1">
                                      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-2">{outcome.label}</div>
                                      <div className="h-1 w-full bg-white/10 relative overflow-hidden">
                                          <div className="absolute inset-0 bg-brand-primary/40 w-2/3"></div>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-24 bg-brand-black text-white border-t border-white/5">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-24">
                   <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Delivery Framework</span>
                   <h2 className="text-4xl md:text-6xl font-serif mb-6">Mastery Orchestration</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {capabilityData.methodology.map((step, idx) => (
                       <div key={idx} className="relative bg-white/5 border border-white/10 p-12 hover:bg-brand-primary/10 transition-all duration-700 group">
                           <div className="text-6xl font-serif text-brand-primary/20 absolute top-6 right-8 group-hover:text-brand-primary/40 transition-colors">0{idx + 1}</div>
                           <h3 className="text-2xl font-serif mb-6 relative z-10 text-brand-primary">{step.title}</h3>
                           <p className="text-gray-400 text-sm leading-relaxed relative z-10 font-medium">{step.desc}</p>
                       </div>
                   ))}
               </div>
           </div>
      </section>

      <section className="py-32 bg-brand-primary">
          <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-4xl md:text-6xl font-serif text-brand-black mb-8 leading-tight">Upgrade your Strategic Assets.</h2>
              <p className="text-brand-black/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
                  Interface with Onsective partners to integrate {capabilityData.title} with structural precision.
              </p>
              <Link to="/contact">
                  <Button variant="secondary" size="lg" className="px-16 py-6 text-sm font-black">Initiate Deployment</Button>
              </Link>
          </div>
      </section>
    </>
  );
};

export default CapabilityDetail;