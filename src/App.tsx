import NoteCard from "./components/NoteCard";
import NewNoteCard from "./components/NewNoteCard";
import { ChangeEvent, useState } from "react";
import type { Note } from "./types/note";
import useLocalStorage from "./hooks/useLocalStorage";
import { toast } from "sonner";

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
  const [search, setSearch] = useState("");

  function handleNoteSaved(note: Note) {
    const notesList = [note, ...notes];

    setNotes(notesList);

    setItem(NOTES_LOCALSTORAGE_KEY, notesList);

    toast.success("Note created!");
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setSearch(query);
  }

  const emptySearch = search === "";

  const filteredNotes = notes.filter((note) =>
    note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const notesToShow = emptySearch ? notes : filteredNotes;

  function handleNoteDeleted(noteDeleted: Note) {
    const updatedNotes = notes.filter((note) => note.id !== noteDeleted.id);

    setNotes(updatedNotes);
    setItem(NOTES_LOCALSTORAGE_KEY, updatedNotes);

    toast.success("Note deleted");
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <form>
        <input
          autoFocus
          placeholder="Search for a note..."
          onChange={handleSearch}
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={handleNoteSaved} />

        {notesToShow.map((note: Note) => {
          return (
            <NoteCard
              key={note.id}
              note={note}
              onNoteDeleted={handleNoteDeleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
