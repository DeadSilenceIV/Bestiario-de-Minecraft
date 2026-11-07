import { useState } from 'react';
import type { ChangeEvent, FocusEvent, FormEvent } from 'react';
import { ModalConfirmacion } from '../components/ModalConfirmacion';
import { BOTON_VERDE, CAMPO, PANEL } from '../lib/estilos';
import { useToast } from '../store/toast';

interface Formulario {
  nombre: string;
  email: string;
  mensaje: string;
}

const FORM_VACIO = { nombre: '', email: '', mensaje: '' };
const TOCADOS_VACIO = { nombre: false, email: false, mensaje: false };

function validar(form: Formulario) {
  const errores: Partial<Formulario> = {};
  if (form.nombre.trim().length < 2) errores.nombre = 'El nombre debe tener al menos 2 caracteres.';
  if (!form.email.includes('@') || !form.email.includes('.')) errores.email = 'Ingresa un email válido (debe tener @ y punto).';
  if (form.mensaje.trim().length < 10) errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
  return errores;
}

function claseCampo(hayError: boolean) {
  return `${CAMPO} ${hayError ? 'border-red-600' : 'border-stone-600'}`;
}

export function Contacto() {
  const mostrarToast = useToast((s) => s.mostrar);
  const [form, setForm] = useState<Formulario>(FORM_VACIO);
  const [tocados, setTocados] = useState(TOCADOS_VACIO);
  const [confirmando, setConfirmando] = useState(false);

  const errores = validar(form);
  const hayErrores = Object.keys(errores).length > 0;
  const errorNombre = tocados.nombre ? errores.nombre : undefined;
  const errorEmail = tocados.email ? errores.email : undefined;
  const errorMensaje = tocados.mensaje ? errores.mensaje : undefined;

  function alCambiar(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function alSalir(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTocados((prev) => ({ ...prev, [name]: true }));
  }

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setConfirmando(true);
  }

  function confirmarEnvio() {
    setConfirmando(false);
    mostrarToast(`Gracias, ${form.nombre.trim()}. Enviaste tu mensaje de prueba.`, 'exito');
    setForm(FORM_VACIO);
    setTocados(TOCADOS_VACIO);
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <h1 className="font-titulo text-2xl leading-tight text-white text-shadow-[3px_3px_0_black] md:text-4xl">
        Contacto
      </h1>
      <p className="mt-3">¿Tienes preguntas o sugerencias? Escríbenos.</p>

      <form onSubmit={enviar} noValidate className={`mt-6 flex flex-col gap-4 p-6 ${PANEL}`}>
        <div>
          <label htmlFor="nombre" className="mb-1 block">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={alCambiar}
            onBlur={alSalir}
            aria-invalid={!!errorNombre}
            aria-describedby={errorNombre ? 'error-nombre' : undefined}
            className={claseCampo(!!errorNombre)}
          />
          {errorNombre && <p id="error-nombre" role="alert" className="mt-1 text-red-800">{errorNombre}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={alCambiar}
            onBlur={alSalir}
            aria-invalid={!!errorEmail}
            aria-describedby={errorEmail ? 'error-email' : undefined}
            className={claseCampo(!!errorEmail)}
          />
          {errorEmail && <p id="error-email" role="alert" className="mt-1 text-red-800">{errorEmail}</p>}
        </div>

        <div>
          <label htmlFor="mensaje" className="mb-1 block">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={form.mensaje}
            onChange={alCambiar}
            onBlur={alSalir}
            aria-invalid={!!errorMensaje}
            aria-describedby={errorMensaje ? 'error-mensaje' : undefined}
            className={`py-2 ${claseCampo(!!errorMensaje)}`}
          />
          {errorMensaje && <p id="error-mensaje" role="alert" className="mt-1 text-red-800">{errorMensaje}</p>}
        </div>

        <button type="submit" disabled={hayErrores} className={BOTON_VERDE}>Enviar mensaje</button>
        <p className="text-center">Es un formulario de prueba: el mensaje no se guarda en ningún servidor.</p>
      </form>

      <ModalConfirmacion
        abierto={confirmando}
        titulo="¿Enviar mensaje?"
        mensaje={`Vas a enviar tu mensaje como ${form.nombre.trim()}.`}
        textoConfirmar="Enviar"
        onConfirmar={confirmarEnvio}
        onCancelar={() => setConfirmando(false)}
      />
    </div>
  );
}
