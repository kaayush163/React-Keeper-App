import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

console.log(Note);

// function createNotes(note) {
//   return <Note key={note.key} title={note.title} content={note.content} />;
// }
function App() {
  return (
    <div>
      {/* <h1> Hello App</h1> */}
      <Header />
      {/* <Note title="This is the title" content="This is the content" /> */}
      {/* {notes.map(createNotes)} */}
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
