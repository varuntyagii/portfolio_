import React from 'react'
import FullScreenNav from '../navbar/FullScreenNav';

const BurgerIcon = ({ stroke }) => {
  return (
    <div>
         <div className="line">
          <svg
            viewBox="0 0 63 10"
            className="w-17 h-7 ease-[cubic-bezier(0.4,0,0.2,1)]"
            fill="none"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="square"
          >
            <line x1=".355" x2="60.645" y1=".5" y2=".5" />
            <line x1="30.5" x2="60.645" y1="7.5" y2="7.5" />
          </svg>
        </div>
     
    </div>
  );
};

export default BurgerIcon