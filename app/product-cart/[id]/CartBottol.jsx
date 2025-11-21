"use client"; // Ensure it's a Client Component
/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import ThreeSixty from "react-360-view";

const CartBottol = () => {
    const mainRef = useRef(null);
    const bottelRef = useRef(null);
    const imageRef = useRef(null);
    const [y, setY] = useState(0);

    // Handle Scroll Navigation for Bottle Spin
    const handleNavigation = () => {
        if (!bottelRef.current) return; // Prevent errors when ref is null

        const scrollPos = window.scrollY;
        bottelRef.current.speedFactor = 5;

        if (y > Math.round(scrollPos)) {
            bottelRef.current.prev();
        } else if (y < Math.round(scrollPos)) {
            bottelRef.current.next();
        }
        setY(Math.round(scrollPos));
    };

    // Handle Bottle Position & Image Filter
    const handleBottelPosition = () => {
        const scrollPos = window.scrollY + window.innerHeight;
        if (!imageRef.current) return;
    };

    // Attach Scroll Event Listeners
    useEffect(() => {
        if (!bottelRef.current) return; // Ensure bottelRef is assigned

        window.addEventListener("scroll", handleNavigation);
        window.addEventListener("scroll", handleBottelPosition);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
            window.removeEventListener("scroll", handleBottelPosition);
        };
    }, [y]);

    return (
        <div ref={mainRef}>
            <div
                className="bottel_images_two"
            >
                <ThreeSixty
                    ref={bottelRef}
                    amount={70}
                    imagePath="/bottel"
                    fileName="{index}.png"
                    spinReverse={false}
                />
            </div>
        </div>
    );
};

export default CartBottol;
