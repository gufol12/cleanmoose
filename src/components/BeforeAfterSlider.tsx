import { useRef, useState, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  initialPosition?: number;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onPointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden rounded-2xl ring-1 ring-border aspect-[4/3]"
      style={{ cursor: isDragging ? "ew-resize" : "default" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Before image – full background */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        width={1024}
        height={768}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* After image – clipped by width */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%",
            maxWidth: "none",
          }}
          draggable={false}
        />
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute inset-y-0 z-10 w-px bg-white/90 shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white shadow-[var(--shadow-card)] ring-1 ring-border">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-brand-moss">
            <path d="M5 4L2 8L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 4L14 8L11 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute left-3 top-3 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        Przed
      </span>
      <span className="absolute right-3 top-3 z-10 rounded-full bg-brand-moss/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        Po
      </span>
    </div>
  );
}
