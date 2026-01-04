import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/Heroslider'; // New Separate Component
import BestSellers from '../components/BestSellers'; // New Separate Component
import CustomerReviews from '../components/CustomerReviews'; // New Separate Component
import WhyBellavita from '../components/WhyBellavita';
import Blogs from '../components/Blogs';
import PressSection from '../components/PressSection';
import { Link } from 'react-router-dom';


// Static Data for small sections (Promo & Categories)
const promoBanner = {
  title: "BELLAMOOD TECH",
  subtitle: "Pheromone-Based Perfume",
  description: "Discover the science of attraction with our new collection.",
  buttonText: "Explore Collection",
  image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1200", 
  bgColor: "bg-gradient-to-r from-[#fce9d6] to-[#f3e6d3]" 
};

const categories = [
  { name: 'COSMETICS', img: 'https://tse4.mm.bing.net/th/id/OIP.1_knWLUfIk0mF8yywN40IwHaHa?pid=Api&P=0&h=180' ,path:"/Shop" },
  { name: 'SKINCARE', img: 'https://tse1.mm.bing.net/th/id/OIP.DDmVRn3wR2UBLPye3jf2zAHaHa?pid=Api&P=0&h=180',path:"/bestseller" },
  { name: 'LUXURY PERFUMES', img: 'https://tse2.mm.bing.net/th/id/OIP.V-IN03iTe380SVR_T535CgHaHa?pid=Api&P=0&h=180',path:"/perfumes" },
  { name: 'BATH & BODY', img: 'https://m.media-amazon.com/images/I/61eexkfZarL._SL1500_.jpg',path: "/bath&body" },
  { name: 'BODY DEOS', img: 'https://tse1.mm.bing.net/th/id/OIP.OK3CKQu-mvl5R9xMgJutywHaHa?pid=Api&P=0&h=180',path:"/perfumes" },
  { name: 'GIFT SETS', img: 'https://tse2.mm.bing.net/th/id/OIP.2u_a5nPSePEXhQavcQUU-gHaHa?pid=Api&P=0&h=180',path:"/gifting" }
];

const Home = () => {
  return (
    <main className="bg-white min-h-screen ">
      <Navbar /> 
      
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. BEST SELLERS & TABS */}
      <BestSellers />

      {/* 3. PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 mb-20 mt-16" aria-label="Promotional Banner">
        <div className={`relative w-full rounded-sm overflow-hidden shadow-xl ${promoBanner.bgColor} group`}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              
              <div className="w-full md:w-1/2 p-10 md:p-16 text-center md:text-left z-10">
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-2 leading-none">{promoBanner.title}</h2>
                  <p className="text-lg md:text-xl font-medium text-gray-700 mb-4 tracking-wide">{promoBanner.subtitle}</p>
                  <p className="text-sm text-gray-600 mb-8 max-w-md mx-auto md:mx-0">{promoBanner.description}</p>
                  
                  {/* --- CHANGE START: Button replaced with Link --- */}
                  <Link 
                    to="/shop" 
                    className="inline-block bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-transform duration-300 hover:scale-105 shadow-lg" 
                    aria-label={promoBanner.buttonText}
                  >
                    {promoBanner.buttonText}
                  </Link>
                  {/* --- CHANGE END --- */}

              </div>
              
              <div className="w-full md:w-1/2 h-64 md:h-[400px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-[#fce9d6] to-transparent z-10 md:w-20"></div>
                  <img src={promoBanner.image} alt={promoBanner.title} loading="lazy" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"/>
              </div>
            </div>
        </div>
      </section>

      {/* 4. LUXURY CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 mb-16" aria-label="Categories">
        <h2 className="text-center text-2xl tracking-widest font-medium mb-10 text-black uppercase">LUXURY CATEGORIES</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, idx) => (
                // 2. Wrap with Link and use cat.path
                <Link to={cat.path} key={idx} className="flex flex-col items-center group cursor-pointer">
                    
                    <div className="w-full aspect-square bg-[#f5f5f5] flex items-center justify-center mb-3 transition-all duration-300 hover:shadow-md border border-transparent hover:border-gray-200">
                        <img 
                            src={cat.img} 
                            alt={`Category: ${cat.name}`} 
                            loading="lazy" 
                            className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                        />
                    </div>
                    
                    <span className="text-[11px] font-bold uppercase tracking-widest text-black group-hover:text-gray-600 transition-colors">
                        {cat.name}
                    </span>

                </Link>
            ))}
        </div>
    </section>

      {/* 5. FINDER BANNERS */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 " aria-label="Product Finders">
        <Link to="/quiz/fragrance" className="block relative">
          <div className="bg-white border border-gray-200 h-64 md:h-72 relative overflow-hidden group cursor-pointer flex items-center hover:shadow-lg transition-all duration-300">
              <div className="p-8 md:p-12 z-10 w-2/3">
                  <h3 className="text-2xl font-bold text-black uppercase mb-2">Fragrance Finder</h3>
                  <p className="text-xs text-gray-500 mb-6 font-medium">Discover your new favourite scents!</p>
                  <button className="text-black text-[11px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-red-600 hover:border-red-600 transition-colors flex items-center gap-2 w-max" aria-label="Take Fragrance Quiz">
                    Take the Quiz <span>→</span>
                  </button>
              </div>
              <img src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400" loading="lazy" className="absolute right-0 bottom-0 h-full w-1/2 object-cover object-center group-hover:scale-105 transition-transform duration-700" alt="Fragrance Finder Background"/>
          </div>
          </Link>
        <Link to="/quiz/lipstick" className="block relative">
          <div className="bg-white border border-gray-200 h-64 md:h-72 relative overflow-hidden group cursor-pointer flex items-center hover:shadow-lg transition-all duration-300">
              <div className="p-8 md:p-12 z-10 w-2/3">
                  <h3 className="text-2xl font-bold text-black uppercase mb-2">Lipstick Finder</h3>
                  <p className="text-xs text-gray-500 mb-6 font-medium">Discover the perfect shade for you!</p>
                  <button className="text-black text-[11px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-pink-600 hover:border-pink-600 transition-colors flex items-center gap-2 w-max" aria-label="Take Lipstick Quiz">
                    Take the Quiz <span>→</span>
                  </button>
              </div>
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=400" loading="lazy" className="absolute right-0 bottom-0 h-full w-1/2 object-cover object-center group-hover:scale-105 transition-transform duration-700" alt="Lipstick Finder Background"/>
          </div>
        </Link>
      </section>
      
      {/* 6. WHY BELLAVITA */}
      <WhyBellavita/>

      {/* 7. CUSTOMER REVIEWS */}
      <CustomerReviews />

      {/* 8. BLOGS */}
      <Blogs/>

      {/* 9. PRESS SECTION */}
      <PressSection />

      {/* 10. FOOTER */}
      

    </main>
  );
};

export default Home;