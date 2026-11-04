import { cn } from '@/lib/utils';

/**
 * Marca do Skedulei: tile esmeralda com três horários (menta, coral com check, menta) — public/logo.png.
 * `negativo` (tile off-white, public/logo-negativo.png) é para fundos esmeralda/escuros.
 */
export function LogoMark({ className, negativo }: { className?: string; negativo?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={negativo ? '/logo-negativo.png' : '/logo.png'} alt="" className={cn('size-12 object-contain', className)} />
  );
}

/** Marca + nome (wordmark minúsculo, arredondado), na altura de cabeçalhos. */
export function Wordmark({ className, markClassName, negativo }: { className?: string; markClassName?: string; negativo?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 font-display text-xl font-extrabold lowercase tracking-tight', className)}>
      <LogoMark negativo={negativo} className={cn('size-8', markClassName)} />
      Skedulei
    </span>
  );
}
