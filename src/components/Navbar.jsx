
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, History, BarChart3 } from 'lucide-react';

export default function Navbar() {

  const linkClass = ({ isActive }) =>
    `flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all 
  ${
      isActive
        ? 'bg-[#1b4332] text-white shadow-sm'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
    }`;

    return (
      <header className="w-full bg-white border-b border-slate-100 px-6 sm:px-12 py-3.5 flex items-center justify-between sticky top-0 z-50">
        <NavLink to="/" className="text-xl font-extrabold text-[#1b4332] tracking-tight">
          KinKeeper
        </NavLink>
        <nav className="flex items-center space-x-2">

          <NavLink to="/" className={linkClass}>
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/timeline" className={linkClass}>
            <History className="w-3.5 h-3.5" />
            <span>Timeline</span>
          </NavLink>

          <NavLink to="/stats" className={linkClass}>
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Stats</span>
          </NavLink>
        </nav>
      </header>
    );
  }