"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const CustomBottel = ({ id }) => {
  const mainRef = useRef(null);
  const imageRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [totalImages] = useState(70); // Total number of frames
  const [moveCenter, setMoveCenter] = useState(false);
  const [moveBottom, setMoveBottom] = useState(false);
  const [y, setY] = useState(0);

  const imagePath = `https://sinavita-admin.flameoflames.com/uploads/products/${id}`;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const direction = scrollY > y ? 1 : -1;

    setCurrentImageIndex((prev) => {
      let next = prev + direction;
      if (next > totalImages) next = 1;
      if (next < 1) next = totalImages;
      return next;
    });

    setY(scrollY);
  };

  const handlePosition = () => {
    const scrollPos = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    setMoveCenter(scrollPos > viewportHeight * 1);
    setMoveBottom(scrollPos > totalHeight - viewportHeight * 0.8);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handlePosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handlePosition);
    };
  }, [y]);

  return (
    <div
      ref={mainRef}
      className={moveCenter ? "bottel_container_active" : "bottel_container"}
    >
      <div
        className={
          moveBottom ? "bottel_main_wrapper_active" : "bottel_main_wrapper"
        }
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <img
            ref={imageRef}
            src={`${imagePath}/${currentImageIndex}.png`}
            alt="360 View"
            className="bottel_image_smooth"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
        <Link href={id ? `/product-cart/${id}` : "#"}>
          <Button className="buy_button blink-effect">BUY</Button>
        </Link>
      </div>
    </div>
  );
};

export default CustomBottel;
