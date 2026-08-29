import { useContext, useEffect, useRef, useState } from "react";
import { NavHoverContext, MenuContext } from "../../context/MenuContext";

const SIZE = 32; // Reduced from 48 to 32

export default function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  const { navHovered } = useContext(NavHoverContext);
  const { menuOpen } = useContext(MenuContext);
  const showArrow = navHovered || menuOpen;

  const x = useRef(-200);
  const y = useRef(-200);
  const tx = useRef(-200);
  const ty = useRef(-200);

  useEffect(() => {
    const move = (e) => {
      tx.current = e.clientX;
      ty.current = e.clientY;
    };
    window.addEventListener("mousemove", move);

    let raf;
    const animate = () => {
      x.current += (tx.current - x.current) * 0.18;
      y.current += (ty.current - y.current) * 0.18;
      setPos({ x: x.current, y: y.current });
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = showArrow ? "auto" : "none";
  }, [showArrow]);

  if (showArrow) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: SIZE,
        height: SIZE,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference", // Apply mix-blend-mode to the container
      }}
    >
      {/* rotating bracket frame */}
      <svg
        viewBox="0 0 48 48"
        style={{
          width: "100%",
          height: "100%",
          animation: "rotate 4s linear infinite",
        }}
      >
        {/* top-left */}
        <path d="M6 14 V6 H14" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* top-right */}
        <path d="M34 6 H42 V14" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* bottom-right */}
        <path d="M42 34 V42 H34" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* bottom-left */}
        <path d="M14 42 H6 V34" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
      </svg>

      {/* center dot, pulses independently */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 4, // Reduced from 5 to 4
          height: 4, // Reduced from 5 to 4
          borderRadius: "50%",
          background: "white",
          transform: "translate(-50%, -50%)",
          animation: "pulseDot 1.4s ease-in-out infinite",
        }}
      />

      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulseDot {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            50% { transform: translate(-50%, -50%) scale(1.8); opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
}