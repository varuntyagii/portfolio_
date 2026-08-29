import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

const education = [
  {
    year: "2021 - 2025",
    degree: "B.Tech in CSE",
    // field: "Computer Science & Engineering",
    institute: "Dr. A.P.J. Abdul Kalam Technical University, Luc",
  },
  {
    year: "2020 - 2021",
    degree: "Senior Secondary (Class XII)",
    institute: "Sent Giri Inter College, Ghaziabad, Uttar Pradesh",
    board: "Uttar Pradesh Board",
  },
  {
    year: "2018 - 2019",
    degree: "Secondary (Class X)",
    institute: "Sent Giri Inter College, Ghaziabad, Uttar Pradesh",
    board: "Uttar Pradesh Board",
  },
];

function EducationItem({ exp, i, start, end, scrollYProgress, layout }) {
  const progress = useTransform(
    scrollYProgress,
    [start, end],
    [0, 1],
    { clamp: true }
  );

  const opacity = useTransform(progress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(progress, [0, 1], [0.8, 1]);
  const y = useTransform(
    progress,
    [0, 1],
    [i % 2 === 0 ? 30 : -30, 0]
  );

  const x = useTransform(progress, [0, 1], [-24, 0]);

  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0">
        <motion.div
          className="z-20 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
          style={{ scale, opacity }}
        />

        <motion.div
          className={`absolute ${i % 2 === 0 ? "-top-8" : "-bottom-8"
            } w-[3px] bg-white/40`}
          style={{ height: 40, opacity }}
        />

        <motion.article
          className={`absolute ${i % 2 === 0 ? "bottom-16" : "top-16"
            } left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-6 w-[280px] shadow-lg`}
          style={{
            opacity,
            scale,
            y,
            zIndex: 50,
          }}
        >
          <h3 className="text-lg font-semibold break-words">{exp.degree}</h3>
          <p className="text-sm text-gray-400 mb-3 break-words">
            {exp.institute} | {exp.year}
          </p>
          {exp.field && (
            <p className="text-sm text-gray-400 break-words">{exp.field}</p>
          )}
        </motion.article>
      </div>
    );
  }

  return (
    <div className="relative flex items-start">
      <motion.div
        className="absolute -left-[14px] top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
        style={{ scale, opacity }}
      />



      {/* Small connecting line */}
      <motion.div
        className="absolute left-0 top-10 w-[3px] bg-white/40"
        style={{
          height: 80,
          opacity,
        }}
      />

      {/* Horizontal connector */}
      <motion.div
        className="absolute left-[14px] top-[22px] h-[3px] bg-white/40"
        style={{
          width: 24,
          opacity,
        }}
      />

      <motion.article
        className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[240px] max-w-sm ml-6 shadow-lg"
        style={{ opacity, x }}
      >
        <h3 className="text-xl font-semibold break-words">
          {exp.degree}
        </h3>

        <p className="text-md text-gray-400 mb-3 break-words">
          {exp.institute} | {exp.year}
        </p>

        {exp.field && (
          <p className="text-md text-gray-400 break-words">
            {exp.field}
          </p>
        )}
      </motion.article>
    </div>
  );
}

const Education = () => {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SCENE_HEIGHT = isMobile ? 100 * education.length : 120 * education.length;

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = useMemo(() => {
    if (isMobile) {
      return [0.45, 0.75, 1];
    }

    return education.map((_, i) => (i + 1) / education.length);
  }, [isMobile]);

  const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <section id="experience" className="relative text-white">
      <div
        ref={sceneRef}
        style={{ height: `${SCENE_HEIGHT}vh`, minHeight: "100vh" }}
        className="relative"
      >
        <div className="sticky relative w-full top-0 h-screen flex gap-5 md:gap-0 flex-col">
          {/* <h2 className="md:text-4xl text-3xl sm:text-5xl font-semibold mt-16 text-center">       */}
          <div className="w-full mt-20 max-w-7xl mx-auto px-2 mb-8 md:mb-1">
            <div className="flex items-center w-full">
              <div className="flex-1 h-[0.2px] bg-black"></div>

        <div className="cursor-target px-4 text-sm sm:text-lg md:text-2xl font-medium tracking-wide whitespace-nowrap text-black font-[font9]">
                ❈ Education ❈
              </div>

              <div className="flex-1 h-[0.2px] bg-black"></div>
            </div>
          </div>
          {/* </h2> */}

          <div className="flex-1 flex items-center justify-center px-6">
            {!isMobile ? (
              <div className="w-full relative max-w-7xl">
                <div className="relative h-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute left-0 top-0 h-[6px] bg-white rounded origin-left"
                    style={{ width: lineSize }}
                  />
                </div>
                <div className="relative flex justify-between mt-0">
                  {education.map((exp, i) => (
                    <EducationItem
                      key={i}
                      exp={exp}
                      i={i}
                      start={i === 0 ? 0 : thresholds[i - 1]}
                      end={thresholds[i]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex justify-center w-full"> 
<div className="relative flex flex-col gap-10 w-full max-w-md mx-auto">                <div className="absolute left-0 top-0 w-[3px] h-full bg-white/15 rounded" />
                {education.map((exp, i) => (


                  <EducationItem
                    key={i}
                    exp={exp}
                    i={i}
                    start={i === 0 ? 0 : thresholds[i - 1]}
                    end={thresholds[i]}
                    scrollYProgress={scrollYProgress}
                    layout="mobile"
                  />
                ))}
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;