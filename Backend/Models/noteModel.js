import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  noteTitle: {
    type: String,
    required: true
  },
  noteContent: {
    type: String,
    required: true
  }
  
});

//create model to perform crud
const Note = mongoose.model("Note", noteSchema);
export default Note;