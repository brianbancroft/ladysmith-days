import { useState } from 'react'
import { Link } from '@remix-run/react'
import NavIcon from './NavIcon'
import logo from '~/assets/ladysmith-days-logo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/sponsor', label: 'Sponsor' },
  { to: '/citizen-of-the-year', label: 'Citizen of the Year' },
]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 shadow-lg border-b border-blue-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <img
                  src={logo}
                  alt="Ladysmith Days Logo"
                  className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
                />
                <div className="hidden sm:block">
                  <span className="text-xl font-bold text-white tracking-tight">
                    Ladysmith Days
                  </span>
                  <div className="text-xs text-blue-200 font-medium">
                    August 1-2, 2026
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="nav-link text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 relative group"
                >
                  <span className="relative z-10">{label}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex justify-center px-3 py-2 rounded-md text-white hover:text-yellow-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
                aria-label="Open menu"
              >
                <NavIcon open={false} small />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Drawer overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-xl flex flex-col transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-4 py-4 bg-gradient-to-r from-blue-800 to-blue-700">
            <span className="text-white font-semibold text-lg">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-yellow-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-white transition-colors"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex flex-col divide-y divide-gray-100 flex-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-gray-800 font-medium text-base hover:bg-blue-50 hover:text-blue-800 transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav
