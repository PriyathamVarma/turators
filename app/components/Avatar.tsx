import { initials, roleMeta, type RoleKey } from "../data/community";

export default function Avatar({ name, role, size = 56 }: { name: string; role: RoleKey; size?: number }) {
  return (
    <span aria-hidden style={{ width: size, height: size, fontSize: size * 0.36 }} className={`font-display flex flex-none items-center justify-center rounded-full font-extrabold ${roleMeta[role].avatar}`}>
      {initials(name)}
    </span>
  );
}
