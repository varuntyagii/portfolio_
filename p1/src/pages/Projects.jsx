import React from 'react'
import ProjectCards from '../components/projects/components/ProjectCards'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Footer from '../components/common/Footer'

const Projects = () => {
 
  const projectImages = [
  {
    project1: {
      id: "ai-career-coach",
      title: "AI Career Coach",
      year:"Apr 2025",
      image: "https://res.cloudinary.com/dgxnwlg0w/image/upload/c_crop,g_north_west,h_806,w_1441,x_230,y_90/ar_16:9,c_auto/Project2photo_b11il2.png"
    },

    project2: {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      year:"Dec 2025",
      image: "https://res.cloudinary.com/dgxnwlg0w/image/upload/c_crop,g_north_west,h_806,w_1441,x_230,y_90/ar_16:9,c_auto/Project1photo_h5qcnc.png"
    }
  },
  {
    project1: {
      id: "ai-career-coach",
      title: "AI Career Coach",
      year:"Apr 2025",
      image: "https://res.cloudinary.com/dgxnwlg0w/image/upload/c_crop,g_north_west,h_806,w_1441,x_230,y_90/ar_16:9,c_auto/Project2photo_b11il2.png"
    },

    project2: {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      year:"Dec 2025",
      image: "https://res.cloudinary.com/dgxnwlg0w/image/upload/c_crop,g_north_west,h_806,w_1441,x_230,y_90/ar_16:9,c_auto/Project1photo_h5qcnc.png"
    }
  },

  {
    project1: {
      id: "ai-mock-interview",
      title: "Animated Website",
      year:"Apr 2026",
      image: "https://res.cloudinary.com/dgxnwlg0w/image/upload/v1781882586/Screenshot_2026-06-19_204228_ohcvaz.png"
    },

    project2: {
      id: "reverts",
      title: "Reverts",
      year:"Jun 2026",
      image: "https://res.cloudinary.com/dgxnwlg0w/image/upload/c_crop,g_north_west,h_806,w_1441,x_230,y_90/ar_16:9,c_auto/Project1photo_h5qcnc.png"
    }
  }
];

gsap.registerPlugin(ScrollTrigger);

useGSAP(function(){
  gsap.from('.hero', {
    height:'100px',
    stagger:{
      amount:0.3
    },
    scrollTrigger:{
      trigger:'.lol',
      start:'top 100%',
      end: 'top -150%', 
      scrub:true
    }
  })
})

  return (
    <div>
      <div className='lg:p-6 p-2 bg-[#C8C2CF]'>
      <div className=' pt-[41vh] '> 
        <h2 className=' font-[font7] lg:text-[12vw] text-8xl break-words sm:text-[8xl] md:text-[8xl] uppercase'>Projects</h2>
      </div>
       <div className='-lg:mt-3 lol'>
        {projectImages.map((project, idx)=>{
          return <div key={idx} className="hero w-full flex lg:flex-row flex-col lg:gap-2 gap-3 mb-5 lg:h-[55vh]">
          <ProjectCards
            image1={project.project1.image}
            image2={project.project2.image}
            title1={project.project1.title}
            title2={project.project2.title}
            year1={project.project1.year}
            year2={project.project2.year}
            id1={project.project1.id}
            id2={project.project2.id}
          />
          </div>
        })}
        
       </div>
    
    </div>
       <Footer/>
    </div>

  )
}

export default Projects
