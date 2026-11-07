import { useEffect, useRef } from 'react';
import { BOTON_GRIS, BOTON_ROJO, PANEL } from '../lib/estilos';

interface Props {
  abierto: boolean;
  titulo: string;
  mensaje: string;
  textoConfirmar: string;
  onConfirmar: () => void;
  onCancelar: () => void;
}

export function ModalConfirmacion({ abierto, titulo, mensaje, textoConfirmar, onConfirmar, onCancelar }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (abierto) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [abierto]);

  return (
    <dialog
      ref={dialogRef}
      onCancel={onCancelar}
      aria-label={titulo}
      className={`m-auto max-w-sm p-6 text-center font-sans text-2xl backdrop:bg-black/70 ${PANEL}`}
    >
      <p aria-hidden="true" className="text-5xl">⚠️</p>
      <h2 className="mt-2 text-3xl">{titulo}</h2>
      <p className="mt-2">{mensaje}</p>
      <div className="mt-6 flex justify-center gap-3">
        <button onClick={onCancelar} autoFocus className={BOTON_GRIS}>Cancelar</button>
        <button onClick={onConfirmar} className={BOTON_ROJO}>{textoConfirmar}</button>
      </div>
    </dialog>
  );
}
