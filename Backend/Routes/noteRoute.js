import express from "express";
import {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} from "../Controllers/noteController.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
