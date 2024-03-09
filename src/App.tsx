import NoteCard from "./components/NoteCard";
import NewNoteCard from "./components/NewNoteCard";
import { useState } from "react";
import type { Note } from "./types/note";

function App() {
  const [notes, setNotes] = useState<Array<Note> | []>([]);

  function handleNoteSaved(note: Note) {
    setNotes([note, ...notes]);
  }
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <form>
        <input
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
          placeholder="Search for a note..."
          autoFocus
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={handleNoteSaved} />

        {notes.map((note: Note) => {
          return (
            <NoteCard
              key={note.id}
              id={note.id}
              content={note.content}
              date={note.date}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
