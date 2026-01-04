import React from 'react'
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-lg p-8">
        
        <h2 className="text-3xl font-bold  px-4 py-2 inline-block mb-8">
          Create Account
        </h2>

        
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="First name"
            className="w-full border border-gray-300 p-4 text-gray-700 focus:outline-none focus:border-black"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full border border-gray-300 p-4 text-gray-700 focus:outline-none focus:border-black"
          />
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

          
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-black text-white px-10 py-4 font-semibold tracking-widest uppercase hover:bg-gray-800"
            >
              Create
            </button>

            
            <Link
              to="/"
              className="text-black underline hover:text-gray-700"
            >
              Return to Store
            </Link>
          </div>
        </form>
      </div>
    </div>
 

  )
}
