import { useState } from 'react';
import { BOTON_VERDE } from '../lib/estilos';
import { useFavoritos } from '../store/favoritos';
import { useToast } from '../store/toast';
import { ModalConfirmacion } from './ModalConfirmacion';
import type { Mob } from '../types/mob';

interface Props {
  mob: Mob;
  conTexto?: boolean;
}

export function BotonFavorito({ mob, conTexto = false }: Props) {
  const esFavorito = useFavoritos((s) => s.favoritos.some((f) => f.id === mob.id));
  const agregar = useFavoritos((s) => s.agregar);
  const quitar = useFavoritos((s) => s.quitar);
  const mostrarToast = useToast((s) => s.mostrar);
  const [confirmando, setConfirmando] = useState(false);

  function handleClick() {
    if (esFavorito) {
      setConfirmando(true);
      return;
    }
    agregar(mob);
    mostrarToast(`Agregaste a ${mob.name} a favoritos`, 'exito');
  }

  function confirmarQuitar() {
    setConfirmando(false);
    quitar(mob.id);
    mostrarToast(`Quitaste a ${mob.name} de favoritos`, 'info');
  }

  return (
    <>
      <button
        onClick={handleClick}
        aria-label={esFavorito ? `Quitar a ${mob.name} de favoritos` : `Agregar a ${mob.name} a favoritos`}
        className={conTexto ? BOTON_VERDE : 'h-11 w-11 cursor-pointer border-2 border-black bg-stone-800 text-xl hover:bg-stone-600'}
      >
        {esFavorito ? '❤️' : '🖤'}
        {conTexto && (esFavorito ? ' Quitar de favoritos' : ' Agregar a favoritos')}
      </button>

      <ModalConfirmacion
        abierto={confirmando}
        titulo="¿Quitar de favoritos?"
        mensaje={`¿Quieres quitar a ${mob.name} de tus favoritos?`}
        textoConfirmar="Quitar"
        onConfirmar={confirmarQuitar}
        onCancelar={() => setConfirmando(false)}
      />
    </>
  );
}
