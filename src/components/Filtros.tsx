import { COMPORTAMIENTOS } from '../lib/api';
import { CAMPO } from '../lib/estilos';

interface Props {
  busqueda: string;
  comportamiento: string;
  comportamientos: string[];
  onBusqueda: (valor: string) => void;
  onComportamiento: (valor: string) => void;
}

export function Filtros({ busqueda, comportamiento, comportamientos, onBusqueda, onComportamiento }: Props) {
  return (
    <div role="search" className="mt-6 flex flex-col gap-4 sm:flex-row">
      <div className="flex-1">
        <label htmlFor="busqueda" className="mb-1 block">Buscar por nombre</label>
        <input
          id="busqueda"
          type="search"
          placeholder="Creeper, Warden, Allay..."
          value={busqueda}
          onChange={(e) => onBusqueda(e.target.value)}
          className={`${CAMPO} border-stone-400`}
        />
      </div>
      <div className="sm:w-72">
        <label htmlFor="comportamiento" className="mb-1 block">Comportamiento</label>
        <select
          id="comportamiento"
          value={comportamiento}
          onChange={(e) => onComportamiento(e.target.value)}
          className={`${CAMPO} border-stone-400`}
        >
          <option value="todos">Todos</option>
          {comportamientos.map((c) => (
            <option key={c} value={c}>{COMPORTAMIENTOS[c] ?? c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
