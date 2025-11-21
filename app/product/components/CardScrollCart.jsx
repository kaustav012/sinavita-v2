"use client";
import { Typography } from "@mui/material";
import React, { useRef, useLayoutEffect, useState } from "react";


const CardScrollCart = ({ productDetails }) => {
    const [rightCardOne, setRightCardOne] = useState(false);
    const [rightCardTwo, setRightCardTwo] = useState(false);
    const [rightCardThree, setRightCardThree] = useState(false);
    const [leftCardOne, setLeftCardOne] = useState(false);
    const [leftCardTwo, setLeftCardTwo] = useState(false);

    const leftOneRef = useRef(null),
        leftTwoRef = useRef(null),
        rightOneRef = useRef(null),
        rightTwoRef = useRef(null),
        rightThreeRef = useRef(null),
        mainRef = useRef(null);

    useLayoutEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;

            if (scrollPos >= 13425) {
                setRightCardOne(true);
            }
            if (scrollPos <= 13526) {
                setRightCardOne(false);
            }

            if (scrollPos >= 13675) {
                setRightCardTwo(true);
            }
            if (scrollPos <= 13776) {
                setRightCardTwo(false);
            }

            if (scrollPos >= 13900) {
                setRightCardThree(true);
            }
            if (scrollPos <= 14001) {
                setRightCardThree(false);
            }

            if (scrollPos >= 13670) {
                setLeftCardOne(true);
            }
            if (scrollPos <= 13771) {
                setLeftCardOne(false);
            }

            if (scrollPos >= 13875) {
                setLeftCardTwo(true);
            }
            if (scrollPos <= 13976) {
                setLeftCardTwo(false);
            }

        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <div className="card-scroll-container-two bg-gradient-to-r from-yellow-500 to-orange-500 text-white" ref={mainRef}>
                <div className="card-scroll-wrapper">
                    {/* Left side: LAST testimonial */}
                    <div className="card-scroll-left">
                        <Typography className="border-heading-black hidden md:block">
                            <div dangerouslySetInnerHTML={{ __html: productDetails?.testimonial_title }} />
                        </Typography>

                        <div className="scroll-wrapper">
                            {productDetails?.product_testimony?.length > 0 && (
                                <div
                                    ref={leftOneRef}
                                    className={leftCardOne ? "scrolled_card_active hidden md:block" : "scrolled_card hidden md:block"}
                                >
                                    <div className="star-image-wrapper">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <img
                                                key={i}
                                                src="/image/2cd43b_66affcabc77f42108dd1a4b4c02ed7aa_mv2.png"
                                                alt="star"
                                                className="star-rating"
                                            />
                                        ))}
                                    </div>
                                    <Typography className="heading-04">
                                        {productDetails?.product_testimony.at(-1)?.review}
                                    </Typography>
                                    <div className="user-info">
                                        <img
                                            src="/image/764d59d32f61f0f91dec8c442ab052c5.jpg"
                                            alt="user"
                                            className="user-png"
                                        />
                                        <Typography className="heading-04-user">
                                            @{productDetails?.product_testimony.at(-1)?.author}
                                        </Typography>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right side: All except LAST testimonial */}
                    <div className="card-scroll-right">
                        <div className="card-scroll-right-content">
                            <Typography className="card-heading-05">
                                <div dangerouslySetInnerHTML={{ __html: productDetails?.testimonial_tag1 }} />
                            </Typography>
                            <Typography className="card-paragraph-content">
                                {productDetails?.testimonial_tag2}
                            </Typography>
                        </div>

                        <div className="scroll-wrapper">
                            {productDetails?.product_testimony?.slice(0, -1).map((testimonial, index) => (
                                <div
                                    key={index}
                                    ref={index === 0 ? rightOneRef : index === 1 ? rightTwoRef : rightThreeRef}
                                    className={
                                        index === 0
                                            ? rightCardOne
                                                ? "right-scroll-card-01_active"
                                                : "right-scroll-card-01"
                                            : index === 1
                                                ? rightCardTwo
                                                    ? "right-scroll-card-02_active"
                                                    : "right-scroll-card-02"
                                                : rightCardThree
                                                    ? "right-scroll-card-03_active"
                                                    : "right-scroll-card-03"
                                    }
                                >
                                    <div className="star-image-wrapper">
                                        {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                                            <img
                                                key={i}
                                                src="/image/2cd43b_66affcabc77f42108dd1a4b4c02ed7aa_mv2.png"
                                                alt="star"
                                                className="star-rating"
                                            />
                                        ))}
                                    </div>
                                    <Typography className="heading-04">{testimonial.review}</Typography>
                                    <div className="user-info">
                                        <img
                                            src="/image/764d59d32f61f0f91dec8c442ab052c5.jpg"
                                            alt="user"
                                            className="user-png"
                                        />
                                        <Typography className="heading-04-user">@{testimonial.author}</Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardScrollCart;
