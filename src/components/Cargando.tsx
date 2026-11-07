export function Cargando() {
  return (
    <div role="status" className="flex flex-col items-center gap-6 py-24">
      <div className="h-14 w-14 border-8 border-stone-500 border-t-green-500 motion-safe:animate-spin" />
      <p className="text-2xl">Cargando mobs...</p>
    </div>
  );
}
