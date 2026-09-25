import React from 'react';
import { useFriendship } from '../context/FriendshipContext';
import LoadingSpinner from '../components/LoadingSpinner';
import FriendCard from '../components/FriendCard';
import { Plus } from 'lucide-react';

export default function Home() {
  const { loading, friends } = useFriendship();

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 space-y-8">
     
    <div className="text-center space-y-3" >
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
        Friends to keep close in your life
      </h1> 
      <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <div className="pt-1">
        <button className="inline-flex items-center space-x-1.5 bg-[#1b4332] hover:bg-[#2d6a4f] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all">
          <Plus className="w-4 h-4" />
          <span>Add a Friend</span>
        </button>
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="flex-1 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
        <div className="text-2xl font-bold text-slate-900">{friends.length}</div>
        <div className="text-xs font-medium text-slate-400 mt-1">Total Friends</div>
      </div>
      
      <div className="flex-1 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
        <div className="text-2xl font-bold text-slate-900">3</div>
        <div className="text-xs font-medium text-slate-400 mt-1">On Track</div>
      </div>
      
      <div className="flex-1 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
        <div className="text-2xl font-bold text-slate-900">6</div>
        <div className="text-xs font-medium text-slate-400 mt-1">Need Attention</div>
      </div>

      <div className="flex-1 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
        <div className="text-2xl font-bold text-slate-900">12</div>
        <div className="text-xs font-medium text-slate-400 mt-1">Interactions This Month</div>
      </div>
    </div>

    <div className="space-y-4 pt-2">
      <h2 className="text-sm font-bold text-slate-900">Your Friends</h2>

      <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        )) }
      </div>

      </div>
      </div>
  );
}


