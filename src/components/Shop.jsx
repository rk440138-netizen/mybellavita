import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, Plus, X } from 'lucide-react';
// 1. Import Reusable Component
import ProductCard from './Productcard'; 

const Shop = () => {
  // --- STATES ---
  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(2500);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // --- REFS ---
  const sortRef = useRef(null);
  const filterBtnRef = useRef(null);
  const filterPanelRef = useRef(null);

  // --- CLICK OUTSIDE LOGIC ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
      if (
        isFilterOpen &&
        filterPanelRef.current &&
        !filterPanelRef.current.contains(event.target) &&
        filterBtnRef.current &&
        !filterBtnRef.current.contains(event.target)
      ) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen]);

  // --- MOCK DATA (Updated 'name' to 'title' for consistency) ---
  const products = [
    { id: 1, title: "KLUB MAN Perfume - 100ml", type: "EAU DE PARFUM FOR MEN", category: "Fragrance", rating: 4.6, reviews: 517, price: 525, originalPrice: 799, discount: "35% OFF", tag: "BESTSELLER", image: "https://images.unsplash.com/photo-1594035910387-fea47794265b?w=600" },
    { id: 2, title: "Luxury Perfume Gift Set For Men", type: "EAU DE PARFUM GIFT SET", category: "Gift Set", rating: 4.9, reviews: 749, price: 499, originalPrice: 849, discount: "42% OFF", tag: "BESTSELLER", image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?w=600" },
    { id: 3, title: "DATE Woman Perfume - 100ml", type: "EAU DE PARFUM FOR WOMEN", category: "Fragrance", rating: 4.9, reviews: 907, price: 549, originalPrice: 999, discount: "46% OFF", tag: "BESTSELLER", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600" },
    { id: 4, title: "Unisex SCENTS Gift Set - 4 x 20ml", type: "PERFUME GIFT SET FOR ALL", category: "Gift Set", rating: 4.5, reviews: 92, price: 399, originalPrice: 849, discount: "54% OFF", tag: "NEW", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600" },
    { id: 5, title: "C-Glow Face Wash - 100ml", type: "DE-TAN & BRIGHTENING", category: "Skincare", rating: 4.8, reviews: 170, price: 249, originalPrice: 399, discount: "21% OFF", tag: "BESTSELLER", image: "https://images.unsplash.com/photo-1556228720-1987bad27938?w=600" },
    { id: 6, title: "MOOD Collection Gift Set For Him", type: "PERFUME GIFT SET FOR MEN", category: "Skincare", rating: 4.8, reviews: 301, price: 522, originalPrice: 849, discount: "39% OFF", tag: "NEW", image: "https://images.unsplash.com/photo-1585232351009-31336c932913?w=600" },
    { id: 7, title: "Night Fever Unisex Perfume", type: "UNISEX NIGHT PERFUME", category: "Bath & Body", rating: 4.5, reviews: 82, price: 599, originalPrice: 1299, discount: "58% OFF", tag: "NEW", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600" },
    { id: 8, title: "Vanilla - Gourmet Collection", type: "BODY MIST FOR WOMEN", category: "Bath & Body", rating: 4.5, reviews: 78, price: 599, originalPrice: 849, discount: "29% OFF", tag: "NEW", image: "https://images.unsplash.com/photo-1594035910387-fea47794265b?w=600" },
  ];

  // --- FILTER & SORT LOGIC ---
  const toggleCategory = (cat) => {
    selectedCategories.includes(cat) 
      ? setSelectedCategories(selectedCategories.filter(c => c !== cat))
      : setSelectedCategories([...selectedCategories, cat]);
  };

  const getFilteredProducts = () => {
    return products.filter(product => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price <= priceRange;
      return matchesCategory && matchesPrice;
    });
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
      
      <div className="bg-gray-50 py-10 mb-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-2">Shop All Products</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        
        {/* --- CONTROLS ROW --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 relative z-30">
            <div className="flex items-center gap-4 w-full md:w-auto">
                
                {/* Filter Button */}
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

                {/* Sort Dropdown */}
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
          className={`overflow-hidden transition-all duration-500 ease-in-out border border-gray-100 mb-8 bg-gray-50
          ${isFilterOpen 
            ? 'max-h-[600px] opacity-100 py-8 px-6 w-full md:w-[900px]' 
            : 'max-h-0 opacity-0 py-0 px-0 w-0'
          }`}
        >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="font-bold text-sm uppercase mb-4 text-black">Category</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {['Fragrance', 'Gift Set', 'Skincare', 'Bath & Body'].map((cat) => (
                            <li key={cat} onClick={() => toggleCategory(cat)} className="flex items-center gap-2 hover:text-black cursor-pointer transition-colors">
                                <div className={`w-4 h-4 border flex items-center justify-center rounded-sm transition-colors ${selectedCategories.includes(cat) ? 'bg-black border-black' : 'border-gray-400'}`}>
                                    {selectedCategories.includes(cat) && <Check size={10} className="text-white" />}
                                </div>
                                <span className={selectedCategories.includes(cat) ? 'font-bold text-black' : ''}>{cat}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-sm uppercase mb-4 text-black">Max Price</h4>
                    <div className="px-2">
                        <input type="range" min="0" max="2500" step="100" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black"/>
                        <div className="flex justify-between text-xs font-bold mt-2 text-black"><span>₹0</span><span>₹{priceRange}</span></div>
                    </div>
                </div>
                <div className="flex items-end"><button onClick={() => { setSelectedCategories([]); setPriceRange(2500); }} className="text-xs font-bold underline text-gray-500 hover:text-black">Reset All Filters</button></div>
            </div>
        </div>

        {/* --- PRODUCT GRID (Connected with ProductCard) --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
            {visibleProducts.length > 0 ? (
                visibleProducts.map((product) => (
                    // ✅ USED REUSABLE COMPONENT HERE
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <div className="col-span-full text-center py-20 text-gray-500">
                    <p className="text-lg">No products found matching your filters.</p>
                    <button onClick={() => { setSelectedCategories([]); setPriceRange(2500); }} className="mt-4 text-black underline font-bold">Clear Filters</button>
                </div>
            )}
        </div>

      </div>
      
    </main>
  );
};

export default Shop;