import React, { useState, useEffect } from "react";
import "./slide_top.scss";
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className="Btn">
      <FaChevronUp size={80} className="arrow" />
    </button>
    

    )
  );
};

export default ScrollToTopButton;
