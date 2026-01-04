import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../BlogData'; // Import Data
import { ArrowLeft, Clock, User } from 'lucide-react';

const SingleBlog = () => {
  const { id } = useParams(); // URL se ID nikalo
  const blog = blogPosts.find((p) => p.id === Number(id)); // Data mein find karo

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) return <div className="text-center py-20">Blog Not Found</div>;

  return (
    <main className="bg-white min-h-screen">
      

      <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        
        {/* Breadcrumb / Back */}
        <Link to="/blogs" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Journal
        </Link>

        {/* Header Info */}
        <div className="text-center mb-10">
            <span className="bg-teal-50 text-teal-800 text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-4 inline-block">
                Lifestyle
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                {blog.title}
            </h1>
            
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <User size={16} /> <span>By {blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock size={16} /> <span>{blog.date}</span>
                </div>
            </div>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 md:h-[500px] overflow-hidden rounded-sm shadow-lg mb-12">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* Blog Content */}
        <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-black first-letter:float-left first-letter:mr-3"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
        />
        
        {/* Separator */}
        <hr className="my-12 border-gray-200" />

      </article>

      
    </main>
  );
};

export default SingleBlog;