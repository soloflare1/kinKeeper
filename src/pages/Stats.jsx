
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'; 
import { useFriendship } from '../context/FriendshipContext';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Stats() {
  const { loading, timeline } = useFriendship();

  if (loading) return <LoadingSpinner />;

  const callCount = timeline.filter((i) => i.type === 'Call').length;
  const textCount = timeline.filter((i) => i.type === 'Text').length;
  const videoCount = timeline.filter((i) => i.type === 'Video').length;

  const data = [
    { name: 'Call', value: callCount },
    { name: 'Text', value: textCount },
    { name: 'Video', value: videoCount },
  ];  

  const COLORS = ['#1b4332', '#8b5cf6', '#10b981'];

  return (
     <div className="max-w-5xl mx-auto min-h-[50vh]">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Friendship Analytics</h1>

      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm min-h-[320px]">
        <h3 className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-wider">By Interaction Type</h3>

       <div className="h-72 w-full flex items-center justify-center">  
       <ResponsiveContainer width="100%" height="100%">
          <PieChart> 
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
            
              verticalAlign="bottom"
              align="center"
              iconType="square"
              wrapperStyle={{ paddingTop: '20px' }}
            />
          </PieChart>
        </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
}


