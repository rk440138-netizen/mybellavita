import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://bellavitaorganic.com/cdn/shop/files/1920-720_7__11zon.webp?v=1765021204&width=1920",
    },
    {
      id: 2,
      image: "https://bellavitaorganic.com/cdn/shop/files/lip_sleeping_mask_1_1__11zon.webp?v=1762174363&width=1920",
    },
    {
       id: 3,
       image: "https://bellavitaorganic.com/cdn/shop/files/1920-720_7__11zon.webp?v=1765021204&width=1920",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden bg-gray-900 group mb-10" aria-label="Hero Banner">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
            <img 
                src={slide.image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover object-center"
            />
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-2 rounded-full text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all z-20" aria-label="Previous Slide"><ChevronLeft size={20} /></button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-2 rounded-full text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all z-20" aria-label="Next Slide"><ChevronRight size={20} /></button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/30 w-1.5'}`} aria-label={`Go to slide ${idx + 1}`}/>
          ))}
      </div>
    </section>
  );
};

export default HeroSlider;