import { COMPORTAMIENTOS } from '../lib/api';

interface Props {
  comportamiento: string;
}

const COLORES: Record<string, string> = {
  Passive: 'bg-green-800',
  Neutral: 'bg-yellow-800',
  Hostile: 'bg-red-800',
  Boss: 'bg-purple-800',
};

export function EtiquetaComportamiento({ comportamiento }: Props) {
  return (
    <span className={`inline-block px-2 py-1 text-white ${COLORES[comportamiento] ?? 'bg-stone-700'}`}>
      {COMPORTAMIENTOS[comportamiento] ?? comportamiento}
    </span>
  );
}
