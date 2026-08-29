import React, { useContext, useRef, useState } from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Navbar from './components/navbar/Navbar'
import LoadingPage from './components/common/LoadingPage'
import FullScreenNav from './components/navbar/FullScreenNav'
import ProjectDetail from './components/projects/ProjectDetail'
import Aboutme from './about/Aboutme'
import Cursor from './components/common/Cursor'
import Music from './components/home/Music'
import Experience from './about/Experience'
import Contact from './components/common/Contact'
import Privacy from './components/privacyandpolicy/Privacy'
import TermsOfService from './components/privacyandpolicy/TermsOfService'
import TargetCursor from './components/common/TargetCursor'
import { NavHoverContext } from './context/MenuContext'
import NotFound from './components/common/NotFound'


const App = () => {
const [menu, setMenu] = useState(false);
  const {navHovered, setNavHovered } = useContext(NavHoverContext)



  return (
<div className='overflow-x-clip'>    
  <div>

 {/* <Cursor /> */}
 {/* <PixelTrail /> */}
 {!navHovered && (
  <TargetCursor
    spinDuration={2}
    hideDefaultCursor
    parallaxOn
    hoverDuration={0.2}
    cursorColor="#ffffff"
    cursorColorOnTarget="white"
  />
)}



<Navbar />
<FullScreenNav />
 <Music/>

  </div >
      <Routes>
          <Route path="*" element={<NotFound />} />
        <Route path='/' element={<Home/>}/>   
        <Route path='/about' element={<About/>}/>   
        <Route path='/projects' element={<Projects/>}/>   
        <Route path='/aboutme' element={<Aboutme/>}/>   
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path='/loading' element={<LoadingPage/>}/>   
        <Route path='/contact' element={<Contact/>}/>   
        <Route path='/privacy-policy' element={<Privacy/>}/>   
        <Route path='/terms' element={<TermsOfService/>}/>   
        {/* <Route path='/exp' element={<Experience/>}/>    */}
       
      </Routes>
    </div>
  )
}

export default App
