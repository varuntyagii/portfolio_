import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavHoverContext, TitleContext, YearContext } from "../../../context/MenuContext";

const ProjectCards = (props) => {
  const { setNavHovered } = useContext(NavHoverContext);
  const { setHoveredTitle } = useContext(TitleContext);
  const { setHoveredYear } = useContext(YearContext);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cards = [
    { image: props.image1, title: props.title1, year: props.year1, id: props.id1 },
    { image: props.image2, title: props.title2, year: props.year2, id: props.id2 },
  ];

  return (
    <>
      {cards.map((card, i) => (
        <Link
          key={card.id}
          onMouseEnter={() => {
            setNavHovered(true);
            setHoveredTitle(card.title);
            setHoveredYear(card.year);
          }}
          onMouseLeave={() => {
            setNavHovered(false);
            setHoveredTitle("");
            setHoveredYear("");
          }}
          to={`/projects/${card.id}`}
          className={`w-full lg:w-1/2 relative overflow-hidden group transition-all duration-500 block cursor-target ${
            i === 0 ? "h-[38vh] sm:h-[40vh] md:h-full" : "h-[33vh] sm:h-[35vh] md:h-full"
          }`}
        >
          <img
            src={card.image}
            className="w-full h-full object-cover border-2 border-transparent transition-all duration-500 ease-in-out group-hover:border-black group-hover:rounded-4xl"
            alt={card.title}
          />

          <div
            className={`absolute inset-0 rounded-none transition-all duration-500 ease-in-out group-hover:rounded-4xl ${
              isMobile ? "bg-[#1B1035]/55" : "opacity-0 group-hover:opacity-100 bg-[#1B1035]/30"
            } flex flex-col items-center justify-center px-4 text-center overflow-hidden`}
          >
            <h3
              className="
                text-white
                font-semibold
                leading-tight
                text-xl
                sm:text-2xl
                md:text-xl
                lg:text-xl
                mb-1.5
              "
            >
              {card.title}
            </h3>

            {isMobile && (
              <p className="text-white/80 text-sm sm:text-base mb-3 tracking-wide">
                {card.year}
              </p>
            )}

            <h2
              className="
                uppercase
                font-[font5]
                text-white
                border
                sm:border-2
                border-white
                rounded-full
                tracking-wider
                text-[11px]
                sm:text-sm
                md:text-2xl
                lg:text-3xl
                px-3.5
                py-1.5
                sm:px-5
                sm:py-2
                md:px-6
                md:py-2
              "
            >
              View Project
            </h2>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProjectCards;