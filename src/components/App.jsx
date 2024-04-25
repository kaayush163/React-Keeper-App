import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes"; //static notes has been replaced by the dynamic notes created by setNotes
import CreateArea from "./CreateArea.jsx";
// console.log(Note);

// function createNotes(note) {
//   return <Note key={note.key} title={note.title} content={note.content} />;
// }
function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    console.log(newNote);

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {/* <h1> Hello App</h1> */}
      <Header />
      <CreateArea onAdd={addNote} />
      {/* <Note title="This is the title" content="This is the content" /> */}
      {/* {notes.map(createNotes)} */}
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
