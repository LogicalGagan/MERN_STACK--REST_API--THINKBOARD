import express from "express";
import { createNotes, deleteNotes, getAllNotes, updateNotes, getNotesByID } from "../controllers/notesControllers.js";
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route("/").get(protect, getAllNotes).post(protect, createNotes);
router.route("/:id").get(getNotesByID).put(protect, updateNotes).delete(protect, deleteNotes);

export default router;