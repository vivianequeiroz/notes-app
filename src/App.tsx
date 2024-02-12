import NoteCard from "./components/NoteCard";
import NewNoteCard from "./components/NewNoteCard";

function App() {
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
        <NewNoteCard />

        <NoteCard date={new Date()} content="test" />
        <NoteCard date={new Date()} content="test" />
        <NoteCard date={new Date()} content="test" />
      </div>
    </div>
  );
}

export default App;
