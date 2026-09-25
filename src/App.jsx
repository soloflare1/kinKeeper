import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FriendshipProvider } from './context/FriendshipContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import FriendDetails from './pages/FriendDetails';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <FriendshipProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col justify-between bg-slate-50">
          <div>
            <Navbar />
            <main className="px-6 sm:px-12 py-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/friend/:id" element={<FriendDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </FriendshipProvider>
  );
}   
