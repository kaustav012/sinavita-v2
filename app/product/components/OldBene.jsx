import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductBenefits = ({ benefitsList }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const benefitsRef = useRef(null);
  const rotatingImagesRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    benefitsList.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `${(index / benefitsList.length) * 100}% center`,
        end: `${((index + 1) / benefitsList.length) * 100}% center`,
        scrub: true, // Smooth animation linked to scroll
        onEnter: () => {
          setActiveIndex(index), animateBenefits();
        },
        onEnterBack: () => {
          setActiveIndex(index), animateBenefits();
        },
      });
    });

    animateImages();
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [benefitsList]);

  const animateImages = () => {
    if (!rotatingImagesRef.current.length) return;

    rotatingImagesRef.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { opacity: 1, scale: 1, rotate: "0deg" },
        {
          opacity: 0,
          scale: 1.3,
          rotate: "180deg",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true, // This links animation to scroll progress
          },
        }
      );
    });
  };

  const animateBenefits = () => {
    if (!benefitsRef.current) return;

    gsap.fromTo(
      benefitsRef.current.children,
      { opacity: 0, y: 20, scale: 0.9 }, // Initial state
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2, // Delay between each benefit
        ease: "power3.out",
      }
    );
  };

  return (
    <div className="relative h-[200vh] pt-24">
      <div
        ref={containerRef}
        className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-white"
      >
        <h1 className="text-3xl md:text-4xl font-medium text-gray-600 mb-12 md:mb-16">
          INGREDIENTS YOUR BODY WILL LOVE
        </h1>

        <div className="grid grid-cols-3 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            {benefitsList.map((item, index) => (
              <div
                key={index}
                className={`space-y-1 ${
                  index === activeIndex
                    ? "md:text-5xl text-gray-500 font-bold"
                    : "benefits-outline"
                }`}
              >
                <h3 className="md:text-5xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Center Column - Static Image */}
          <div className="relative aspect-square items-center flex justify-center">
            <Image
              src="/hero-image-1.png"
              alt="Sinavita Immune Support Bottle"
              width={350}
              height={350}
              className="object-contain"
              priority
            />
          </div>

          {/* Right Column - Benefits */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="space-y-4 w-[350px] md:w-[400px]">
              <div className="inline-block px-4 py-1 bg-yellow-500 text-white rounded-full text-lg font-medium">
                BENEFITS
              </div>
              <div className="min-h-[200px] flex items-center">
                <ul className="space-y-4 w-full" ref={benefitsRef}>
                  {benefitsList[activeIndex].benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 opacity-100 transition-opacity duration-500 ease-in-out text-lg font-medium"
                    >
                      <span className="text-gray-500 font-bold text-1xl md:text-2xl">{`${
                        idx + 1
                      }.`}</span>
                      <span className="text-gray-500 font-bold text-1xl md:text-2xl">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Rotating Images with ScrollTrigger Animation */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[
              "top-[-100px] left-0",
              "top-[-100px] right-0",
              "bottom-[-100px] left-0",
              "bottom-[-100px] right-0",
            ].map((position, index) => (
              <div
                key={index}
                className={`absolute ${position} w-[300px] h-[300px]`}
                ref={(el) => (rotatingImagesRef.current[index] = el)}
              >
                <Image
                  src={benefitsList[activeIndex].image}
                  alt={benefitsList[activeIndex].title}
                  width={300}
                  height={300}
                  className="object-contain rotating-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBenefits;
