import { TarjetaMob } from './TarjetaMob';
import type { Mob } from '../types/mob';

interface Props {
  mobs: Mob[];
}

export function CuadriculaMobs({ mobs }: Props) {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {mobs.map((m) => (
        <li key={m.id}>
          <TarjetaMob mob={m} />
        </li>
      ))}
    </ul>
  );
}
