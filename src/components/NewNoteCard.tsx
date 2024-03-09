import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

function NewNoteCard() {
  const [shouldShowCTA, setShouldShowCTA] = useState(true);
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

  function handleSaveNote(event: FormEvent) {
    event.preventDefault();
    console.log(content);
  }

  return (
    <Dialog.Root>
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

          <form className="flex flex-1 flex-col" onSubmit={handleSaveNote}>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-200">
                Add note
              </span>
              {shouldShowCTA ? (
                <p className="text-sm leading-6 text-slate-400">
                  Start{" "}
                  <button className="font-medium text-lime-500 hover:underline">
                    recording a note
                  </button>{" "}
                  with audio or if you prefer{" "}
                  <button
                    className="font-medium text-lime-500 hunder:underline"
                    onClick={handleStartEditor}
                  >
                    use only text
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-sm  leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  onChange={handleContentChanged}
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 py-4 text-center text-lime-950 font-medium outline-none hover:bg-lime-500"
            >
              Save note
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NewNoteCard;
