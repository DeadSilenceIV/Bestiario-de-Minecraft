import { Link, useParams } from 'react-router';
import { BarraVida } from '../components/BarraVida';
import { BotonFavorito } from '../components/BotonFavorito';
import { Cargando } from '../components/Cargando';
import { EtiquetaComportamiento } from '../components/EtiquetaComportamiento';
import { FotoMob } from '../components/FotoMob';
import { MensajeError } from '../components/MensajeError';
import { useFetch } from '../hooks/useFetch';
import { API_URL, TIPOS } from '../lib/api';
import { PANEL } from '../lib/estilos';
import type { Mob } from '../types/mob';

export function Detalle() {
  const { id } = useParams();
  const { datos: mob, cargando, error, reintentar } = useFetch<Mob>(`${API_URL}/mobs/${id}`);

  if (cargando) return <Cargando />;
  if (error || !mob) {
    return <MensajeError mensaje="No pudimos cargar este mob." onReintentar={reintentar} />;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link to="/explorar" className="text-yellow-300 underline">
        ← Volver a explorar
      </Link>

      <article className={`mt-4 flex flex-col gap-6 p-4 md:flex-row ${PANEL}`}>
        <FotoMob mob={mob} className="aspect-square w-full md:w-2/5 md:self-start" />
        <div className="flex-1">
          <h1 className="font-titulo text-2xl leading-tight md:text-3xl">{mob.name}</h1>
          <div className="mt-4">
            <BarraVida vida={mob.health_points} />
          </div>
          <dl className="mt-4 grid grid-cols-[max-content_1fr] items-center gap-x-4 gap-y-2">
            <dt className="text-stone-700">Comportamiento</dt>
            <dd><EtiquetaComportamiento comportamiento={mob.behavior} /></dd>
            <dt className="text-stone-700">Tipo</dt>
            <dd>{mob.type.map((t) => TIPOS[t] ?? t).join(', ')}</dd>
            <dt className="text-stone-700">Velocidad</dt>
            <dd>{mob.speed ?? 'Sin dato'}</dd>
            <dt className="text-stone-700">Alto</dt>
            <dd>{mob.hitbox[0].height} bloques</dd>
            <dt className="text-stone-700">Ancho</dt>
            <dd>{mob.hitbox[0].width} bloques</dd>
          </dl>
          <div className="mt-6">
            <BotonFavorito mob={mob} conTexto />
          </div>
        </div>
      </article>
    </div>
  );
}
