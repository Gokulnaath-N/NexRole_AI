import confetti from 'canvas-confetti';

export function useConfetti() {
  const fire = (options?: confetti.Options) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#7C3AED', '#F59E0B', '#10B981', '#EC4899'],
      ...options
    });
  };

  const celebrate = () => {
    // Two-burst celebration
    fire({ origin: { x: 0.25, y: 0.7 } });
    setTimeout(() => fire({ origin: { x: 0.75, y: 0.7 } }), 200);
  };

  const levelUp = () => {
    // More intense for level-up
    fire({ particleCount: 150, spread: 90, startVelocity: 40 });
  };

  return { fire, celebrate, levelUp };
}
