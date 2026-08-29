import React from 'react';
import TextType from './TextType';

const experiences = [
    
    {
        id: 1,
        title: "OpenAI Codex Hackathon",
        subtitle: "Top 30% Participant",
        period: "2026",
        description:
            "Successfully participated in the OpenAI Codex Hackathon and finished in the top 30% among 2,989 participants. Demonstrated creativity, problem-solving, and effective use of AI-assisted development throughout the project.",
        img: "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1786544238/hackathon-certificate-varun_ysybsd.png",
        tags: ["OpenAI", "Codex", "Hackathon", "AI"],
        bgColor: "bg-[#F1EDE3]",

     },
    {
        id: 2,
        title: "Anudip Foundation",
        subtitle: "Java Developer Trainee",
        period: "Sep 2025 – Nov 2025",
        description: "Built 5+ backend modules using Java, Spring Boot, JDBC, SQL, MongoDB, and Object-Oriented Programming (OOP) principles. Developed RESTful APIs, implemented CRUD operations, and designed normalized database schemas with optimized queries. Demonstrated strong problem-solving, debugging, communication, and collaboration skills while working on project development, requirement discussions, and technical documentation.",
        img: 'https://res.cloudinary.com/dgxnwlg0w/image/upload/v1783276466/wmremove-transformed_xopt5t.png',
        tags: ["Java", "JDBC", "SQL", "MySQL", "MongoDB"],
        bgColor: "bg-[#DFD0B2]",
    },
   
    {
        id: 3,
        title: "Freelance Web Developer",
        subtitle: "Fashion Retail Store",
        period: "March 2026 – Present",
        description: "Designed, developed, and deployed a full-stack fashion retail website using React.js, Node.js, Express.js, and MongoDB. Built a responsive user interface, product showcase features, and customer inquiry functionality. Implemented Cloudflare CDN for performance optimization and Helmet.js for enhanced security.",
        img: 'https://res.cloudinary.com/dgxnwlg0w/image/upload/v1786977614/ChatGPT_Image_Aug_17_2026_08_09_56_PM_awlzz4.png',
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudflare"],
          bgColor: "bg-[#DCE8E8]",
    },
    {
        id: 4,
        title: "",
        subtitle: "Design Fusion 2026 – Designare Conference",
        period: "Aug 2025",
        description: `A bold, community-driven visual identity for Designare Conference including brand identity, website design, motion graphics, and a social media marketing campaign, built to reflect creativity, community, and growth within a modern, digital-first visual system.`,
        img: 'https://res.cloudinary.com/dgxnwlg0w/image/upload/v1783276776/bhR8bhWihokbt5x1TEyYV6oJ98o_fzhw9j.avif',
        tags: ["UI/UX", "Design", "Conference"],
        bgColor: "bg-[#FFF1C7]",
    },
    {
        id: 5,
        title: "Coming Soon",
        subtitle: "Software Engineering Project",
        period: "Upcoming",
        description: "Currently working on a new full-stack application focused on scalability, performance, and modern backend architecture. More details will be shared soon.",
        tags: ["Java", "Spring Boot", "React", "MongoDB", "MERN", "LLM", "RAG"],
        img: "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1782197926/wallpaper_programming_plphdm.jpg",
        bgColor: "bg-[#B8C9A0]",
        isUpcoming: true
    }
];

const Experience = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-30">
            {/* Header */}
            <div className="flex items-center w-full max-w-7xl mx-auto text-white mb-8 md:mb-16">
                <div className="flex-1 h-[0.2px] bg-black"></div>
                <div className="px-4 cursor-target text-sm sm:text-lg md:text-2xl font-medium tracking-wide whitespace-nowrap text-black font-[font9]">
                    ❈ Experience ❈
                </div>
                <div className="flex-1 h-[0.2px] bg-black"></div>
            </div>

            {/* Experience Cards */}
            {experiences.map((exp, index) => (
                <div
                    key={exp.id}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                        } gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16 lg:mb-20 max-w-7xl mx-auto`}
                >
                    {/* Image Card */}
                    <div className="w-full lg:w-1/2 border border-black p-3 sm:p-4 transition-all hover:shadow-lg group">
                        <div className="flex justify-between items-center text-xs sm:text-sm mb-3 sm:mb-4">
                            <div className="flex items-center flex-1 mr-4">
                                <span className="text-sm uppercase mr-2">○○○</span>
                                <div className="flex-1 h-px bg-black"></div>
                                <span className="text-sm uppercase mx-2 whitespace-nowrap">
                                    {exp.isUpcoming ? 'Upcoming' : 'Experience'}
                                </span>
                                <div className="flex-1 h-px bg-black"></div>
                            </div>
                            <span className="font-mono">
                                [NO. {String(exp.id).padStart(3, "0")}]
                            </span>
                        </div>

                        <div className="overflow-hidden relative">
                            <img
                                src={exp.img}
                                alt={exp.title || exp.subtitle}
                                className={`w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] object-cover transition-all duration-700 
                                    ${exp.isUpcoming
                                        ? ''
                                        : 'lg:grayscale lg:hover:grayscale-0'
                                    } 
                                    hover:scale-105 hover:brightness-110`}
                            />
                            {exp.isUpcoming && (
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-pink-500/30 to-blue-500/30 mix-blend-overlay animate-pulse"></div>
                            )}
                        </div>

                        <div className="mt-4 sm:mt-5">
                            <div className='flex justify-between items-end'>
                                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 font-[font9]">
                                    | {exp.subtitle || exp.title}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                                    {exp.period} |
                                </p>
                            </div>

                            <h2 className="group text-xl hover:text-[#C87F7A] sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                                {exp.title && (
                                    <span
                                        className={`${exp.bgColor} px-1 inline-block font-[font9] group-hover:bg-transparent`}
                                    >
                                        {exp.title}
                                    </span>
                                )}

                                {exp.subtitle && (
                                    <>
                                        {exp.title && <br className="hidden sm:block" />}
                                        <span
                                            className={`${exp.bgColor} px-1 inline-block mt-1 font-[font9] group-hover:bg-transparent`}
                                        >
                                            {exp.subtitle}
                                        </span>
                                    </>
                                )}
                            </h2>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 px-2 sm:px-4">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-[font9]">
                                {exp.title || exp.subtitle}
                            </h2>
                            <span className="text-xs sm:text-sm font-mono bg-black text-white px-2 py-1">
                                {exp.period}
                            </span>
                        </div>
                        <div className="min-h-[180px]">
                            <TextType
                                as="p"
                                text={exp.description}
                                typingSpeed={14}
                                loop={true}
                                showCursor={true}
                                className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag, i) => (
                                <span key={i} className="text-xs cursor-target sm:text-sm bg-gray-100 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;