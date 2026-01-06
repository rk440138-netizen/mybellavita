import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { setIsCartOpen, cartCount } = useCart();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState("");

  const messages = ["Get any 3 products for just ₹899", "FLAT 5% OFF ON ALL PREPAID ORDERS"];
  const searchTerms = ["Perfumes", "CEO Man", "Body Wash", "Best Sellers", "Gifting"];

  useEffect(() => {
    const timer = setInterval(() => setMsgIndex(prev => (prev + 1) % messages.length), 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let txt = ""; let isDeleting = false; let termIdx = 0;
    const type = () => {
      const fullTxt = `Search for "${searchTerms[termIdx]}"`;
      txt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);
      setPlaceholder(txt);
      let speed = isDeleting ? 50 : 100;
      if (!isDeleting && txt === fullTxt) { speed = 2000; isDeleting = true; }
      else if (isDeleting && txt === "") { isDeleting = false; termIdx = (termIdx + 1) % searchTerms.length; }
      setTimeout(type, speed);
    };
    setTimeout(type, 100);
  }, []);

  const navLinks = [
    { name: 'Crazy Deals', path: '/crazy-deals', color: 'text-red-500' },
    { name: 'Shop All', path: '/shop' },
    { name: 'Bath&Body', path: '/bath&body' },
    { name: 'Bestsellers', path: '/bestseller' },
    { name: 'Gifting', path: '/gifting' },
    { name: 'Perfumes', path: '/perfumes' },
    { name: 'New Arrivals', path: '/newarrivals' },
  ];

  return (
    <>

      {isMobileSearchOpen && (
        <div className="fixed top-0 left-0 w-full bg-white z-110 p-4 shadow-md lg:hidden flex items-center gap-3 animate-in slide-in-from-top">
          <Search className="w-5 h-5 text-gray-400" />
          <input 
            autoFocus 
            type="text" 
            placeholder={placeholder} 
            className="flex-1 outline-none text-sm text-black"
          />
          <X className="w-6 h-6 cursor-pointer text-black" onClick={() => setIsMobileSearchOpen(false)} />
        </div>
      )}

      <header className={isHomePage ? "absolute top-0 w-full z-50 group text-white hover:text-black transition-all duration-500" : "sticky top-0 w-full z-50 bg-white shadow-sm text-black"}>
        
        <div className="bg-black text-white text-center text-[10px] py-2 font-medium uppercase tracking-widest">
          {messages[msgIndex]}
        </div>

        <nav className="relative border-b border-transparent hover:border-gray-100">
          {isHomePage && <div className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10" />}

          <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
            
           
            <div className="flex-1 flex items-center gap-4">
              <Menu className="lg:hidden w-6 h-6 cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
              
              
              <div className="hidden lg:flex items-center border-b border-current py-1 w-64">
                <Search className="w-4 h-4 mr-2 opacity-70" />
                <input type="text" placeholder={placeholder} className="bg-transparent outline-none text-xs w-full placeholder-current" />
              </div>
            </div>

            
            <div className="flex-1 text-center">
              <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter">
                BELLAVITA<span className="text-[9px] align-top">®</span>
              </Link>
            </div>

            
            <div className="flex-1 flex justify-end items-center gap-4">
              
              <Search className="lg:hidden w-5 h-5 cursor-pointer" onClick={() => setIsMobileSearchOpen(true)} />
              
              <Link to="/login"><User className="w-5 h-5 hidden md:block" /></Link>
              
              <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>

          
          <div className="hidden lg:flex justify-center space-x-8 pb-3 text-[11px] font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={`${link.color || ''} hover:opacity-60 transition-all`}>{link.name}</Link>
            ))}
          </div>
        </nav>
      </header>

     
      <div className={`fixed inset-0 z-120 transition-all ${isMobileMenuOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/50 transition-opacity ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMobileMenuOpen(false)} />
        
        <div className={`absolute left-0 top-0 h-full w-[280px] bg-white transition-transform duration-300 shadow-xl ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-5 flex flex-col">
            <div className="flex justify-between items-center mb-10">
              <span className="font-bold text-lg tracking-widest">MENU</span>
              <X className="w-6 h-6 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-sm font-bold uppercase tracking-widest ${link.color || 'text-black'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;