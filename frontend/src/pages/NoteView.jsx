import { useParams, useNavigate } from "react-router-dom";

function NoteView() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy notes (same as Home)
  const notes = [
    { id: 1, title: "First Note", content: "This is my first note" },
    { id: 2, title: "Second Note", content: "This is my second note" },
  ];

  // Find note by id
  const note = notes.find((n) => n.id === parseInt(id));

  if (!note) {
    return <h3 className="text-center mt-4">Note not found</h3>;
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      
      <div className="card shadow p-4" style={{ width: "500px" }}>
        
        <h3 className="mb-3">{note.title}</h3>
        
        <p>{note.content}</p>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2 mt-3">
          
          <button
            className="btn btn-warning"
            onClick={() => navigate(`/edit/${id}`)}
          >
            Edit
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Back
          </button>

        </div>

      </div>

    </div>
  );
}

export default NoteView;