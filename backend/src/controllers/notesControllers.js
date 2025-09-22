import Note from '../models/Note.js';
import mongoose from "mongoose";

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};

export const getNotesByID = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNotesByID", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};

export const createNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({
            user: req.user._id,
            title,
            content
        });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error("Error in createNotes", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};

export const updateNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        if (note.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not authorized" });
        }

        note.title = title;
        note.content = content;

        const updatedNote = await note.save();
        res.status(200).json(updatedNote);

    } catch (error) {
        console.error("Error in updateNotes", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};

export const deleteNotes = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        if (note.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not authorized" });
        }

        await note.deleteOne();
        res.status(200).json({ message: "Note successfully deleted" });

    } catch (error) {
        console.error("Error in deleteNotes", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};