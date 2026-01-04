import React from 'react';
import { Link } from 'react-router-dom'; // 1. Link Import
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
            
            {/* Top Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 border-b border-gray-800 pb-12">
                
                {/* Column 1: Bestsellers */}
                <div>
                    <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Bestsellers</h5>
                    <ul className="flex flex-col gap-3 text-[11px] text-gray-400">
                        {/* Connected to Shop/Bestsellers */}
                        <li><Link to="/bestsellers" className="hover:text-white cursor-pointer transition-colors">Ultimate Perfume Box</Link></li>
                        <li><Link to="/gifting" className="hover:text-white cursor-pointer transition-colors">Perfume Gift Set For Men</Link></li>
                        <li><Link to="/gifting" className="hover:text-white cursor-pointer transition-colors">Perfume Gift Set For Women</Link></li>
                        <li><Link to="/shop" className="hover:text-white cursor-pointer transition-colors">Under Eye Cream</Link></li>
                    </ul>
                </div>

                {/* Column 2: Information */}
                <div>
                    <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Information</h5>
                    <ul className="flex flex-col gap-3 text-[11px] text-gray-400">
                        <li><Link to="/blogs" className="hover:text-white cursor-pointer transition-colors">Blogs</Link></li>
                        <li><Link to="/newsroom" className="hover:text-white cursor-pointer transition-colors">Newsroom</Link></li>
                        <li><Link to="/terms" className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</Link></li>
                        <li><Link to="/privacy" className="hover:text-white cursor-pointer transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/refund" className="hover:text-white cursor-pointer transition-colors">Refund and Return</Link></li>
                        <li><Link to="/shipping" className="hover:text-white cursor-pointer transition-colors">Shipping Policy</Link></li>
                    </ul>
                </div>

                {/* Column 3: Support */}
                <div>
                    <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Support</h5>
                    <ul className="flex flex-col gap-3 text-[11px] text-gray-400">
                        <li><Link to="/about" className="hover:text-white cursor-pointer transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-white cursor-pointer transition-colors">Contact Us</Link></li>
                        <li><Link to="/track-order" className="hover:text-white cursor-pointer transition-colors">Order Tracking</Link></li>
                        <li><Link to="/Shop" className="hover:text-white cursor-pointer transition-colors">All Products</Link></li>
                        <li><Link to="/faq" className="hover:text-white cursor-pointer transition-colors">FAQ</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact Us */}
                <div>
                    <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Contact Us</h5>
                    <div className="text-[11px] text-gray-400 flex flex-col gap-4">
                        <p>
                           Office Location: Plot no. 417, Udyog Vihar Phase III, Gurgaon, Haryana, India
                        </p>
                        <p>
                           <span className="block mb-1">Contact Us on WhatsApp</span>
                           <a href="https://wa.me/919667204722" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm hover:underline">+91-9667204722</a>
                        </p>
                        <p>
                           Timing: 10:00 AM to 7:00 PM, Monday to Sunday
                        </p>
                    </div>
                </div>

                {/* Column 5: Exclusive (Newsletter) */}
                <div>
                    <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Exclusive</h5>
                    <form onSubmit={(e) => e.preventDefault()} className="relative border-b border-gray-600 mb-4">
                        <input 
                            type="email" 
                            placeholder="Enter email here" 
                            className="bg-transparent w-full py-2 text-sm outline-none placeholder-gray-500 text-white" 
                        />
                        <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">→</button>
                    </form>
                    <p className="text-[10px] text-gray-500 mb-6 leading-relaxed">
                        Sign up here to get the latest news, updates and special offers delivered to your inbox.
                    </p>
                    <div className="flex gap-4 text-gray-400">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={16} className="cursor-pointer hover:text-white transition-colors"/></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={16} className="cursor-pointer hover:text-white transition-colors"/></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={16} className="cursor-pointer hover:text-white transition-colors"/></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube size={16} className="cursor-pointer hover:text-white transition-colors"/></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-[10px] text-gray-600">
                © 2025 Bella Vita Organic. All Rights Reserved.
            </div>
        </div>
    </footer>
  );
};

export default Footer;