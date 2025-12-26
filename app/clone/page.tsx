export default function ClonePage() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
        <h1 className="text-2xl font-semibold tracking-tight">Clone this Data Room</h1>
        <p className="mt-2 text-white/70">
          Fork + deploy to Vercel in minutes. Each founder gets a private link for investors.
        </p>

        <div className="mt-6 space-y-3">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <div className="font-semibold">Step 1 — Put it on GitHub</div>
            <div className="mt-1 text-sm text-white/65">
              Create a repo and paste this project.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <div className="font-semibold">Step 2 — Deploy to Vercel</div>
            <div className="mt-1 text-sm text-white/65">
              Import repo in Vercel → set <span className="text-white/85 font-medium">AUTH_SECRET</span> → Deploy.
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <div className="font-semibold">Step 3 — Add rooms</div>
            <div className="mt-1 text-sm text-white/65">
              Add JSON files in <span className="text-white/85 font-medium">/content/rooms</span>.
            </div>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5 text-sm text-violet-100">
          Pro move: set a custom domain like <span className="font-semibold">data.moonshine.capital</span>.
        </div>
      </div>
    </div>
  );
}
