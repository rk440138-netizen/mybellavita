import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-sm md:text-base font-bold uppercase tracking-wide transition-colors ${isOpen ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>
            {question}
        </span>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FAQ | Bella Vita Organic";
  }, []);

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How long does the perfume last?",
      a: "Our Eau De Parfums are designed to last 6-8 hours on the skin and up to 12 hours on clothes, depending on weather conditions."
    },
    {
      q: "Are your products cruelty-free?",
      a: "Yes! Bella Vita Organic is strictly cruelty-free. None of our products or ingredients are tested on animals."
    },
    {
      q: "How can I track my order?",
      a: "Once your order is shipped, you will receive an email and SMS with the tracking link. You can also track it from the 'My Orders' section."
    },
    {
      q: "What is the return policy?",
      a: "We offer returns only if the product is received in a damaged condition. Please report it within 24 hours of delivery."
    },
    {
      q: "Do you ship internationally?",
      a: "Currently, we only ship within India. We are working on expanding our shipping globally very soon!"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      
      <div className="bg-gray-50 py-16 mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-500">Have questions? We're here to help.</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-20">
        <div className="bg-white p-2 md:p-8">
            {faqs.map((faq, index) => (
                <FAQItem 
                    key={index}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={index === openIndex}
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
            ))}
        </div>
      </div>

    </main>
  );
};

export default FAQ;