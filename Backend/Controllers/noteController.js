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


// POST note
export const createNote = async (req, res) => {
  try{
    const {noteTitle,noteContent} = new Note(req.body);
    const newNote = await Note.create({
      noteTitle,
      noteContent,
    });

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: newNote,
    });
  }
  catch(error){
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
};


// GET single note by id
export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};