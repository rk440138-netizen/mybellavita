import React, { useEffect } from 'react';
import { Heart, ShieldCheck, Leaf, Sparkles } from 'lucide-react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Story | Bella Vita Organic";
  }, []);

  return (
    <main className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900 flex items-center justify-center">
        <img 
            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&q=80" 
            alt="About Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-4">Our Story</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-light">Redefining Luxury. Making Premium Scents Accessible to All.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-8">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Bella Vita Organic is dedicated to creating luxury perfumes and skincare products that don't break the bank. 
            Born in the heart of Gurgaon, we believe that smelling good is a right, not a privilege. 
            Our formulations are crafted with imported oils from France, Spain, and Italy to give you a long-lasting experience.
          </p>
          <div className="w-20 h-1 bg-black mx-auto"></div>
      </div>

      {/* Values Grid */}
      <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
                  
                  <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                        <Leaf size={28} className="text-green-600"/>
                      </div>
                      <h3 className="font-bold uppercase tracking-widest mb-2">Cruelty Free</h3>
                      <p className="text-sm text-gray-500">We love animals and never test on them.</p>
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                        <ShieldCheck size={28} className="text-blue-600"/>
                      </div>
                      <h3 className="font-bold uppercase tracking-widest mb-2">Safe Ingredients</h3>
                      <p className="text-sm text-gray-500">IFRA certified and dermatologically tested.</p>
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                        <Sparkles size={28} className="text-yellow-500"/>
                      </div>
                      <h3 className="font-bold uppercase tracking-widest mb-2">Long Lasting</h3>
                      <p className="text-sm text-gray-500">Formulations that stay with you all day.</p>
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                        <Heart size={28} className="text-red-500"/>
                      </div>
                      <h3 className="font-bold uppercase tracking-widest mb-2">Made with Love</h3>
                      <p className="text-sm text-gray-500">Proudly Made in India for the World.</p>
                  </div>

              </div>
          </div>
      </div>

    </main>
  );
};

export default AboutUs;