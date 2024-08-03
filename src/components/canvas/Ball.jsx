import React, { useEffect, useRef, useState } from "react";
import "./IconCircle.css"; // Import the CSS file for styling

const IconCircle = ({ icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the element becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`icon-circle ${isVisible ? "animate" : ""}`}
      ref={iconRef}
    >
      <img src={icon} alt="Icon" className="icon-image" />
    </div>
  );
};

export default IconCircle;
