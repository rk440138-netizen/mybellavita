
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ Correct Imports (Small folders)
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import ProductDetails from './Pages/Productdetails';
import CrazyDeals from './components/CrazyDeals';
import Footer from './components/Footer';
import Shop from './components/Shop';
import  Bath  from './Pages/Bath';
import Bestsellers from './Pages/Bestseller';
import ScrollToTop from './components/ScrollToTop';
import Gifting from './Pages/Gifting';
import NewArrivals from './Pages/Newarrivals';
import Perfumes from './Pages/Perfumes';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Quiz from './Pages/Quiz';
import AllBlogs from './Pages/AllBlogs';
import SingleBlog from './Pages/SingleBlogs';
import FAQ from './Pages/FAQ';
import AboutUs from './Pages/Aboutus';
import ContactUs from './Pages/Contactus';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <CartProvider>
    <Router>

      <div className="font-sans bg-white text-gray-900 min-h-screen">
        <CartDrawer/>
        <Navbar />
        <ScrollToTop></ScrollToTop>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/crazy-deals" element={<CrazyDeals />} />
          <Route path="/Shop" element={<Shop/>}/>
          <Route path='/bath&body' element={<Bath/>}/>
          <Route path='/bestseller' element={<Bestsellers/>}/>
          <Route path='gifting' element={<Gifting/>}/>
          <Route path='Newarrivals' element={<NewArrivals/>}/>
          <Route path='perfumes' element={<Perfumes/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path="/quiz/:type" element={<Quiz />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/About' element={<AboutUs/>}/>
          <Route path='/Contact' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;