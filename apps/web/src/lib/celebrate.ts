'use client';

/** Confete discreto nas cores da marca (respeita "reduzir movimento"). */
export async function celebrate() {
  if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const confetti = (await import('canvas-confetti')).default;
  const colors = ['#0f5c4d', '#bfeadb', '#ff6f59', '#7fd4b8', '#ffc9bf'];
  confetti({ particleCount: 90, spread: 75, origin: { y: 0.7 }, colors, scalar: 0.9, disableForReducedMotion: true });
  setTimeout(() => confetti({ particleCount: 50, spread: 110, origin: { y: 0.6 }, colors, scalar: 0.8 }), 220);
}
