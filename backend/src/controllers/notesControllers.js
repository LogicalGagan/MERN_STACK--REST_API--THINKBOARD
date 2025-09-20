import Note from "../models/Note.js";
import note from "../models/Note.js"
import mongoose from "mongoose";

export async function  getAllNotes(req,res){
    try {
        const notes = await note.find().sort({createdAt: -1});

         res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getallNotes")
        res.status(500).json({message:"Internal Server error"})
    }
   
}
export async function getNotesByID(req,res){
    try {
        const {id} =req.params;
          if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
        const notes =await note.findById(id)
         if (!notes) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(notes);
    }
     catch (error) {
        console.error("Error in getNoteById", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}
export async function createNotes(req,res){
    try {
        const {title,content} = req.body;
        const newNote = new note({title:title , content:content})
        await newNote.save();
        res.status(201).json(newNote.title)
    } catch (error) {
         console.error("Error in getallNotes")
        res.status(500).json({message:"Internal Server error"})
    }
}

export async function updateNotes(req,res){
    try {
        const {title,content} =req.body;
           // ✅ Validate ID format first
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
        const updatednote=await note.findByIdAndUpdate(req.params.id,{title,content},{new:true});
        if(!updatednote) return  res.status(404).json({"message":"id not found"});
        res.status(201).json({message:"note successfully updated"})

    } catch (error) {
        console.error("Error in getallNotes")
        res.status(500).json({message:"Internal Server error"})
    }
}
export async function deleteNotes(req,res){
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
         const deletenote=await note.findByIdAndDelete(req.params.id);
        if(!deletenote) return  res.status(404).json({"message":"id not found"});
        res.status(201).json({message:"note susscefully deleted"})

    } catch (error) {
         console.error("Error in getallNotes")
        res.status(500).json({message:"Internal Server error"})
    }
}