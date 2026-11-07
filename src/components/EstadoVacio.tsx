import type { ReactNode } from 'react';

interface Props {
  icono: string;
  titulo: string;
  mensaje: string;
  children: ReactNode;
}

export function EstadoVacio({ icono, titulo, mensaje, children }: Props) {
  return (
    <div className="px-4 py-24 text-center">
      <p aria-hidden="true" className="text-6xl">{icono}</p>
      <h2 className="mt-4 text-3xl">{titulo}</h2>
      <p className="mt-2 mb-6">{mensaje}</p>
      {children}
    </div>
  );
}
