export default function RoomSection({
  title,
  subtitle,
  items
}: {
  title: string;
  subtitle: string;
  items: { title: string; href: string; meta?: string }[];
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-white/65">{subtitle}</p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            target="_blank"
            className="group rounded-3xl border border-white/10 bg-black/25 p-5 hover:bg-black/35 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="mt-1 text-xs text-white/55">{it.meta ?? "Open"}</div>
              </div>
              <div className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70 group-hover:text-white/90 transition">
                Open →
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
