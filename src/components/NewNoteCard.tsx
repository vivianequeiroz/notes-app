import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

function NewNoteCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-slate-700 p-5 flex flex-col text-left space-y-3 overflow-hidden outline-none hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">Add note</span>
        <p className="text-sm leading-6 text-slate-400">
          Start{" "}
          <button className="font-medium text-lime-500 hover:overline">
            recording a note
          </button>{" "}
          with audio or if you prefer{" "}
          <button className="font-medium text-lime-500 hover:overline">
            use only text
          </button>
          .
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 outline-none rounded-md flex flex-col">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <h3 className="text-sm font-medium text-slate-300">{}</h3>
            <p className="text-sm leading-6 text-slate-400">{}</p>
          </div>

          <button
            type="button"
            className="w-full bg-lime-400 py-4 text-center text-lime-950 font-medium outline-none hover:bg-lime-500"
          >
            Save note
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NewNoteCard;
