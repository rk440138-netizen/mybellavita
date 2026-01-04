import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { blogPosts } from '../BlogData'; // Import Data

const AllBlogs = () => {
  useEffect(() => {
    document.title = "Our Blog | Bella Vita Organic";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      
      
      {/* Header */}
      <div className="bg-gray-50 py-16 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">The Journal</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Discover stories, tips, and the history behind your favorite scents.</p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className="group cursor-pointer block">
                {/* Image */}
                <div className="w-full h-72 overflow-hidden relative shadow-md rounded-sm">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="mt-6">
                    <span className="text-xs font-bold text-teal-700 tracking-widest uppercase mb-2 block">{blog.date}</span>
                    <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-gray-600 transition-colors">
                        {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                        {blog.excerpt}
                    </p>
                    <span className="text-xs font-bold uppercase tracking-widest mt-4 inline-block border-b border-black pb-1 group-hover:border-gray-400 group-hover:text-gray-400 transition-all">
                        Read Article
                    </span>
                </div>
            </Link>
          ))}
        </div>
      </div>

      
    </main>
  );
};

export default AllBlogs;