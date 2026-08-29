import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const MenuContext = createContext();
export const NavColorContext = createContext();
export const NavDesignContext = createContext();
export const NavResponsiveContext = createContext();
export const NavHoverContext = createContext();
export const TitleContext = createContext();
export const YearContext = createContext();
export const Transition = createContext();

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navColor, setNavColor] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1016);
  const [navHovered, setNavHovered] = useState(false);
  const [hoveredTitle, setHoveredTitle ] = useState("");
  const [hoveredYear, setHoveredYear ] = useState("");
  const [skipTransition, setSkipTransition] = useState(false);

  
 
useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    // wait for animation to finish
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2000); // match your menu animation duration

    return () => clearTimeout(timer);
  }
}, [menuOpen]);

const loc = useLocation().pathname;

useEffect(() => {
  if ( loc === "/projects" || loc === "/about" || loc === "/terms"  || loc === "/privacy-policy" ||  loc.startsWith("/projects/")) {
    setNavColor("black");
  } 
  else if(loc === "/" && menuOpen){
    setNavColor("white");
  }
  else{
     setNavColor("white");
  }
}, [loc, menuOpen]);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(prev => {
      if (window.scrollY > 280) return true;   // enter "scrolled" later
      if (window.scrollY < 240) return false;  // exit earlier
      return prev; // stay the same in the dead zone — no flicker
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
 
useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1016);
  };

    handleResize(); // page load par bhi run karo

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      <NavColorContext.Provider value={{navColor, setNavColor}}>
      <NavDesignContext.Provider value={{scrolled, setScrolled}}>
         <NavResponsiveContext.Provider value={{isDesktop, setIsDesktop}}>
           <NavHoverContext.Provider
              value={{ navHovered, setNavHovered }}
            >
              <TitleContext.Provider value={{hoveredTitle, setHoveredTitle }}>
               <YearContext.Provider value={{hoveredYear, setHoveredYear}}>
                 <Transition.Provider value={{skipTransition, setSkipTransition}}>
                  {children}
                 </Transition.Provider>
               </YearContext.Provider>
              </TitleContext.Provider>
            </NavHoverContext.Provider>
         </NavResponsiveContext.Provider>
      </NavDesignContext.Provider>
      </NavColorContext.Provider>
    </MenuContext.Provider>
  );
};