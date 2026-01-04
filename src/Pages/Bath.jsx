import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star, ChevronDown, Check, Plus, X } from 'lucide-react';

const BathAndBody = () => {
  // --- STATES ---
  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(2500);

  // --- REFS ---
  const sortRef = useRef(null);
  const filterBtnRef = useRef(null);
  const filterPanelRef = useRef(null);

  // --- CLICK OUTSIDE LOGIC ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) setIsSortOpen(false);
      if (isFilterOpen && filterPanelRef.current && !filterPanelRef.current.contains(event.target) && filterBtnRef.current && !filterBtnRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen]);

  // --- PRODUCT DATA (Only 2 Products from Shop) ---
  const products = [
    { 
      id: 5, 
      name: "C-Glow Face Wash - 100ml", 
      type: "DE-TAN & BRIGHTENING", 
      category: "Skincare", 
      rating: 4.8, 
      reviews: 170, 
      price: 249, 
      originalPrice: 399, 
      discount: 21, 
      tag: "BESTSELLER", 
      image: "https://images.unsplash.com/photo-1556228720-1987bad27938?w=600" 
    },
    { 
      id: 9, 
      name: "Shower Gel - Refresh", 
      type: "BODY WASH", 
      category: "Bath & Body", 
      rating: 4.3, 
      reviews: 45, 
      price: 299, 
      originalPrice: 499, 
      discount: 40, 
      tag: "NEW", 
      image: "https://images.unsplash.com/photo-1556228720-1987bad27938?w=600" 
    }
  ];

  // --- FILTER & SORT LOGIC ---
  const getFilteredProducts = () => {
    return products.filter(product => product.price <= priceRange);
  };

  const getSortedProducts = (list) => {
    return [...list].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'bestselling') return (b.tag === 'BESTSELLER') - (a.tag === 'BESTSELLER');
        return 0;
    });
  };

  const visibleProducts = getSortedProducts(getFilteredProducts());

  const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Price: Low to High", value: "price-low" },
    { label: "Price: High to Low", value: "price-high" },
    { label: "Best Selling", value: "bestselling" },
  ];
  const currentSortLabel = sortOptions.find(opt => opt.value === sortBy)?.label;

  return (
    <main className="bg-white min-h-screen">
      

      {/* Page Header */}
      <div className="bg-gray-50 py-10 mb-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-2">Bath & Body</h1>
            <p className="text-gray-500 text-sm">Indulge in our luxurious range of shower gels and body lotions.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        
        {/* --- CONTROLS ROW --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-30">
            <div className="flex items-center gap-4 w-full md:w-auto">
                
                {/* 1. FILTER BUTTON */}
                <button 
                  ref={filterBtnRef} 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="relative overflow-hidden group bg-black text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider flex items-center gap-2 border border-black"
                >
                    <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                       {isFilterOpen ? 'Close' : 'Filter'} 
                       {isFilterOpen ? <X size={16} /> : <Plus size={16} />}
                    </span>
                </button>

                {/* 2. SORT DROPDOWN */}
                <div className="relative" ref={sortRef}>
                    <button 
                      onClick={() => setIsSortOpen(!isSortOpen)}
                      className="bg-white border border-gray-300 px-6 py-2.5 text-sm font-bold uppercase tracking-wider flex items-center gap-8 hover:border-black transition-colors min-w-[200px] justify-between group"
                    >
                        {currentSortLabel}
                        <ChevronDown size={16} className={`transition-transform duration-300 ${isSortOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>

                    <div className={`absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 shadow-xl z-50 overflow-hidden transition-all duration-300 origin-top ${isSortOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {sortOptions.map((opt) => (
                            <div 
                              key={opt.value}
                              onClick={() => { setSortBy(opt.value); setIsSortOpen(false); }}
                              className={`relative px-4 py-3 text-sm cursor-pointer flex justify-between items-center group overflow-hidden ${sortBy === opt.value ? 'bg-black text-white' : 'text-gray-600'}`}
                            >
                                <span className={`absolute inset-0 bg-black transform transition-transform duration-300 ease-out z-0 ${sortBy === opt.value ? 'translate-y-0' : '-translate-y-full group-hover:translate-y-0'}`}></span>
                                <span className={`relative z-10 font-medium transition-colors duration-300 ${sortBy === opt.value ? 'text-white' : 'group-hover:text-white'}`}>{opt.label}</span>
                                {sortBy === opt.value && <Check size={14} className="relative z-10 text-white" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <p className="text-sm text-gray-500 font-medium hidden md:block">Showing {visibleProducts.length} products</p>
        </div>

        {/* --- FILTER PANEL --- */}
        <div 
          ref={filterPanelRef} 
          className={`overflow-hidden transition-all duration-500 ease-in-out border-b border-gray-100 mb-8 bg-gray-50
          ${isFilterOpen ? 'max-h-[300px] opacity-100 py-8 px-6 w-full' : 'max-h-0 opacity-0 py-0 px-0'}`}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                <div>
                    <h4 className="font-bold text-sm uppercase mb-4 text-black">Max Price</h4>
                    <div className="px-2">
                        <input type="range" min="0" max="1000" step="50" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black"/>
                        <div className="flex justify-between text-xs font-bold mt-2 text-black"><span>₹0</span><span>₹{priceRange}</span></div>
                    </div>
                </div>
                <div className="flex items-end"><button onClick={() => { setPriceRange(2500); }} className="text-xs font-bold underline text-gray-500 hover:text-black">Reset Filters</button></div>
            </div>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
            {visibleProducts.length > 0 ? (
                visibleProducts.map((product) => (
                    <div key={product.id} className="group bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden flex flex-col">
                        
                        <div className="relative aspect-4/5 bg-gray-50 overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"/>
                            <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                                {product.tag && <span className={`text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-sm shadow-sm ${product.tag === 'BESTSELLER' ? 'bg-[#ff9900]' : 'bg-red-600'}`}>{product.tag}</span>}
                            </div>
                            <div className="absolute bottom-2 left-2 z-10">
                                <span className="bg-[#e8f5e9] text-[#1b5e20] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-sm border border-[#c8e6c9]">{product.discount}% OFF</span>
                            </div>
                        </div>

                        <div className="p-4 flex flex-col grow">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{product.type}</p>
                            <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 min-h-10 leading-snug group-hover:text-gray-600 transition-colors">{product.name}</h3>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="flex items-center gap-1 bg-black text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold">{product.rating} <Star size={8} fill="currentColor" strokeWidth={0} /></span>
                                <span className="text-[10px] text-gray-500 font-medium">({product.reviews} Reviews)</span>
                            </div>
                            <div className="flex items-center gap-2 mt-auto mb-4">
                                <span className="font-bold text-base text-black">₹{product.price}</span>
                                <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                            </div>
                            
                            <button className="relative w-full overflow-hidden group/btn bg-white border border-black text-black text-xs font-bold uppercase py-3 rounded-sm tracking-wider">
                                <span className="absolute inset-0 bg-black transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-500">Add To Cart</span>
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full text-center py-20 text-gray-500">
                    <p className="text-lg">No products found within this price range.</p>
                </div>
            )}
        </div>

      </div>
    </main>
  );
};

export default BathAndBody;