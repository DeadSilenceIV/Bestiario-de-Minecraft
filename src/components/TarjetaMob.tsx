import { Link } from 'react-router';
import { PANEL } from '../lib/estilos';
import { BotonFavorito } from './BotonFavorito';
import { EtiquetaComportamiento } from './EtiquetaComportamiento';
import { FotoMob } from './FotoMob';
import type { Mob } from '../types/mob';

interface Props {
  mob: Mob;
}

export function TarjetaMob({ mob }: Props) {
  return (
    <article className={`relative h-full p-2 hover:bg-stone-200 ${PANEL}`}>
      <Link to={`/explorar/${mob.id}`} className="block">
        <FotoMob mob={mob} className="aspect-square w-full" />
        <h3 className="mt-3 text-3xl">{mob.name}</h3>
        <p className="mb-2">Vida: {mob.health_points} ❤️</p>
        <EtiquetaComportamiento comportamiento={mob.behavior} />
      </Link>
      <div className="absolute top-4 right-4">
        <BotonFavorito mob={mob} />
      </div>
    </article>
  );
}
