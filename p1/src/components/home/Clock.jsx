import React, { useEffect, useState } from 'react'
import { FaGlobe } from "react-icons/fa";


const Clock = ({className}) => {
    const [clock, setClock] = useState(Date.now());
    useEffect(()=>{
        const timer = setInterval(()=>{
             setClock(Date.now());
            // console.log(Date.now());
        }, 1000)
        return ()=> clearInterval(timer);
    }, []);
//   return (
//  <div className="flex justify-start w-full items-start px-2">

//   {/* LEFT SIDE */}
//   <div className="text-[4vw] flex gap-3.5 ml-3 md:text-[1.5vw]">
//     <FaGlobe />
//     <span>INDIA_{new Date(clock).toLocaleTimeString()}</span>
//   </div>

//  {/* <div className="font-[font3] text-right text-neutral-300 max-w-[50%] px-3">
//     <div className="text-xs sm:text-sm md:text-[1.1vw]">
//       I’m a Full Stack Developer
//     </div>
//     <div className="text-xs sm:text-sm md:text-[1.1vw]">
//       focused on building clean, scalable,
//     </div>
//     <div className="text-xs sm:text-sm md:text-[1.1vw]">
//       and intentional web applications.
//     </div>
//     <div className="text-xs sm:text-sm md:text-[1.1vw]">
//       I prioritize clarity, usability, and long-term impact over complexity.
//     </div>
//   </div> */}

// </div>
//   )

return (
  <div  className="className flex flex-col justify-end w-full px-2">

       <div className="text-[4vw] mix-blend-difference  flex gap-3.5 ml-3 md:text-[1.5vw] items-center mt-auto">
      <FaGlobe />
      <span>INDIA_{new Date(clock).toLocaleTimeString()}</span>
    </div>

  </div>
)
}

export default Clock

