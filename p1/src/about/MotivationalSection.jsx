import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MotivationalSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal text lines with a slide-up effect out of an overflow hidden box
    const lines = gsap.utils.toArray('.motivational-line');
    
    gsap.fromTo(lines,
      { y: "110%", rotate: 2 },
      {
        y: "0%",
        rotate: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Fade in small subtext
    gsap.fromTo(".motivational-subtext",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#111] text-white flex flex-col justify-center px-6 md:px-16 overflow-hidden select-none"
    >
      {/* Background Subtle Geometric Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent)] pointer-events-none" />

      {/* Main Large Typography Container */}
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center">
        <div className="flex flex-col leading-[0.9] font-black uppercase text-left tracking-tighter">
          {/* Line 1 */}
          <div className="overflow-hidden py-2">
            <h1 className="motivational-line text-[14vw] sm:text-[12vw] md:text-[11vw] font-[font5] text-[#C8C2CF] origin-left">
              Make.
            </h1>
          </div>
          
          {/* Line 2 */}
          <div className="overflow-hidden py-2">
            <h1 className="motivational-line text-[14vw] sm:text-[12vw] md:text-[11vw] font-[font5] text-white origin-left">
              Every Day.
            </h1>
          </div>

          {/* Line 3 */}
          <div className="overflow-hidden py-2">
            <h1 className="motivational-line text-[14vw] sm:text-[12vw] md:text-[11vw] font-[font5] text-[#C87F7A] origin-left">
              Better.
            </h1>
          </div>
        </div>

        {/* Small details / subtext below */}
        <div className="motivational-subtext mt-12 md:mt-16 flex items-center gap-6">
          <div className="w-12 h-px bg-white/40" />
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/50 uppercase">
            Varun Tyagi — Philosophy
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotivationalSection;
