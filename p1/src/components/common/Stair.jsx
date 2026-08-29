import React, { useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLocation } from 'react-router-dom';
import About from '../../pages/About';
import { BiLoader } from 'react-icons/bi';
import LoadingPage from './LoadingPage';
import { Transition } from '../../context/MenuContext';

const Stair = (props) => {
  const loc = useLocation().pathname;
  const stairRef = useRef(null);
  const pageRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const { skipTransition, setSkipTransition } = useContext(Transition);


  useGSAP(function () {
    if (loading) return;
    if (skipTransition) {
      setSkipTransition(false);
      return;
    }

    const t1 = gsap.timeline();

    t1.to(stairRef.current, {
      display: 'block',
    });

    t1.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.4
      }
    });

    t1.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.4
      }
    });

    t1.to(stairRef.current, {
      display: 'none',
    });

    t1.to('.stair', {
      y: '0',
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 1.3
    });
  }, [loc, loading]);



  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);



  if (loading) {
    return (
      <div className="fixed  z-[9999]">
        <LoadingPage />
      </div>
    );
  }
  return (

    <div>

      <div ref={stairRef} className='h-screen w-full fixed z-20 top-0'>

        <div className='h-full w-full flex'>
          <div className='stair h-full w-1/5 bg-[#000016]'></div>
          <div className='stair h-full w-1/5 bg-[#000016]'></div>
          <div className='stair h-full w-1/5 bg-[#000016]'></div>
          <div className='stair h-full w-1/5 bg-[#000016]'></div>
          <div className='stair h-full w-1/5 bg-[#000016]'></div>
        </div>

      </div>

      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  );
};

export default Stair;