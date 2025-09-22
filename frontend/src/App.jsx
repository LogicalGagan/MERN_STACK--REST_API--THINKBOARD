import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import CreateNote from './pages/CreateNote.jsx';
import Notedetail from './pages/Notedetail.jsx';
import Auth from './pages/Auth.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#10141a] font-sans relative overflow-x-hidden">
      {/* Aurora background effects */}
      <div className="fixed -top-24 left-1/2 -translate-x-1/2 w-[100vw] h-[45vh] z-0 pointer-events-none blur-[90px] opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 60% 30%, #7fffd4 0%, #67e8f9 60%, transparent 100%)'
        }}
      />
      <div className="fixed bottom-0 right-0 w-[58vw] h-[28vh] z-0 pointer-events-none blur-[110px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at bottom right, #a5b4fc 0%, #8b5cf6 40%, transparent 100%)'
        }}
      />
      <div className="relative z-10">
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/create' element={<CreateNote />} />
            <Route path='/note/:id' element={<Notedetail />} />
          </Route>
        </Routes>
      </div>
      
    </div>
  );
};

export default App;