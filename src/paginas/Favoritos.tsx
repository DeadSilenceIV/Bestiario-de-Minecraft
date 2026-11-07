import { Link } from 'react-router';
import { CuadriculaMobs } from '../components/CuadriculaMobs';
import { EstadoVacio } from '../components/EstadoVacio';
import { BOTON_VERDE } from '../lib/estilos';
import { useFavoritos } from '../store/favoritos';

export function Favoritos() {
  const favoritos = useFavoritos((s) => s.favoritos);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-titulo text-2xl leading-tight text-white text-shadow-[3px_3px_0_black] md:text-4xl">
        Mis favoritos
      </h1>

      {favoritos.length === 0 ? (
        <EstadoVacio
          icono="🖤"
          titulo="No tienes favoritos guardados"
          mensaje="Toca el corazón de un mob para guardarlo aquí."
        >
          <Link to="/explorar" className={BOTON_VERDE}>Explorar mobs</Link>
        </EstadoVacio>
      ) : (
        <>
          <h2 className="mt-3 mb-6">
            {favoritos.length} {favoritos.length === 1 ? 'mob guardado' : 'mobs guardados'}
          </h2>
          <CuadriculaMobs mobs={favoritos} />
        </>
      )}
    </div>
  );
}
