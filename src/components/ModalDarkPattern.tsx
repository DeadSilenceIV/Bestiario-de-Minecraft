import { useEffect, useRef } from 'react';
import { BOTON_VERDE, PANEL } from '../lib/estilos';
import { useToast } from '../store/toast';

/*
  DARK PATTERN
  1. Confirm-shaming: el texto para rechazar hace sentir mal a quien lo usa.
  2. Misdirection: aceptar es un botón grande y llamativo; rechazar es un enlace gris y diminuto.
  3. Pre-checked: la casilla de ofertas ya viene marcada, aunque nadie la pidió.
*/
export function ModalDarkPattern() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const mostrarToast = useToast((s) => s.mostrar);

  useEffect(() => {
    const id = setTimeout(() => dialogRef.current?.showModal(), 3000);
    return () => clearTimeout(id);
  }, []);

  function aceptar() {
    dialogRef.current?.close();
    mostrarToast('Te uniste al Gremio de Aldeanos', 'exito');
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="titulo-gremio"
      className={`m-auto max-w-md p-6 text-center font-sans text-2xl backdrop:bg-black/70 ${PANEL}`}
    >
      <p aria-hidden="true" className="text-5xl">💎</p>
      <h2 id="titulo-gremio" className="mt-2 text-3xl">¡Únete al Gremio de Aldeanos!</h2>
      <p className="mt-2">Recibe trucos y novedades de Minecraft todas las semanas.</p>
      <label className="mt-4 flex items-center justify-center gap-2">
        <input type="checkbox" defaultChecked />
        Quiero recibir ofertas de marcas aliadas
      </label>
      <button onClick={aceptar} autoFocus className={`mt-4 w-full ${BOTON_VERDE}`}>
        ¡Sí, quiero unirme al gremio!
      </button>
      <button
        onClick={() => dialogRef.current?.close()}
        className="mt-3 cursor-pointer text-sm text-stone-500 underline"
      >
        No gracias, prefiero que me explote un creeper
      </button>
    </dialog>
  );
}
