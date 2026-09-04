import React, { useEffect, useState } from 'react';
import { FaGlobeAsia } from 'react-icons/fa';

const Clock = ({ className = '' }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(istString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-zinc-300 ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D3FD50] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D3FD50]"></span>
      </span>
      <FaGlobeAsia className="text-zinc-400 text-xs sm:text-sm" />
      <span className="font-[font9] text-[11px] sm:text-xs uppercase tracking-[0.14em]">
        IND • {time || '12:00:00 PM'} IST
      </span>
    </div>
  );
};

export default Clock;

