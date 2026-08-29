import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const TextReveal = ({ text, panelColor = "bg-[#C8C2CF]" }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
      },
    });

    tl.to(".top-panel", {
      yPercent: 100,
      ease: "none",
    }, 0);

    tl.to(".bottom-panel", {
      yPercent: -100,
      ease: "none",
    }, 0);

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* White Background */}
      <div className="absolute inset-0 z-0 bg-white" />

      {/* White Text with ❈ - but text white hai to white background pe dikhega nahi */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <h1 className="text-8xl md:text-9xl font-bold text-white tracking-tight">
          ❈ {text} ❈
        </h1>
      </div>

      {/* Top Panel - covers text from top */}
      <div
        className={`top-panel absolute left-0 right-0 z-10 ${panelColor}`}
        style={{ top: "-50%", height: "50%" }}
      />

      {/* Bottom Panel - covers text from bottom */}
      <div
        className={`bottom-panel absolute left-0 right-0 z-10 ${panelColor}`}
        style={{ bottom: "-50%", height: "50%" }}
      />
    </section>
  );
};