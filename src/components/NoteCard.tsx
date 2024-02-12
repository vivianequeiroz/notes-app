interface NoteCardsProps {
  date: Date;
  content: string;
}

function NoteCard({ date, content }: NoteCardsProps) {
  return (
    <article
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
    </article>
  );
}

export default NoteCard;
