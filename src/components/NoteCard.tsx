import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { X } from "lucide-react";
import { Note } from "../types/note";

interface NoteCardProps {
  note: Note;
  onNoteDeleted: (note: Note) => void;
}

function NoteCard({ note, onNoteDeleted }: NoteCardProps) {
  const { date, content } = note;
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="rounded-md bg-slate-800 p-5 flex flex-col gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400"
        role="note"
        tabIndex={0}
      >
        <h3 className="text-sm font-medium text-slate-300">
          {formatDistanceToNow(date, { addSuffix: true })}
        </h3>
        <p className="text-sm leading-6 text-slate-400">{content}</p>

        {/* Using ::after pseudo-element for gradient background */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 outline-none rounded-md flex flex-col">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <h3 className="text-sm font-medium text-slate-300">
              {formatDistanceToNow(date, { addSuffix: true })}
            </h3>
            <p className="text-sm leading-6 text-slate-400">{content}</p>
          </div>

          <button
            type="button"
            onClick={() => onNoteDeleted(note)}
            className="w-full bg-slate-800 py-4 text-center text-slate-300 font-medium outline-none group"
          >
            Do you want to{" "}
            <span className="text-red-400 group-hover:underline">
              delete this note
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NoteCard;
