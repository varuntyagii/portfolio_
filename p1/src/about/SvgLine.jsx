import { useContext, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BsArrowUpRight } from "react-icons/bs";
import { NavHoverContext } from "../context/MenuContext";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const COLORS = ["#87BAB2", "#D56D88", "#F17752", "#F1A650"];

export const SvgLine = () => {
    const { setNavHovered } = useContext(NavHoverContext);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const containerRef = useRef(null);
    const pathRefs = useRef([]);
    const chatRef = useRef(null);

    const desktopPath = `
M -350 220
H 300
Q 380 220 380 300
V 360
Q 380 440 460 440
H 760
Q 860 440 860 540
V 620
Q 860 720 960 720
H 1800
`;
const mobilePath = `
M -150 120
H 180
Q 260 120 260 180
V 240
Q 260 300 340 300
H 650
Q 750 300 750 380
V 450
Q 750 520 850 520
H 1900
`;
    const pathData = isMobile ? mobilePath : desktopPath;

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleClick = () => {
        navigate('/contact');
    }

    useGSAP(() => {
        // Clear any existing ScrollTriggers


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 40%", // Late start
                end: "bottom 70%", // Late end
                scrub: 2, // Increased from 1.5 to 3 (slower)
                invalidateOnRefresh: true,
            },
        });

        // Animate paths with more duration
        pathRefs.current.forEach((path, i) => {
            if (!path) return;

            const length = path.getTotalLength();

            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length + (COLORS.length - i - 1) * 80,
            });

            tl.to(
                path,
                {
                    strokeDashoffset: 0,
                    duration: 6, // Increased from 2 to 4
                    ease: "power1.inOut", // Slower easing
                },
                0
            );
        });

        // Let's Chat - Slower animation
        tl.from(
            chatRef.current,
            {
                opacity: 0,
                y: 80, // More distance
                duration: 2, // Increased from 1 to 2.5
                ease: "power2.inOut", // Slower easing
            },
            2 // Start after 2 seconds
        );

        // Refresh ScrollTrigger
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, { scope: containerRef });

    return (
       <section
  ref={containerRef}
  className="relative h-[40vh] md:h-[100vh] w-full overflow-hidden"
>
            {/* SVG Container */}
            <div className="absolute inset-0 w-full">
                <svg
                    viewBox="0 0 1600 1100"
                    className="h-full w-full"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {COLORS.map((color, i) => (
                        <path
                            key={i}
                            ref={(el) => (pathRefs.current[i] = el)}
                            d={pathData}
                            stroke={color}
                            strokeWidth={isMobile ? "12" : "20"}
                            strokeLinecap="butt"
                            strokeLinejoin="round"
                            style={{
                                transform: `translate(${i * (isMobile ? 10 : 20)}px, ${i * (isMobile ? 10 : 20)}px)`,
                            }}
                        />
                    ))}
                </svg>
            </div>

            {/* Let's Chat */}
            <div
                onMouseEnter={() => setNavHovered(true)}
                onMouseLeave={() => setNavHovered(false)}
                onClick={handleClick}
                className="cursor-target
                            absolute
                            right-4
                            top-39

                            sm:right-8
                            sm:top-28

                            md:right-10
                            md:top-[63%]

                            xl:right-22
                            "
            >
                <h1
                    className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl
                     font-bold leading-none text-[#C8C2CF] 
                     flex items-center gap-1 xs:gap-3 cursor-pointer "
                >
                    Let's Chat

                    <BsArrowUpRight     


                        className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-20 md:h-12
                       cursor-pointer hover:scale-110
                       duration-300 flex-shrink-0"
                    />
                </h1>
            </div>


        </section>
    );
};