import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    year: "2021 - 2025",
    degree: "B.Tech in Computer Science",
    institute: "Dr. A.P.J. Abdul Kalam Technical University",
    field: "Computer Science & Engineering",
  },
  {
    year: "2020 - 2021",
    degree: "Senior Secondary (Class XII)",
    institute: "Sent Giri Inter College, Ghaziabad",
    field: "Uttar Pradesh Board",
  },
  {
    year: "2018 - 2019",
    degree: "Secondary (Class X)",
    institute: "Sent Giri Inter College, Ghaziabad",
    field: "Uttar Pradesh Board",
  },
];

const Education = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // ==========================================
    // 1. DESKTOP ANIMATION (>= 768px)
    // ==========================================
    mm.add("(min-width: 768px)", () => {
      // Set initial desktop states
      gsap.set(".edu-line-desktop", { scaleX: 0, transformOrigin: "left center" });
      gsap.set([".edu-dot-1", ".edu-dot-2", ".edu-dot-3"], { scale: 0, opacity: 0 });
      gsap.set([".edu-stem-1", ".edu-stem-2", ".edu-stem-3"], { scaleY: 0, opacity: 0 });
      gsap.set([".edu-card-1", ".edu-card-3"], { y: 40, opacity: 0, scale: 0.85 });
      gsap.set(".edu-card-2", { y: -40, opacity: 0, scale: 0.85 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2200",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Line progress
      tl.to(".edu-line-desktop", { scaleX: 1, duration: 3, ease: "none" }, 0);

      // Card 1: B.Tech
      tl.to(".edu-dot-1", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, 0.15)
        .to(".edu-stem-1", { scaleY: 1, opacity: 1, duration: 0.3, transformOrigin: "top center" }, 0.25)
        .to(".edu-card-1", { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }, 0.35);

      // Card 2: Class XII
      tl.to(".edu-dot-2", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, 1.05)
        .to(".edu-stem-2", { scaleY: 1, opacity: 1, duration: 0.3, transformOrigin: "bottom center" }, 1.15)
        .to(".edu-card-2", { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }, 1.25);

      // Card 3: Class X / Schooling
      tl.to(".edu-dot-3", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, 1.95)
        .to(".edu-stem-3", { scaleY: 1, opacity: 1, duration: 0.3, transformOrigin: "top center" }, 2.05)
        .to(".edu-card-3", { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }, 2.15);

      // Hold buffer: keeps entire timeline frozen and fully readable
      tl.to({}, { duration: 1.2 }, 2.8);
    });

    // ==========================================
    // 2. MOBILE ANIMATION (< 768px)
    // ==========================================
    mm.add("(max-width: 767px)", () => {
      // Set initial mobile states - cards start dim and light up sequentially
      gsap.set(".edu-line-mobile", { scaleY: 0, transformOrigin: "top center" });
      gsap.set([".edu-mob-card-1", ".edu-mob-card-2", ".edu-mob-card-3"], {
        opacity: 0.25,
        scale: 0.95,
        x: -10,
      });
      gsap.set([".edu-mob-dot-1", ".edu-mob-dot-2", ".edu-mob-dot-3"], {
        scale: 0.7,
        opacity: 0.4,
        backgroundColor: "#555",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1800",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Line progress vertically
      tl.to(".edu-line-mobile", { scaleY: 1, duration: 3, ease: "none" }, 0);

      // Card 1: B.Tech activates
      tl.to(".edu-mob-dot-1", { scale: 1.2, opacity: 1, backgroundColor: "#D3FD50", duration: 0.4 }, 0.15)
        .to(".edu-mob-card-1", { opacity: 1, scale: 1, x: 0, borderColor: "rgba(211,253,80,0.6)", duration: 0.5 }, 0.25);

      // Card 2: Class XII activates
      tl.to(".edu-mob-dot-2", { scale: 1.2, opacity: 1, backgroundColor: "#D3FD50", duration: 0.4 }, 1.05)
        .to(".edu-mob-card-2", { opacity: 1, scale: 1, x: 0, borderColor: "rgba(211,253,80,0.6)", duration: 0.5 }, 1.15);

      // Card 3: Class X (Schooling) activates
      tl.to(".edu-mob-dot-3", { scale: 1.2, opacity: 1, backgroundColor: "#D3FD50", duration: 0.4 }, 1.95)
        .to(".edu-mob-card-3", { opacity: 1, scale: 1, x: 0, borderColor: "rgba(211,253,80,0.6)", duration: 0.5 }, 2.15);

      // Hold buffer: keeps all 3 schooling cards active and pinned on screen
      tl.to({}, { duration: 1.2 }, 2.8);
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section className="w-full text-white overflow-hidden relative">
      <div
        ref={containerRef}
        className="w-full h-screen flex flex-col justify-between py-6 sm:py-10 md:py-16 px-3 sm:px-6 md:px-8 relative z-20 bg-[#C8C2CF]"
      >
        {/* Section Header */}
        <div className="w-full max-w-7xl mx-auto px-2">
          <div className="flex items-center w-full">
            <div className="flex-1 h-[0.2px] bg-black"></div>
            <div className="cursor-target px-3 sm:px-4 text-xs sm:text-base md:text-2xl font-medium tracking-wide whitespace-nowrap text-black font-[font9]">
              ❈ Education Timeline ❈
            </div>
            <div className="flex-1 h-[0.2px] bg-black"></div>
          </div>
        </div>

        {/* ========================================== */}
        {/* DESKTOP TIMELINE VIEW (md:flex)           */}
        {/* ========================================== */}
        <div className="hidden md:block w-full relative max-w-7xl mx-auto my-auto px-8">
          {/* Background Line Track */}
          <div className="relative h-[6px] bg-black/15 rounded-full">
            <div className="edu-line-desktop absolute left-0 top-0 h-[6px] w-full bg-gradient-to-r from-black via-[#D3FD50] to-black rounded-full shadow-[0_0_20px_rgba(211,253,80,0.6)]" />
          </div>

          {/* Desktop Timeline Items */}
          <div className="relative flex justify-between items-center w-full mt-0">
            {/* Item 1 - B.Tech */}
            <div className="relative flex flex-1 justify-center items-center min-w-0">
              <div className="edu-dot-1 z-20 w-8 h-8 rounded-full bg-black shadow-[0_0_0_8px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-target">
                <div className="w-3 h-3 rounded-full bg-[#D3FD50]" />
              </div>
              <div className="edu-stem-1 absolute -top-10 w-[3px] h-[40px] bg-black/40" />
              <div className="edu-card-1 absolute bottom-20 left-1/2 -translate-x-1/2 bg-gray-950/95 backdrop-blur-md border border-white/20 hover:border-[#D3FD50] rounded-2xl p-6 w-[310px] shadow-2xl transition-colors duration-300 cursor-target z-50">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[#D3FD50] text-[11px] font-mono tracking-wider mb-2">
                  {educationData[0].year}
                </div>
                <h3 className="text-lg font-bold text-white font-[font9] tracking-wide mb-1">
                  {educationData[0].degree}
                </h3>
                <p className="text-xs text-zinc-400 font-[font6] leading-relaxed">
                  {educationData[0].institute}
                </p>
                <p className="text-[11px] text-zinc-500 font-mono mt-2">
                  ✦ {educationData[0].field}
                </p>
              </div>
            </div>

            {/* Item 2 - Class XII */}
            <div className="relative flex flex-1 justify-center items-center min-w-0">
              <div className="edu-dot-2 z-20 w-8 h-8 rounded-full bg-black shadow-[0_0_0_8px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-target">
                <div className="w-3 h-3 rounded-full bg-[#D3FD50]" />
              </div>
              <div className="edu-stem-2 absolute -bottom-10 w-[3px] h-[40px] bg-black/40" />
              <div className="edu-card-2 absolute top-20 left-1/2 -translate-x-1/2 bg-gray-950/95 backdrop-blur-md border border-white/20 hover:border-[#D3FD50] rounded-2xl p-6 w-[310px] shadow-2xl transition-colors duration-300 cursor-target z-50">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[#D3FD50] text-[11px] font-mono tracking-wider mb-2">
                  {educationData[1].year}
                </div>
                <h3 className="text-lg font-bold text-white font-[font9] tracking-wide mb-1">
                  {educationData[1].degree}
                </h3>
                <p className="text-xs text-zinc-400 font-[font6] leading-relaxed">
                  {educationData[1].institute}
                </p>
                <p className="text-[11px] text-zinc-500 font-mono mt-2">
                  ✦ {educationData[1].field}
                </p>
              </div>
            </div>

            {/* Item 3 - Class X / Schooling */}
            <div className="relative flex flex-1 justify-center items-center min-w-0">
              <div className="edu-dot-3 z-20 w-8 h-8 rounded-full bg-black shadow-[0_0_0_8px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-target">
                <div className="w-3 h-3 rounded-full bg-[#D3FD50]" />
              </div>
              <div className="edu-stem-3 absolute -top-10 w-[3px] h-[40px] bg-black/40" />
              <div className="edu-card-3 absolute bottom-20 left-1/2 -translate-x-1/2 bg-gray-950/95 backdrop-blur-md border border-white/20 hover:border-[#D3FD50] rounded-2xl p-6 w-[310px] shadow-2xl transition-colors duration-300 cursor-target z-50">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[#D3FD50] text-[11px] font-mono tracking-wider mb-2">
                  {educationData[2].year}
                </div>
                <h3 className="text-lg font-bold text-white font-[font9] tracking-wide mb-1">
                  {educationData[2].degree}
                </h3>
                <p className="text-xs text-zinc-400 font-[font6] leading-relaxed">
                  {educationData[2].institute}
                </p>
                <p className="text-[11px] text-zinc-500 font-mono mt-2">
                  ✦ {educationData[2].field}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* MOBILE TIMELINE VIEW (md:hidden)          */}
        {/* ========================================== */}
        <div className="block md:hidden w-full my-auto px-2 max-w-sm mx-auto">
          <div className="relative flex flex-col gap-4 pl-4">
            {/* Background Track Line */}
            <div className="absolute left-3 top-2 bottom-2 w-[3px] bg-black/15 rounded-full" />
            {/* Animated Progress Line */}
            <div className="edu-line-mobile absolute left-3 top-2 bottom-2 w-[3px] bg-gradient-to-b from-black via-[#D3FD50] to-black rounded-full shadow-[0_0_15px_rgba(211,253,80,0.6)]" />

            {/* Mobile Card 1 */}
            <div className="relative flex items-center">
              <div className="edu-mob-dot-1 absolute -left-[18px] z-10 w-6 h-6 rounded-full border-2 border-black flex items-center justify-center transition-all duration-300" />
              <div className="edu-mob-card-1 bg-gray-950/95 backdrop-blur-md border border-white/15 rounded-xl p-3.5 w-full ml-4 shadow-xl transition-all duration-300">
                <div className="inline-block px-2 py-0.5 rounded-full bg-white/10 text-[#D3FD50] text-[9px] font-mono mb-1">
                  {educationData[0].year}
                </div>
                <h3 className="text-sm font-bold text-white font-[font9] leading-tight">
                  {educationData[0].degree}
                </h3>
                <p className="text-[10px] text-zinc-400 font-[font6] mt-0.5">
                  {educationData[0].institute}
                </p>
              </div>
            </div>

            {/* Mobile Card 2 */}
            <div className="relative flex items-center">
              <div className="edu-mob-dot-2 absolute -left-[18px] z-10 w-6 h-6 rounded-full border-2 border-black flex items-center justify-center transition-all duration-300" />
              <div className="edu-mob-card-2 bg-gray-950/95 backdrop-blur-md border border-white/15 rounded-xl p-3.5 w-full ml-4 shadow-xl transition-all duration-300">
                <div className="inline-block px-2 py-0.5 rounded-full bg-white/10 text-[#D3FD50] text-[9px] font-mono mb-1">
                  {educationData[1].year}
                </div>
                <h3 className="text-sm font-bold text-white font-[font9] leading-tight">
                  {educationData[1].degree}
                </h3>
                <p className="text-[10px] text-zinc-400 font-[font6] mt-0.5">
                  {educationData[1].institute}
                </p>
              </div>
            </div>

            {/* Mobile Card 3 - Class X / Schooling */}
            <div className="relative flex items-center">
              <div className="edu-mob-dot-3 absolute -left-[18px] z-10 w-6 h-6 rounded-full border-2 border-black flex items-center justify-center transition-all duration-300" />
              <div className="edu-mob-card-3 bg-gray-950/95 backdrop-blur-md border border-white/15 rounded-xl p-3.5 w-full ml-4 shadow-xl transition-all duration-300">
                <div className="inline-block px-2 py-0.5 rounded-full bg-white/10 text-[#D3FD50] text-[9px] font-mono mb-1">
                  {educationData[2].year}
                </div>
                <h3 className="text-sm font-bold text-white font-[font9] tracking-wide leading-tight">
                  {educationData[2].degree}
                </h3>
                <p className="text-[10px] text-zinc-400 font-[font6] mt-0.5">
                  {educationData[2].institute}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom progress cue */}
        <div className="w-full flex justify-center items-center pb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 border border-black/10 text-[9px] sm:text-[10px] font-mono text-black/60 uppercase tracking-widest">
            <span>Scroll to explore timeline</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;