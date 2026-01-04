import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Data'; 
import { Star } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="text-center py-20 font-bold text-xl">Product Not Found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <div className="bg-gray-100 aspect-4/5 rounded-xl overflow-hidden shadow-sm">
           <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        </div>

        <div>
           <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">{product.category}</span>
           <h1 className="text-3xl md:text-4xl font-bold text-black mt-2 mb-4">{product.title}</h1>
           
           <div className="flex items-center gap-4 mb-6 text-yellow-500">
             <Star fill="currentColor" size={18} /> 
             <span className="text-black font-bold text-sm">{product.rating} ({product.reviews} Reviews)</span>
           </div>

           <div className="flex items-end gap-3 mb-6 border-b border-gray-200 pb-6">
              <span className="text-3xl font-bold">₹{product.price}</span>
              <span className="text-lg text-gray-400 line-through mb-1">₹{product.originalPrice}</span>
              <span className="text-green-600 font-bold text-sm mb-1 ml-2">{product.discount} OFF</span>
           </div>
           
           <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

           <div className="flex gap-4">
               <button className="flex-1 border-2 border-black py-4 uppercase font-bold tracking-widest hover:bg-black hover:text-white transition">Add to Cart</button>
               <button className="flex-1 bg-yellow-500 border-2 border-yellow-500 py-4 uppercase font-bold tracking-widest hover:bg-yellow-600 transition">Buy Now</button>
           </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;