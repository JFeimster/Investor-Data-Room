import LoginForm from "@/components/LoginForm";

type LoginSearchParams = {
  room?: string | string[];
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<LoginSearchParams>;
}) {
  const sp = await searchParams;
  const room = Array.isArray(sp.room) ? sp.room[0] : sp.room;
  const initialRoom = room ?? "";

  return (
    <div className="mx-auto max-w-lg">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
        <h1 className="text-2xl font-semibold tracking-tight">Enter Data Room</h1>
        <p className="mt-2 text-sm text-white/65">
          This room is private. Enter the password provided by the founder.
        </p>

        <div className="mt-6">
          <LoginForm initialRoom={initialRoom} />
        </div>
      </div>
    </div>
  );
}
