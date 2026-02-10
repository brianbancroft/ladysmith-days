import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from '@remix-run/react'
import NavIcon from './NavIcon'
import logo from '~/assets/ladysmith-days-logo.png'

function classNames(...args: any[]) {
  let className = ''
  for (const arg of args) {
    className = className + `${arg} `
  }

  return className
}

function Nav() {
  const [visible, setVisible] = useState(false)

  return (
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
            <Link
              to="/"
              className="nav-link text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 relative group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"></div>
            </Link>
            <Link
              to="/volunteer"
              className="nav-link text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 relative group"
            >
              <span className="relative z-10">Volunteer</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"></div>
            </Link>
            <Link
              to="/sponsor"
              className="nav-link text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 relative group"
            >
              <span className="relative z-10">Sponsor</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"></div>
            </Link>
            <Link
              to="/citizen-of-the-year"
              className="nav-link text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 relative group"
            >
              <span className="relative z-10">Citizen of the Year</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yellow-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200">
                  <NavIcon open={visible} small />
                </Menu.Button>
              </div>

              {/* Mobile Navigation Menu */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active, close }) => (
                        <Link
                          to="/"
                          onClick={() => {
                            setVisible(false)
                            close()
                          }}
                          className={`${
                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-3 text-sm font-medium transition-colors duration-200`}
                        >
                          <span className="ml-2">🏠 Home</span>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active, close }) => (
                        <Link
                          to="/volunteer"
                          onClick={() => {
                            setVisible(false)
                            close()
                          }}
                          className={`${
                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-3 text-sm font-medium transition-colors duration-200`}
                        >
                          <span className="ml-2">🤝 Volunteer</span>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active, close }) => (
                        <Link
                          to="/sponsor"
                          onClick={() => {
                            setVisible(false)
                            close()
                          }}
                          className={`${
                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-3 text-sm font-medium transition-colors duration-200`}
                        >
                          <span className="ml-2">💝 Sponsor</span>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active, close }) => (
                        <Link
                          to="/citizen-of-the-year"
                          onClick={() => {
                            setVisible(false)
                            close()
                          }}
                          className={`${
                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-3 text-sm font-medium transition-colors duration-200`}
                        >
                          <span className="ml-2">🏆 Citizen of the Year</span>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>


    </nav>
  )
}

export default Nav
