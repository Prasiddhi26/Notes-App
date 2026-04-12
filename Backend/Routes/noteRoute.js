import express from "express";
import {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
} from "../Controllers/noteController.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);

export default router;
