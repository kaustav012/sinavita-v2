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
  const rotatingImagesTwo = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    benefitsList.forEach((_, index) => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `${(index / benefitsList.length) * 100}% center`,
        end: `${((index + 1) / benefitsList.length) * 100}% center`,
        scrub: true, // you can tweak this value for smooth scrolling
        onEnter: () => {
          setActiveIndex(index), animateBenefits();
        },
        onEnterBack: () => {
          setActiveIndex(index), animateBenefits();
        },
      });
    });

    animateImages();
    if (rotatingImagesTwo?.current) {
      animateImageCenter(rotatingImagesTwo?.current);
    }

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [benefitsList]);

  const animateImages = () => {
    if (!rotatingImagesRef.current.length) return;

    rotatingImagesRef.current.forEach((image, index) => {
      // Create a ScrollTrigger for each image
      ScrollTrigger.create({
        trigger: image,
        start: "top bottom", // When the image enters the viewport
        end: "bottom top", // When the image leaves the viewport
        scrub: 1, // Links animation to scroll position
        // Pin the image section during the animation
        onUpdate: (self) => {
          // Map scroll position to scale
          const scaleValue = gsap.utils.mapRange(0, 1, 1, 1.5, self.progress);
          gsap.to(image, {
            scale: scaleValue, // Zoom in/out based on scroll
            ease: "none",
          });
        },
        onEnter: () => {
          gsap.to(image, {
            opacity: 1,
            duration: 0.5,
          });
        },
        onLeave: () => {
          gsap.to(image, {
            opacity: 0,
            duration: 0.5,
          });
        },
        onEnterBack: () => {
          gsap.to(image, {
            opacity: 1,
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to(image, {
            opacity: 0,
            duration: 0.5,
          });
        },
      });
    });
  };

  const animateImageCenter = (image) => {
    if (!image) return;
    ScrollTrigger.create({
      trigger: image,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const scaleValue = gsap.utils.mapRange(0, 1, 1, 1.5, self.progress);
        gsap.to(image, { scale: scaleValue, ease: "none" });
      },
      onEnter: () => gsap.to(image, { opacity: 1, duration: 0.5 }),
      onLeave: () => gsap.to(image, { opacity: 0, duration: 0.5 }),
      onEnterBack: () => gsap.to(image, { opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(image, { opacity: 0, duration: 0.5 }),
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
    <div
      className={`w-full transition-colors duration-700 mt-24 ${benefitsList[activeIndex]?.bgColor}`}
      style={{ padding: "0px" }}
    >
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="relative h-auto lg:h-[300vh]">
          <div
            ref={containerRef}
            className="sticky top-0 left-0 w-full h-auto lg:h-screen flex flex-col justify-center"
          >
            <h1 className="text-3xl md:text-5xl lg:text-9xl font-bold text-white mb-8 md:mb-12 lg:mb-16">
              INGREDIENTS YOUR BODY WILL LOVE
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center w-full">
              {/* Left Column - Benefits List */}
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
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-lg">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Center Image (Hidden on Mobile & Tablet) */}
              <div className="hidden lg:flex justify-center relative z-[-10]">
                <Image
                  ref={rotatingImagesTwo}
                  src={benefitsList[activeIndex].image}
                  alt={benefitsList[activeIndex].title}
                  width={700}
                  height={700}
                  priority
                />
              </div>

              {/* Right Column - Benefits Details */}
              <div className="flex flex-col gap-8">
                <div className="space-y-4 w-full md:w-[350px] lg:w-[400px]">
                  <div className="inline-block px-4 py-1 bg-yellow-500 text-white rounded-full text-lg font-medium">
                    BENEFITS
                  </div>
                  <div className="min-h-[200px] flex items-center">
                    <ul className="space-y-4 w-full">
                      {benefitsList[activeIndex].benefits.map(
                        (benefit, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 opacity-100 transition-opacity duration-500 ease-in-out text-lg font-medium"
                          >
                            <span className="font-bold text-xl md:text-2xl">{`${
                              idx + 1
                            }.`}</span>
                            <span className="font-bold text-xl md:text-2xl">
                              {benefit}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Background Decorative Images (Hidden on Mobile & Tablet) */}
              <div className="absolute inset-0 z-[-10] opacity-50 pointer-events-none hidden lg:block">
                {[
                  "top-[-30%] left-[5%]",
                  "top-[-10%] right-[-10%]",
                  "bottom-[-10%] left-[-15%]",
                  "bottom-[-10%] right-[-10%]",
                ].map((position, index) => (
                  <div
                    key={index}
                    className={`absolute ${position} w-[400px] h-[400px] ${
                      index === 0 || index === 3 ? "blur-md" : ""
                    }`}
                    ref={(el) => (rotatingImagesRef.current[index] = el)}
                  >
                    <Image
                      src={benefitsList[activeIndex].image}
                      alt={benefitsList[activeIndex].title}
                      width={400}
                      height={400}
                      className="object-contain rotating-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBenefits;
