import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavHoverContext } from '../../context/MenuContext'



const HomeBottomText = () => {
  const { setNavHovered } = useContext(NavHoverContext)
  return (
    <div

      className='font-[font4] flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 '>

      <Link
        onClick={() => setNavHovered(false)}
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
        to="/projects"
        className="md:text-[6vw] uppercase rounded-full px-8 py-1 text-[10vw] sm:text-[5vw]
              border-2 border-white text-white
              bg-black/20 backdrop-blur-sm
              hover:border-[#D3FD50] hover:text-[#D3FD50]
              transition-all"
                    >
        Projects
      </Link>

      <Link
        onClick={() => setNavHovered(false)}
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
        to="/about"
        className="md:text-[6vw] border-2 border-white text-white uppercase rounded-full px-8 py-1 text-[10vw] sm:text-[5vw] bg-black/20 backdrop-blur-sm hover:border-green-400 hover:text-green-400 transition-all"
      >
        About Me
      </Link>

    </div>
  )
}

export default HomeBottomText
