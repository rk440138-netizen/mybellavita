import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { quizData } from '../QuizData'; // Import Data
import { bestsellersList, newArrivalsList } from '../Data'; // Import Products to show result
import { ArrowRight, RotateCcw, Check } from 'lucide-react';

const Quiz = () => {
  const { type } = useParams(); // URL se type milega: "fragrance" ya "lipstick"
  const data = quizData[type];  // Data select karein

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [recommendedProduct, setRecommendedProduct] = useState(null);

  // --- Find Product Logic ---
  const findRecommendation = (finalOption) => {
    // Hamare logic ke hisaab se last question ka option product ID de raha hai
    const recommendedId = finalOption.recommend || 101; 
    
    // Product list mein dhundein
    const allProducts = [...bestsellersList, ...newArrivalsList];
    const product = allProducts.find(p => p.id === recommendedId) || allProducts[0];
    
    setRecommendedProduct(product);
    setShowResult(true);
  };

  const handleOptionClick = (option) => {
    // Save answer
    setAnswers({ ...answers, [currentQ]: option.label });

    // Check if it's the last question
    if (currentQ < data.questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      findRecommendation(option);
    }
  };

  // Scroll to top on load
  useEffect(() => { window.scrollTo(0, 0); }, [type]);

  if (!data) return <div className="text-center py-20">Quiz Not Found</div>;

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      

      <div className="grow flex items-center justify-center py-12 px-4">
        <div className="bg-white max-w-2xl w-full p-8 md:p-12 rounded-sm shadow-xl border border-gray-100 text-center relative overflow-hidden">
          
          {/* Header Decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-black"></div>

          {!showResult ? (
            // --- QUESTION VIEW ---
            <div className="animate-fade-in">
              <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-4 block">
                 Question {currentQ + 1} of {data.questions.length}
              </span>
              
              <h1 className="text-2xl md:text-3xl font-bold text-black mb-8">
                {data.questions[currentQ].text}
              </h1>

              <div className="grid gap-4">
                {data.questions[currentQ].options.map((option, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    className="w-full py-4 px-6 border border-gray-300 text-left hover:border-black hover:bg-black hover:text-white transition-all duration-300 font-medium rounded-sm flex justify-between items-center group"
                  >
                    {option.label}
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // --- RESULT VIEW ---
            <div className="animate-fade-in">
               <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <Check size={32} className="text-green-600" />
               </div>
               
               <h2 className="text-xl font-medium text-gray-500 mb-2">Based on your answers, we recommend:</h2>
               <h1 className="text-3xl font-bold text-black mb-8">"{recommendedProduct?.title}"</h1>

               <div className="flex flex-col md:flex-row items-center gap-8 text-left bg-gray-50 p-6 rounded-sm mb-8">
                  <img src={recommendedProduct?.image} alt={recommendedProduct?.title} className="w-32 h-32 object-cover rounded-md shadow-sm" />
                  <div>
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{recommendedProduct?.category}</span>
                     <h3 className="text-lg font-bold mt-1">{recommendedProduct?.title}</h3>
                     <p className="text-sm text-gray-600 mt-2">Perfect for your preference!</p>
                     <div className="mt-3 font-bold">₹{recommendedProduct?.price}</div>
                  </div>
               </div>

               <div className="flex gap-4 justify-center">
                   <button onClick={() => window.location.reload()} className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                      <RotateCcw size={16} /> Retake
                   </button>
                   <button className="px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-lg">
                      Add to Cart
                   </button>
               </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
};

export default Quiz;