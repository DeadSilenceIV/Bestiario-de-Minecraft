interface Props {
  vida: number;
}

export function BarraVida({ vida }: Props) {
  const corazones = Math.min(Math.ceil(vida / 2), 10);

  return (
    <div role="img" aria-label={`${vida} puntos de vida`} className="flex flex-wrap items-center gap-2">
      <span>{'❤️'.repeat(corazones)}{vida > 20 && '+'}</span>
      <span>{vida} de vida</span>
    </div>
  );
}
