import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Lottie from 'lottie-react';
// import rocketAnimation from "../ jsonAnimations/SpaceRocket.json";
import rocketAnimation from "../../jsonAnimations/SpaceRocket.json";
import CountUp from './CountUp';

// import animationData from "../../../public/jsonAnimations/zeiraf.json";
// import animationData from "../../../public/jsonAnimations/zeiraf.json";

const LoadingPage = () => {

   
  
useGSAP(() => {
  gsap.to(".stair", {
    y: 70,
    duration: 0.8,
   
    ease: "power10.inOut",
    stagger: {
      each: 0.1,
      from: "end",
      repeat: -1,
      yoyo: true
    }
  });
});



  return (
  <div className="relative h-screen w-screen overflow-hidden bg-black">
  
  {/* Center Rocket */}
  <div  className="absolute inset-0 flex justify-center items-center">
    <Lottie animationData={rocketAnimation} loop={true} className="w-200 h-200 bg-black" />
  </div>

  {/* Bottom Right GSAP stairs */} 
  <div className="absolute bottom-20 md:bottom-2  right-2">
    <div className="h-20 w-20 overflow-hidden flex px-3.5">
      <div className="stair w-1/4 h-full bg-white"></div>
      <div className="stair w-1/4 h-full bg-white"></div>
      <div className="stair w-1/4 h-full bg-white"></div>
      <div className="stair w-1/4 h-full bg-white"></div>
    </div>
  </div>
  <div className="absolute text-7xl bottom-20 md:bottom-2 text-white left-2">
    <CountUp
      from={0}
      to={100}
      separator=","
      direction="up"
      duration={0.4}
      className="count-up-text"
      delay={0}
      
    />
  </div>

</div>
  )
}

export default LoadingPage

