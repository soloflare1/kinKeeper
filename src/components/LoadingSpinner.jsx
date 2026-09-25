
import React from 'react';

export default function LoadingSpinner() {  
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-[#1b4332]/20 border-t-[#1b4332] rounded-full animate-spin">
      </div>
      <p className="text-sm font-medium text-slate-500 animate-pulse">
        Loading kinKeeper...
      </p>
    </div>
  );
}