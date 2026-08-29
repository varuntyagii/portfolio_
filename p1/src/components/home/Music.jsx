import Lottie from "lottie-react";
import { useRef, useState, useEffect, useContext } from "react";
import playerAnimation from "../../jsonAnimations/player-music.json";
import { NavHoverContext } from "../../context/MenuContext";

export default function Music() {
  const audioRef = useRef(null);
  const lottieRef = useRef(null);
  const [playing, setPlaying] = useState(false);
    const { navHovered, setNavHovered } = useContext(NavHoverContext);


  useEffect(() => {
    audioRef.current = new Audio("https://framerusercontent.com/assets/82586VFcGfvpMGPDCN1nrm9qstE.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      audioRef.current?.pause();
    };
  }, []);

useEffect(() => {
  lottieRef.current?.stop();
}, []);
 const toggleMusic = async () => {
  try {
    if (playing) {
      audioRef.current.pause();

      lottieRef.current?.stop(); // animation stop

      setPlaying(false);
    } else {
      await audioRef.current.play();

      lottieRef.current?.play(); // animation start

      setPlaying(true);
    }
  } catch (err) {
    console.error(err);
  }
};

  return (
    <>
      <div
        className="fixed bottom-8 left-2 w-14 h-14 rounded-full flex items-center justify-center z-[9999] transition-all duration-300 hover:scale-110"
        
      >
        {/* <button
          onClick={toggleMusic}
          style={{
            position: "absolute",
            inset: 0,
            margin: "auto",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            border: "1px solid #fff",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "none",
            pointerEvents: "auto",
            mixBlendMode: "difference",
          }}
        >
          <div className="music-bars">
            <span className={playing ? "bar animate" : "bar"}></span>
            <span className={playing ? "bar animate delay1" : "bar"}></span>
            <span className={playing ? "bar animate delay2" : "bar"}></span>
            <span className={playing ? "bar animate delay3" : "bar"}></span>
          </div>
        </button> */}
        <Lottie 
          onMouseEnter={() => { setNavHovered(true); }}
            onMouseLeave={() => {  setNavHovered(false); }}
        style={{

           background: "D3D3D3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            pointerEvents: "auto",
            width: "55px",
            height: "55px",
            
            mixBlendMode: "difference",
          }}  onClick={toggleMusic}   lottieRef={lottieRef}
 animationData={playerAnimation} loop={true}
        />
      </div>

     
    </>
  );
}