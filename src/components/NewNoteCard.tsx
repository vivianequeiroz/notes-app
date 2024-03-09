import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Note } from "../types/note";

interface NewNoteCardProps {
  onNoteCreated: (note: Note) => void;
}

function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [shouldShowCTA, setShouldShowCTA] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [content, setContent] = useState("");

  function handleStartEditor() {
    setShouldShowCTA(false);
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    const content = event.target.value;

    if (content === "") {
      setShouldShowCTA(true);

      return;
    }

    setContent(content);
  }

  function handleStartRecording() {
    setIsRecording(true);
  }

  function handleStopRecording() {
    setIsRecording(false);
  }

  function handleModalClose(open: boolean) {
    if (!open) {
      setShouldShowCTA(true);
      setIsRecording(false);
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault();

    onNoteCreated({
      id: crypto.randomUUID(),
      content: content,
      date: new Date(),
    });

    setContent("");

    setShouldShowCTA(true);
  }

  return (
    <Dialog.Root modal onOpenChange={handleModalClose}>
      <Dialog.Trigger className="rounded-md bg-slate-700 p-5 flex flex-col text-left space-y-3 overflow-hidden outline-none hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400">
        <h3 className="text-sm font-medium text-slate-200">Add note</h3>
        <p className="text-sm leading-6 text-slate-400">
          Record a note that will automatically be converted to text.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 outline-none rounded-md flex flex-col">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <form className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-200">
                Add note
              </span>
              {shouldShowCTA ? (
                <p className="text-sm leading-6 text-slate-400">
                  Start{" "}
                  <button
                    type="button"
                    onClick={handleStartRecording}
                    className="font-medium text-lime-500 hover:underline"
                  >
                    recording a note
                  </button>{" "}
                  with audio or if you prefer{" "}
                  <button
                    type="button"
                    onClick={handleStartEditor}
                    className="font-medium text-lime-500 hunder:underline"
                  >
                    use only text
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  value={content}
                  onChange={handleContentChanged}
                  className="text-sm  leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                />
              )}
            </div>

            {isRecording ? (
              <button
                type="button"
                onClick={handleStopRecording}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 py-4 text-center text-slate-350 font-medium outline-none hover:text-slate-100"
              >
                <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                Recording... Click to interrupt
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSaveNote}
                className="w-full bg-lime-400 py-4 text-center text-lime-950 font-medium outline-none hover:bg-lime-500"
              >
                Save note
              </button>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NewNoteCard;
