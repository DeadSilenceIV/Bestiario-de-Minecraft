import { Link } from 'react-router';
import { ModalDarkPattern } from '../components/ModalDarkPattern';
import { BOTON_GRIS, BOTON_VERDE } from '../lib/estilos';

export function Inicio() {
  return (
    <>
      <section className="px-4 pt-20 pb-16 text-center md:pt-28">
        <div className="relative mx-auto w-fit max-w-4xl">
          <h1 className="font-titulo text-3xl leading-tight text-white text-shadow-[4px_4px_0_black] md:text-6xl md:leading-tight">
            Bestiario de Minecraft
          </h1>
          <p className="absolute -right-2 -bottom-8 -rotate-12 text-xl text-yellow-300 text-shadow-[2px_2px_0_black] motion-safe:animate-pulse md:text-3xl">
            ¡Ahora con creepers!
          </p>
        </div>
        <p className="mx-auto mt-16 max-w-xl">
          Conoce a los mobs del juego: su vida, su velocidad y si te van a atacar. Búscalos por nombre y guarda tus favoritos.
        </p>
        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3">
          <Link to="/explorar" className={BOTON_VERDE}>Explorar mobs</Link>
          <Link to="/favoritos" className={BOTON_GRIS}>Mis favoritos</Link>
          <Link to="/contacto" className={BOTON_GRIS}>Contacto</Link>
        </div>
      </section>

      <div aria-hidden="true" className="h-6 bg-green-600" />
      <div aria-hidden="true" className="h-16 bg-amber-900 bg-[conic-gradient(var(--color-amber-950)_25%,transparent_0_50%,var(--color-amber-950)_0_75%,transparent_0)] bg-size-[32px_32px]" />

      <ModalDarkPattern />
    </>
  );
}
