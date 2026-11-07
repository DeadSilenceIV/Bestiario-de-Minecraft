import { useEffect } from 'react';
import { useToast } from '../store/toast';
import type { DatosToast } from '../store/toast';

interface Props {
  toast: DatosToast;
}

const ESTILOS = {
  exito: { borde: 'border-green-500', titulo: 'text-green-400', icono: '✓', texto: '¡Logro obtenido!' },
  error: { borde: 'border-red-500', titulo: 'text-red-400', icono: '✕', texto: 'Algo falló' },
  info: { borde: 'border-sky-400', titulo: 'text-sky-300', icono: 'i', texto: 'Aviso' },
};

export function Toast({ toast }: Props) {
  const cerrar = useToast((s) => s.cerrar);
  const estilo = ESTILOS[toast.tipo];

  useEffect(() => {
    const id = setTimeout(() => cerrar(toast.id), 4000);
    return () => clearTimeout(id);
  }, [toast.id, cerrar]);

  return (
    <div
      role={toast.tipo === 'error' ? 'alert' : 'status'}
      className={`flex items-center gap-3 border-4 bg-stone-950 px-4 py-2 text-white ${estilo.borde}`}
    >
      <div className="flex-1">
        <p className={estilo.titulo}>
          <span aria-hidden="true">{estilo.icono} </span>
          {estilo.texto}
        </p>
        <p>{toast.mensaje}</p>
      </div>
      <button
        aria-label="Cerrar aviso"
        onClick={() => cerrar(toast.id)}
        className="h-11 w-11 shrink-0 cursor-pointer text-2xl"
      >
        ×
      </button>
    </div>
  );
}
