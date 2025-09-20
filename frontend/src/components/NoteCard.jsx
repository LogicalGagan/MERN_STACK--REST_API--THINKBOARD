import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../libs/utils.js";
import toast from "react-hot-toast";
import api from "../libs/axios.js";
import { useNavigate } from "react-router-dom";




const NoteCard = ({ note,setnotes }) => {
  // Format date for minimal look
  const navigate = useNavigate();
  
  const handledelete = async (e,id)=>{
     e.preventDefault();
     

    const confirmed = window.confirm("Are you sure you want to delete this note?");
      if (!confirmed) return;
      try {
        await api.delete(`/notes/${id}`)
        setnotes(prev => prev.filter(note => note._id !== id));
        toast.success("Note successfully Deleted")
        
      } catch (error) {
        toast.error("Note error deleting")
        console.log("error deleting note",error);
        
      }


  }
  
  
  return (

    <Link
      to={`/note/${note._id}`}
      className="block group"
      style={{ textDecoration: "none" }}
    >
      <div className="relative bg-gradient-to-br from-[#232526ee] via-[#2c5364e0] to-[#7fffd41a] rounded-2xl border border-[#7fffd4]/20 shadow-xl p-6 min-h-[180px] flex flex-col justify-between transition-all hover:shadow-2xl hover:border-[#7fffd4]/50 hover:scale-[1.025] cursor-pointer overflow-hidden">
        {/* Aurora Glow */}
        <div className="absolute -top-8 -left-10 w-32 h-32 bg-[#7fffd4] opacity-20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-7 -right-10 w-28 h-20 bg-[#a5b4fc] opacity-15 rounded-full blur-2xl pointer-events-none"></div>
        {/* Options */}
        <div className="absolute top-3 right-3 flex gap-3 z-10">
         <span
            title="Edit"
            className="text-[#7fffd4] text-lg opacity-60 hover:opacity-100 hover:text-[#67e8f9] transition cursor-pointer"
            onClick={() =>  navigate(`/notes/${note._id}`)}
          >
            🪄
          </span>

          <span
            title="Delete"
            className="text-pink-400 text-lg opacity-60 hover:opacity-100 hover:text-red-500 transition"
            onClick={e => handledelete(e, note._id)}
            role="button"
            tabIndex={0}
          >🧺</span>
        </div>
        {/* Content */}
        <h2 className="text-xl mb-2 font-semibold bg-gradient-to-r from-[#82a89b] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-[0_2px_8px_#a5b4fc40] truncate">
          {note.title}
        </h2>
        <p className="text-cyan-100/90 mb-4 line-clamp-3 min-h-[2.1em]">{note.content}</p>
        {/* Dates */}
        <div className="flex items-center text-xs text-[#7fffd4]/60 gap-3 mt-auto">
          <span>🕒 {formatDate(note.createdAt)}</span>
          {note.updatedAt && note.updatedAt !== note.createdAt && (
            <span className="ml-2">↻ {formatDate(note.updatedAt)}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;