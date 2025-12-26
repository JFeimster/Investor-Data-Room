import LoginForm from "@/components/LoginForm";

export default function LoginPage({ searchParams }: { searchParams: { room?: string } }) {
  const room = searchParams.room ?? "";
  return (
    <div className="mx-auto max-w-lg">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow">
        <h1 className="text-2xl font-semibold tracking-tight">Enter Data Room</h1>
        <p className="mt-2 text-sm text-white/65">
          This room is private. Enter the password provided by the founder.
        </p>
        <div className="mt-6">
          <LoginForm initialRoom={room} />
        </div>
      </div>
    </div>
  );
}
