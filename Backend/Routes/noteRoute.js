import express from "express";
import { getNotes, createNote } from "../Controllers/noteController.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);

export default router;   