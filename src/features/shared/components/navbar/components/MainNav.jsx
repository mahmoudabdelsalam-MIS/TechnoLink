import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'HOME', path: '/' },
    { title: 'ABOUT US', path: '/aboutUs' },
    { title: 'PRODUCTS', path: '/products' },
    { title: 'CONTACT US', path: '/contactUs' },
  ];

  return (
    <nav className="w-full bg-secondary px-6 relative">
      <div className="flex items-center justify-between md:justify-start py-3.5">

        {/* الروابط - في الديسكتوب تظهر عادي جنب بعض */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 md:ml-31">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) => `
                text-white font-semibold text-sm tracking-wider uppercase transition-opacity duration-200
                ${isActive ? 'opacity-100 border-b-2 border-white pb-0.5' : 'opacity-90 hover:opacity-100'}
              `}
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* القائمة المنسدلة - تظهر بس في الموبايل لما تفتح */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-md opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col gap-1 pb-4">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `
                text-white font-semibold text-sm tracking-wider uppercase transition-colors duration-200 py-2.5 px-2 rounded-sm
                ${isActive ? 'bg-white/10 opacity-100' : 'opacity-90 hover:bg-white/5 hover:opacity-100'}
              `}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>

    </nav>
  );
}