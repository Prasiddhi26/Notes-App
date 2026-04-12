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