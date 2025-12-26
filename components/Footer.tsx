export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 text-sm text-white/70 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-white/80">Powered by Moonshine Capital</span>
          <span className="text-white/50"> — investor-ready infrastructure for founders who move fast.</span>
        </div>
        <div className="text-white/50">© {new Date().getFullYear()} Moonshine Capital</div>
      </div>
    </footer>
  );
}
