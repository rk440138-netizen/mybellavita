import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star, ChevronDown, Check, Plus, X, Droplets } from 'lucide-react';
// 1. Import Real Data
import { bestsellersList, newArrivalsList } from '../Data'; 

const Perfumes = () => {
  // --- SEO ---
  useEffect(() => {
    document.title = "Luxury Perfumes & Fragrances | Bella Vita Organic";
    window.scrollTo(0, 0);
  }, []);

  // --- STATES ---
  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filters
  const [priceRange, setPriceRange] = useState(2500);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

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

  // --- DATA AGGREGATION ---
  
  // 1. Shop Mock Data (To ensure we don't miss the original shop items)
  const shopMockList = [
    { id: 1, title: "KLUB MAN Perfume - 100ml", category: "Fragrance", rating: 4.6, reviews: "517", price: 525, originalPrice: 799, discount: "35% OFF", tag: "BESTSELLER", image: "https://images.unsplash.com/photo-1594035910387-fea47794265b?w=600" },
    { id: 3, title: "DATE Woman Perfume - 100ml", category: "Fragrance", rating: 4.9, reviews: "907", price: 549, originalPrice: 999, discount: "46% OFF", tag: "BESTSELLER", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600" },
    { id: 7, title: "Night Fever Unisex Perfume", category: "Fragrance", rating: 4.5, reviews: "82", price: 599, originalPrice: 1299, discount: "58% OFF", tag: "NEW", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600" },
    { id: 8, title: "Vanilla - Gourmet Collection", category: "Fragrance", rating: 4.5, reviews: "78", price: 599, originalPrice: 849, discount: "29% OFF", tag: "NEW", image: "https://images.unsplash.com/photo-1594035910387-fea47794265b?w=600" },
  ];

  // 2. Merge All Data Sources
  const allProducts = [...bestsellersList, ...newArrivalsList, ...shopMockList];

  // 3. Filter for PERFUMES only
  // Logic: Check if category or title contains perfume-related keywords
  const perfumeProducts = allProducts.filter(p => {
    const searchString = (p.category + p.title).toLowerCase();
    return searchString.includes('perfume') || 
           searchString.includes('fragrance') || 
           searchString.includes('parfum') ||
           searchString.includes('oud');
  });

  // 4. Remove Duplicates (by Title)
  const uniquePerfumes = perfumeProducts.filter((v, i, a) => a.findIndex(t => (t.title === v.title)) === i);

  // --- FILTER HELPERS ---
  const getGender = (title) => {
    const t = title.toLowerCase();
    if (t.includes('men') && !t.includes('women')) return 'Men';
    if (t.includes('women') || t.includes('her')) return 'Women';
    return 'Unisex';
  };

  const toggleFilter = (item, state, setState) => {
    state.includes(item) ? setState(state.filter(i => i !== item)) : setState([...state, item]);
  };

  // --- FILTERING ---
  const getFilteredProducts = () => {
    return uniquePerfumes.filter(product => {
      // Price
      const matchesPrice = product.price <= priceRange;
      
      // Gender
      let matchesGender = true;
      if (selectedGenders.length > 0) {
        matchesGender = selectedGenders.includes(getGender(product.title));
      }

      // Type (e.g., Luxury, Oud)
      let matchesType = true;
      if (selectedTypes.length > 0) {
        const typeString = (product.title + product.category).toLowerCase();
        matchesType = selectedTypes.some(type => typeString.includes(type.toLowerCase()));
      }

      return matchesPrice && matchesGender && matchesType;
    });
  };

  // --- SORTING ---
  const getSortedProducts = (list) => {
    return [...list].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
    });
  };

  const visibleProducts = getSortedProducts(getFilteredProducts());

  const sortOptions = [{ label: "Featured", value: "featured" }, { label: "Price: Low to High", value: "price-low" }, { label: "Price: High to Low", value: "price-high" }];
  const currentSortLabel = sortOptions.find(opt => opt.value === sortBy)?.label;

  return (
    <main className="bg-white min-h-screen">
      

      {/* Header */}
      <div className="bg-gray-50 py-12 mb-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-3 text-black"><Droplets size={32} strokeWidth={1} /></div>
            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-3">Luxury Perfumes</h1>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                Long-lasting, premium fragrances crafted for every mood and occasion.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-30">
            <div className="flex items-center gap-4 w-full md:w-auto">
                {/* Filter Button */}
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

                {/* Sort Dropdown */}
                <div className="relative" ref={sortRef}>
                    <button onClick={() => setIsSortOpen(!isSortOpen)} className="bg-white border border-gray-300 px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-8 hover:border-black transition-colors min-w-[200px] justify-between group">
                        {currentSortLabel}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isSortOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                    <div className={`absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 shadow-xl z-50 overflow-hidden transition-all duration-300 origin-top ${isSortOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {sortOptions.map((opt) => (
                            <div key={opt.value} onClick={() => { setSortBy(opt.value); setIsSortOpen(false); }} className={`relative px-4 py-3 text-xs cursor-pointer flex justify-between items-center group overflow-hidden ${sortBy === opt.value ? 'bg-black text-white' : 'text-gray-600'}`}>
                                <span className={`absolute inset-0 bg-black transform transition-transform duration-300 ease-out z-0 ${sortBy === opt.value ? 'translate-y-0' : '-translate-y-full group-hover:translate-y-0'}`}></span>
                                <span className={`relative z-10 font-bold transition-colors duration-300 ${sortBy === opt.value ? 'text-white' : 'group-hover:text-white'}`}>{opt.label}</span>
                                {sortBy === opt.value && <Check size={14} className="relative z-10 text-white" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-xs text-gray-500 font-bold tracking-widest hidden md:block">{visibleProducts.length} FRAGRANCES</p>
        </div>

        {/* --- FILTER PANEL --- */}
        <div 
          ref={filterPanelRef} 
          className={`overflow-hidden transition-all duration-500 ease-in-out border-b border-gray-100 mb-10 bg-gray-50
          ${isFilterOpen ? 'max-h-[500px] opacity-100 py-8 px-6' : 'max-h-0 opacity-0 py-0 px-0'}`}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Gender Filter */}
                <div>
                    <h4 className="font-bold text-xs uppercase mb-4 text-black tracking-widest">Gender</h4>
                    <ul className="space-y-3">
                        {['Men', 'Women', 'Unisex'].map(g => (
                            <li key={g} onClick={() => toggleFilter(g, selectedGenders, setSelectedGenders)} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4 h-4 border flex items-center justify-center rounded-sm transition-all duration-300 ${selectedGenders.includes(g) ? 'bg-black border-black' : 'border-gray-400 bg-white group-hover:border-black'}`}>
                                    {selectedGenders.includes(g) && <Check size={10} className="text-white" />}
                                </div>
                                <span className={`text-sm transition-colors ${selectedGenders.includes(g) ? 'font-bold text-black' : 'text-gray-600 group-hover:text-black'}`}>{g}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Type Filter */}
                <div>
                    <h4 className="font-bold text-xs uppercase mb-4 text-black tracking-widest">Fragrance Type</h4>
                    <ul className="space-y-3">
                        {['Oud', 'Luxury', 'Eau De Parfum', 'Gift Set'].map(t => (
                            <li key={t} onClick={() => toggleFilter(t, selectedTypes, setSelectedTypes)} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4 h-4 border flex items-center justify-center rounded-sm transition-all duration-300 ${selectedTypes.includes(t) ? 'bg-black border-black' : 'border-gray-400 bg-white group-hover:border-black'}`}>
                                    {selectedTypes.includes(t) && <Check size={10} className="text-white" />}
                                </div>
                                <span className={`text-sm transition-colors ${selectedTypes.includes(t) ? 'font-bold text-black' : 'text-gray-600 group-hover:text-black'}`}>{t}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Filter */}
                <div>
                    <h4 className="font-bold text-xs uppercase mb-4 text-black tracking-widest">Max Budget</h4>
                    <div className="px-2">
                        <input type="range" min="0" max="2500" step="100" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black"/>
                        <div className="flex justify-between text-xs font-bold mt-3 text-black"><span>₹0</span><span>₹{priceRange}</span></div>
                    </div>
                    <button onClick={() => { setSelectedGenders([]); setSelectedTypes([]); setPriceRange(2500); }} className="mt-6 text-xs font-bold underline text-gray-400 hover:text-black transition-colors">Reset All</button>
                </div>
            </div>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
            {visibleProducts.length > 0 ? (
                visibleProducts.map((product) => (
                    <article key={product.id} className="group bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden flex flex-col">
                        <div className="relative aspect-4/5 bg-gray-50 overflow-hidden">
                            <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" loading="lazy" />
                            <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                                <span className={`text-white text-[9px] md:text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm shadow-sm ${product.tag.includes('BEST') ? 'bg-[#ff9900]' : 'bg-black'}`}>{product.tag}</span>
                            </div>
                            <div className="absolute bottom-2 left-2 z-10">
                                <span className="bg-white/90 backdrop-blur-sm text-[#1b5e20] text-[9px] md:text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm border border-green-100">{product.discount}</span>
                            </div>
                        </div>

                        <div className="p-5 flex flex-col grow">
                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">{product.category}</p>
                            <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 min-h-10 leading-relaxed group-hover:text-gray-600 transition-colors">{product.title}</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="flex items-center gap-1 bg-black text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold">{product.rating} <Star size={8} fill="currentColor" strokeWidth={0} /></span>
                                <span className="text-[10px] text-gray-400 font-bold tracking-wide">({product.reviews} Reviews)</span>
                            </div>
                            <div className="flex items-center gap-3 mt-auto mb-5">
                                <span className="font-bold text-lg text-black">₹{product.price}</span>
                                <span className="text-xs text-gray-400 line-through decoration-1">₹{product.originalPrice}</span>
                            </div>
                            <button className="relative w-full overflow-hidden group/btn bg-white border border-black text-black text-xs font-bold uppercase py-3.5 rounded-sm tracking-[0.15em] transition-all">
                                <span className="absolute inset-0 bg-black transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
                                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-500 flex items-center justify-center gap-2">Add To Cart</span>
                            </button>
                        </div>
                    </article>
                ))
            ) : (
                <div className="col-span-full text-center py-20 text-gray-500">
                    <p className="text-lg">No perfumes found.</p>
                </div>
            )}
        </div>

      </div>
      
    </main>
  );
};

export default Perfumes;