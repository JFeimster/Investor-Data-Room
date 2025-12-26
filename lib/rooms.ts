import acme from "@/content/rooms/acme-co.json";
import moonshine from "@/content/rooms/moonshine-labs.json";

export type RoomDoc = {
  label: string;
  href: string;
  kind: "pdf" | "sheet" | "doc" | "link";
  note?: string;
};

export type RoomTeam = {
  name: string;
  role: string;
  bio: string;
  links?: { label: string; href: string }[];
};

export type Room = {
  slug: string;
  companyName: string;
  tagline: string;
  oneLiner: string;
  passwordSha256Hex: string;
  highlights: { label: string; value: string }[];
  deck?: { title: string; href: string; note?: string };
  financials: RoomDoc[];
  diligence: RoomDoc[];
  team: RoomTeam[];
};

const ROOMS: Room[] = [acme as Room, moonshine as Room];

export function getRoom(slug: string) {
  return ROOMS.find((r) => r.slug === slug) ?? null;
}

export function listRooms() {
  return ROOMS.map(({ slug, companyName, tagline }) => ({ slug, companyName, tagline }));
}
