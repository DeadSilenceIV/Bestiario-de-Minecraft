import { API_URL } from '../lib/api';
import type { Mob } from '../types/mob';

interface Props {
  mob: Mob;
  className?: string;
}

export function FotoMob({ mob, className = '' }: Props) {
  return (
    <img
      src={`${API_URL}/mobs/${mob.id}/image`}
      alt={`Imagen de ${mob.name}`}
      loading="lazy"
      className={`border-4 border-t-stone-600 border-r-stone-100 border-b-stone-100 border-l-stone-600 bg-stone-500 object-contain p-2 ${className}`}
    />
  );
}
