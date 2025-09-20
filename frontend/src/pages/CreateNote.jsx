import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"

import api from '../libs/axios.js'


const CreateNote = () => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const Navigate = useNavigate();

  // You will write your own submit handler logic here
  const handleSubmit =async (e) => {
    e.preventDefault()
    if(!title.trim() || !content.trim()){
      toast.error("All fields are necessary")
      return;
    }
    setLoading(true)
    try {
      await api.post("/notes",{
        title,content
      })
      toast.success("Note Created Successfully")
      Navigate("/");
      
    } catch (error) {
      console.log("eror cretaing",error)
      toast.error("failed to create note")
      
    }finally{
      setLoading(false)
    }
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#10141a] relative overflow-x-hidden">
      {/* Aurora background effects */}
      <div className="fixed left-[-8vw] top-[-10vw] w-[38vw] h-[32vw] rounded-full bg-gradient-to-br from-[#7fffd4] to-[#67e8f9] opacity-25 blur-[120px] pointer-events-none z-0" />
      <div className="fixed right-[-9vw] bottom-[-8vw] w-[35vw] h-[24vw] rounded-full bg-gradient-to-br from-[#a5b4fc] via-[#8b5cf6] to-[#67e8f9] opacity-20 blur-[110px] pointer-events-none z-0" />
      {/* Form Box */}
      <div className="relative z-10 bg-gradient-to-br from-[#232526ee] via-[#2c5364e0] to-[#7fffd41a] rounded-2xl border border-[#7fffd4]/20 shadow-2xl px-8 py-10 w-full max-w-xl">
        {/* Back Link */}
        <div className="mb-7 flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-1 text-[#7fffd4] hover:underline font-semibold text-base transition hover:text-[#67e8f9]"
          >
            <span className="text-xl">←</span>
            <span>Back to Notes</span>
          </Link>
        </div>
        {/* Form */}
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
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
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter your note title..."
              className="w-full px-4 py-3 rounded-lg bg-[#18202a] border border-[#a5b4fc30] text-cyan-100 font-semibold placeholder:text-[#7fffd4]/40 focus:outline-none focus:ring-2 focus:ring-[#7fffd4] shadow-inner transition"
              maxLength={100}
              autoFocus
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
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="Write your note here..."
              rows={8}
              className="w-full px-4 py-3 rounded-lg bg-[#18202a] border border-[#a5b4fc30] text-cyan-100 font-medium placeholder:text-[#7fffd4]/35 focus:outline-none focus:ring-2 focus:ring-[#67e8f9] shadow-inner transition resize-vertical min-h-[180px]"
              maxLength={2000}
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="px-7 py-2 rounded-full bg-gradient-to-r from-[#7fffd4] via-[#67e8f9] to-[#a5b4fc] shadow-lg font-bold text-slate-800 text-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7fffd4]/30 transition-all duration-200"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNote