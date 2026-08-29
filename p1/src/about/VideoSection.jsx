import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Video1 from '../components/home/Video1';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // ScrollTrigger with reduced scroll timeline height to prevent excessive space
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
      start: "top top",
      end: "+=500",
        scrub: 1,
        pin: true,
    }
    });

    // Scale down and translate upward
    timeline
      .to(videoWrapperRef.current, {
        scale: 0.55,
        y: '-8vh',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        ease: 'power1.inOut',
      })
      .to(textRef.current, {
        scale: 0.8,
        ease: 'power1.inOut',
      }, 0);

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
className="relative w-full h-screen  overflow-hidden"  
    >
      <div className="absolute inset-0 h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden">
        
        {/* Cinematic Video Wrapper */}
        <div
          ref={videoWrapperRef}
          className="relative w-full h-[85vh] md:w-[95vw] md:h-[100vh] overflow-hidden origin-center z-10 mt-10 will-change-transform rounded-none"
        >
          {/* Embedded Background Video */}
          <Video1 />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* "Make. Every Day. Better." Text Overlay */}
          <div
            ref={textRef}
            className="absolute  inset-0 flex flex-col justify-center items-center text-center px-6 z-20 select-none pointer-events-none origin-center"
          >
            <div className=" flex flex-col leading-[0.9] font-black uppercase tracking-tighter">
              <span className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-[font5] text-[#C8C2CF]">
                Make.
              </span>
              <span className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-[font5] text-white">
                Every Day.
              </span>
              <span className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-[font5] text-[#C87F7A]">
                Better.
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4 opacity-80">
              <div className="w-8 h-[1px] bg-white/55" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white ">
                Varun Tyagi — Portfolio
              </span>
              <div className="w-8 h-[1px] bg-white/55" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none z-20">
          <span className="font-[font3] text-[10px] sm:text-shadow-xs uppercase tracking-widest text-gray-100 ">
            Scroll to explore
          </span>
          <div className="w-px h-20 bg-gray-100 mt-2 scroll-indicator" />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
