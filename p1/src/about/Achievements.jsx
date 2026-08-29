import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    id: 1,
    metric: "420+",
    title: "DSA & Coding Platforms",
    subtitle: "LeetCode & GeeksforGeeks",
    desc: "Solved 420+ algorithmic challenges. Achieved Institute Rank 27 on LeetCode and Rank 35 inside RKGIT on GeeksforGeeks, demonstrating strong analytical and programming capability.",
    tags: ["Data Structures", "Algorithms", "Java", "C++"],
    icon: (
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 2,
   metric: "Top 30%",
  title: "OpenAI Codex Hackathon",
  subtitle: "AI-Assisted Development & Innovation",
  desc: "Participated in the OpenAI Codex Hackathon and ranked among the top 30% of 2,989 participants. Built and explored software solutions using AI-assisted development with a focus on problem-solving, creativity, and practical implementation.",
  tags: ["OpenAI", "Codex", "Hackathon", "AI"],
    icon: (
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm-2 4h4m-8 2h12a2 2 0 002-2V9a2 2 0 00-2-2H51a2 2 0 00-2 2v3a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 3,
    metric: "Production",
    title: "Freelancing & Deliveries",
    subtitle: "Client Deployments",
    desc: "Built custom retail/business systems, including a fashion store using React/Node/MongoDB. Configured edge delivery via Cloudflare CDN and security hardening with Helmet.js.",
    tags: ["React.js", "Node.js", "MongoDB", "Cloudflare"],
    icon: (
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

const Achievements = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal achievements blocks on scroll
    gsap.fromTo(".achievement-card-block", 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full text-black px-4 py-10 md:py-14 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center w-full mb-12 md:mb-20">
        <div className="flex-1 h-[0.2px] bg-black"></div>
        <div className="px-4 cursor-target text-sm sm:text-lg md:text-2xl font-medium tracking-wide whitespace-nowrap text-black font-[font9]">
          ❈ Core Achievements ❈
        </div>
        <div className="flex-1 h-[0.2px] bg-black"></div>
      </div>

      {/* Grid displaying the achievements matching the Skills aesthetic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {achievements.map((ach) => (
          <div 
            key={ach.id} 
            className="achievement-card-block cursor-target bg-white/40 backdrop-blur-sm border border-black/5 p-6 rounded-2xl flex flex-col justify-between hover:bg-white hover:border-black/10 transition-all duration-300 group"
          >
            <div>
              {/* Metric and Icon */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl md:text-4xl font-extrabold text-black font-[font5] tracking-tight select-none">
                  {ach.metric}
                </span>
                <div className="w-10 h-10 flex items-center justify-center p-2 rounded-lg bg-[#C8C2CF]/20 group-hover:bg-[#C8C2CF]/45 transition-colors duration-300">
                  {ach.icon}
                </div>
              </div>

              {/* Titles */}
              <h3 className="text-lg font-bold font-[font9] text-black">
                {ach.title}
              </h3>
              <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-4">
                {ach.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-[font6] mb-6">
                {ach.desc}
              </p>
            </div>

            {/* Tags / Sub-list */}
            <div className="border-t border-black/5 pt-4">
              <div className="flex flex-wrap gap-2">
                {ach.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] font-mono bg-black/5 text-black/75 px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
