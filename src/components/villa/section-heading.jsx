export function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-6">
      <span className="mb-2 flex items-center gap-2 text-[0.7rem] font-semibold tracking-wide text-clay">
        <span className="h-px w-5 bg-clay/50" />
        {eyebrow}
      </span>
      <h2 className="text-2xl font-bold leading-snug text-ink">{title}</h2>
    </div>
  );
}
