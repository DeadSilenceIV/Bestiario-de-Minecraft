import { Link, NavLink } from 'react-router';
import { useFavoritos } from '../store/favoritos';

function claseEnlace({ isActive }: { isActive: boolean }) {
  return `inline-flex min-h-11 items-center px-1.5 text-xl sm:px-4 sm:text-2xl ${
    isActive ? 'bg-green-700 text-white' : 'text-stone-100 hover:bg-stone-600'
  }`;
}

export function Navbar() {
  const cantidad = useFavoritos((s) => s.favoritos.length);

  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-2 border-b-4 border-black bg-stone-700 px-4 py-2 sm:px-8">
      <Link to="/" className="font-titulo text-sm text-white text-shadow-[2px_2px_0_black] sm:text-base">
        Bestiario
      </Link>
      <nav aria-label="Navegación principal" className="flex flex-wrap gap-1 sm:gap-2">
        <NavLink to="/" end className={claseEnlace}>Inicio</NavLink>
        <NavLink to="/explorar" className={claseEnlace}>Explorar</NavLink>
        <NavLink to="/favoritos" className={claseEnlace}>
          Favoritos {cantidad > 0 && `(${cantidad})`}
        </NavLink>
        <NavLink to="/contacto" className={claseEnlace}>Contacto</NavLink>
      </nav>
    </header>
  );
}
