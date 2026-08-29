import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavHoverContext, TitleContext, YearContext } from '../../../context/MenuContext';

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
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <>
            {/* CARD 1 */}
            <Link
                onMouseEnter={() => { setNavHovered(true); setHoveredTitle(props.title1); setHoveredYear(props.year1); }}
                onMouseLeave={() => { setNavHovered(false); setHoveredTitle(""); setHoveredYear(""); }}
                to={`/projects/${props.id1}`}
                className="w-full lg:w-1/2 relative h-[40vh] md:h-full overflow-hidden group transition-all duration-500 block"
            >
                <img
                    src={props.image1}
                    className="w-full h-full object-cover border-2 border-transparent transition-all duration-500 ease-in-out group-hover:border-black group-hover:rounded-4xl"
                    alt={props.title1}
                />

                <div className={`absolute inset-0 ${isMobile ? 'bg-black/30' : 'opacity-0 group-hover:opacity-100'} transition-all duration-500 flex flex-col items-center justify-center px-4`}>
                    <h3 className={`text-white  font-semibold text-center ${isMobile ? 'text-4xl' : 'text-xl'} mb-2`}>
                        {props.title1}
                    </h3>
                    
                    {isMobile && (
                        <p className="text-white/90 text-3xl mb-2">
                            {props.year1}
                        </p>
                    )}

                    <h2 className={`uppercase font-[font5] cursor-target  text-white border-2 border-white rounded-full tracking-wider ${isMobile ? 'text-[25px] px-3 py-1' : 'text-3xl md:text-5xl px-6 py-2'}`}>
                        View Project
                    </h2>
                </div>
            </Link>

            {/* CARD 2 */}
            <Link
                onMouseEnter={() => { setNavHovered(true); setHoveredTitle(props.title2); setHoveredYear(props.year2); }}
                onMouseLeave={() => { setNavHovered(false); setHoveredTitle(""); setHoveredYear(""); }}
                to={`/projects/${props.id2}`}
                className="w-full lg:w-1/2 relative h-[35vh] md:h-full overflow-hidden group transition-all duration-500 block"
            >
                <img
                    src={props.image2}
                    className="w-full h-full object-cover border-2 border-transparent transition-all duration-500 ease-in-out group-hover:border-black group-hover:rounded-4xl"
                    alt={props.title2}
                />

                <div className={`absolute inset-0 ${isMobile ? 'bg-black/30' : 'opacity-0 group-hover:opacity-100'} transition-all duration-500 flex flex-col items-center justify-center px-4`}>
                    <h3 className={`text-white font-semibold text-center ${isMobile ? 'text-4xl' : 'text-xl'} mb-2`}>
                        {props.title2}
                    </h3>
                    
                    {isMobile && (
                        <p className="text-white/80 text-3xl mb-2">
                            {props.year2}
                        </p>
                    )}

                    <h2 className={`uppercase font-[font5] text-white border-2 border-white rounded-full tracking-wider ${isMobile ? 'text-[25px] px-3 py-1' : 'text-3xl md:text-5xl px-6 py-2'}`}>
                        View Project
                    </h2>
                </div>
            </Link>
        </>
    )
}

export default ProjectCards