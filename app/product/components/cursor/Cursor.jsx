"use client"; // Ensures this runs as a Client Component

import React, { useRef, useEffect } from "react";

const Cursor = () => {
  const dot = useRef(null);
  const dotOutline = useRef(null);
  const requestRef = useRef(null);

  const delay = 18;
  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);
  const endX = useRef(0);
  const endY = useRef(0);
  const _x = useRef(0);
  const _y = useRef(0);

  useEffect(() => {
    // Ensure `window` is available before setting values
    if (typeof window !== "undefined") {
      endX.current = window.innerWidth / 2;
      endY.current = window.innerHeight / 2;
    }

    const toggleCursorVisibility = (visible) => {
      if (dot.current && dotOutline.current) {
        const opacity = visible ? "1" : "0";
        dot.current.style.opacity = opacity;
        dotOutline.current.style.opacity = opacity;
      }
    };

    const toggleCursorSize = (enlarged) => {
      if (dot.current && dotOutline.current) {
        const scale = enlarged ? "scale(1.2)" : "scale(1)";
        const outlineScale = enlarged ? "scale(1.5)" : "scale(1)";
        dot.current.style.transform = `translate(-50%,-50%) ${scale}`;
        dotOutline.current.style.transform = `translate(-50%,-50%) ${outlineScale}`;
      }
    };

    const mouseMoveEvent = (e) => {
      cursorVisible.current = true;
      toggleCursorVisibility(true);

      endX.current = e.clientX;
      endY.current = e.clientY;

      if (dot.current) {
        dot.current.style.top = `${endY.current}px`;
        dot.current.style.left = `${endX.current}px`;
      }
    };

    const animateDotOutline = () => {
      _x.current += (endX.current - _x.current) / delay;
      _y.current += (endY.current - _y.current) / delay;

      if (dotOutline.current) {
        dotOutline.current.style.top = `${_y.current}px`;
        dotOutline.current.style.left = `${_x.current}px`;
      }

      requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    // Event handlers
    const handleMouseDown = () => {
      cursorEnlarged.current = true;
      toggleCursorSize(true);
    };

    const handleMouseUp = () => {
      cursorEnlarged.current = false;
      toggleCursorSize(false);
    };

    const handleMouseEnter = () => {
      cursorVisible.current = true;
      toggleCursorVisibility(true);
    };

    const handleMouseLeave = () => {
      cursorVisible.current = false;
      toggleCursorVisibility(false);
    };

    // Add event listeners
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", mouseMoveEvent);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    animateDotOutline(); // Start animation loop

    return () => {
      // Cleanup event listeners
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", mouseMoveEvent);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);

      // Cancel animation loop
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
      <div
        ref={dotOutline}
        className="w-6 h-6 border-2 border-gray-500 rounded-full absolute pointer-events-none transition-transform duration-150 ease-out"
      ></div>
      <div
        ref={dot}
        className="w-3 h-3 bg-gray-500 rounded-full absolute pointer-events-none transition-transform duration-150 ease-out"
      ></div>
    </div>
  );
};

export default Cursor;
