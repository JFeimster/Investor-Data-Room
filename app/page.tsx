import Link from "next/link";
import { listRooms } from "@/lib/rooms";

export default function HomePage() {
  const rooms = listRooms();

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-glow">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        </div>

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
            Vercel-ready • Password-protected • Brand imprinted
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            The Investor Data Room
            <span className="block text-white/70">that sells you while you sleep.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-white/70">
            Give founders a private, beautiful link for their deck, financials, and team — and stamp it with{" "}
            <span className="text-white/85 font-medium">“Powered by Moonshine Capital.”</span>
            Every investor forward becomes free distribution.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/clone"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500/80 to-emerald-500/80 px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Clone this Data Room
            </Link>

            <a
              href="#examples"
              className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15 transition"
            >
              View Examples
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <div className="text-sm font-semibold">Private by default</div>
              <div className="text-sm text-white/65 mt-1">Room-level password + signed auth cookie.</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <div className="text-sm font-semibold">Founder-simple</div>
              <div className="text-sm text-white/65 mt-1">Edit JSON → instantly updates the room.</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <div className="text-sm font-semibold">Moonshine imprint</div>
              <div className="text-sm text-white/65 mt-1">Your footer rides along on every investor share.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Example Data Rooms</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rooms.map((r) => (
            <Link
              key={r.slug}
              href={`/r/${r.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold">{r.companyName}</div>
                  <div className="text-sm text-white/65 mt-1">{r.tagline}</div>
                </div>
                <div className="text-xs rounded-full border border-white/10 bg-black/30 px-3 py-1 text-white/70 group-hover:text-white/85 transition">
                  Open →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-sm text-white/60">
          Tip: Rooms live at <span className="text-white/80 font-medium">/r/[slug]</span>. Perfect for custom domains like{" "}
          <span className="text-white/80 font-medium">data.moonshine.capital/r/acme-co</span>.
        </div>
      </section>
    </div>
  );
}
