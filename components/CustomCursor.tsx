"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverIframe, setIsOverIframe] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if mouse is over an iframe (like hCaptcha)
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor?.tagName === "IFRAME" || elementUnderCursor?.closest("iframe")) {
        setIsOverIframe(true);
      } else {
        setIsOverIframe(false);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over iframe
      if (target.tagName === "IFRAME" || target.closest("iframe")) {
        setIsOverIframe(true);
      } else {
        setIsOverIframe(false);
      }
      
      // Check if hovering over clickable elements
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && !isOverIframe && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          initial={{
            x: mousePosition.x,
            y: mousePosition.y,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: isHovering ? 1.5 : 1,    
            opacity: 1,
          }}
          exit={{
            x: mousePosition.x,
            y: mousePosition.y,
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            x: { type: "spring", stiffness: 3000, damping: 50, mass: 0.1 },
            y: { type: "spring", stiffness: 3000, damping: 50, mass: 0.1 },
            scale: { type: "spring", stiffness: 400, damping: 25 },
            opacity: { duration: 0.15 },
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1"
            viewBox="0 0 16 16"
            className={`h-4 w-4 -translate-x-[2px] -translate-y-[2px] -rotate-[70deg] transform transition-colors duration-200 ${
              isHovering 
                ? "stroke-yellow-400 text-yellow-500" 
                : "stroke-sky-400 text-sky-500"
            }`}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
