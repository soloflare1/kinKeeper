import React, { useState } from 'react';
import { Phone, MessageSquare, Video } from 'lucide-react';
import { useFriendship } from '../context/FriendshipContext';
import LoadingSpinner from '../components/LoadingSpinner';


export default function Timeline() {
  const { loading, timeline } = useFriendship();
  const [filter, setFilter] = useState('All');

  if (loading) return <LoadingSpinner />;

  const filteredTimeline = filter === 'All' 
    ? timeline 
    : timeline.filter((item) => item.type === filter);

    
    const getIcon = (type) => {
      if (type === 'Call') return <Phone className="w-4 h-4 text-emerald-600" />;
      if (type === 'Text') return <MessageSquare className="w-4 h-4 text-purple-600" />;
      if (type === 'Video') return <Video className="w-4 h-4 text-blue-600" />;
      return null;
    };

  return (
    <div className="max-w-4xl mx-auto min-h-[50vh]">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Timeline</h1>
      <div className="mb-10">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-56 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 bg-white focus:outline-none focus:ring-1 focus:ring-slate-300 shadow-sm"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>
    
     {filteredTimeline.length === 0 ? (
        <div className="text-center py-20 text-slate-500 font-medium text-sm">
          No data found! 
          </div>
            ) : (
              <div className="space-y-3">
                {filteredTimeline.map((item) => (
                  <div key={item.id} className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-slate-50 rounded-lg">{getIcon(item.type)}</div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
                        <p className="text-xs text-slate-400">{item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            </div>
  );
}
 