import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Toaster} from "react-hot-toast";
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
      <App />
    
   <Toaster
        toastOptions={{
          style: {
            background: 'rgba(32,48,64,0.96)',
            color: '#a5b4fc',
            border: '1.5px solid #67e8f9',
            borderRadius: '12px',
            fontWeight: 500,
            fontSize: '1rem',
            boxShadow: '0 6px 24px 0 #0ff2',
          },
          iconTheme: {
            primary: '#7fffd4',
            secondary: '#232526',
          },
        }}
        position="top-center"
      />
   
    </BrowserRouter>
  </StrictMode>
)
