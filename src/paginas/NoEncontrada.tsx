import { Link } from 'react-router';
import { BOTON_VERDE } from '../lib/estilos';

export function NoEncontrada() {
  return (
    <div className="px-4 py-24 text-center">
      <p className="font-titulo text-6xl text-white text-shadow-[4px_4px_0_black] md:text-8xl">404</p>
      <h1 className="mt-8 text-4xl">Página no encontrada</h1>
      <p className="mt-2 mb-6">Este chunk no existe: la dirección que buscas no lleva a ningún lado.</p>
      <Link to="/" className={BOTON_VERDE}>Volver al inicio</Link>
    </div>
  );
}
