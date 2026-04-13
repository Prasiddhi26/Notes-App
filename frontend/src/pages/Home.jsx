import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([
    { id: 1, title: "First Note", content: "This is my first note" },
    { id: 2, title: "Second Note", content: "This is my second note" },
  ]);

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleView = (id) => {
    navigate(`/note/${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">My Notes</h2>

      <div className="row">
        {notes.map((note) => (
          <div key={note.id} className="col-md-6 mb-4">
            <div className="card shadow h-100">
              <div className="card-body d-flex flex-column">
                
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.content}</p>

                <div className="mt-auto d-flex justify-content-between">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleView(note.id)}
                  >
                    View
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(note.id)}
                  >
                    Delete
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;