
import React, { createContext, useContext, useState, useEffect } from 'react';

const FriendshipContext = createContext();
const initialTimeline = [
  { id: '101', type: 'Call', title: 'Caught up on weekend plans', date: 'Yesterday at 4:30 PM' },
  { id: '102', type: 'Text', title: 'Sent birthday wishes', date: '3 days ago' },
  { id: '103', type: 'Video', title: 'Monthly catch-up call', date: 'Last week' }
];

export function FriendshipProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch('/friends.json')
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setTimeline(initialTimeline);
      })
      .catch((err) => console.error('Error fetching friends:', err))
      .finally(() => {
        setTimeout(() => setLoading(false), 600);
      });
  }, []);

      return (
        <FriendshipContext.Provider value={{ loading, setLoading, friends, setFriends, timeline, setTimeline }}>
          {children}
        </FriendshipContext.Provider>
      );

}

export const useFriendship = () => useContext(FriendshipContext);


