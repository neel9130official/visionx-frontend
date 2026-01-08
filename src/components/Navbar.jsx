
import React, { useContext, useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/buy' },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCreateImage = () => {
    if (credit > 0) {
      navigate('/result');
      setIsOpen(false);
    } else {
      toast.info('You need credits to create new images');
      setTimeout(() => navigate('/buy'), 1000);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={assets.VisionX2}
              alt="VisionX Logo"
              className="w-44 sm:w-48 lg:w-52
                         drop-shadow-[0_0_25px_rgba(0,246,255,0.7)]
                         transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all
                  ${
                    location.pathname === item.path
                      ? 'text-cyan-300 bg-white/10 shadow-[0_0_15px_rgba(0,246,255,0.6)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {user ? (
              <>
                {/* Create Button */}
                <button
                  onClick={() => navigate('/result')}
                  className="hidden sm:flex px-5 py-2 rounded-xl
                             bg-gradient-to-r from-cyan-400 to-blue-500
                             text-black font-semibold
                             shadow-[0_0_20px_rgba(0,246,255,0.6)]
                             hover:scale-105 transition"
                >
                  Create
                </button>

                {/* Credits */}
                <span className="hidden sm:block text-sm text-gray-400">
                  Credits: <span className="text-cyan-300">{credit}</span>
                </span>

                {/* Profile */}
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 p-2 rounded-full
                               hover:bg-white/10 transition"
                  >
                    <img
                      src={user.avatar || assets.profile_icon}
                      className="w-9 h-9 rounded-full"
                      alt="Profile"
                    />
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-3 w-52 glass p-2">
                      <p className="px-4 py-2 text-sm text-gray-300">
                        {user.name}
                      </p>

                      <button
                        onClick={() => navigate('/dashboard')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-cyan-300"
                      >
                        Dashboard
                      </button>

                      <button
                        onClick={() => navigate('/buy')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-cyan-300"
                      >
                        Upgrade
                      </button>

                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:text-red-300"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="px-6 py-2 rounded-xl
                           bg-gradient-to-r from-cyan-400 to-blue-500
                           text-black font-semibold
                           shadow-[0_0_20px_rgba(0,246,255,0.6)]
                           hover:scale-105 transition"
              >
                Login
              </button>
            )}

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden glass p-4 mb-4 space-y-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-200 hover:text-cyan-300"
              >
                {item.name}
              </Link>
            ))}

            {user ? (
              <button
                onClick={handleCreateImage}
                className="w-full mt-2 py-2 rounded-xl
                           bg-gradient-to-r from-cyan-400 to-blue-500
                           text-black font-semibold"
              >
                Create Image
              </button>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="w-full mt-2 py-2 rounded-xl
                           bg-gradient-to-r from-cyan-400 to-blue-500
                           text-black font-semibold"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

