import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* 1. Overlay (Black background dimmer) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-60 transition-opacity duration-500 ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* 2. Drawer (Sliding Panel) */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-70 shadow-2xl transform transition-transform duration-500 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                Your Cart <ShoppingBag size={20}/>
            </h2>
            <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform duration-300">
                <X size={24} />
            </button>
        </div>

        {/* Scrollable Items Area */}
        <div className="flex-1 overflow-y-auto p-6 h-[calc(100vh-250px)]">
            {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <ShoppingBag size={48} className="text-gray-300" />
                    <p className="text-gray-500 font-medium">Your cart is empty.</p>
                    <button onClick={() => setIsCartOpen(false)} className="text-black underline font-bold text-sm uppercase">Start Shopping</button>
                </div>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 group">
                            {/* Image */}
                            <div className="w-20 h-24 bg-gray-50 overflow-hidden rounded-sm shrink-0">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            </div>

                            {/* Details */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-sm font-bold text-black line-clamp-2 leading-tight pr-4">{item.title}</h3>
                                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-600 transition-colors">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                                </div>

                                <div className="flex justify-between items-end">
                                    {/* Qty Control */}
                                    <div className="flex items-center border border-gray-300 rounded-sm">
                                        <button onClick={() => updateQuantity(item.id, 'dec')} className="px-2 py-1 hover:bg-gray-100"><Minus size={12} /></button>
                                        <span className="text-xs font-bold px-2 w-6 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 'inc')} className="px-2 py-1 hover:bg-gray-100"><Plus size={12} /></button>
                                    </div>
                                    {/* Price */}
                                    <span className="text-sm font-bold">₹{item.price * item.quantity}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

        {/* Footer (Total & Checkout) */}
        {cartItems.length > 0 && (
            <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 p-6">
                
                {/* Free Shipping Progress (Bonus Feature) */}
                <div className="mb-4">
                     {cartTotal >= 999 ? (
                         <p className="text-xs text-green-600 font-bold mb-2 flex items-center gap-1">🎉 You've unlocked FREE Shipping!</p>
                     ) : (
                         <p className="text-xs text-gray-500 mb-2">Add <span className="text-black font-bold">₹{999 - cartTotal}</span> more for Free Shipping</p>
                     )}
                     <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                         <div className="h-full bg-black transition-all duration-500" style={{ width: `${Math.min((cartTotal / 999) * 100, 100)}%` }}></div>
                     </div>
                </div>

                <div className="flex justify-between items-center mb-4 text-sm font-bold uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span>₹{cartTotal}</span>
                </div>
                
                <Link to="/checkout" onClick={() => setIsCartOpen(false)} className="block w-full bg-black text-white text-center py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors items-center justify-center gap-2 group">
                    Checkout <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        )}

      </div>
    </>
  );
};

export default CartDrawer;