import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditNote({ notes, setNotes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const existingNote = notes.find((n) => n.id === parseInt(id));

  const [title, setTitle] = useState(existingNote?.title || "");
  const [content, setContent] = useState(existingNote?.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    const updatedNotes = notes.map((note) =>
      note.id === parseInt(id)
        ? { ...note, title, content }
        : note
    );

    setNotes(updatedNotes);

    navigate("/");
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              value={content}
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