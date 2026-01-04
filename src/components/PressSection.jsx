import React from 'react';

const PressSection = () => {
  // Lifestyle Images from Video
  const galleryImages = [
    "https://bellavitaorganic.com/cdn/shop/files/1_e3a8356d-1e07-4f9e-b006-463aee598ee0.webp?v=1725617784&width=400",
    "https://bellavitaorganic.com/cdn/shop/files/2_2453e5e3-fecb-46e3-ad9e-00bea4baa4622.webp?v=1725617784&width=400",
    "https://bellavitaorganic.com/cdn/shop/files/3_1_49a17cdc-b7a0-4ae1-a20d-5c3d8eee7bc1.webp?v=1725617816&width=400",
    "https://bellavitaorganic.com/cdn/shop/files/4_68a3c022-75df-4304-8d47-6a1671886316.webp?v=1725617784&width=400",
    "https://bellavitaorganic.com/cdn/shop/files/5_b43e7ec7-8e4b-464f-b5a4-78854aa116d82.webp?v=1725617784&width=400",
  ];

  // Media Logos
  const mediaLogos = [
    { 
      name: "Pinkvilla", 
      img: "https://cdn.brandfetch.io/iduuo4s5TH/w/1024/h/1024/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" 
    },
    { 
      name: "BusinessWorld", 
      img: "https://cdn.brandfetch.io/idgVGYS24f/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" 
    },
    { 
      name: "HT", 
      img: "https://cdn.brandfetch.io/idTOhC70ZS/w/458/h/50/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" 
    },
    { 
      name: "Elle", 
      img: "https://cdn.brandfetch.io/id69H2OP30/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" 
    },
    { 
      name: "ANI", 
      img: "https://fullforms.com/images/image/ANI_5911.jpg" 
    },
    { 
      name: "iDiva", 
      img: "https://cdn.brandfetch.io/idgAZA3sI3/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" 
    }
    ,
    { 
      name: "BW", 
      img: "https://cdn.brandfetch.io/iduUFJO8IH/w/500/h/63/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" 
    }
  ];

  // Logos ko double kar rahe hain taaki infinite loop smooth lage
  const scrollingLogos = [...mediaLogos, ...mediaLogos, ...mediaLogos];

  return (
    <section className="mb-0 overflow-hidden">
      
      {/* 1. Lifestyle Image Grid (Static) */}
      <div className="grid grid-cols-2 md:grid-cols-5">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="h-48 md:h-64 overflow-hidden relative group">
             <img 
               src={img} 
               alt="Lifestyle" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
          </div>
        ))}
      </div>

      {/* 2. Media Logos Strip (ANIMATED MARQUEE) */}
      <div className="bg-white py-8 border-b border-gray-100 overflow-hidden relative">
         
         {/* Moving Container */}
         <div className="flex w-max animate-scroll">
            {scrollingLogos.map((logo, idx) => (
               // CHANGE: Removed 'opacity-50' and 'grayscale' so colors are always visible
               <div key={idx} className="flex items-center justify-center mx-8 md:mx-12">
                  <img src={logo.img} alt={logo.name} className="h-6 md:h-8 object-contain max-w-none" />
               </div>
            ))}
         </div>

      </div>

      {/* CSS Animation for Scrolling */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PressSection;