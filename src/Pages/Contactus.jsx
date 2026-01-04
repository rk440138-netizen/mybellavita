import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Bella Vita Organic";
  }, []);

  return (
    <main className="bg-white min-h-screen">
      
      <div className="bg-gray-50 py-12 border-b border-gray-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Get in Touch</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            
            {/* Contact Info */}
            <div>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-8">Visit Us</h2>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <MapPin className="mt-1" size={24}/>
                        <div>
                            <h4 className="font-bold text-sm uppercase mb-1">Office Address</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Plot no. 417, Udyog Vihar Phase III,<br/>
                                Sector 20, Gurgaon,<br/>
                                Haryana, India - 122016
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Phone className="mt-1" size={24}/>
                        <div>
                            <h4 className="font-bold text-sm uppercase mb-1">Phone</h4>
                            <p className="text-gray-600 text-sm">+91-9810154380</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Mail className="mt-1" size={24}/>
                        <div>
                            <h4 className="font-bold text-sm uppercase mb-1">Email</h4>
                            <p className="text-gray-600 text-sm">shop@bellavitaorganic.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Clock className="mt-1" size={24}/>
                        <div>
                            <h4 className="font-bold text-sm uppercase mb-1">Opening Hours</h4>
                            <p className="text-gray-600 text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 shadow-xl border border-gray-100 rounded-sm">
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">Send a Message</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold uppercase mb-2 text-gray-500">Name</label>
                        <input type="text" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" placeholder="Enter your name" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase mb-2 text-gray-500">Email</label>
                        <input type="email" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" placeholder="Enter your email" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase mb-2 text-gray-500">Message</label>
                        <textarea rows="4" className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition-colors resize-none" placeholder="How can we help?"></textarea>
                    </div>
                    <button className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                        Submit
                    </button>
                </form>
            </div>

        </div>
      </div>

    </main>
  );
};

export default ContactUs;