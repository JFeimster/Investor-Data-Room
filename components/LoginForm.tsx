"use client";

import { useState } from "react";

export default function LoginForm({ initialRoom }: { initialRoom: string }) {
  const [room, setRoom] = useState(initialRoom);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<{ type: "idle" | "error" | "ok"; msg?: string }>({ type: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "idle" });

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ room, password })
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setStatus({ type: "error", msg: data?.error ?? "Login failed" });
      return;
    }

    setStatus({ type: "ok", msg: "Unlocked. Redirecting…" });
    window.location.href = `/r/${room}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <div className="text-sm font-medium text-white/80">Room slug</div>
        <input
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          placeholder="acme-co"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/20"
          required
        />
        <div className="mt-2 text-xs text-white/50">
          Example: <span className="text-white/70">acme-co</span>
        </div>
      </label>

      <label className="block">
        <div className="text-sm font-medium text-white/80">Password</div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/20"
          required
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-2xl bg-gradient-to-r from-violet-500/80 to-emerald-500/80 px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
      >
        Unlock Room
      </button>

      {status.type !== "idle" && (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            status.type === "error"
              ? "border-red-500/30 bg-red-500/10 text-red-200"
              : "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
          }`}
        >
          {status.msg}
        </div>
      )}
    </form>
  );
}
