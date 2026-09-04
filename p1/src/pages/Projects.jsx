
import React from "react";
import ProjectCards from "../components/projects/components/ProjectCards";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/common/Footer";
import { projectImages } from "../data/projectImages";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
   useGSAP(function () {
    gsap.from(".hero", {
      height: "100px",
      opacity: 0,
      scale: 0.94,
      ease: "power2.out",
      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div className="w-full overflow-hidden">

      {/* ==============================
          PROJECT SECTION
      =============================== */}

      <div className="lg:p-6 p-2 bg-[#C8C2CF]">

        {/* ==============================
            HEADING
        =============================== */}

        <div className="pt-[41vh] pb-[15vh]">
          <h2
            className="
              font-[font7]
              uppercase
              break-words
              leading-none

              text-7xl
              sm:text-8xl
              md:text-8xl
              lg:text-[12vw]
            "
          >
            Projects
          </h2>
        </div>

        {/* ==============================
            PROJECT CARDS
        =============================== */}

        <div className="lol">

          {projectImages.map((project, idx) => (
            <div
              key={idx}
              className="
                hero
                w-full
                flex
                lg:flex-row
                flex-col
                lg:gap-2
                gap-3
                mb-4
                lg:h-[55vh]
                transform-gpu
                will-change-transform
              "
            >
              <ProjectCards
                image1={project.project1?.image}
                image2={project.project2?.image}

                title1={project.project1?.title}
                title2={project.project2?.title}

                year1={project.project1?.year}
                year2={project.project2?.year}

                id1={project.project1?.id}
                id2={project.project2?.id}
              />
            </div>
          ))}

        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Projects;