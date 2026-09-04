import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { TitleContext, YearContext } from "../../context/MenuContext";
import { projectImages } from "../../data/projectImages";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../common/Footer";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { id } = useParams();
  
const project = projectImages
  .flatMap((item) => [
    item.project1,
    item.project2,
  ])
  .find((item) => item?.id === id);

  const { setHoveredTitle } = useContext(TitleContext);
  const { setHoveredYear } = useContext(YearContext);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const yearRef = useRef(null);
  const techRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef(null);
  const linksRef = useRef(null);
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [isLowEnd, setIsLowEnd] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  // Check if device is low-end
  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth < 768;
      const isLowMemory = navigator.deviceMemory ? navigator.deviceMemory < 4 : false;
      const isSlowCPU = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;
      return isMobile || isLowMemory || isSlowCPU;
    };
    setIsLowEnd(checkDevice());
  }, []);

  useEffect(() => {
    setHoveredTitle("");
    setHoveredYear("");

    const container = containerRef.current;
    if (!container || !project) return;

    const ctx = gsap.context(() => {
      // Clean up any existing ScrollTriggers
      ScrollTrigger.getAll().forEach(st => st.kill());

      // Main entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 90%",
          end: "top 20%",
          toggleActions: "play none none reverse",
          scrub: isLowEnd ? false : 0.3,
          onUpdate: (self) => {
            // Check if image is visible based on scroll progress
            if (self.progress > 0.3) {
              setIsImageVisible(true);
            } else {
              setIsImageVisible(false);
            }
          }
        }
      });

      // Title animation
      if (titleRef.current) {
        tl.fromTo(titleRef.current,
          { 
            opacity: 0, 
            y: isLowEnd ? 30 : 60, 
            rotationX: isLowEnd ? 0 : -5,
            filter: "blur(10px)"
          },
          { 
            opacity: 1, 
            y: 0, 
            rotationX: 0,
            filter: "blur(0px)",
            duration: isLowEnd ? 0.5 : 0.9, 
            ease: "power3.out" 
          }
        );
      }

      // Year badge animation
      if (yearRef.current) {
        tl.fromTo(yearRef.current,
          { opacity: 0, scale: 0.8, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.4"
        );
      }

      // Description animation
      if (descRef.current) {
        tl.fromTo(descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.3"
        );
      }

      // Tech stack animation
      if (techRef.current) {
        const techItems = techRef.current.querySelectorAll('.tech-item');
        if (techItems.length > 0) {
          tl.fromTo(techItems,
            { opacity: 0, y: 20, scale: 0.9 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              duration: isLowEnd ? 0.3 : 0.5, 
              stagger: isLowEnd ? 0.03 : 0.06, 
              ease: "power1.out" 
            },
            "-=0.3"
          );
        }
      }

      // Features animation
      if (featuresRef.current) {
        const featureItems = featuresRef.current.querySelectorAll('.feature-item');
        if (featureItems.length > 0) {
          tl.fromTo(featureItems,
            { opacity: 0, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              duration: isLowEnd ? 0.3 : 0.4, 
              stagger: isLowEnd ? 0.03 : 0.05, 
              ease: "power1.out" 
            },
            "-=0.2"
          );
        }
      }

      // Links animation
      if (linksRef.current) {
        const linkItems = linksRef.current.querySelectorAll('.link-item');
        if (linkItems.length > 0) {
          tl.fromTo(linkItems,
            { opacity: 0, x: -30 },
            { 
              opacity: 1, 
              x: 0, 
              duration: isLowEnd ? 0.3 : 0.5, 
              stagger: isLowEnd ? 0.05 : 0.08, 
              ease: "power1.out" 
            },
            "-=0.2"
          );
        }
      }

      // Image appear animation
      if (imageRef.current) {
        tl.fromTo(imageRef.current,
          { 
            opacity: 0,
            scale: 0.95
          },
          { 
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          },
          "-=0.4"
        );
      }

      // Parallax effects - only for non-low-end devices
      if (!isLowEnd && window.innerWidth > 1024) {
        if (titleRef.current) {
          gsap.to(titleRef.current, {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            }
          });
        }
      }

    }, containerRef);

    return () => {
      // ctx.revert();
      // ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [project, setHoveredTitle, setHoveredYear, isLowEnd]);

  // Glare effect handler
  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    if (!imageContainer) return;

    const handleMouseMove = (e) => {
      if (isImageVisible) return; // Stop glare when image is visible

      const rect = imageContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      const glare = imageContainer.querySelector('.glare-effect');
      if (glare) {
        glare.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`;
      }
    };

    const handleMouseLeave = () => {
      if (isImageVisible) return;
      
      const glare = imageContainer.querySelector('.glare-effect');
      if (glare) {
        glare.style.background = 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)';
      }
    };

    imageContainer.addEventListener('mousemove', handleMouseMove);
    imageContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      imageContainer.removeEventListener('mousemove', handleMouseMove);
      imageContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isImageVisible]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#DCDCDC]">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-700 mb-4">404</h1>
          <p className="text-xl text-gray-500">Project not found</p>
          <a href="/" className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Go Back Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        ref={containerRef}
        className="min-h-screen w-full bg-gradient-to-br from-[#DCDCDC] via-[#E8E8E8] to-[#D0D0D0] flex items-center justify-center p-4 pt-20 sm:p-8 md:p-12 lg:p-16 overflow-hidden relative"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16 max-w-7xl w-full relative z-10">
          {/* Left Side: Content */}
          <div className="w-full  lg:w-1/2 space-y-4 md:space-y-5 text-black">
            {/* Title - Black */}
            <h1
              ref={titleRef}
              className="text-4xl font-[font8] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] text-black"
            >
              {project.title}
            </h1>
            
            {/* Year Badge - Black text */}
            <div
              ref={yearRef}
              className="flex flex-wrap items-center gap-2 md:gap-3"
            >
              <span className="px-4 md:px-5 py-1.5 md:py-2 bg-white/70 backdrop-blur-md rounded-full border border-black/10 text-sm md:text-base font-medium shadow-lg shadow-black/10 text-black">
                <span className="mr-2">📅</span> {project.year}
              </span>
            </div>

            {/* Description - Black */}
            <p
              ref={descRef}
              className="text-base font-[font6] sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl text-black/90"
            >
              {project.description}
            </p>

            {/* Tech Stack - Black text */}
            <div ref={techRef} className="pt-1">
              <p className="text-xs uppercase tracking-wider text-black/50 mb-2 font-medium">
                ⚡ Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack && project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="tech-item cursor-target px-4 py-1.5 bg-white/70 backdrop-blur-md rounded-full text-xs md:text-sm border border-black/10 shadow-lg shadow-black/5 text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features - Black text */}
            {project.features && project.features.length > 0 && (
              <div ref={featuresRef} className="pt-1">
                <p className="text-xs uppercase tracking-wider text-black/50 mb-2 font-medium">
                  ✦ Key Features
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.features.map((feature, index) => (
                    <span 
                      key={index} 
                      className="feature-item cursor-target px-3 md:px-4 py-1 md:py-1.5 bg-white/60 backdrop-blur-md rounded-full text-xs md:text-sm border border-black/5 text-black"
                    >
                      ✦ {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links - Black text */}
            <div ref={linksRef} className="pt-4 md:pt-6 flex flex-wrap items-center gap-3 md:gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-item px-5 cursor-target md:px-7 py-2.5 md:py-3.5 bg-white/80 backdrop-blur-md rounded-full hover:bg-white transition-all duration-300 text-xs md:text-sm font-medium border border-black/20 hover:border-black/40 flex items-center gap-2 group shadow-lg shadow-black/10 text-black"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-item cursor-target px-5 md:px-7 py-2.5 md:py-3.5 bg-white/80 backdrop-blur-md rounded-full hover:bg-white transition-all duration-300 text-xs md:text-sm font-medium border border-black/20 hover:border-black/40 flex items-center gap-2 group shadow-lg shadow-black/10 text-black"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Live Demo</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Side: Image with Glare Effect */}
          <div
            ref={imageContainerRef}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:sticky lg:top-32"
          >
            <div className="relative w-full max-w-[500px] md:max-w-[550px] lg:max-w-[600px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-black/5 via-white/5 to-transparent rounded-3xl blur-2xl opacity-50"></div>
              
              {/* Glare Effect Overlay */}
              <div 
                className={`glare-effect absolute inset-0 rounded-2xl transition-opacity duration-700 pointer-events-none z-10 ${
                  isImageVisible ? 'opacity-0' : 'opacity-100'
                }`}
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)',
                  mixBlendMode: 'overlay'
                }}
              ></div>
              
              <img
                ref={imageRef}
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl border-2 border-white/50 relative"
                style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)' }}
              />
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black/5 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-black/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ProjectDetail;