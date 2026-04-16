import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[400px] w-[400px] rounded-full mix-blend-screen blur-3xl transition-transform duration-200 ease-out"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        background:
          "radial-gradient(circle, oklch(0.78 0.13 195 / 0.12) 0%, transparent 70%)",
      }}
    />
  );
}
