import { useState } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import EditNote from "./pages/EditNote";
import NoteView from "./pages/NoteView";
import AddNote from "./pages/AddNote";

import { Routes, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([
    { id: 1, title: "First Note", content: "This is my first note" },
    { id: 2, title: "Second Note", content: "This is my second note" },
  ]);

  return (
    <>
      <Navbar search={search} setSearch={setSearch}/>

      <Routes>
        <Route path="/" element={<Home notes={notes} setNotes={setNotes} search={search}/>} />
        <Route path="/add" element={<AddNote notes={notes} setNotes={setNotes} />} />
        <Route path="/note/:id" element={<NoteView notes={notes} />} />
        <Route path="/edit/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
      </Routes>
    </>
  );
}

export default App;
