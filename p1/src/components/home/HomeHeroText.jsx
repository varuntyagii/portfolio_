import React from "react";
import Video from "./Video";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";




const HomeHeroText = () => {

 
    
  
   useGSAP(() => {
  gsap.from(".heading1", {
    y: 100,          // simpler than yPercent for this case
    opacity: 0,
    duration: 5,
    stagger: 0.4,    // each text delay gap
    ease: "power3.out"
  });
});

  return (
    <div className="    pt-40 md:pt-[60px] text-center">
      <p className="heading1 font-[font9] text-[4vw] uppercase sm:text-[1vw] text-white  ">
        Hello, I'm Varun TYAGI 
      </p>

      <h1 className="heading1 font-[font2] text-[10vw] uppercase leading-[12vw] text-white mix-blend-difference">
        Full-Stack
      </h1>

     <div className="flex items-center justify-center gap-[1vw]">
  <h1 className="heading1 font-[font2] text-[9vw] uppercase leading-none text-white mix-blend-difference">
    devel
  </h1>

  <div className="d-shape shrink-0 ">
    <Video />
  </div>

  <h1 className="heading1 font-[font2] text-[9vw] uppercase leading-none text-white mix-blend-difference">
    per
  </h1>
</div>

      <p className="heading1 font-[font3] mt-8 md:mt-10  mix-blend-difference text-zinc-300  sm:text-[2vw]  text-[3vw] md:text-[2vw] lg:text-[1.1vw] uppercase tracking-wider">
  Frontend • Backend • Problem Solver • Coder
</p>
    </div>
  );
};

export default HomeHeroText;