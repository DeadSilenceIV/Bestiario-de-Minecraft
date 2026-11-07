export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-stone-700 px-4 py-4 text-center">
      Proyecto universitario sin relación oficial con Mojang ni Microsoft. Datos de{' '}
      <a
        href="https://minecraft-api-dusky.vercel.app/documentation"
        target="_blank"
        rel="noreferrer"
        className="text-yellow-300 underline"
      >
        Minecraft API
      </a>
      .
    </footer>
  );
}
