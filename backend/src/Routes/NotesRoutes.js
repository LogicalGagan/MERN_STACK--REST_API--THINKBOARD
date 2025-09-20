import express from "express";
import { createNotes, deleteNotes, getAllNotes, updateNotes,getNotesByID } from "../controllers/notesControllers.js";
const  router = express.Router();

router.get("/",getAllNotes)
router.get("/:id",getNotesByID)


router.post("/",createNotes)


router.put("/:id",updateNotes)


router.delete("/:id",deleteNotes)

export default router;