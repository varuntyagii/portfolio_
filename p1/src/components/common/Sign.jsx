import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import ScrollTrigger from "gsap/ScrollTrigger";
import Aboutme from '../../about/Aboutme';

const Sign = () => {


gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  const paths = gsap.utils.toArray(".signature path");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".signature",
      start: "top 80%",
      end: "bottom 5%",
      scrub: 1,

    }
  });

  paths.forEach((path) => {
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 0.2,
      ease: "none"
    }, "-=0.3");
  });
});


  return (
    <div>

  
    <div className="signature font-sans h-70 -rotate-5 z-10">
    <svg
        className="signature"
        width="100%"
        height="auto"
        viewBox="0 0 500 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* V */}
        <path d="M 20,30 C 22,45 28,65 36,90 C 42,110 48,128 54,148 C 60,128 68,108 78,88 C 88,68 96,48 100,30"
          fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* A */}
        <path d="M 108,148 C 116,118 126,88 138,62 C 144,48 150,38 156,38 C 162,38 166,48 170,62 C 178,88 184,118 188,148"
          fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* A crossbar */}
        <path d="M 122,100 C 136,97 156,97 174,100"
          fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
        {/* R */}
        <path d="M 202,148 C 202,118 202,78 204,50 C 204,44 206,40 208,40 C 208,40 226,40 234,40 C 246,40 254,50 252,64 C 250,78 240,86 228,86 C 220,86 212,86 208,86 M 228,86 C 236,98 246,118 258,148"
          fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* U */}
        <path d="M 272,40 C 272,72 272,104 274,124 C 276,140 282,152 294,152 C 306,152 316,140 320,124 C 324,108 324,74 324,40"
          fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* N */}
        <path d="M 338,148 C 338,118 338,80 340,50 C 340,44 342,40 344,40 M 344,40 C 354,68 366,100 380,140 C 384,150 386,156 388,148 C 390,138 390,108 390,70 C 390,54 390,44 392,40"
          fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>



          
        {/* Underline flourish */}
        <path d="M 10,168 C 60,162 140,158 220,160 C 300,162 370,164 420,160 C 440,158 452,154 448,148"
          fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
        {/* End dot */}
        <circle cx="448" cy="148" r="3.5" fill="#111"/>
      </svg>
  </div>


</div>
  )
}

export default Sign
