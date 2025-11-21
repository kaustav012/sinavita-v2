'use client'
import { useEffect, useState } from "react";
import Image from "next/image";



export default function Image360Viewer({ imageSequence }) {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const images = imageSequence?.multi_images || [];
    const totalImages = images?.length || [];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? 1 : -1; // 1 = down, -1 = up
            setLastScrollY(scrollY);

            setCurrentFrame((prev) => {
                let nextFrame = prev + direction;
                if (nextFrame >= totalImages) nextFrame = 0;
                if (nextFrame < 0) nextFrame = totalImages - 1;
                return nextFrame;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, totalImages]);

    return (
        <div className="bottel_images_two">
            <Image
                className="bottel_images_three"
                src={images[currentFrame]}
                alt="360 View"
                width={400}
                height={400}
                priority
            />
        </div>
    );
}
