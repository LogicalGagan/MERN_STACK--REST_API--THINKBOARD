import React from "react";
import { Link } from "react-router-dom";

const Nonotefound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-transparent relative z-10">
      {/* Aurora Glow */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-56 bg-[#7fffd4] opacity-20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-10 right-1/3 w-80 h-36 bg-[#a5b4fc] opacity-10 rounded-full blur-2xl pointer-events-none z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center px-8 py-12 bg-gradient-to-br from-[#232526dd] via-[#2c5364d0] to-[#7fffd41a] rounded-2xl border border-[#7fffd4]/20 shadow-xl max-w-lg mx-auto">
        <span className="text-5xl mb-4 select-none">📝</span>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#7fffd4] to-[#a5b4fc] bg-clip-text text-transparent mb-2">
          No Notes Found!
        </h2>
        <p className="text-cyan-100/80 mb-6 text-center max-w-xs">
          Looks like you haven't created any notes yet.<br />
          Click below to create your first note and start organizing your thoughts!
        </p>
        <Link
          to="/create"
          className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#7fffd4] via-[#67e8f9] to-[#a5b4fc] shadow font-bold text-slate-800 text-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7fffd4]/30 transition-all duration-200"
        >
          + Create Note
        </Link>
      </div>
    </div>
  );
};

export default Nonotefound;