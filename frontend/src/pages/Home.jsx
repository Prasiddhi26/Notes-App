import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home({ notes, setNotes , search}) {
  
  const navigate = useNavigate();

  // ✅ 1. FETCH NOTES FROM BACKEND
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("https://notes-app-backend-j7if.onrender.com/api/notes");

        //  backend should return {data: array}
        setNotes(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotes();
  }, [setNotes]);

  // ✅ 2. DELETE NOTE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://notes-app-q77d.onrender.com/api/notes/${id}`);

      // remove from UI after delete
      const updatedNotes = notes.filter((note) => note._id !== id);
      setNotes(updatedNotes);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ 3. VIEW NOTE
  const handleView = (id) => {
    navigate(`/note/${id}`);
  };

  // 🔍 SEARCH FILTER (IMPORTANT PART)
  const filteredNotes = notes.filter((note) =>
  (note.noteTitle || "")
    .toLowerCase()
    .includes((search || "").toLowerCase()) ||
  (note.noteContent || "")
    .toLowerCase()
    .includes((search || "").toLowerCase())
);
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">My Notes</h2>

      <div className="row">
        {filteredNotes.map((note) => (
          <div key={note._id} className="col-md-6 mb-4">
            <div className="card shadow h-100">
              <div className="card-body d-flex flex-column">

                {/* NOTE TITLE */}
                <h5 className="card-title">{note.noteTitle}</h5>

                {/* NOTE CONTENT */}
                <p className="card-text">{note.noteContent}</p>

                {/* BUTTONS */}
                <div className="mt-auto d-flex justify-content-between">

                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleView(note._id)}
                  >
                    View
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => note?._id && handleDelete(note._id)}
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
