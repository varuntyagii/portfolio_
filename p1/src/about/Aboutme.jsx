import React, { useEffect, useRef } from 'react'

const Aboutme = () => {


  return (

    <div className='font-[font6]' >
      <section className="relative overflow-hidden">
        <div className="h-[90px] sm:h-[120px] md:h-[250px] flex items-end overflow-hidden">
          <h1 className="text-[35vw] md:text-[35vw] leading-none px-2 md:px-6 font-black text-black translate-y-[40%] md:translate-y-[43%]">
            VARUN
          </h1>
        </div>

        <div className="h-[90px] sm:h-[120px] md:h-[250px] bg-[#E6DFE4] flex items-start overflow-hidden">
          <h1 className="text-[35vw] md:text-[35vw] leading-none px-2 md:px-6 font-black text-black -translate-y-[50%] md:-translate-y-[55%]">
            VARUN
          </h1>
        </div>

        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
          <div className="h-[32px] md:h-[40px] bg-black relative">
            <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 text-[8px] md:text-[10px] uppercase text-white">
              <span>Developer</span>
              <span>Designer</span>
              <span>Creator</span>
              <span>Frontend</span>
              <span>React</span>
              <span>Portfolio</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Aboutme
