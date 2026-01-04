import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Link Import
import { blogPosts } from '../BlogData';   // 2. Data Import (Top 3 only)

const Blogs = () => {
  // Only show first 3 blogs on homepage
  const homeBlogs = blogPosts.slice(0, 3);

  return (
    <section className="bg-white py-24 mb-10" aria-label="Our Blogs">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
              Read our blogs to get more advice and information update
            </h2>
            <p className="text-gray-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Fermentum commodo ipsum velit amet libero.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {homeBlogs.map((blog) => (
                // 3. Link to Single Page
                <Link to={`/blogs/${blog.id}`} key={blog.id} className="group cursor-pointer block">
                    
                    {/* Image */}
                    <div className="w-full h-72 md:h-80 overflow-hidden relative shadow-md">
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="relative bg-white p-6 mx-6 -mt-16 shadow-xl border border-gray-50 text-left transition-transform duration-300 group-hover:-translate-y-2 z-10">
                        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 min-h-14 line-clamp-2">
                            {blog.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-3">
                            {blog.excerpt}
                        </p>
                        <div className={`w-8 h-1.5 ${blog.dashColor} rounded-full`}></div>
                    </div>

                </Link>
            ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
             {/* 4. Link to All Blogs Page */}
             <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">
                View All Blogs <ArrowRight size={16} />
             </Link>
        </div>

      </div>
    </section>
  );
};

export default Blogs;