import * as Dialog from "@radix-ui/react-dialog";

interface NoteCardsProps {
  date: Date;
  content: string;
}

function NoteCard({ date, content }: NoteCardsProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="rounded-md bg-slate-800 p-5 flex flex-col gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400"
        role="note"
        tabIndex={0}
      >
        <h3 className="text-sm font-medium text-slate-300">
          {date.toISOString()}
        </h3>
        <p className="text-sm leading-6 text-slate-400">{content}</p>

        {/* Using ::after pseudo-element for gradient background */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full bg-slate-700 outline-none rounded-md flec flex-col">
          Hii
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NoteCard;
