type LoginSearchParams = {
  room?: string | string[];
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<LoginSearchParams>;
}) {
  const sp = await searchParams;
  const room = Array.isArray(sp.room) ? sp.room[0] : sp.room;

  // ...rest of your component logic
  // use `room` wherever you were using searchParams.room
  return (
    <div>
      {/* your existing UI */}
    </div>
  );
}
