import Note from "../Models/noteModel.js";

// GET all notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find(); // fetch all notes

    res.status(200).json({
      success: true,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createNote = (req, res) => {
  res.json({ message: "Create a note" });
};