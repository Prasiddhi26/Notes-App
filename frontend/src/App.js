import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import EditNote from "./pages/EditNote";
import NoteView from "./pages/NoteView";
import AddNote from "./pages/AddNote";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/note/:id" element={<NoteView />} />
        <Route path="/edit/:id" element={<EditNote />} />
      </Routes>
    </>
  );
}

export default App;
