import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Simple Routing Import
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';


const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { setIsCartOpen, cartCount } = useCart();
  
  // --- 1. Top Bar Messages Logic ---
  const [msgIndex, setMsgIndex] = useState(0);
  const messages = ["Get any 3 products for just ₹899", "FLAT 5% OFF ON ALL PREPAID ORDERS"];
  useEffect(() => {
    const timer = setInterval(() => setMsgIndex(prev => (prev + 1) % messages.length), 3000);
    return () => clearInterval(timer);
  }, []);

  // --- 2. Typewriter Search Logic ---
  const [placeholder, setPlaceholder] = useState("");
  const searchTerms = ["Perfumes", "CEO Man", "Body Wash", "Best Sellers", "Gifting"];
  useEffect(() => {
    let txt = ""; let isDeleting = false; let termIdx = 0;
    const type = () => {
      const fullTxt = `Search for "${searchTerms[termIdx]}"`;
      txt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);
      setPlaceholder(txt);
      let typeSpeed = isDeleting ? 50 : 100;
      if (!isDeleting && txt === fullTxt) { typeSpeed = 2000; isDeleting = true; }
      else if (isDeleting && txt === "") { isDeleting = false; termIdx = (termIdx + 1) % searchTerms.length; }
      setTimeout(type, typeSpeed);
    };
    const t = setTimeout(type, 100);
    return () => clearTimeout(t);
  }, []);

  // --- Styles ---
  const navClass = isHomePage ? "absolute top-0 left-0 w-full z-50 group text-white hover:text-black" : "sticky top-0 w-full z-50 bg-white shadow-sm text-black";
  const borderClass = isHomePage ? "border-white/50 group-hover:border-gray-300" : "border-gray-300";

  return (
    <header className={navClass}>
      
      {/* Top Bar */}
      <div className="bg-black text-white text-center text-[10px] py-2 font-medium tracking-wide uppercase">
        {messages[msgIndex]}
      </div>

      <nav className="relative border-b border-transparent hover:border-gray-100 transition-all duration-300">
        
        {/* White Curtain Animation (Home Page Only) */}
        {isHomePage && (
           <div className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10 shadow-md"></div>
        )}

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Left: Search Bar */}
            <div className="flex-1 flex items-center gap-4">
              <Menu className="lg:hidden w-5 h-5 cursor-pointer" />
              <div className={`hidden lg:flex items-center border-b ${borderClass} py-1 w-64 transition-colors`}>
                 <Search className="w-3.5 h-3.5 mr-2 opacity-70" />
                 <input type="text" placeholder={placeholder} className="bg-transparent outline-none text-xs w-full placeholder-current opacity-70 font-medium" />
              </div>
            </div>

            {/* Center: Logo (Connected simply with Link) */}
            <div className="flex-1 text-center">
              <Link to="/" className="text-2xl font-bold tracking-tighter">
                BELLAVITA<span className="text-[9px] align-top">®</span>
              </Link>
            </div>

            {/* Right: Icons */}
            

            {/* Right: Icons */}
            <div className="flex-1 flex justify-end items-center gap-5">
              <Search className="lg:hidden w-5 h-5" />
              
              {/* --- CHANGE THIS PART --- */}
              <Link to="/login"> 
                 <User className="w-5 h-5 cursor-pointer hover:opacity-70" />
              </Link>
              {/* ------------------------ */}

              <div className="relative" onClick={() => setIsCartOpen(true)}> {/* Click to Open */}
        <ShoppingBag className="w-5 h-5 cursor-pointer hover:opacity-70" />
        
        {/* Dynamic Cart Count */}
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[8px] rounded-full w-3 h-3 flex items-center justify-center font-bold">
            {cartCount}
        </span>
      </div>
            </div>
            
          </div>

          {/* Bottom Menu Links (Connected simply with Link) */}
          <div className="hidden lg:flex justify-center space-x-6 pb-3 text-[11px] font-bold tracking-widest uppercase">
            
            <Link to="/crazy-deals" className="text-red-500 hover:text-black transition-colors relative group/item">
                Crazy Deals
                <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-full"></span>
            </Link>

            <Link to="/shop" className="hover:text-black transition-colors relative group/item">
                Shop All
                <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-full"></span>
            </Link>

            <Link to="/bath&body" className="hover:text-black transition-colors relative group/item">
                bath&body
                <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-full"></span>
            </Link>
            <Link to="/bestseller" className="hover:text-black transition-colors relative group/item">
                Bestsellers
                <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-full"></span>
            </Link>
            <Link to="/gifting" className="hover:text-black transition-colors relative group/item">
                Gifting
                <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-full"></span>
            </Link>

            <Link to="/perfumes" className="hover:text-black transition-colors relative group/item">
                Perfumes
                <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-full"></span>
            </Link>

            <Link to="/Newarrivals" className="hover:text-black transition-colors relative group/item">
                New Arrivals
                <span className="absolute left-0 bottom-0 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-full"></span>
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;