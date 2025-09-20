import React from 'react';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  // Reserve space for fixed navbar
  return (
    <>
      <div className="block w-full" style={{ height: '4.5rem' }} aria-hidden="true"></div>
      <nav
        className="navbar fixed top-0 left-0 w-full z-50"
        style={{
          height: '4.5rem',
          background: 'linear-gradient(90deg, #0f2027D9 0%, #2c5364D9 50%, #232526D9 100%)',
          backdropFilter: 'blur(18px) saturate(1.3)',
          WebkitBackdropFilter: 'blur(18px) saturate(1.3)',
          borderBottom: '1.5px solid rgba(120,255,255,0.17)',
          boxShadow: '0 4px 32px 5px rgba(0,255,170,0.07), 0 1.5px 0 0px rgba(120,255,255,0.07)',
        }}
      >
        <div className="flex-1 pl-8">
          <a className="normal-case text-2xl bg-gradient-to-r from-[#7fffd4] via-[#67e8f9] to-[#a5b4fc] bg-clip-text text-transparent font-extrabold tracking-wider flex items-center gap-2 drop-shadow-[0_2px_16px_rgba(0,255,255,0.23)]">
            <svg width="30" height="30" viewBox="0 0 24 24" className="animate-spin-slow">
              <defs>
                <radialGradient id="aurora" cx="60%" cy="30%" r="80%">
                  <stop offset="0%" stopColor="#7fffd4" />
                  <stop offset="70%" stopColor="#67e8f9" />
                  <stop offset="100%" stopColor="#a5b4fc" />
                </radialGradient>
              </defs>
              <circle cx="12" cy="12" r="10" fill="url(#aurora)" opacity="0.22" />
              <path d="M12 3L14.09 8.26L20 9.27L15.5 13.97L16.18 20L12 17.27L7.82 20L8.5 13.97L4 9.27L9.91 8.26L12 3Z" fill="url(#aurora)" />
            </svg>
            AuroraBoard
          </a>
        </div>
        <div className="flex-none pr-8">
          <button  onClick={()=>navigate("/create")} className="relative px-7 py-2 rounded-full bg-gradient-to-r from-[#67e8f9CC] via-[#a5b4fcBB] to-[#8b5cf6CC] shadow-xl font-semibold text-lg text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7fffd4] transition-all duration-200 overflow-hidden border-0">
            <span className="relative z-10">+ New Note</span>
            <span className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-tr from-[#7fffd4] to-[#67e8f9] opacity-20 blur-lg animate-pulse pointer-events-none"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;