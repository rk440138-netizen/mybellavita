import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star, ChevronDown, Check, Plus, X, Gift } from 'lucide-react';
// 1. Import Bestsellers Data
import { bestsellersList } from '../Data'; 

const Gifting = () => {
  // --- SEO: Dynamic Title ---
  useEffect(() => {
    document.title = "Luxury Gifting & Gift Sets | Bella Vita Organic";
    window.scrollTo(0, 0);
  }, []);

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

  // --- DATA MERGING LOGIC ---

  // 1. Shop Page Data (The mock data used in your Shop.js video)
  const shopList = [
    { 
      id: 2, 
      title: "Luxury Perfume Gift Set For Men", 
      category: "Gift Set", 
      rating: 4.9, 
      reviews: "749", 
      price: 499, 
      originalPrice: 849, 
      discount: "42% OFF", 
      tag: "BESTSELLER", 
      image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?w=600" 
    },
    { 
      id: 4, 
      title: "Unisex SCENTS Gift Set - 4 x 20ml", 
      category: "Gift Set", 
      rating: 4.5, 
      reviews: "92", 
      price: 399, 
      originalPrice: 849, 
      discount: "54% OFF", 
      tag: "NEW", 
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600" 
    },
    { 
      id: 6, 
      title: "MOOD Collection Gift Set For Him", 
      category: "Gift Set", 
      rating: 4.8, 
      reviews: "301", 
      price: 522, 
      originalPrice: 849, 
      discount: "39% OFF", 
      tag: "NEW", 
      image: "https://images.unsplash.com/photo-1585232351009-31336c932913?w=600" 
    }
  ];

  // 2. Merge Bestsellers (Data.js) + Shop List (Mock)
  // We prioritize Shop List logic for uniqueness based on Title to avoid duplicates
  const rawProducts = [...bestsellersList, ...shopList];
  
  // 3. Filter specifically for 'Gift Set' Category
  const giftProducts = rawProducts.filter(p => 
    p.category === 'Gift Set' || p.title.toLowerCase().includes('gift')
  );

  // 4. Remove Duplicates (by Title) to be User Friendly
  const uniqueProducts = giftProducts.filter((v, i, a) => a.findIndex(t => (t.title === v.title)) === i);


  // --- FILTER & SORT FUNCTIONS ---
  const getFilteredProducts = () => {
    return uniqueProducts.filter(product => product.price <= priceRange);
  };

  const getSortedProducts = (list) => {
    return [...list].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0; 
    });
  };

  const visibleProducts = getSortedProducts(getFilteredProducts());

  const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Price: Low to High", value: "price-low" },
    { label: "Price: High to Low", value: "price-high" },
  ];
  const currentSortLabel = sortOptions.find(opt => opt.value === sortBy)?.label;

  return (
    <main className="bg-white min-h-screen">
      

      {/* Header Section */}
      <div className="bg-gray-50 py-12 mb-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-3 text-black">
                <Gift size={32} strokeWidth={1} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-3">The Art of Gifting</h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                Discover our exclusive collection of luxury perfume gift sets. 
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        
        {/* --- CONTROLS ROW --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-30">
            <div className="flex items-center gap-4 w-full md:w-auto">
                
                {/* FILTER BUTTON */}
                <button 
                  ref={filterBtnRef} 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="relative overflow-hidden group bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 border border-black transition-all"
                >
                    <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                       {isFilterOpen ? 'Close' : 'Filter'} 
                       {isFilterOpen ? <X size={14} /> : <Plus size={14} />}
                    </span>
                </button>

                {/* SORT DROPDOWN */}
                <div className="relative" ref={sortRef}>
                    <button 
                      onClick={() => setIsSortOpen(!isSortOpen)}
                      className="bg-white border border-gray-300 px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-8 hover:border-black transition-colors min-w-[200px] justify-between group"
                    >
                        {currentSortLabel}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isSortOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>

                    <div className={`absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 shadow-xl z-50 overflow-hidden transition-all duration-300 origin-top ${isSortOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {sortOptions.map((opt) => (
                            <div 
                              key={opt.value}
                              onClick={() => { setSortBy(opt.value); setIsSortOpen(false); }}
                              className={`relative px-4 py-3 text-xs cursor-pointer flex justify-between items-center group overflow-hidden ${sortBy === opt.value ? 'bg-black text-white' : 'text-gray-600'}`}
                            >
                                <span className={`absolute inset-0 bg-black transform transition-transform duration-300 ease-out z-0 ${sortBy === opt.value ? 'translate-y-0' : '-translate-y-full group-hover:translate-y-0'}`}></span>
                                <span className={`relative z-10 font-bold transition-colors duration-300 ${sortBy === opt.value ? 'text-white' : 'group-hover:text-white'}`}>{opt.label}</span>
                                {sortBy === opt.value && <Check size={14} className="relative z-10 text-white" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <p className="text-xs text-gray-500 font-bold tracking-widest hidden md:block">{visibleProducts.length} GIFT SETS FOUND</p>
        </div>

        {/* --- FILTER PANEL --- */}
        <div 
          ref={filterPanelRef} 
          className={`overflow-hidden transition-all duration-500 ease-in-out border-b border-gray-100 mb-10 bg-gray-50
          ${isFilterOpen ? 'max-h-[300px] opacity-100 py-8 px-6 w-full md:w-1/2' : 'max-h-0 opacity-0 py-0 px-0'}`}
        >
            <div>
                <h4 className="font-bold text-xs uppercase mb-4 text-black tracking-widest">Max Budget</h4>
                <div className="px-2">
                    <input 
                        type="range" min="0" max="2500" step="100" 
                        value={priceRange} 
                        onChange={(e) => setPriceRange(Number(e.target.value))} 
                        className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                    <div className="flex justify-between text-xs font-bold mt-3 text-black">
                        <span>₹0</span>
                        <span>₹{priceRange}</span>
                    </div>
                </div>
                <div className="mt-6">
                    <button onClick={() => { setPriceRange(2500); }} className="text-xs font-bold underline text-gray-400 hover:text-black transition-colors">Reset Price</button>
                </div>
            </div>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
            {visibleProducts.length > 0 ? (
                visibleProducts.map((product) => (
                    <article key={product.id} className="group bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden flex flex-col">
                        
                        {/* Image Area */}
                        <div className="relative aspect-4/5 bg-gray-50 overflow-hidden">
                            <img 
                                src={product.image} 
                                alt={`${product.title} - Gift Set`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                loading="lazy"
                            />
                            
                            {/* Tags */}
                            <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                                <span className={`text-white text-[9px] md:text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm shadow-sm ${product.tag.includes('BEST') ? 'bg-[#ff9900]' : 'bg-black'}`}>
                                    {product.tag}
                                </span>
                            </div>
                            
                            <div className="absolute bottom-2 left-2 z-10">
                                <span className="bg-white/90 backdrop-blur-sm text-[#1b5e20] text-[9px] md:text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm border border-green-100">
                                   {product.discount}
                                </span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-5 flex flex-col grow">
                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">
                                {product.category}
                            </p>

                            <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 min-h-10 leading-relaxed group-hover:text-gray-600 transition-colors">
                                {product.title}
                            </h3>
                            
                            <div className="flex items-center gap-2 mb-4">
                                <span className="flex items-center gap-1 bg-black text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold">
                                    {product.rating} <Star size={8} fill="currentColor" strokeWidth={0} />
                                </span>
                                <span className="text-[10px] text-gray-400 font-bold tracking-wide">({product.reviews} Reviews)</span>
                            </div>

                            <div className="flex items-center gap-3 mt-auto mb-5">
                                <span className="font-bold text-lg text-black">₹{product.price}</span>
                                <span className="text-xs text-gray-400 line-through decoration-1">₹{product.originalPrice}</span>
                            </div>
                            
                            {/* Curtain Button */}
                            <button className="relative w-full overflow-hidden group/btn bg-white border border-black text-black text-xs font-bold uppercase py-3.5 rounded-sm tracking-[0.15em] transition-all">
                                <span className="absolute inset-0 bg-black transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-500 flex items-center justify-center gap-2">
                                    Add To Cart
                                </span>
                            </button>
                        </div>
                    </article>
                ))
            ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
                    <Gift size={48} className="text-gray-300 mb-4" />
                    <p className="text-lg font-medium">No gift sets found within this price range.</p>
                    <button onClick={() => setPriceRange(2500)} className="mt-4 text-black underline font-bold text-sm tracking-widest uppercase">View All Gifts</button>
                </div>
            )}
        </div>

      </div>
     
    </main>
  );
};

export default Gifting;