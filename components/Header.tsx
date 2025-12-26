import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15 shadow-glow grid place-items-center">
            <span className="text-sm font-semibold tracking-tight">MC</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Investor Data Room</div>
            <div className="text-xs text-white/60 group-hover:text-white/75 transition">Moonshine Capital</div>
          </div>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/clone"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/15 hover:bg-white/15 transition"
          >
            Clone this Data Room
          </Link>
          <a
            href="https://www.distilledfunding.com/"
            target="_blank"
            className="rounded-xl bg-gradient-to-r from-violet-500/80 to-emerald-500/80 px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
          >
            Work with Moonshine
          </a>
        </nav>
      </div>
    </header>
  );
}
