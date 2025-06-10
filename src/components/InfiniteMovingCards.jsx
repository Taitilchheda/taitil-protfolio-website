"use client";

import React, { useEffect, useState } from "react";
import { styles } from "../styles";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item, idx) => (
          <li
            className='w-[350px] max-w-full relative rounded-2xl border-none flex-shrink-0 bg-black-200 p-8'
            key={idx}
          >
            <p className='text-white font-black text-[48px]'>"</p>
            <div className='mt-1'>
              <p className='text-white tracking-wider text-[18px]'>{item.testimonial}</p>
              <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                  <p className='text-white font-medium text-[16px]'>
                    <span className='blue-text-gradient'>@</span> {item.name}
                  </p>
                  <p className='mt-1 text-secondary text-[12px]'>
                    {item.designation} of {item.company}
                  </p>
                </div>
                <img
                  src={item.image}
                  alt={`feedback_by-${item.name}`}
                  className='w-10 h-10 rounded-full object-cover'
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}; 