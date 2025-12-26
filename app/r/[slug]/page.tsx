import Link from "next/link";
import { getRoom } from "@/lib/rooms";
import RoomSection from "@/components/RoomSection";
import StatPill from "@/components/StatPill";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
        <h1 className="text-2xl font-semibold">Room not found</h1>
        <p className="mt-2 text-white/65">That slug doesn’t exist in this template.</p>
        <Link
          className="mt-6 inline-block rounded-2xl bg-white/10 px-5 py-3 ring-1 ring-white/15 hover:bg-white/15 transition"
          href="/"
        >
          Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
              Private Investor Room
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">{room.companyName}</h1>
            <p className="text-white/70 max-w-2xl">{room.oneLiner}</p>
          </div>

          <div className="flex gap-3">
            <form action="/api/logout" method="post">
              <button className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15 transition">
                Lock
              </button>
            </form>
            <Link
              href="/clone"
              className="rounded-2xl bg-gradient-to-r from-violet-500/80 to-emerald-500/80 px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Clone This Template
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {room.highlights.map((s) => (
            <StatPill key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </section>

      {room.deck && (
        <RoomSection
          title="Pitch Deck"
          subtitle="The narrative. The story. The why-now."
          items={[{ title: room.deck.title, href: room.deck.href, meta: room.deck.note ?? "Open deck" }]}
        />
      )}

      <RoomSection
        title="Financials"
        subtitle="Numbers investors actually care about."
        items={room.financials.map((d) => ({
          title: d.label,
          href: d.href,
          meta: d.note ?? d.kind.toUpperCase(),
        }))}
      />

      <RoomSection
        title="Diligence"
        subtitle="Receipts. Legal. Product. Ops."
        items={room.diligence.map((d) => ({
          title: d.label,
          href: d.href,
          meta: d.note ?? d.kind.toUpperCase(),
        }))}
      />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
        <h2 className="text-xl font-semibold tracking-tight">Team</h2>
        <p className="mt-2 text-white/65">People you’d bet on in a weird economy.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {room.team.map((m) => (
            <div key={m.name} className="rounded-3xl border border-white/10 bg-black/25 p-6">
              <div>
                <div className="text-lg font-semibold">{m.name}</div>
                <div className="text-sm text-white/60">{m.role}</div>
              </div>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">{m.bio}</p>
              {m.links?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.links.map((l) => (
                    <a
                      key={l.href}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 hover:bg-white/10 transition"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
