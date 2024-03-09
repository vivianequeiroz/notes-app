import NoteCard from "./components/NoteCard";
import NewNoteCard from "./components/NewNoteCard";
import { useState } from "react";
import type { Note } from "./types/note";
import useLocalStorage from "./hooks/useLocalStorage";

const NOTES_LOCALSTORAGE_KEY = "notes";

function App() {
  const { setItem, getItem } = useLocalStorage();

  const notesInLocalStorage = getItem(NOTES_LOCALSTORAGE_KEY);

  const [notes, setNotes] = useState<Array<Note>>(() => {
    if (notesInLocalStorage) {
      return JSON.parse(notesInLocalStorage);
    }

    return [];
  });

  function handleNoteSaved(note: Note) {
    const notesList = [note, ...notes];

    setNotes(notesList);

    setItem(NOTES_LOCALSTORAGE_KEY, notesList);
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
