import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './Productcard';
import { bestsellersList, newArrivalsList } from '../Data';

const BestSellers = () => {
  const [activeTab, setActiveTab] = useState('BESTSELLERS');
  
  // 1. Determine which products to show
  const currentProducts = activeTab === 'BESTSELLERS' ? bestsellersList : newArrivalsList;

  // 2. Determine where the "View All" button should go
  const viewAllLink = activeTab === 'BESTSELLERS' ? '/bestseller' : '/Newarrivals';

  return (
    <section className="max-w-7xl mx-auto px-4 text-center" aria-label="Featured Products">
       
       {/* Tabs */}
       <div className="flex justify-center items-center gap-3 mb-10">
          <button 
            onClick={() => setActiveTab('BESTSELLERS')} 
            className={`text-2xl md:text-3xl transition-colors ${activeTab === 'BESTSELLERS' ? 'font-medium text-black' : 'font-medium text-gray-300 hover:text-gray-400'}`}
          >
            BESTSELLERS
          </button>
          
          <span className="text-2xl md:text-3xl font-light text-gray-300 mx-2">|</span>
          
          <button 
            onClick={() => setActiveTab('NEW ARRIVALS')} 
            className={`text-2xl md:text-3xl transition-colors ${activeTab === 'NEW ARRIVALS' ? 'font-medium text-black' : 'font-medium text-gray-300 hover:text-gray-400'}`}
          >
            NEW ARRIVALS
          </button>
       </div>
       
       {/* Product Grid */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-10 animate-fade-in mb-12">
          {currentProducts.map(item => (
            // ✅ FIX: Change {...item} to product={item}
            <ProductCard key={item.id} product={item} />
          ))}
       </div>

       {/* Dynamic View All Button */}
       <div className="text-center">
          <Link 
            to={viewAllLink} 
            className="inline-block relative group overflow-hidden bg-white border border-black px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300"
          >
             <span className="relative z-10 text-black group-hover:text-white transition-colors duration-700 delay-100">View All</span>
             <div className="absolute inset-0 bg-black w-[120%] h-full -left-[10%] transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out origin-left"></div>
          </Link>
       </div>
    </section>
  );
};

export default BestSellers;