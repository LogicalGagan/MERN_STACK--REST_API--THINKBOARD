import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import RateLimitedUI from '../components/RateLimitedUI.jsx';
import NoteCard from '../components/NoteCard.jsx';
import Nonotefound from '../components/Nonotefound.jsx';

import toast from "react-hot-toast"
import api from '../libs/axios.js';

const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setnotes] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(
    () => {
      const fetchNotes = async () => {
        try {
          const res = await api.get("/notes");

          console.log(res.data)
           setnotes(res.data)
         
         

           setIsRateLimited(false)


        } catch (error) {
          if (error.response.status === 429) {
            setIsRateLimited(true)
          } else {
            toast.error("failed to load notes")
          }



        }
        finally {
          setloading(false)
        }



      }
      fetchNotes();
    }, []
  );


  return (

    <div>
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
    
      <div className='max-w-7xl mx-auto p-4 mt-6' >

        {loading && <div className='text-center text-primary py-10'>Loading</div>}
        {notes.length === 0 && !isRateLimited &&  <Nonotefound /> }

        {notes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            { 
            notes.map((note) => (
             <NoteCard key={note.id} note ={note} setnotes={setnotes}/>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;