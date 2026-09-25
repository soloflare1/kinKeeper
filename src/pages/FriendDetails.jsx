
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, Video, Clock, Archive, Trash2, Edit } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFriendship } from '../context/FriendshipContext';
import LoadingSpinner from '../components/LoadingSpinner';

export default function FriendDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, friends = [], addTimelineEntry, snoozeFriend, archiveFriend, deleteFriend } 
  = useFriendship() || {};

  if (loading) return <LoadingSpinner />;
  const friend = friends.find((item) => String(item.id) === String(id));
  
  if (!friend) {
    return (
      <div className="max-w-xs mx-auto text-center py-10 bg-white rounded-xl border border-slate-100">
        <h2 className="text-sm font-bold text-slate-800">Friend not found!</h2>
        <button onClick={() => navigate('/')} 
        className="mt-3 px-3 py-1.5 bg-[#1b4332] text-white text-xs rounded-lg">
          Back to Dashboard
        </button>
      </div>
    );
  }

  const showToast = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    });
  }

  const handleCheckIn = (type) => {
   
    const title = `${type} with ${friend.name}`;
    const date = new Date().toLocaleDateString('en-US', 
      { month: 'short', day: 'numeric', year: 'numeric' });
    
      if (addTimelineEntry) addTimelineEntry({ 
        friendId: friend.id, title, date, type: type.toLowerCase() 
      });
    showToast(`Logged: ${title}`);
  };

  const badgeColor = friend.status?.toLowerCase() === 'overdue' ? 
  'bg-red-500 text-white' : 
  friend.status?.toLowerCase() === 'almost due' ?
   'bg-green-500 text-white' :
    'bg-yellow-500 text-white';
  
  return (
     <div style={{
      maxWidth: '960px',
      margin: '0 auto',
      padding: '24px 16px',
     }}>

      <ToastContainer />
        <div style={{ 
          display: 'flex', gap: '20px', alignItems: 'flex-start' 
          }}>

          <div style={{ 
            width: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '12px'
             }}>
            <div style={{ 
              backgroundColor: '#fff', padding: '20px 16px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' 
              }}>

              <img src={friend.picture} alt={friend.name} style={{ 
                width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', marginBottom: '8px'
                 }} />

              <h1 style={{ 
                fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' }}>
                {friend.name}</h1>

              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold capitalize mb-2 
                ${badgeColor}`}>{friend.status}
              </span>

              <div style={{ 
                display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '8px'
             }}>

                {friend.tags?.map((t, i) => 
                (
                  <span key={i} style={{ padding: '2px 6px', borderRadius: '12px', fontSize: '9px', fontWeight: '700', backgroundColor: '#d1fae5', color: '#065f46' }}>{t}</span>
                ))}

              </div>

              <p style={{ fontSize: '11px', color: '#64748b', fontStyle: 'italic', margin: '0 0 8px 0' }}>{friend.bio || '"Lead developer and software architect."'}</p>
              <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>Preferred: <span style={{ color: '#64748b' }}>{friend.preferred_contact || 'email'}</span></p>
            </div>
            <button onClick={() => {snoozeFriend?.(friend.id); showToast(`Snoozed 2 weeks!`); }} style={{ padding: '8px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#334155', fontSize: '11px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', cursor: 'pointer' }}>
              <Clock size={13} /> Snooze 2 Weeks
            </button>
            <button onClick={() => {archiveFriend?.(friend.id); showToast(`Archived!`); }} style={{ padding: '8px', backgroundColor: '#f8fafc', border: 'none', borderRadius: '8px', color: '#334155', fontSize: '11px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', cursor: 'pointer' }}>
              <Archive size={13} /> Archive
            </button>
            <button onClick={() => {deleteFriend?.(friend.id); showToast(`Deleted!`); }} style={{ padding: '8px', backgroundColor: '#fef2f2', border: 'none', borderRadius: '8px', color: '#dc2626', fontSize: '11px', fontWeight: '600', display: 'flex',
               alignItems: 'center', justifyContent: 'center', gap: '6px', cursor: 'pointer' }}>
              <Trash2 size={13} /> Delete
            </button>
          </div>
     <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        <div style={{ backgroundColor: '#fff', padding: '16px 8px', borderRadius: '14px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>{friend.days_since_contact}</div>
          <div style={{ fontSize: '10px', color: '#94a3b8' }}>Days Since Contact</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px 8px', borderRadius: '14px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>{friend.goal_days || 30}</div>
          <div style={{ fontSize: '10px', color: '#94a3b8' }}>Goal (Days)</div>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '16px 8px', borderRadius: '14px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', marginTop: '4px' }}>{friend.next_due || 'Feb 27, 2026'}</div>
          <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px' }}>Next Due</div>
        </div>
      </div>
      
      <div style={{ background: '#fff', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'row', gap: '10px' , justifyContent: 'space-between', alignItems: 'center' }}>
        <div >
          <h3 style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a', margin: 0 }}>RelationShip Goals</h3>
          <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}></p>
        </div>

        <button style={{ padding: '2px', backgroundColor: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: '10px', color: '#334155', fontSize: '11px', fontWeight: '600', display: 'flex', alignItems: 'right', justifyContent: 'center', gap: '6px', cursor: 'pointer' }}>
          <Edit size={13} /> Edit Goals
        </button>

      </div>
   
      <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3 style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a', margin: 0 }}>Quick Check-In   </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {
            ['Call', 'Text', 'Video'].map((type) => (
              <button key={type}

              onClick={() => {handleCheckIn(type)}}
              style={{ padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                {type === 'Call' ? <Phone size={16} /> : type === 'Text' ? <MessageSquare size={16} /> : <Video size={16} />}
                <span style={{ fontSize: '11px', fontWeight: '600' }}>{type}</span>
              </button>     
            ))
          }
          </div>
        </div>
      </div>
    </div>
  </div>
)

};
