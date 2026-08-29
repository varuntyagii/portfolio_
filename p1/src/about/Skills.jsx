import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Skill data organised by category ─────────────────────────────────── */
const frontendSkills = [
  { name: "React.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "GSAP",       icon: "https://cdn.simpleicons.org/greensock/88CE02" },
];

const backendSkills = [
  { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Java",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "REST API",   icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Kafka",      icon: "https://cdn.simpleicons.org/apachekafka/000000" },
];

const dbToolsSkills = [
  { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Firebase",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "AWS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Nginx",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
  { name: "Postman",    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
];

/* ─── Rows config ────────────────────────────────────────────────────────── */
const rows = [
  { id: "row1", label: "Frontend",          skills: frontendSkills, direction: "rtl", speed: 30 },
  { id: "row2", label: "Backend · Languages",skills: backendSkills,  direction: "ltr", speed: 35 },
  { id: "row3", label: "Databases · Tools · Cloud", skills: dbToolsSkills, direction: "rtl", speed: 28 },
];

/* ─── Single marquee row ────────────────────────────────────────────────── */
const MarqueeRow = ({ row }) => {
  // Quadruple the items to ensure seamless infinite loop at all widths
  const items = [...row.skills, ...row.skills, ...row.skills, ...row.skills];
  const isRTL = row.direction === "rtl";

  return (
    <div className="marquee-row-wrapper group relative overflow-hidden py-1">
      {/* Gradient edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10
                      bg-gradient-to-r from-[#C8C2CF] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10
                      bg-gradient-to-l from-[#C8C2CF] to-transparent" />

      <div
        className={`marquee-track flex items-center gap-0 will-change-transform ${
          isRTL ? "animate-marquee-rtl" : "animate-marquee-ltr"
        } group-hover:[animation-play-state:paused]`}
        style={{ "--duration": `${row.speed}s` }}
      >
        {items.map((skill, idx) => (
          <div
            key={idx}
            className="skill-pill flex items-center gap-3 mx-3 px-5 py-3
                       bg-white/60 hover:bg-white
                       border border-black/5 hover:border-black/15
                       rounded-full shadow-sm hover:shadow-md
                       transition-all duration-300 cursor-default
                       group/pill shrink-0"
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain
                           grayscale group-hover/pill:grayscale-0
                           transition-all duration-300
                           group-hover/pill:scale-110"
                loading="lazy"
              />
            </div>
            <span className="text-sm font-semibold text-black/80 font-[font9]
                             whitespace-nowrap tracking-wide
                             group-hover/pill:text-black transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Skills Section ────────────────────────────────────────────────────── */
const Skills = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Entrance: header + category labels
    gsap.fromTo(".skills-section-header ",
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
      }
    );

    // Rows stagger in on scroll
    gsap.fromTo(".marquee-row-outer",
      { opacity: 0, y: 35 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full text-black py-10 md:py-14 overflow-hidden">

      {/* ── Header ────────────────────────────────────────────────────── */}
      <div className="skills-section-header flex items-center w-full max-w-7xl mx-auto px-4 mb-10 md:mb-14">
        <div className="flex-1 h-[0.2px] bg-black" />
        <div className="cursor-target px-4 text-sm sm:text-lg md:text-2xl font-medium tracking-wide whitespace-nowrap text-black font-[font9]">
          ❈ Skills Directory ❈
        </div>
        <div className="flex-1 h-[0.2px] bg-black" />
      </div>

      {/* ── Marquee rows ──────────────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        {rows.map((row) => (
          <div key={row.id} className="marquee-row-outer">
            {/* Row label */}
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-black/40
                          px-4 max-w-7xl mx-auto mb-2">
              {row.label}
            </p>
            <MarqueeRow row={row} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
