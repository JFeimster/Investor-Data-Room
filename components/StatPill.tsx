export default function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm">
      <span className="text-white/60">{label}:</span>{" "}
      <span className="text-white/90 font-semibold">{value}</span>
    </div>
  );
}
