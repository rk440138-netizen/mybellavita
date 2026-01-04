import React from 'react';
import { Link } from 'react-router-dom';
import { Star, BadgeCheck } from 'lucide-react';
// 1. Import Cart Context
import { useCart } from '../context/CartContext';

// 2. Change Props to accept 'product' object
const ProductCard = ({ product }) => {
  
  // 3. Get addToCart function
  const { addToCart } = useCart();

  // Destructure values from product object for UI
  const { id, title, category, price, originalPrice, rating, reviews, tag, discount, image, btnText } = product;

  return (
    <div className="group flex flex-col h-full bg-transparent relative">
      
      <Link to={`/product/${id}`} className="block overflow-hidden relative mb-3">
        <div className="aspect-4/5 w-full overflow-hidden bg-[#f3f3f3] relative">
           <img 
             src={image} 
             alt={title} 
             className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 mix-blend-multiply" 
           />
           {tag && (
             <div className={`absolute top-0 left-0 z-10 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm
               ${tag === 'NEW' ? 'bg-[#e05d5d]' : 'bg-[#d69e75]'}`}>
               {tag}
             </div>
           )}
           {discount && (
             <div className="absolute bottom-2 left-2 z-10 bg-[#6BCBAF] text-white text-[10px] font-bold px-2 py-1 shadow-sm">
               {discount}
             </div>
           )}
        </div>
      </Link>

      <div className="grow flex flex-col gap-1 px-1">
        <p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">
          {category || "Fragrance"}
        </p>
        <h3 className="text-[14px] font-bold text-gray-900 leading-tight truncate">
          {title}
        </h3>
        <div className="flex items-center text-[12px] mt-1 mb-2 gap-2">
          <div className="flex items-center gap-1">
             <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
             <span className="font-bold text-gray-800">{rating || 4.5}</span>
          </div>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-1">
             <BadgeCheck className="w-3.5 h-3.5 fill-blue-500 text-white" />
             <span className="text-gray-500 text-[11px] font-medium">({reviews || 120} Reviews)</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-black text-base">₹{price}</span>
          {originalPrice && (
            <span className="text-xs text-gray-400 line-through decoration-gray-400">₹{originalPrice}</span>
          )}
        </div>
      </div>

      {/* --- SHINING BUTTON START --- */}
      <button 
        onClick={() => addToCart(product)} // 4. Connect Click Event
        className="group/btn relative w-full bg-[#1a1a1a] text-white text-[11px] font-bold py-3 uppercase tracking-[0.15em] shadow-sm mt-auto overflow-hidden cursor-pointer"
      >
        {/* Text Layer */}
        <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
            {btnText || "ADD TO CART"}
        </span>

        {/* The Shine Element */}
        <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-all duration-1000 ease-in-out group-hover/btn:left-full"></div>
      </button>
      {/* --- SHINING BUTTON END --- */}

    </div>
  );
};

export default ProductCard;