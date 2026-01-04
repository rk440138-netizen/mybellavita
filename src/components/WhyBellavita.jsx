import React from 'react';

const WhyBellavita = () => {
  return (
    <section className="border-t border-b border-gray-100 py-20 bg-white" aria-label="Why Choose Us">
      
      <h2 className="text-center text-2xl md:text-3xl font-medium text-black uppercase tracking-wide mb-16">
        WHY BELLAVITA?
      </h2>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
         
         {/* 1. Cruelty Free */}
         <div className="flex flex-col items-center gap-4 group">
             <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                {/* Rabbit SVG */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M12 15c-1.5 0-3-1-3-3 0-1.5 3-5 3-5s3 3.5 3 5c0 2-1.5 3-3 3z" />
                    <path d="M9 12c-1.5-2-3-6-3-8 0-1 1-2 2-2 1.5 0 3 4 3 6" />
                    <path d="M15 12c1.5-2 3-6 3-8 0-1-1-2-2-2-1.5 0-3 4-3 6" />
                    <path d="M10 16l2 1 2-1" />
                    <path d="M8 15h-2 M16 15h2" />
                </svg>
             </div>
             <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Cruelty Free</h4>
                <p className="text-[11px] text-gray-500 max-w-[180px] mx-auto leading-relaxed">
                    Kindness in every bottle: Our commitment to cruelty-free Products.
                </p>
             </div>
         </div>

         {/* 2. Fragrance Forward */}
         <div className="flex flex-col items-center gap-4 group">
             <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                {/* Perfume Bottle SVG */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <rect x="7" y="9" width="10" height="12" rx="3" />
                    <path d="M12 9V6" />
                    <rect x="10" y="4" width="4" height="2" rx="1" />
                    <circle cx="12" cy="15" r="3" />
                    <path d="M12 15m-1.5-1.5l3 3" />
                    <path d="M12 15m1.5-1.5l-3 3" />
                    <circle cx="18" cy="6" r="1.5" className="fill-black/10 stroke-none" />
                </svg>
             </div>
             <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Fragrance Forward</h4>
                <p className="text-[11px] text-gray-500 max-w-[180px] mx-auto leading-relaxed">
                    Luxurious & imported perfume oils in every product
                </p>
             </div>
         </div>

         {/* 3. Affordable Luxury */}
         <div className="flex flex-col items-center gap-4 group">
             <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                {/* Wallet SVG */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <rect x="3" y="6" width="18" height="14" rx="2" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M16 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v-4z" />
                </svg>
             </div>
             <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Affordable Luxury</h4>
                <p className="text-[11px] text-gray-500 max-w-[180px] mx-auto leading-relaxed">
                    Offering Premium Quality and Elegance at a Reasonable Price
                </p>
             </div>
         </div>

         {/* 4. Gender Neutral */}
         <div className="flex flex-col items-center gap-4 group">
             <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                {/* Gender Symbol SVG */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <circle cx="12" cy="12" r="7" />
                    <path d="M12 5V2" />
                    <path d="M12 22v-3" />
                    <path d="M10 2h4" />
                    <path d="M10 22h4" />
                    <path d="M9 12h6" />
                    <path d="M9 12h6 m0 0" /> 
                </svg>
             </div>
             <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Gender Neutral</h4>
                <p className="text-[11px] text-gray-500 max-w-[180px] mx-auto leading-relaxed">
                    Elevate your self-care routine with bath, body and personal care for all
                </p>
             </div>
         </div>

      </div>
    </section>
  );
};

export default WhyBellavita;