import React, { useContext, useRef, useState, useEffect } from 'react'
import Clock from '../home/Clock'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MenuContext, NavColorContext, Transition } from '../../context/MenuContext';
import { LiaHeart } from 'react-icons/lia';
import { IoIosCall } from 'react-icons/io';
import { CiMail } from 'react-icons/ci';
import logoblack from "../../assets/logo/logo-black.png";
import logowhite from "../../assets/logo/logo-white.png";
import { useNavigate } from 'react-router-dom';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
} from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { FlipLink } from '../common/FlipLink';

// Hover Effect Component - Direction based
const HoverMenuItem = ({
  children,
  onClick,
  className = "",
  bgColor = "#D3FD50",
  textColor = "#000000",
  marqueeContent = null,
  images = [],
  isResume = false,
  isContact = false,
  isHome = false,
  isAbout = false,
  speed = 15
}) => {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const textRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const aboutImages = [
    "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1781514957/Gemini_Generated_Image_v9u7yiv9u7yiv9u7_loqv1q.png",
    "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1781103443/Snapchat-1962545898_f70ra6.png"
  ]

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) {
        setRepetitions(4);
        return;
      }
      const marqueeContentEl = marqueeInnerRef.current.querySelector('.marquee-part');
      if (!marqueeContentEl) {
        setRepetitions(4);
        return;
      }
      const contentWidth = marqueeContentEl.offsetWidth;
      if (!contentWidth || contentWidth === 0) {
        setRepetitions(4);
        return;
      }
      const viewportWidth = window.innerWidth || 1024;
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    const timer = setTimeout(calculateRepetitions, 100);
    window.addEventListener('resize', calculateRepetitions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateRepetitions);
    };
  }, [marqueeContent]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContentEl = marqueeInnerRef.current.querySelector('.marquee-part');
      if (!marqueeContentEl) return;
      const contentWidth = marqueeContentEl.offsetWidth;
      if (!contentWidth || contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      let duration = speed;
      if (isResume) duration = speed / 2;
      if (isContact) duration = speed / 1.5;
      if (isHome) duration = speed / 1.5;
      if (isAbout) duration = speed / 2;

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: duration,
        ease: 'none',
        repeat: -1
      });
    };

    const timer = setTimeout(setupMarquee, 150);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [marqueeContent, repetitions, isResume, isContact, isHome, speed, isAbout]);

  const handleMouseEnter = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0)
      .to(textRef.current, { opacity: 0, duration: 0.3 }, 0);
  };

  const handleMouseLeave = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to(textRef.current, { opacity: 1, duration: 0.3 }, 0);
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="relative z-10" ref={textRef}>
        {children}
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%] z-20"
        ref={marqueeRef}
        style={{ backgroundColor: bgColor }}
      >
        <div className="h-full w-fit flex items-center moveX3" ref={marqueeInnerRef}>
          {repetitions > 0 && [...Array(repetitions)].map((_, idx) => (
            <div className="marquee-part flex items-center flex-shrink-0 h-full" key={idx} style={{ color: textColor }}>
              {isHome ? (
                <div className="flex items-center whitespace-nowrap gap-4 px-4">
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">Home</span>
                  <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⌂</span>

                </div>
              )
                : isAbout ? (
                  // About - With diamond ◈ and images
                  <div className="flex items-center whitespace-nowrap gap-4 px-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <React.Fragment key={idx}>
                        <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">
                          ◈
                        </span>

                        <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">
                          VARUN TYAGI
                        </span>

                        <div
                          className="w-[300px] h-[80px] mx-[2vw] rounded-[50px] bg-cover bg-center flex-shrink-0"
                          style={{
                            backgroundImage: `url(${aboutImages[idx % 2]})`,
                          }}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                ) : isContact ? (
                  <div className="flex items-center whitespace-nowrap gap-6 px-4">
                    <CiMail className="shrink-0 text-[8vw] md:text-[5vw]" />
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight leading-none">varun.tyagi.dev@gmail.com</span>
                    <IoIosCall className="shrink-0 text-[8vw] md:text-[5vw]" />
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight leading-none">+91 6397011309</span>
                    <LiaHeart className="shrink-0 text-[8vw] md:text-[5vw]" />
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight leading-none">Let's Connect</span>
                    <CiMail className="shrink-0 text-[8vw] md:text-[5vw]" />
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight leading-none">varun.tyagi.dev@gmail.com</span>
                    <IoIosCall className="shrink-0 text-[8vw] md:text-[5vw]" />
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight leading-none">+91 6397011309</span>
                    <LiaHeart className="shrink-0 text-[8vw] md:text-[5vw]" />
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight leading-none">Let's Connect</span>
                  </div>
                ) : isResume ? (
                  <div className="flex items-center whitespace-nowrap gap-8 px-4">
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">↗ View Resume</span>
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⬇ Download Resume</span>
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">↗ View Resume</span>
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⬇ Download Resume</span>
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">↗ View Resume</span>
                    <span className="font-[font5] text-[14vw] md:text-[7vw] uppercase tracking-tight font-bold">⬇ Download Resume</span>
                  </div>
                ) : (
                  // Projects - With ❊ icons
                  <>
                    {marqueeContent &&
                      marqueeContent.split('❊').map((text, index) => {
                        if (!text.trim()) return null;

                        const image = images[index % 2];

                        return (
                          <div key={index} className="flex items-center whitespace-nowrap gap-4">
                            <span className="whitespace-nowrap uppercase font-[font5] text-[14vw] md:text-[7vw] leading-none tracking-tight px-[1vw]">
                              ❊{text.trim()}
                            </span>

                            <div
                              className="w-[300px] h-[80px] mx-[2vw] rounded-[50px] bg-cover bg-center flex-shrink-0"
                              style={{ backgroundImage: `url(${image})` }}
                            />
                          </div>
                        );
                      })}
                  </>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FullScreenNav = () => {
  const navRef = useRef(null);
  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  const { navColor } = useContext(NavColorContext);
  const { skipTransition, setSkipTransition } = useContext(Transition);
  const navigate = useNavigate();
  const tl = useRef(null);

  useGSAP(() => {
    if (menuOpen) {
      gsap.set('.fullscreennav', { display: 'block' });

      if (tl.current) tl.current.kill();

      tl.current = gsap.timeline();

      tl.current
        .fromTo('.stairring',
          { height: 0 },
          { height: '100%', stagger: { amount: -0.3 }, duration: 0.5 }
        )
        .fromTo('.link',
          { opacity: 0, rotateX: 90 },
          { opacity: 1, rotateX: 0, stagger: { amount: 0.2 }, duration: 0.4 },
          '-=0.1'
        )
        .fromTo('.navlink',
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        )
        .fromTo(
          '.clock',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.2'
        )
        .fromTo(
          '.social',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.2'
        );

    } else {
      if (tl.current) {
        tl.current.reverse();
        function hideMenu() {
          gsap.set('.fullscreennav', { display: 'none', duration: 0.4 });
        }
        tl.current.eventCallback('onReverseComplete', hideMenu);
      } else {
        gsap.set('.fullscreennav', { display: 'none' });
      }
    }
  }, [menuOpen]);

  return (
    <div
      ref={navRef}
      id='fullscreennav'
      className="fullscreennav text-white h-screen w-full overflow-hidden fixed inset-0 z-50 "
    >
      <div className="fixed top-0 left-0 h-screen w-screen">
        <div className='h-full w-full flex'>
          <div className="stairring flex-1 -mr-[1px] bg-[#000016]"></div>
          <div className="stairring flex-1 -mr-[1px] bg-[#000016]"></div>
          <div className="stairring flex-1 -mr-[1px] bg-[#000016]"></div>
          <div className="stairring flex-1 -mr-[1px] bg-[#000016]"></div>
          <div className="stairring flex-1 -mr-[1px] bg-[#000016]"></div>
        </div>
      </div>

      <div className='navlink relative flex w-full justify-between items-start  p-5'>
        <div className="relative inline-block z-[100] cursor-target">
          <img
            src={navColor === "white" ? logowhite : logowhite}
            alt="Varun Logo"
            className="relative z-[100] block w-[180px] sm:w-[220px] md:w-[250px] p-1 md:mt-2 cursor-pointer"
            onDragStart={(e) => e.preventDefault()}
            onClick={() => {
              navigate("/")
              setSkipTransition(true);
              setMenuOpen(false);
            }}

          />
        </div>

        <div
          onClick={() => setMenuOpen(false)}
          className="group h-12 w-12 sm:h-14 sm:w-14 md:h-17 md:w-17 relative cursor-pointer hover:bg-[#000016] cursor-target "
        >
          <div className="h-16 sm:h-20 md:h-24 w-[2px] absolute -rotate-45 origin-top bg-white group-hover:bg-[#D3FD50]"></div>
          <div className="h-16 sm:h-20 md:h-24 w-[2px] absolute right-0 rotate-45 origin-top bg-white group-hover:bg-[#D3FD50]"></div>
        </div>
      </div>
      <div className='py-30 md:py-40 lg:py-8'>
        <div className="h-full flex flex-col ">
          <div className="flex-1 overflow-hidden">

            {/* Home - Fast marquee */}
            <HoverMenuItem
              onClick={() => {
                setSkipTransition(true);
                setMenuOpen(false);
                navigate("/");
              }}
              className="link origin-top border-t"
              bgColor="#D3FD50"
              textColor="#000000"
              speed={1.5}
              isHome={true}
            >
              <h1 className="font-[font5] md:text-[7vw] text-[14vw] uppercase text-center tracking-tight leading-none">
                Home 🕸️
              </h1>
            </HoverMenuItem>

            {/* Projects - With ❊ icons */}
            <HoverMenuItem
              onClick={() => {
                setSkipTransition(true);
                setMenuOpen(false);
                navigate("/projects");
              }}
              className="link origin-top border-t"
              bgColor="#D3FD50"
              textColor="#000000"
              speed={12}
              marqueeContent="❊ AI Career Coach ❊ E-Commerce Platform ❊ AI Career Coach ❊ E-Commerce Platform"
              images={[
                "https://res.cloudinary.com/dgxnwlg0w/image/upload/t_newcrop/Project2photo_b11il2.png",
                "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1781453662/Project1photo_h5qcnc.png"
              ]}
            >
              <h1 className="font-[font5] md:text-[7vw] text-[14vw] uppercase text-center tracking-tight leading-none">
               🕸️ Projects
              </h1>
            </HoverMenuItem>

            {/* About Me - With ◈ diamond and images */}
            <HoverMenuItem
              onClick={() => {
                setSkipTransition(true);
                setMenuOpen(false);
                navigate("/about");
              }}
              className="link origin-top border-t"
              bgColor="#D3FD50"
              textColor="#000000"
              speed={12}
              isAbout={true}
            >
              <h1 className="font-[font5] md:text-[7vw] text-[14vw] uppercase text-center tracking-tight leading-none">
                about 🕸️
              </h1>
            </HoverMenuItem>

            {/* Contact - With Direction Based Hover - FASTER */}
            <HoverMenuItem
              onClick={() => {
                setSkipTransition(true);
                setMenuOpen(false);
                navigate("/contact");
              }}
              className="link origin-top border-y"
              bgColor="#D3FD50"
              textColor="#000000"
              isContact={true}
              speed={7}
            >
              <h1 className="font-[font5] md:text-[7vw] text-[14vw] uppercase text-center tracking-tight leading-none">
              🕸️ Contact 
              </h1>
            </HoverMenuItem>

          </div>
        </div>
      </div>

      <footer className="relative px-4 sm:px-6 pb-8  pt-2">
        <div className="clock absolute left-0 bottom-2 hidden md:block">
          <Clock />
        </div>

        <div className="hidden md:flex items-center justify-center gap-10 pb-1 md:pb-20 lg:pb-1">
          <FlipLink
            href="/privacy-policy"
            onClick={(e) => {
              e.preventDefault();
              setSkipTransition(true);
              setMenuOpen(false);
              navigate("/privacy-policy");
            }}
            className="social cursor-target text-xs uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            Privacy Policy
          </FlipLink>

          <FlipLink
            href="/terms"
            onClick={(e) => {
              e.preventDefault();
              setSkipTransition(true);
              setMenuOpen(false);
              navigate("/terms");
            }}
            className="social cursor-target text-xs uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            Terms of Service
          </FlipLink>
        </div>

        <div className="social  hidden md:flex items-center gap-5 absolute right-10 bottom-2 ">
          <a href="https://github.com/varuntyagii" target="_blank" rel="noopener noreferrer" className="text-2xl  hover:text-[#181717] hover:bg-white rounded-full transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://instagram.com/varuntya9i" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#E4405F] transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="https://x.com/varuntya9i" target="_blank" rel="noopener noreferrer" className="text-2xl hover:bg-white hover:text-[#000000] transition-colors duration-300">
            <FaXTwitter />
          </a>
          <a href="https://linkedin.com/in/varuntyagi09" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#0A66C2] transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://www.twitch.tv/varuntyagii" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#9146FF] transition-colors duration-300">
            <FaTwitch />
          </a>
        </div>

        <div className="md:hidden flex flex-col items-center justify-center gap-7 -mt-17  pb-1 text-center">
          <FlipLink
            href="/privacy-policy"
            onClick={(e) => {
              e.preventDefault();
              setSkipTransition(true);
              setMenuOpen(false);
              navigate("/privacy-policy");
            }}
            className="social text-[18px] uppercase tracking-[0.2em] opacity-60"
          >
            Privacy Policy
          </FlipLink>

          <FlipLink
            href="/terms"
            onClick={(e) => {
              e.preventDefault();
              setSkipTransition(true);
              setMenuOpen(false);
              navigate("/terms");
            }}
            className="social text-[18px] uppercase tracking-[0.2em] opacity-60"
          >
            Terms of Service
          </FlipLink>

          <div className="social flex items-center justify-center gap-9 text-4xl pt-6">
            <a href="https://github.com/varuntyagii" target="_blank" rel="noopener noreferrer" className="hover:text-[#181717] hover:bg-white rounded-full transition-colors duration-300">
              <FaGithub className="text-3xl sm:text-4xl" />
            </a>
            <a href="https://instagram.com/varuntya9i" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-colors duration-300">
              <FaInstagram className="text-3xl sm:text-4xl" />
            </a>
            <a href="https://x.com/varuntya9i" target="_blank" rel="noopener noreferrer" className="hover:text-[#000000] hover:bg-white transition-colors duration-300">
              <FaXTwitter className="text-3xl sm:text-4xl" />
            </a>
            <a href="https://linkedin.com/in/varuntyagi09" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors duration-300">
              <FaLinkedin className="text-3xl sm:text-4xl" />
            </a>
            <a href="https://www.twitch.tv/varuntyagii" target="_blank" rel="noopener noreferrer" className="hover:text-[#9146FF] transition-colors duration-300">
              <FaTwitch className="text-3xl sm:text-4xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FullScreenNav