import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }
    console.log("Title:", title);
    console.log("Content:", content);

    //clear form after submit
    setTitle("");
    setContent("");
  };
  const navigate = useNavigate();
  const handleAddNote = () => {
    navigate("/");
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Enter content"
              rows="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <button
            onClick={handleAddNote}
            type="submit"
            className="btn btn-success w-100"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
