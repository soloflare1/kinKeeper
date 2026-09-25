
import React from 'react';
import { Link } from 'react-router-dom';

export default function FriendCard({ friend }) {
  const getBadgeStyle = (status) => {
    
    if (status?.toLowerCase() === 'overdue') {
      return 'bg-rose-500 text-white';
    } 
    else if (status?.toLowerCase() === 'almost due') {
      return 'bg-amber-400 text-slate-900';
    } 
    else if (status?.toLowerCase() === 'on track') {
      return 'bg-emerald-500 text-white';
    } 
    else {
      return 'bg-slate-500 text-white';
    }
  } 
  

  return (
    <Link
    to={`/friend/${friend.id}`}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center cursor-pointer group"
  >
    <img
      src={friend.picture}
      alt={friend.name}
      className="w-16 h-16 rounded-full object-cover mb-3 group-hover:scale-105 transition-transform"
      />
      <h3
        className="font-bold text-slate-900 text-sm mb-0.5">
        {friend.name}
        <p className="text-[11px] text-slate-400 mb-3">{friend.days_since_contact}d ago</p> 
     
      </h3>

      <div className="flex flex-wrap gap-1.5 justify-center mb-3">
        {friend.tags?.map((tag, idx) => (
          <span
            key={idx} 
            className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

    <span className={`px-3 py-1 rounded-full text-[10px] font-bold capitalize tracking-wide
       ${getBadgeStyle(friend.status)}`}>
      {friend.status}
    </span>
  </Link>
  );
}


