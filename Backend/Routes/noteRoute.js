import express from "express";
import { getNotes, createNote, getNoteById} from "../Controllers/noteController.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
router.get("/:id", getNoteById);

export default router;   