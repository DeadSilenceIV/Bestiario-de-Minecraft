import { useState } from 'react';
import { Cargando } from '../components/Cargando';
import { CuadriculaMobs } from '../components/CuadriculaMobs';
import { EstadoVacio } from '../components/EstadoVacio';
import { Filtros } from '../components/Filtros';
import { MensajeError } from '../components/MensajeError';
import { useFetch } from '../hooks/useFetch';
import { API_URL } from '../lib/api';
import { BOTON_VERDE } from '../lib/estilos';
import type { Mob } from '../types/mob';

export function Explorar() {
  const { datos: mobs, cargando, error, reintentar } = useFetch<Mob[]>(`${API_URL}/mobs`);
  const [busqueda, setBusqueda] = useState('');
  const [comportamiento, setComportamiento] = useState('todos');

  if (cargando) return <Cargando />;
  if (error || !mobs) {
    return <MensajeError mensaje="No pudimos cargar los mobs." onReintentar={reintentar} />;
  }

  const comportamientos = [...new Set(mobs.map((m) => m.behavior))];
  const texto = busqueda.trim().toLowerCase();

  const resultados = mobs.filter((m) => {
    const coincideNombre = m.name.toLowerCase().includes(texto);
    const coincideComportamiento = comportamiento === 'todos' || m.behavior === comportamiento;
    return coincideNombre && coincideComportamiento;
  });

  function quitarFiltros() {
    setBusqueda('');
    setComportamiento('todos');
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-titulo text-2xl leading-tight text-white text-shadow-[3px_3px_0_black] md:text-4xl">
        Explorar mobs
      </h1>
      <Filtros
        busqueda={busqueda}
        comportamiento={comportamiento}
        comportamientos={comportamientos}
        onBusqueda={setBusqueda}
        onComportamiento={setComportamiento}
      />

      {resultados.length === 0 ? (
        <EstadoVacio
          icono="🔍"
          titulo={`Sin resultados para "${busqueda}"`}
          mensaje="Revisa cómo está escrito el nombre o cambia el comportamiento."
        >
          <button onClick={quitarFiltros} className={BOTON_VERDE}>Quitar los filtros</button>
        </EstadoVacio>
      ) : (
        <section aria-labelledby="titulo-resultados" className="mt-8">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="titulo-resultados" className="text-3xl">Resultados</h2>
            <p>Mostrando {resultados.length} de {mobs.length} mobs</p>
          </div>
          <CuadriculaMobs mobs={resultados} />
        </section>
      )}
    </div>
  );
}
