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
    const {noteTitle,noteContent} = req.body;
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
    console.log(error);
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


// UPDATE note api
export const updateNote = async (req, res) =>{
  try{
    const { id } = req.params;
    const { noteTitle, noteContent } = req.body;

    const updatedNote = await Note.findOneAndUpdate(
       { _id: id },
      { noteTitle, noteContent },
      { new: true } // returns updated document
    );

    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(201).json({
      success: true,
      message: "Note updated successfully",
      data: updatedNote,
    });

  }
   catch(error){
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
};

//DELETE note api
export const deleteNote = async (req,res) =>{
  try{
    const { id } = req.params;
    
    const deletedNote = await Note.findByIdAndDelete(id)
     
    if (!deletedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
      data: deletedNote,
    });
  }
  catch(error){
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
};