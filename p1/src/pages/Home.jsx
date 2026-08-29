import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Clock from '../components/home/Clock'
import ScrambledText from '../components/common/ScrambledText'

const Home = () => {

  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>

      <div className='h-screen w-screen relative flex flex-col justify-between pb-4 overflow-x-hidden'>
        <HomeHeroText />

        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-[50rem]">
            <ScrambledText
              className="
                    block
                    text-center
                    mix-blend-difference
                    text-sm
                    sm:text-base
                    md:text-[1.1vw]
                    leading-[1.8]
                    tracking-[0.02em]
                    font-light
                    whitespace-normal
                    break-normal
                  "
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              focused on building clean, scalable, and intentional web applications.
              I prioritize clarity, usability, and long-term impact over complexity.
            </ScrambledText>
          </div>
        </div>

        {/* <div className="w-full flex justify-between items-end px-4 md:px-8">
          <Clock />
        </div> */}

        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home