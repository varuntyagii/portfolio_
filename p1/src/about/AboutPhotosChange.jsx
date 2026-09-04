import React from 'react';
import Slider from '../aboutphoto/Slider';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Achievements from './Achievements';
import { SvgLine } from './SvgLine';
import VideoSection from './VideoSection';

const AboutPhotosChange = () => {
  return (
    <div className="section2 bg-[#C8C2CF] px-4 py-8 md:py-12">


      {/* Education Section - Full Width */}
      <div className="w-full">
        <VideoSection />
      </div>
      {/* Education Section - Full Width */}
      <div className="w-full ">
        <Education />
      </div>

      {/* Skills Section */}
      <div className="w-full">
        <Skills />
      </div>

      {/* Experience Section */}
      <div className="w-full">
        <Experience />
      </div>

      {/* Achievements Section */}
     
      {/* Achievements Section */}
     
      {/* Divider */}
      <div className="flex items-center w-full max-w-7xl mx-auto text-white px-2 mt-12 mb-8 md:mt-3 md:mb-20">
        <div className="flex-1 h-[0.2px] bg-black"></div>
        <div className="px-4 cursor-target text-sm sm:text-lg md:text-2xl font-medium tracking-wide whitespace-nowrap text-black font-[font9]">
          ❈ Moments & Thoughts ❈
        </div>
        <div className="flex-1 h-[0.2px] bg-black"></div>
      </div>

      {/* Slider Section with Overlay Text */}
      <div className="relative w-full max-w-lg mx-auto">
        <div className="cursor-target absolute font-[font2] -top-5 sm:-top-8 -left-2 sm:-left-6 mix-blend-difference text-white italic text-2xl sm:text-4xl md:text-5xl z-20 pointer-events-none">
          portfolio
        </div>
        <div className="cursor-target absolute font-[font2] -bottom-5 sm:-bottom-8 -right-2 sm:-right-6 mix-blend-difference text-[#C87F7A] italic text-3xl sm:text-5xl md:text-6xl z-20 pointer-events-none">
          2026
        </div>
        <div className="relative z-10 w-full">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default AboutPhotosChange;