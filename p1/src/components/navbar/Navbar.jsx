import React, { useContext, useEffect, useRef, useState } from 'react'
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { TfiLineDouble } from 'react-icons/tfi';
import BurgerIcon from '../common/BurgerIcon';
import FullScreenNav from './FullScreenNav';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MenuContext, NavColorContext, NavDesignContext, NavResponsiveContext, TitleContext, YearContext } from '../../context/MenuContext';
import { NavHoverContext } from "../../context/MenuContext";
// import logoBlack from "../../assets/logo/logoblack.png";
import logoblack from "../../assets/logo/logo-black.png";
import logowhite from "../../assets/logo/logo-white.png";
// import logowhite from "../../assets/logo/logo-white.sv";
// import logoWhite from "../../assets/logo/logowhite.png";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const [resumeHover, setResumeHover] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [projectHover, setProjectHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [fullMenuHover, setFullMenuHover] = useState(false);

  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  const { navColor } = useContext(NavColorContext);
  const { scrolled, setScrolled } = useContext(NavDesignContext);
  const { isDesktop } = useContext(NavResponsiveContext);
  const { navHovered, setNavHovered } = useContext(NavHoverContext);
  const { hoveredTitle } = useContext(TitleContext);
  const { hoveredYear } = useContext(YearContext);


  const { pathname } = useLocation();
  const navigate = useNavigate();

  const showFullNav = isDesktop && !scrolled && !hoveredTitle && !hoveredYear && (pathname === "/about" || pathname === "/projects" || pathname.startsWith("/projects/"));

  // Scroll listener with hysteresis + rAF throttle to stop flicker at the threshold
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(prev => {
            if (window.scrollY > 280) return true;   // enter "scrolled" state later
            if (window.scrollY < 240) return false;  // exit "scrolled" state earlier
            return prev; // dead zone: keep previous value, no flicker
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  return (
    <div className='flex fixed top-0 w-full items-start justify-between gap-3 z-[40] px-0'>
      <div className="relative inline-block z-[100]">

        <img
          src={navColor === "white" ? logowhite : logoblack}
          alt="Varun Logo"
              className="
              relative z-[100] block
              w-[120px]
              sm:w-[180px]
              md:w-[240px]
              p-1
              md:mt-2
              mt-4
              cursor-pointer
              cursor-target
              ml-3
            "
          onDragStart={(e) => e.preventDefault()}
          // onMouseEnter={() => setNavHovered(true)}
          // onMouseLeave={() => setNavHovered(false)}
          onClick={() => navigate("/")}
        />
      </div>
      <div
        className={`absolute text-5xl top-0 left-0 h-28 pointer-events-none right-0 text-center bg-[#D3D3D3]  transition-opacity duration-300 ${navHovered && hoveredTitle ? "opacity-100" : "opacity-0"
          }`}
      >
        ✲


      </div>
      <div
        className={`absolute top-13 left-0 right-0 bg-[#D3D3D3] z-40 pointer-events-none transition-opacity duration-300 ${navHovered && hoveredTitle ? "opacity-100" : "opacity-0"
          }`}
      >
        {/* Top Line */}
        <div
          className={`h-[2px] bg-black origin-left transition-transform duration-500 ease-out ${navHovered && hoveredTitle ? "scale-x-100" : "scale-x-0"
            }`}
        />

        {/* Content */}
        <div
          className={`flex justify-between items-center px-3 py-2 ${navColor === "white" ? "text-[#C87F7A]" : "text-black"
            }`}
        >
          <span className="font-[font6] text-3xl md:text-5xl">
            {hoveredTitle}
          </span>

          <span className="font-[font6] text-3xl md:text-5xl">
            {hoveredYear}
          </span>
        </div>

        {/* Bottom Line */}
        <div
          className={`h-[3px] bg-black origin-right transition-transform duration-500 ease-out ${navHovered && hoveredTitle ? "scale-x-100" : "scale-x-0"
            }`}
        />
      </div>

      {/* Both nav variants stay mounted at all times — crossfade between them instead of unmount/remount */}
      <div className="relative w-full h-14">

        {/* ===== FULL NAV (Projects / About / Menu) ===== */}
        <div
          className={`absolute top-0 right-0 z-50 text-2xl  font-[font2] transition-opacity duration-300 ${showFullNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          {/* PROJECTS */}
          <div
            className="flex justify-end cursor-pointer group"
            onMouseEnter={() => { setProjectHover(true); setNavHovered(true); }}
            onMouseLeave={() => { setProjectHover(false); setNavHovered(false); }}
          >
            <div
              onClick={() => navigate("/projects")}
              className="relative overflow-hidden w-[820px] h-14 bg-[#000016] text-white flex items-center px-4"
            >
              <div
                className={`absolute top-0 left-0 w-full bg-[#D3FD50] transition-all duration-300 ${projectHover ? "h-full" : "h-0"
                  }`}
              />
              <span className="absolute z-10 transition-colors duration-300 group-hover:text-black bottom-0.5 left-1">
                PROJECTS
              </span>
            </div>
          </div>

          {/* ABOUT ME */}
          <div className="flex justify-end">
            <div
              onClick={() => navigate("/about")}
              className="relative overflow-hidden -top-14 w-[520px] h-25 z-40 bg-[#000016] text-white px-4 cursor-pointer group"
              onMouseEnter={() => { setAboutHover(true); setNavHovered(true); }}
              onMouseLeave={() => { setAboutHover(false); setNavHovered(false); }}
            >
              <div
                className={`absolute top-0 left-0 w-full bg-[#D3FD50] transition-all duration-300 ${aboutHover ? "h-full" : "h-0"
                  }`}
              />
              <span className="absolute z-10 justify-end items-end transition-colors duration-300 group-hover:text-black bottom-0.5 left-1">
                ABOUT ME
              </span>
            </div>
          </div>

          {/* MENU (full nav variant) */}
          <div className="flex justify-end">
            <div
              onMouseEnter={() => { setFullMenuHover(true); setNavHovered(true); }}
              onMouseLeave={() => { setFullMenuHover(false); setNavHovered(false); }}
              onClick={() => setMenuOpen(true)}
              className="relative -top-50 z-50 overflow-hidden w-[220px] h-48 bg-[#000016] text-white px-4 cursor-pointer"
            >
              <div
                className={`absolute top-0 left-0 w-full bg-[#D3FD50] transition-all duration-300 ${fullMenuHover ? "h-full" : "h-0"
                  }`}
              />
              <div className="relative z-10 flex h-full justify-end items-center pb-2">
                <span className={`absolute bottom-0.5 left-1 ${fullMenuHover ? "text-black" : "text-white"}`}>
                  MENU
                </span>
                <BurgerIcon
                  className="transition-all duration-200"
                  stroke={fullMenuHover ? "#111" : "white"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===== COMPACT NAV (Resume / Menu) ===== */}
        <div
          className={`absolute top-0 right-0 flex transition-opacity duration-300 ${showFullNav ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
            }`}
        >



          {/* RESUME */}
          <a
            href="https://drive.google.com/file/d/105m92JOByCWUW6OUnh_9HIKisZYNaJkd/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="relative md:h-13 h-13 w-[20vw] md:w-[16vw] overflow-hidden cursor-pointer group bg-[#D3D3D3]"
              onMouseEnter={() => {
                setResumeHover(true);
                setNavHovered(true);
              }}
              onMouseLeave={() => {
                setResumeHover(false);
                setNavHovered(false);
              }}
            >
              <div
                className={`absolute top-0 left-0 w-full transition-all duration-300 bg-[#C87F7A] ${resumeHover ? "h-full" : "h-0"
                  }`}
              />

              <div className="relative z-10 flex items-center justify-center h-full">
                <span
                  className={`font-[font7] text-[4vw] md:text-[1.5vw] transition-colors duration-300 ${resumeHover ? "text-[#D3D3D3]" : "text-[#C87F7A]"
                    }`}
                >
                  Resume
                </span>
              </div>
            </div>
          </a>


          {/* MENU (compact variant) */}
          <div
            onMouseEnter={() => { setHovered(true); setMenuHover(true); setNavHovered(true); }}
            onMouseLeave={() => { setHovered(false); setMenuHover(false); setNavHovered(false); }}
            onClick={() => { setNavHovered(true); setMenuOpen(true); }}
            className="relative h-13 w-[35vw] md:w-[16vw] bg-[#000016] overflow-hidden cursor-pointer"
          >
            <div
              className={`absolute top-0 left-0 w-full bg-[#D3FD50] transition-all duration-300 ${menuHover ? "h-full" : "h-0"
                }`}
            />
            <div className="absolute inset-0 flex items-center justify-end pr-4 z-10">
              <BurgerIcon
                className="transition-all duration-200"
                stroke={hovered ? "#111" : "white"}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar