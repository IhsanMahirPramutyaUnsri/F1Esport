import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLang } from '../context/LangContext';

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/teams', label: t.nav.teams },
    { to: '/drivers', label: t.nav.drivers },
    { to: '/history', label: t.nav.history },
    { to: '/rules', label: t.nav.rules },
    { to: '/calendar', label: t.nav.calendar },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-f1red font-black text-xl tracking-tight">F1</span>
            <span className="text-gray-900 font-bold text-lg tracking-tight hidden sm:inline">Esport Universe</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive
                      ? 'text-f1red border-b-2 border-f1red'
                      : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Lang Toggle + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="text-sm font-semibold text-gray-700 border border-gray-300 rounded px-3 py-1 hover:border-f1red hover:text-f1red transition-colors"
            >
              {lang === 'id' ? 'ID | EN' : 'EN | ID'}
            </button>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setOpen(!open)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-medium border-l-4 ${
                  isActive
                    ? 'border-f1red text-f1red bg-red-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
