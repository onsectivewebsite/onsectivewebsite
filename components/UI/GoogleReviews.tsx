import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// --- Hardcoded Real Google Reviews ---
const REAL_REVIEWS = [
    {
        author: 'Rohit Kumar',
        rating: 5,
        date: '2 weeks ago',
        avatar: 'RK',
        profile_photo_url: 'https://lh3.googleusercontent.com/a/ACg8ocJZZdDDS3oOSVBiZep355CgXZck7MUROsHcld31-hIjeVbdjQ=s128-c0x00000000-cc-rp-mo',
        text: 'Got my custom crm done onsective is place where my demand came to reality it tool time but ues highly satisfied with final version',
    },
    {
        author: 'K Khanna',
        rating: 5,
        date: '3 weeks ago',
        avatar: 'KK',
        profile_photo_url: 'https://lh3.googleusercontent.com/a/ACg8ocIe6R1uFhsfh6mFRrLKLPoPaiE88kFI9hSffg8ZdDy6PE3f6w=s128-c0x00000000-cc-rp-mo',
        text: 'Thank u for serving my interest.',
    },
    {
        author: 'Pardeep Bhatti',
        rating: 5,
        date: 'a week ago',
        avatar: 'PB',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjWvDqimIjZQV2K4MpfQb-AgVoyHDh-ds8vABB958GwRBpBZdfwr=s128-c0x00000000-cc-rp-mo',
        text: 'Beat crm',
    },
];

const OVERALL_RATING = 5.0;
const TOTAL_REVIEWS = 3;
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Onsective+reviews';

const StarRating: React.FC<{ rating: number; size?: number }> = ({ rating, size = 16 }) => (
    <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
            <Star
                key={star}
                size={size}
                className={star <= Math.round(rating) ? 'text-[#FBBC04] fill-[#FBBC04]' : 'text-gray-300'}
            />
        ))}
    </div>
);

const GoogleLogo = () => (
    <svg viewBox="0 0 48 48" className="w-7 h-7 shrink-0" aria-label="Google">
        <path fill="#EA4335" d="M24 9.5c3.3 0 5.9 1.1 8 2.9l5.9-5.9C34.5 3.4 29.6 1.5 24 1.5 15.5 1.5 8.3 6.5 5.1 13.7l6.9 5.4C13.6 13.2 18.4 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17z" />
        <path fill="#FBBC05" d="M12 28.6c-.5-1.5-.8-3-.8-4.6s.3-3.1.8-4.6l-6.9-5.4C3.5 17.1 2.5 20.4 2.5 24s1 6.9 2.6 9.9l6.9-5.3z" />
        <path fill="#34A853" d="M24 46.5c5.5 0 10.2-1.8 13.6-4.9l-7.5-5.8c-1.9 1.3-4.3 2.1-6.1 2.1-5.6 0-10.4-3.7-12.1-8.8l-6.9 5.3C8.3 41.5 15.5 46.5 24 46.5z" />
        <path fill="none" d="M2.5 2.5h43v43h-43z" />
    </svg>
);

const GoogleReviews: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startAutoPlay = () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % REAL_REVIEWS.length);
        }, 4500);
    };

    useEffect(() => {
        startAutoPlay();
        return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
    }, []);

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + REAL_REVIEWS.length) % REAL_REVIEWS.length);
        startAutoPlay();
    };

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % REAL_REVIEWS.length);
        startAutoPlay();
    };

    const review = REAL_REVIEWS[current];
    if (!review) return null;

    return (
        <div className="bg-white border-t border-slate-100 py-12 px-4 sm:px-10 lg:px-12">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Left: Rating Summary */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start gap-3">
                        <div className="flex items-center gap-3">
                            <GoogleLogo />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 block">Google Reviews</span>
                        </div>

                        <div className="text-6xl font-serif font-black text-brand-black leading-none">{OVERALL_RATING.toFixed(1)}</div>
                        <StarRating rating={OVERALL_RATING} size={22} />
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{TOTAL_REVIEWS} Verified Reviews</p>

                        <a
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-brand-primary hover:text-brand-black transition-colors mt-2"
                        >
                            View All on Google <ExternalLink size={12} />
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block lg:col-span-1 h-full w-px bg-slate-100 mx-auto" />

                    {/* Review Card */}
                    <div className="lg:col-span-7 relative">
                        <div
                            key={current}
                            className="p-8 bg-slate-50 border border-slate-100 hover:border-brand-primary/30 transition-all animate-fade-up"
                        >
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex items-center gap-4">
                                    {review.profile_photo_url ? (
                                        <img
                                            src={review.profile_photo_url}
                                            alt={review.author}
                                            className="w-10 h-10 rounded-full object-cover shrink-0"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                                if (fallback) fallback.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div
                                        className="w-10 h-10 rounded-full bg-brand-black text-brand-primary flex items-center justify-center text-xs font-black shrink-0"
                                        style={{ display: review.profile_photo_url ? 'none' : 'flex' }}
                                    >
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <p className="font-black text-brand-black text-sm uppercase tracking-wide">{review.author}</p>
                                        <p className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">{review.date}</p>
                                    </div>
                                </div>
                                <StarRating rating={review.rating} size={14} />
                            </div>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed line-clamp-4">"{review.text}"</p>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between mt-5">
                            <div className="flex gap-2">
                                {REAL_REVIEWS.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => { setCurrent(i); startAutoPlay(); }}
                                        className={`h-1 transition-all duration-300 ${i === current ? 'w-8 bg-brand-primary' : 'w-2 bg-slate-200'}`}
                                        aria-label={`Review ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button onClick={handlePrev} className="w-9 h-9 border border-slate-200 hover:border-brand-black hover:bg-brand-black hover:text-white transition-all flex items-center justify-center" aria-label="Previous">
                                    <ChevronLeft size={16} />
                                </button>
                                <button onClick={handleNext} className="w-9 h-9 border border-slate-200 hover:border-brand-black hover:bg-brand-black hover:text-white transition-all flex items-center justify-center" aria-label="Next">
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GoogleReviews;
