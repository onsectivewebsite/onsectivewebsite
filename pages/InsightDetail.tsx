import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Quote } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { ALL_INSIGHTS } from '../constants';
import Button from '../components/UI/Button';

const InsightDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // Search in the full database of 500+ insights
    const post = ALL_INSIGHTS.find(p => p.id === id);

    if (!post) {
        return <Navigate to="/insights" replace />;
    }

    // Helper to generate content based on topic to make the 500 pages feel unique
    const renderDynamicContent = () => {
        return (
            <div className="space-y-12">
                <p className="lead text-2xl text-brand-black font-serif leading-relaxed italic">
                    {post.excerpt} In a global landscape driven by {post.category}, institutional excellence requires not just adaptation, but architectural foresight.
                </p>

                <p className="text-lg font-medium text-slate-700 leading-relaxed">
                    As enterprise organizations globally grapple with the acceleration of <strong>{post.title.split(':')[0]}</strong>, the divide between strategic leaders and institutional laggards is widening.
                    Our research indicates that entities leveraging {post.category} frameworks effectively are observing a 30% increase in structural operational efficiency.
                </p>

                <h2 className="text-3xl font-serif text-brand-black mt-16 mb-8 uppercase tracking-widest border-b border-brand-primary/20 pb-4">The Strategic Imperative of {post.category}</h2>
                <p className="text-lg font-medium text-slate-700 leading-relaxed">
                    Implementing {post.title} is no longer an optional maneuver; it is an existential mandate. However, the path to maturity is fraught with friction,
                    from legacy architectural debt to fragmented data governance. To secure long-term value, executive leadership must coordinate a unified roadmap.
                </p>

                <div className="bg-brand-black p-12 text-white border-l-8 border-brand-primary my-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full"></div>
                    <Quote className="text-brand-primary mb-8" size={48} />
                    <p className="text-2xl font-serif italic mb-8 leading-relaxed">
                        "The true value of {post.category} resides not in the technology itself, but in the institutional problems it resolves at a global scale."
                    </p>
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary">— Principal Solutions Architect, Onsective</div>
                </div>

                <h2 className="text-3xl font-serif text-brand-black mt-16 mb-8 uppercase tracking-widest">Strategic Execution Phases</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                    <div className="p-10 bg-slate-50 border border-slate-100 group hover:border-brand-primary transition-all duration-500">
                        <div className="text-4xl font-serif text-brand-primary/20 font-black mb-4 group-hover:text-brand-primary transition-colors">01</div>
                        <h3 className="font-bold text-xs uppercase tracking-widest mb-4 text-brand-black">Sovereign Audit</h3>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">Evaluating current maturity levels in {post.category} against elite institutional benchmarks.</p>
                    </div>
                    <div className="p-10 bg-slate-50 border border-slate-100 group hover:border-brand-primary transition-all duration-500">
                        <div className="text-4xl font-serif text-brand-primary/20 font-black mb-4 group-hover:text-brand-primary transition-colors">02</div>
                        <h3 className="font-bold text-xs uppercase tracking-widest mb-4 text-brand-black">Structural Roadmap</h3>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">Defining mission-critical KPIs and governance milestones for your {post.title} mandate.</p>
                    </div>
                    <div className="p-10 bg-slate-50 border border-slate-100 group hover:border-brand-primary transition-all duration-500">
                        <div className="text-4xl font-serif text-brand-primary/20 font-black mb-4 group-hover:text-brand-primary transition-colors">03</div>
                        <h3 className="font-bold text-xs uppercase tracking-widest mb-4 text-brand-black">Agile Deployment</h3>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">Executing rapid sprints to validate structural ROI before enterprise-wide scaling.</p>
                    </div>
                </div>

                <p className="text-lg font-medium text-slate-700 leading-relaxed">
                    Ultimately, success in {post.category} is defined by the precision of execution. By adopting this rigorous framework, your organization can transform technological disruption into a permanent competitive advantage.
                </p>
            </div>
        );
    };

    return (
        <>
            <SEOHead title={post.title} description={post.excerpt} />

            <article className="pt-32 pb-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center mb-16">
                    <Link to="/insights" className="inline-flex items-center text-slate-600 hover:text-brand-primary mb-12 text-[10px] font-black uppercase tracking-[0.4em] transition-all group">
                        <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-2 transition-transform" /> Return to Intelligence Archive
                    </Link>
                    <div className="mb-8">
                        <span className="bg-brand-black text-brand-primary px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em]">{post.category}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-brand-black mb-10 leading-tight">{post.title}</h1>
                    <div className="flex justify-center items-center gap-10 text-slate-600 text-[10px] font-black uppercase tracking-widest border-t border-b border-slate-100 py-8">
                        <div className="flex items-center gap-3"><Calendar size={16} className="text-brand-primary" /> {post.date}</div>
                        <div className="flex items-center gap-3"><Clock size={16} className="text-brand-primary" /> {post.readTime}</div>
                        <div className="flex items-center gap-3"><User size={16} className="text-brand-primary" /> Onsective Research</div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 mb-20 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-auto aspect-[21/9] max-h-[400px] object-cover shadow-premium grayscale hover:grayscale-0 transition-all duration-1000" />
                </div>

                <div className="max-w-3xl mx-auto px-6">
                    {renderDynamicContent()}

                    <div className="mt-24 pt-16 border-t border-slate-100">
                        <h3 className="text-3xl font-serif font-black text-brand-black mb-10">Initiate Structural Growth.</h3>
                        <div className="bg-slate-900 text-white p-12 border-l-8 border-brand-primary">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                                <div>
                                    <p className="font-bold text-xl text-brand-primary mb-2 uppercase tracking-tight">Consult with a {post.category} Lead</p>
                                    <p className="text-gray-300 text-sm font-medium">Secure a personalized strategic briefing for your enterprise.</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="/documents/CompanyProfile.pdf" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-brand-black">Download PDF Brief</Button>
                                    </a>
                                    <Link to="/contact">
                                        <Button variant="primary" size="lg" className="whitespace-nowrap px-10">Request Briefing</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default InsightDetail;