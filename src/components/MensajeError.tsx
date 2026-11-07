import { BOTON_ROJO } from '../lib/estilos';

interface Props {
  mensaje: string;
  onReintentar: () => void;
}

export function MensajeError({ mensaje, onReintentar }: Props) {
  return (
    <div role="alert" className="px-4 py-24 text-center">
      <p aria-hidden="true" className="text-6xl">💀</p>
      <h2 className="mt-4 text-3xl text-red-400">{mensaje}</h2>
      <p className="mt-2 mb-6">Revisa la dirección o tu conexión e inténtalo de nuevo.</p>
      <button onClick={onReintentar} className={BOTON_ROJO}>Reintentar</button>
    </div>
  );
}
