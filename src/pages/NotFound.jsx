import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {  
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-black text-[#1b4332] mb-2">404</h1>
      <h2 className="text-xl font-bold text-slate-800 mb-2">Page Not Found</h2>
      <p className="text-slate-500 text-sm max-w-sm mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-5 py-2.5 bg-[#1b4332] text-white text-sm font-medium rounded-lg hover:bg-[#2d6a4f] transition-colors"
      >
        Go back to Home
      </Link>
    </div>
  );
}