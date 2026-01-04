import React from 'react';
import { Link } from 'react-router-dom';

const CrazyDeals = () => {
  // Data matching your image
  const offers = [
    {
      id: 1,
      title: "Ultimate Perfume Box",
      subtitle: "Buy any 3 perfumes",
      price: "1,298",
      originalPrice: "2,997",
      discount: "57%",
      offerText: "3 for ₹1298",
      image: "https://bellavitaluxury.co.in/cdn/shop/files/678-548_aae2579d-17e6-4db1-92e7-a2aa88254ee9.jpg?v=1723227333&width=1000", // Replace with actual box image
      gradient: "bg-gradient-to-b from-[#f9f3e5] to-[#f0e4ce]" // Beige/Gold Gradient
    },
    {
      id: 2,
      title: "The Self Love Kit",
      subtitle: "Buy any 6 products",
      price: "1,298",
      originalPrice: "2,222",
      discount: "42%",
      offerText: "6 for ₹1298",
      image: "https://bellavitaorganic.com/cdn/shop/files/GlamGiftSet-01.jpg?v=1723291590 ", // Replace with actual kit image
      gradient: "bg-gradient-to-b from-[#fdfbf6] to-[#f4ecd9]"
    },
    {
      id: 3,
      title: "Scent Shower Combo",
      subtitle: "Buy any 3 products",
      price: "999",
      originalPrice: "2,222",
      discount: "55%",
      offerText: "3 for ₹999",
      image: "https://bellavitaorganic.com/cdn/shop/files/lifestyle.jpg?v=1728035006&width=3000", // Replace with actual combo image
      gradient: "bg-gradient-to-b from-[#f9f3e5] to-[#f0e4ce]"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-4 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Page Heading */}
        <h1 className="text-3xl font-medium text-center text-gray-900 mb-8 mt-4">Crazy Deals</h1>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="flex flex-col items-center group cursor-pointer">
              
              {/* Card Container */}
              <div className={`w-full aspect-4/5 ${offer.gradient} relative overflow-hidden rounded-sm mb-4 transition-transform duration-300 hover:shadow-lg`}>
                 
                 {/* Decorative Confetti (CSS Dots) */}
                 <div className="absolute top-10 left-4 text-yellow-500 opacity-50 text-xl">✨</div>
                 <div className="absolute bottom-20 right-4 text-yellow-600 opacity-50 text-xl">✨</div>

                 {/* Top Text: "Buy Any..." */}
                 <div className="pt-12 text-center z-10 relative">
                    <p className="text-sm text-gray-600 font-medium tracking-wide uppercase mb-1">Buy Any</p>
                    <div className="w-12 h-px bg-black mx-auto mb-2"></div>
                    <h2 className="text-4xl font-light text-black tracking-tight">{offer.offerText}</h2>
                    <p className="text-right w-full pr-16 text-xs font-bold text-red-600 mt-[-5px]">Only •</p>
                 </div>

                 {/* Product Image */}
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1/2">
                    <img 
                      src={offer.image} 
                      alt={offer.title} 
                      className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
              </div>

              {/* Bottom Details */}
              <div className="text-center">
                 <h3 className="text-base font-bold text-gray-900">{offer.title}</h3>
                 <p className="text-sm text-gray-500 mb-2">{offer.subtitle}</p>
                 
                 <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="font-bold text-black">₹{offer.price}</span>
                    <span className="text-gray-400 line-through decoration-gray-400">₹{offer.originalPrice}</span>
                    <span className="text-green-600 font-bold">↓ {offer.discount}</span>
                 </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CrazyDeals;