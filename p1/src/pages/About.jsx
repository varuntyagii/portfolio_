import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';
import Sign from '../components/common/Sign';
import Aboutme from '../about/Aboutme';
import Footer from '../components/common/Footer';
import AboutPhotosChange from '../about/AboutPhotosChange';
import { SvgLine } from '../about/SvgLine';
import VideoSection from '../about/VideoSection';
import Achievements from '../about/Achievements';
import DecryptedText from '../components/home/DecryptedText';
import PixelCard from '../about/PixelCard';

const About = () => {
  const imgDiv = useRef(null);
  const imgRef = useRef(null);
  const aboutRef = useRef();


  const imageArray = [
    "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1781112270/Screenshot_20250328_205809_sarq5p.jpg",
    "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1781103443/Snapchat-1962545898_f70ra6.png",
    "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1788162643/Varunphoto_ptluuq.png",
    "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1781112029/Snapchat-1497228895_hghtym.jpg",
    "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1781112034/Screenshot_20250702_183738_kyhsap.jpg",
    "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1781112035/Screenshot_20240630_203059_abj8rp.jpg",
    "https://res.cloudinary.com/dgxnwlg0w/image/upload/t_varun/Gemini_Generated_Image__i5kbsv.png",
    "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1781169802/Gemini_Generated_Image__1_pqr7p7.png"
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(imgDiv.current, {
      scrollTrigger: {
        trigger: imgDiv.current,
        start: 'top 20.4%',
        end: "+=105%",
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: function (s) {
          const indx = Math.floor(s.progress * imageArray.length);
          const value = Math.min(indx, imageArray.length - 1);
          imgRef.current.src = imageArray[value];
        }
      }
    }, { scope: aboutRef });

    gsap.from(".heading", { y: -100, duration: 0.5, delay: 2 });
    gsap.from(".heading1", { yPercent: -100, duration: 1, delay: 2, ease: "power3.out" });
  });

  // Refresh ScrollTrigger after mount so it recalculates page height
  // correctly once Education's tall (300vh) sticky section is in the DOM.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    // overflow-hidden REMOVED from here — it was breaking position:sticky
    // for every descendant on the page, including Education's pin.
    <div ref={aboutRef} className='bg-[#C8C2CF] text-black min-h-screen '>
      <div className='section1 py-1 overflow-hidden'>
        <div 
          ref={imgDiv}
          className='
            h-[45vw] w-[35vw]
            md:h-[20vw] md:w-[15vw]
            rounded-2xl
            absolute
            top-10 md:top-20
            left-1/2 -translate-x-1/2
            md:left-[24vw] md:translate-x-0
            overflow-hidden
            
          '
        >
          <img
            ref={imgRef}
            src={imageArray[0]}
            alt=""
            className='object-cover object-[center_25%] rounded-2xl h-full w-full'
          />
        </div >

        <div className='relative font-[font6] z-1 overflow-hidden'>
          <div className='mt-[35vh] md:mt-[50vh]'>
            <h1 className='flex flex-col items-center uppercase text-center'>

              {/* Main Name - VARUN TYAGI */}
              <div className="heading text-[20vw] md:text-[18vw] tracking-[-0.4vw] leading-[20vw] md:leading-[17vw] flex items-center justify-center flex-wrap">

                <span className="text-white">
                  VA
                </span>

                <span className="relative z-10 bg-[linear-gradient(90deg,#ffffff_50%,#000000_50%)] bg-clip-text text-transparent">
                  RUN
                </span>

                <span className="text-white">
                  TYAGI
                </span>

              </div>

              {/* Subtitle - DEVELOPER */}
              <div className="overflow-hidden mt-[-2vw] md:mt-[-1vw]  ">

                <div className='heading1 text-[18vw] md:text-[6vw] font-bold tracking-[0.2vw] flex items-center justify-center flex-wrap'>

                  <span className="relative z-10 bg-[linear-gradient(90deg,#ffffff_50%,#000000_50%)] bg-clip-text text-transparent">
                    DEV
                  </span>

                  <span className="text-white/90">
                    ELOPER
                  </span>
                  <span className="text-white/30 text-[8vw] md:text-[3vw] ml-1">
                    .
                  </span>

                </div>

              </div>

            </h1>
          </div>

          <div className=" w-full flex justify-center md:justify-end mt-16 md:mt-28 px-4">
            <div className="w-full md:w-[65vw] lg:w-[55vw] md:mr-10">

              <p className="text-center md:text-right text-[4vw] sm:text-base md:text-xl lg:text-2xl font-light text-black/60 leading-[1.8] md:leading-[2.2] tracking-wide">

                <span className="text-black font-medium relative cursor-target">
                  I'm driven by curiosity
                  <span className="absolute -bottom-2 left-0 w-8 md:w-12 h-[0.15vw] bg-black/30 rounded-full"></span>
                </span>
                {' '}and the challenge of building things that matter.  Whether it's a

                <br className="hidden md:block" />


                <span className="cursor-target text-black font-semibold border-b-2 border-black/20 pb-1 hover:border-black transition-all duration-300">
                  "        full-stack application
                  "      </span>

                or a new idea waiting to be explored, I focus on creating software that is
                <span className="relative inline-block font-bold group cursor-pointer ml-2 ">
                  <span className="relative z-10 cursor-target ">
                    practical, scalable, and user-focused
                  </span>

                  <span className="absolute left-0 bottom-0 h-full w-full bg-[#C87F7A] -z-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                </span>
                .

                <br className="hidden md:block" />

                For me, good development isn't just about writing code—
                <span className="text-black font-semibold cursor-target">
                  {' '}it's about solving problems
                </span>
                {' '}and delivering
                <span className="text-black cursor-target font-bold relative inline-block group ml-2">
                  " meaningful experiences "
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[0.15vw] bg-black transition-all duration-700 ease-in-out"></span>
                </span>
                .
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="text-center md:text-right">
                  <span className="block text-black font-bold text-[3vw] md:text-[1.2vw]">1+</span>
                  <span className="text-black/30 text-[2vw] md:text-[0.7vw] tracking-wider">YEARS EXP</span>
                </div>
                <div className="w-[0.1vw] h-6 bg-black/10 hidden md:block"></div>
                <div className="text-center md:text-right">
                  <span className="block text-black font-bold text-[3vw] md:text-[1.2vw]">10+</span>
                  <span className="text-black/30 text-[2vw] md:text-[0.7vw] tracking-wider">PROJECTS</span>
                </div>
                <div className="w-[0.1vw] h-6 bg-black/10 hidden md:block"></div>
                <div className="text-center md:text-right">
                  <span className="block text-black font-bold text-[3vw] md:text-[1.2vw]">100%</span>
                  <span className="text-black/30 text-[2vw] md:text-[0.7vw] tracking-wider">COMMITMENT</span>
                </div>
              </div>

              {/* Signature Line */}
              <div className="flex items-center justify-center md:justify-end gap-2 md:gap-3 mt-4 md:mt-6">
                <div className="w-6 md:w-12 h-[0.05vw] bg-gradient-to-l from-black/30 to-transparent"></div>
                <span className="text-black/20 text-[1.8vw] md:text-[0.7vw]">✦</span>
                <span className="text-black/35 text-[2vw] md:text-[0.7vw] tracking-[0.4em] font-light uppercase">
                  Builder
                </span>
                <span className="text-black/20 text-[1.8vw] md:text-[0.7vw]">✦</span>
                <span className="text-black/35 text-[2vw] md:text-[0.7vw] tracking-[0.4em] font-light uppercase">
                  Creator
                </span>
                <span className="text-black/20 text-[1.8vw] md:text-[0.7vw]">✦</span>
                <div className="w-6 md:w-12 h-[0.05vw] bg-gradient-to-r from-black/30 to-transparent"></div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div>
        <Sign />
        {/* <VideoSection /> */}
        <AboutPhotosChange />

        <div className="">
          <Achievements />
        </div>
        <SvgLine />
        {/* <ProcessSection/> */}
        <Aboutme />
        <Footer />
      </div>
    </div>
  );
};

export default About;  
