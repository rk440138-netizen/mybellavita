import React, { useState } from 'react';
import { Star, Instagram, ArrowLeft, ArrowRight } from 'lucide-react';

const CustomerReviews = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const customerReviews = [
    { id: 1, name: "Sanna Thakur", handle: "sannathakur_", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", text: "BELLAVITA has raised the bar for the perfume industry. Such good quality at very affordable price" },
    { id: 2, name: "Pulkit Bangia", handle: "pulkitbangia", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400", text: "Bought it cause it was so affordable but I never thought the fragrance would be this good as well." },
    { id: 3, name: "Avantika", handle: "avantikaginodia", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400", text: "I have a very different taste when it comes to fragrance, I tried BELLAVITA and Oh My God I have only been using CEO Women now." },
    { id: 4, name: "Gunveet", handle: "gunveetdang", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", text: "I always buy perfumes based on notes and BELLAVITA makes it so easy to choose the perfect scent." },
    { id: 5, name: "Simran Narg", handle: "simrannarg", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400", text: "One of the best luxury perfumes and the packaging is just cherry on top." }
  ];

  const nextReview = () => setActiveReviewIndex((prev) => (prev + 1) % customerReviews.length);
  const prevReview = () => setActiveReviewIndex((prev) => (prev - 1 + customerReviews.length) % customerReviews.length);

  const visibleReviews = [
      (activeReviewIndex - 2 + customerReviews.length) % customerReviews.length,
      (activeReviewIndex - 1 + customerReviews.length) % customerReviews.length,
      activeReviewIndex,
      (activeReviewIndex + 1) % customerReviews.length,
      (activeReviewIndex + 2) % customerReviews.length,
  ].map(i => customerReviews[i]);

  return (
    <section className="bg-white py-15 overflow-hidden" aria-label="Customer Reviews">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-black uppercase tracking-wide mb-16">
          WHAT OUR CUSTOMERS HAVE TO SAY
        </h2>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-10 relative">
          <button onClick={prevReview} className="p-2 text-gray-500 hover:text-black transition-colors" aria-label="Previous Review">
             <ArrowLeft size={24} strokeWidth={1.5} />
          </button>

          <div className="flex items-center justify-center gap-8 md:gap-14 h-48">
             {visibleReviews.map((review, idx) => {
                const isCenter = idx === 2;
                const isSide = idx === 1 || idx === 3;
                return (
                  <div key={idx} className={`transition-all duration-1000 ease-in-out overflow-hidden shadow-sm shrink-0 object-cover
                    ${isCenter ? "w-40 h-40 md:w-48 md:h-48 rounded-4xl opacity-100 scale-100 z-10 ring-4 ring-white" : isSide ? "w-24 h-24 md:w-32 md:h-32 rounded-3xl opacity-40 scale-90 grayscale-30" : "w-16 h-16 md:w-20 md:h-20 rounded-2xl opacity-10 scale-75 grayscale"}`}>
                     <img src={review.image} alt={`Review by ${review.name}`} loading="lazy" className="w-full h-full object-cover"/>
                  </div>
                );
             })}
          </div>

          <button onClick={nextReview} className="p-2 text-gray-500 hover:text-black transition-colors" aria-label="Next Review">
             <ArrowRight size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto animate-fade-in mt-2">
           <div className="flex justify-center gap-1 mb-5 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={22} fill="currentColor" strokeWidth={0} />)}
           </div>
           <blockquote className="text-base md:text-[17px] text-gray-600 leading-relaxed mb-6 font-normal px-4">
              "{customerReviews[activeReviewIndex].text}"
           </blockquote>
           <cite className="not-italic flex flex-col items-center gap-2">
              <span className="text-gray-500 font-serif italic text-lg">– {customerReviews[activeReviewIndex].name}</span>
              <a href={`https://instagram.com/${customerReviews[activeReviewIndex].handle}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors font-medium">
                  <Instagram size={16} /> {customerReviews[activeReviewIndex].handle}
              </a>
           </cite>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;