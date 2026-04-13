import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNote() {
  const [noteTitle, setTitle] = useState("");
  const [noteContent, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!noteTitle || !noteContent) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/notes", {
        noteTitle,
        noteContent,
      });
      console.log(noteTitle, noteContent);
      setTitle("");
      setContent("");

      navigate("/"); // go to home after saving
    } catch (error) {
      console.log(error);
      alert("Error saving note");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Add New Note</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter title"
              value={noteTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Enter content"
              rows="4"
              value={noteContent}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
