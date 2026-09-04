import React from "react";
import Video1 from "./Video1";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Video3 from "./Video3";

const HomeHeroText = () => {
  useGSAP(() => {
    gsap.from(".hero-anim", {
      y: 40,
      opacity: 0,
      duration: 1.3,
      stagger: 0.12,
      ease: "power3.out"
    });
  });

  return (
    <div className="pt-24 sm:pt-28 md:pt-28 lg:pt-32 text-center select-none w-full px-3">

      {/* Top Greeting / Identity Tag */}
      <div className="hero-anim flex items-center justify-center gap-2 mb-2 sm:mb-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md">
          {/* <span className="w-2 h-2 rounded-full bg-[#D3FD50] animate-pulse"></span> */}
          <p className="font-[font9] text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-200">
            Varun Tyagi ※ Portfolio
          </p>
        </div>
      </div>

      {/* Main Big Title - Line 1: FULL-STACK */}
      <h1 className="
        hero-anim
        font-[font2]
        text-[clamp(2.75rem,11.5vw,9.5rem)]
        uppercase
        leading-[0.88]
        tracking-[-0.03em]
        text-white
        mix-blend-difference
      ">
        Full-Stack
      </h1>

      {/* Main Big Title - Line 2: DEVEL [ Video Portal ] PER */}
      <div className="
        hero-anim
        flex
        items-center
        justify-center
        gap-1.5
        sm:gap-2.5
        md:gap-4
        mt-1.5
        sm:mt-2
      ">
        <h1 className="
          font-[font2]
          text-[clamp(2.5rem,10.5vw,8.8rem)]
          uppercase
          leading-[0.88]
          tracking-[-0.03em]
          text-white
          mix-blend-difference
        ">
          devel
        </h1>

        <div className="d-shape cursor-target">
          <Video3 />
        </div>

        <h1 className="
          font-[font2]
          text-[clamp(2.5rem,10.5vw,8.8rem)]
          uppercase
          leading-[0.88]
          tracking-[-0.03em]
          text-white
          mix-blend-difference
        ">
          per
        </h1>
      </div>

      {/* Subtitle Roles Ribbon */}
      <div className="hero-anim mt-4 sm:mt-6 px-4">
        <p className="
        font-[font3]
        text-zinc-300
        text-[11px]
        sm:text-sm
        md:text-base
        uppercase
        tracking-[0.18em]
        font-light
        flex
        flex-wrap
        items-center
        justify-center
        gap-2
        sm:gap-3

        ">
          <span>Frontend</span>
          <span className="text-[#FFB86C] text-xs">✣</span>

          <span>Backend</span>
          <span className="text-[#FFB86C] text-xs">✣</span>

          <span>Cloud</span>
          <span className="text-[#FFB86C] text-xs">✣</span>

          <span>UI/UX</span>
        </p>
      </div>

    </div>
  );
};

export default HomeHeroText;