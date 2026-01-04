import React from 'react'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-lg p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold py-2 mb-8">
          Login
        </h2>
        <h3 className='text-2xl inline-block py-2 text-gray-400 mb-3'>Don't have an account yet? </h3>
        <Link
          to="/register"
          className="text-black text-xl hover:underline py-2 hover:text-gray-700"
        >
          Create Account
        </Link>

        {/* Form */}
        <form className="flex flex-col py-2 gap-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-4 text-gray-700 focus:outline-none focus:border-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-4 text-gray-700 focus:outline-none focus:border-black"
          />

          {/* Buttons Container */}
          <div className="flex justify-between items-center mt-6">
            
            {/* --- NEW ANIMATED LOGIN BUTTON --- */}
            <button
              type="submit"
              className="relative group overflow-hidden bg-white border border-black px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300"
            >
              {/* Text Layer (z-10 to stay on top) */}
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-700 delay-100">
                Login
              </span>

              {/* Skewed Curtain Layer */}
              <div className="absolute inset-0 bg-black w-[120%] h-full -left-[10%] transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out origin-left"></div>
            </button>
            {/* --------------------------------- */}

            {/* Return to Store Link */}
            <Link to="/"
              className="text-black hover:underline hover:text-gray-700"
            >
              Return to Store
            </Link>

          </div>
        </form>
      </div>
    </div>
  )
}