import React, { useContext, useEffect, useState } from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";
import Clock from "../components/home/Clock";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { NavHoverContext } from "../context/MenuContext";

const techBadges = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Redis",
  "JavaScript",
  "SQL",
  "Docker",
];

const Home = () => {
  const { setNavHovered } = useContext(NavHoverContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#080812] text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden pointer-events-none">
        <Video />

        {/* Dark cinematic overlay */}
        <div
          className="
            absolute inset-0 z-10
            bg-gradient-to-b
            from-[#05050c]/60
            via-[#080812]/20
            to-[#080812]/80
          "
        />

        {/* Soft center glow - Enhanced version */}
        <div
          className="absolute inset-0 z-10 glow-pulse"
          style={{
            background: isMobile
              ? "radial-gradient(circle at 50% 35%, rgba(245,230,200,0.06) 0%, rgba(100,80,180,0.025) 30%, transparent 68%)"
              : `
                  radial-gradient(
                    circle at 50% 35%, 
                    rgba(245, 230, 200, 0.12) 0%, 
                    rgba(180, 150, 220, 0.06) 25%, 
                    rgba(100, 80, 180, 0.03) 50%, 
                    transparent 75%
                  ),
                  radial-gradient(
                    circle at 30% 60%,
                    rgba(200, 180, 255, 0.04) 0%,
                    transparent 50%
                  )
                `,
          }}
        />

        {/* Additional warm light reflection */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              radial-gradient(
                ellipse at 70% 20%,
                rgba(245, 200, 150, 0.04) 0%,
                transparent 40%
              )
            `,
          }}
        />

        {/* Cinematic vignette */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 32%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
            h-48
            bg-gradient-to-t
            from-[#080812]
            to-transparent
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-[100dvh] w-full flex-col justify-between">

        {/* ================= HERO ================= */}
        <section className="flex w-full flex-col items-center">

          <HomeHeroText />

          {/* ================= TECH STACK ================= */}
          <div className="hero-anim mt-6 flex w-full justify-center px-4 sm:mt-8">
            <div
              className="
                flex
                max-w-3xl
                flex-wrap
                items-center
                justify-center
                gap-2
                sm:gap-2.5
              "
            >
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="
                    cursor-target
                    rounded-full
                    border
                    border-white/[0.13]
                    bg-white/[0.055]
                    px-3
                    py-1.5
                    text-[10px]
                    font-[font9]
                    tracking-wider
                    text-zinc-300
                    shadow-[0_4px_25px_rgba(0,0,0,0.15)]
                    backdrop-blur-[25px]
                    select-none

                    transition-all
                    duration-300

                    hover:border-[#F5E6C8]/70
                    hover:bg-[#F5E6C8]/[0.08]
                    hover:text-[#F5E6C8]
                    hover:shadow-[0_0_25px_rgba(245,230,200,0.08)]

                    sm:px-4
                    sm:py-2
                    sm:text-xs
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ================= DESCRIPTION - LARGER TEXT ================= */}
          <div className="hero-anim mt-5 flex w-full justify-center px-4 sm:mt-6">
  <div className="relative w-full max-w-2xl text-center">

    {/* Subtle readability layer */}
    <div
      className="
        pointer-events-none
        absolute
        inset-x-4
        top-1/2
        -z-10
        h-20
        -translate-y-1/2
        rounded-full
        bg-black/20
        blur-2xl
      "
    />

    <p
      className="
        relative
        font-[font6]
        text-2xl
        leading-relaxed
        tracking-wide
        text-zinc-200
        drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]
        sm:text-2xl
        md:text-2xl
        lg:text-xl
      "
    >
      Full Stack Developer building{" "}
      <span className="font-semibold text-white">
        responsive and scalable web applications
      </span>{" "}
      with modern web technologies.
    </p>

  </div>
</div>
        </section>

        {/* ================= BOTTOM AREA ================= */}
        <section
          className="
            flex
            w-full
            flex-col
            items-center
            px-0
            pb-4
            pt-8
            sm:pb-6
            sm:pt-10
          "
        >

          {/* ================= SCROLL INDICATOR ================= */}
          <div
            className="
              mb-6
              hidden
              flex-col
              items-center
              select-none
              pointer-events-none
              sm:mb-8
              md:flex
            "
          >
            <span
              className="
                font-[font3]
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#F5E6C8]/80
                sm:text-xs
              "
            >
              Scroll to explore
            </span>

            <div
              className="
                scroll-indicator
                mt-2
                h-14
                w-px
                bg-gradient-to-b
                from-[#F5E6C8]
                to-transparent
                sm:h-16
              "
            />
          </div>

          {/* ================= BOTTOM TEXT ================= */}
          <div className="mb-6 w-full px-4 sm:mb-10 sm:px-0">
            <HomeBottomText />
          </div>

          {/* ================= FOOTER BAR ================= */}
          <div
            className="
              flex
              w-full
              max-w-7xl
              flex-col
              items-center
              justify-between
              gap-5
              border-t
              border-white/[0.12]
              px-4
              pt-4
              sm:flex-row
              sm:px-8
              sm:pt-5
            "
          >

            {/* CLOCK */}
            <div className="sm:pl-16">
              <Clock />
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 sm:gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/varuntyagii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                onClick={() => setNavHovered(false)}
                onMouseEnter={() => setNavHovered(true)}
                onMouseLeave={() => setNavHovered(false)}
                className="
                  cursor-target
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.15]
                  bg-white/[0.06]
                  text-zinc-300
                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:scale-110
                  hover:border-[#F5E6C8]/70
                  hover:bg-[#F5E6C8]
                  hover:text-black
                  hover:shadow-[0_0_20px_rgba(245,230,200,0.15)]
                "
              >
                <FaGithub className="text-sm" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/varuntyagi09/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                onClick={() => setNavHovered(false)}
                onMouseEnter={() => setNavHovered(true)}
                onMouseLeave={() => setNavHovered(false)}
                className="
                  cursor-target
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.15]
                  bg-white/[0.06]
                  text-zinc-300
                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:scale-110
                  hover:border-[#F5E6C8]/70
                  hover:bg-[#F5E6C8]
                  hover:text-black
                  hover:shadow-[0_0_20px_rgba(245,230,200,0.15)]
                "
              >
                <FaLinkedinIn className="text-sm" />
              </a>

              {/* Email */}
              <a
                href="mailto:varuntyagi0099@gmail.com"
                aria-label="Email"
                title="Email"
                onClick={() => setNavHovered(false)}
                onMouseEnter={() => setNavHovered(true)}
                onMouseLeave={() => setNavHovered(false)}
                className="
                  cursor-target
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.15]
                  bg-white/[0.06]
                  text-zinc-300
                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:scale-110
                  hover:border-[#F5E6C8]/70
                  hover:bg-[#F5E6C8]
                  hover:text-black
                  hover:shadow-[0_0_20px_rgba(245,230,200,0.15)]
                "
              >
                <HiOutlineMail className="text-base" />
              </a>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;