import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditNote({ notes, setNotes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const existingNote = notes.find((n) => n._id === id);

  const [noteTitle, setTitle] = useState(existingNote?.noteTitle || "");
  const [noteContent, setContent] = useState(existingNote?.noteContent || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!noteTitle || !noteContent) {
      alert("Please fill all fields");
      return;
    }

    try {
      // 🔥 1. Update backend
      await axios.put(`https://notes-app-backend-j7if.onrender.com/api/notes/${id}`, {
        noteTitle,
        noteContent,
      });

      // 🔥 2. Update frontend state
      const updatedNotes = notes.map((note) =>
        note._id === id
          ? { ...note, noteTitle, noteContent }
          : note
      );

      setNotes(updatedNotes);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!existingNote) {
    return <h3 className="text-center mt-4">Note not found</h3>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Edit Note</h3>

        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={noteTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              value={noteContent}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Update Note
          </button>

        </form>
      </div>
    </div>
  );
}

export default EditNote;
