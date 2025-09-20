import React from 'react';

const RateLimitedUI = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-[#0f2027] via-[#232526] to-[#2c5364] relative">
      {/* Aurora Blur/Glow overlays */}
      <div className="absolute left-[-7vw] top-[-6vw] w-[28vw] h-[28vw] rounded-full bg-gradient-to-br from-[#7fffd4] to-[#67e8f9] opacity-25 blur-[110px] pointer-events-none" />
      <div className="absolute right-[-12vw] bottom-[-8vw] w-[32vw] h-[20vw] rounded-full bg-gradient-to-br from-[#a5b4fc] via-[#8b5cf6] to-[#67e8f9] opacity-20 blur-[110px] pointer-events-none" />
      {/* Spacer for fixed navbar */}
      <div style={{ height: '4.5rem' }} aria-hidden="true"></div>
      {/* Card in the middle */}
      <div className="w-full flex justify-center mt-16 z-10">
        <div className="relative bg-[#191e24ee] backdrop-blur-2xl ring-1 ring-[#7fffd4]/20 rounded-2xl shadow-2xl p-10 w-full max-w-lg flex flex-col items-center border-b-4 border-gradient-to-r from-[#7fffd4] via-[#67e8f9] to-[#a5b4fc]">
          <svg width="66" height="66" viewBox="0 0 24 24" className="mb-4 drop-shadow-[0_0_16px_#67e8f9cc]">
            <defs>
              <radialGradient id="icon-aurora" cx="60%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#7fffd4" />
                <stop offset="70%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#a5b4fc" />
              </radialGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#icon-aurora)" opacity="0.10" />
            <path
              d="M12 7v5l3 3"
              stroke="#67e8f9"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              stroke="#a5b4fc"
              strokeWidth="2"
              fill="none"
              opacity="0.41"
            />
          </svg>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#7fffd4] to-[#a5b4fc] bg-clip-text text-transparent mb-2 drop-shadow-[0_2px_8px_#a5b4fc40]">
            Rate Limit Reached
          </h1>
          <p className="text-cyan-100 text-center mb-4 font-medium">
            You’ve hit the request limit.<br />
            Chill for a bit and try again soon 🌌
          </p>
          <button
            className="btn border-0 bg-gradient-to-r from-[#7fffd4] via-[#67e8f9] to-[#a5b4fc] text-slate-800 font-bold px-8 py-2 rounded-full shadow-lg hover:scale-105 hover:from-[#67e8f9] hover:to-[#a5b4fc] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7fffd4]/30"
            onClick={() => window.location.reload()}
          >
            🔄 Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;