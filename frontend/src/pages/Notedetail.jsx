import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../libs/axios";

const Notedetail = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        toast.error("Error fetching data");
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this note?");
      if (!confirmed) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate("/"); // go back after delete
    } catch (error) {
      toast.error("Failed to delete note");
      console.log("Delete error:", error);
    }
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
  
    setSaving(true);
   
    
    const formData = new FormData(e.target);
    const updatedNote = {
      title: formData.get("title"),
      content: formData.get("content"),
    };
     if(!updatedNote.title.trim() || !updatedNote.content.trim()){
      toast.error("All fields are necessary")
      setSaving(false);
      return;
    }
    
     

    try {
      await api.put(`/notes/${id}`, updatedNote);
      toast.success("Note updated successfully");
     setTimeout(() => navigate("/"), 500);
    } catch (error) {
      toast.error("Failed to update note");
      console.log("Update error:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#10141a] relative overflow-x-hidden">
      {/* Aurora background effects */}
      <div className="fixed left-[-8vw] top-[-10vw] w-[38vw] h-[32vw] rounded-full bg-gradient-to-br from-[#7fffd4] to-[#67e8f9] opacity-25 blur-[120px] pointer-events-none z-0" />
      <div className="fixed right-[-9vw] bottom-[-8vw] w-[35vw] h-[24vw] rounded-full bg-gradient-to-br from-[#a5b4fc] via-[#8b5cf6] to-[#67e8f9] opacity-20 blur-[110px] pointer-events-none z-0" />

      {/* Form Box */}
      <div className="relative z-10 bg-gradient-to-br from-[#232526ee] via-[#2c5364e0] to-[#7fffd41a] rounded-2xl border border-[#7fffd4]/20 shadow-2xl px-8 py-10 w-full max-w-2xl">
        {/* Header Row (Back + Delete) */}
        <div className="flex items-center justify-between mb-7">
          <Link
            to="/"
            className="flex items-center gap-1 text-[#7fffd4] hover:underline font-semibold text-base transition hover:text-[#67e8f9]"
          >
            <span className="text-xl">←</span>
            <span>Back to Notes</span>
          </Link>

          <button
            onClick={handleDelete}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-red-400 via-red-500 to-pink-600 text-white font-bold shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400/50 transition-all duration-200"
          >
            Delete
          </button>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block font-bold text-lg bg-gradient-to-r from-[#7fffd4] to-[#a5b4fc] bg-clip-text text-transparent mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={note?.title || ""}
              placeholder="Enter your note title..."
              className="w-full px-4 py-3 rounded-lg bg-[#18202a] border border-[#a5b4fc30] text-cyan-100 font-semibold placeholder:text-[#7fffd4]/40 focus:outline-none focus:ring-2 focus:ring-[#7fffd4] shadow-inner transition"
              maxLength={100}
            />
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="block font-bold text-lg bg-gradient-to-r from-[#a5b4fc] to-[#67e8f9] bg-clip-text text-transparent mb-1"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              defaultValue={note?.content || ""}
              placeholder="Write your note here..."
              rows={10}
              className="w-full px-4 py-3 rounded-lg bg-[#18202a] border border-[#a5b4fc30] text-cyan-100 font-medium placeholder:text-[#7fffd4]/35 focus:outline-none focus:ring-2 focus:ring-[#67e8f9] shadow-inner transition resize-vertical min-h-[200px]"
              maxLength={2000}
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              disabled={saving}
              className="px-7 py-2 rounded-full bg-gradient-to-r from-[#7fffd4] via-[#67e8f9] to-[#a5b4fc] shadow-lg font-bold text-slate-800 text-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7fffd4]/30 transition-all duration-200 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notedetail;
