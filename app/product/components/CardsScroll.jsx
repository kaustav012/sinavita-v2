"use client";
import { Typography } from "@mui/material";
import React, { useRef, useLayoutEffect, useState } from "react";

const CardsScroll = ({ productDetails }) => {
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

  // Scroll logic can be re-enabled or customized as needed
  // useLayoutEffect(() => { ... }, []);

  const renderStars = (count = 5) => (
    <div className="star-image-wrapper">
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          src="/image/2cd43b_66affcabc77f42108dd1a4b4c02ed7aa_mv2.png"
          alt="star"
          className="star-rating"
        />
      ))}
    </div>
  );

  return (
    <>
      <div className="card-scroll-container bg-gradient-to-r from-yellow-500 to-orange-500 text-white" ref={mainRef}>

        {/* Reviews Section (same UI as testimonials) */}
        <div className="card-scroll-wrapper">
          <div className="card-scroll-left">
            <Typography className="border-heading-black hidden md:block">
              <div dangerouslySetInnerHTML={{ __html: productDetails?.testimonial_title }} />
            </Typography>
            <div className="scroll-wrapper">
              {productDetails?.reviews?.length > 0 && (
                <div className="scrolled_card hidden md:block">
                  {renderStars(5)}
                  <Typography className="heading-04">
                    {productDetails.reviews.at(-1).review}
                  </Typography>
                  <div className="user-info">
                    <Typography className="heading-04-user">
                      @{productDetails.reviews.at(-1).user.name}
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="card-scroll-right">
            <Typography className="card-heading-05">
              <div dangerouslySetInnerHTML={{ __html: productDetails?.testimonial_tag1 }} />
            </Typography>
            <Typography className="card-paragraph-content">
              {productDetails?.testimonial_tag2}
            </Typography>
            <div className="scroll-wrapper">
              {productDetails?.reviews?.slice(0, -1).map((review, idx) => (
                <div key={`review-${idx}`} className="right-scroll-card-01">
                  {renderStars(review.rating)}
                  <Typography className="heading-04">{review.review}</Typography>
                  <div className="user-info">
                    <Typography className="heading-04-user">
                      @{review.user.name}
                    </Typography>
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

export default CardsScroll;