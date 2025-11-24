'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, User, Menu, X, ChevronDown, Check, ArrowRightCircle } from 'lucide-react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { IngredientsSection } from '../../../components/ingredients-section';
import Link from 'next/link';

const SinaVitaLanding = ({ productCartData, productDetails, id }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedIngredient, setExpandedIngredient] = useState(null);
    const [buttonPosition, setButtonPosition] = useState('fixed');
    const [buttonTop, setButtonTop] = useState('200px');
    const qualitySectionRef = useRef(null);
    const stoppButtonRef = useRef(null);


    const [openIndex, setOpenIndex] = useState(null);
    const sectionRefs = useRef([]);

    // Scroll to active item AFTER state update (openIndex change)
    useEffect(() => {
        if (openIndex !== null) {
            setTimeout(() => {
                sectionRefs.current[openIndex]?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100); // Delay ensures content is rendered first
        }
    }, [openIndex]); // Runs when openIndex changes

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (!qualitySectionRef.current || !stoppButtonRef.current) return;

            // Get current scroll position
            const scrollY = window.scrollY;

            // Get STOPP button position relative to document
            const stoppButton = stoppButtonRef.current;
            const stoppRect = stoppButton.getBoundingClientRect();
            const stoppDocumentTop = scrollY + stoppRect.top;
            // CTA button height and viewport position
            const ctaHeight = 400; // height of CTA component
            const viewportTop = scrollY + 200; // fixed position (top-200px)
            const ctaBottomIfFixed = viewportTop + ctaHeight;

            console.log("ctaBottomIfFixed: ", ctaBottomIfFixed);
            console.log("stoppDocumentTop: ", stoppDocumentTop);


            // If fixed CTA would overlap with STOPP button, make it absolute
            if (ctaBottomIfFixed > stoppDocumentTop) {
                // Position button just above STOPP button
                const qualitySection = qualitySectionRef.current;
                const stopPosition = stoppDocumentTop - ctaHeight - 400;

                console.log("stopPosition: ", stopPosition);


                setButtonPosition('absolute');
                setButtonTop(`${stopPosition}px`);
            } else {
                setButtonPosition('fixed');
                setButtonTop('200px');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const features = [
        'Preventive daily support with Tablets',
        'Rapid relief with Nasal Spray',
        'Sensory comfort with Inhalation Drops',
        'Advanced delivery with Medical Nebulizer'
    ];

    const benefits = [
        'Developed in Norway',
        'Registered under EU MDR 2017/745',
        'Backed by medicinal plant research'
    ];

    const qualityPoints = [
        { title: 'MDR Registered', subtitle: 'Medical devices' },
        { title: 'Made in Norway', subtitle: 'Scandinavian quality control' },
        { title: 'GMP Standards', subtitle: 'Consistent safety & efficacy' }
    ];

    const testimonials = [
        { rating: 5, text: 'test', author: '@Anya' },
        { rating: 5, text: 'test', author: '@Anya' },
        { rating: 5, text: 'test', author: '@Anya' },
        { rating: 5, text: 'test', author: '@Anya' }
    ];

    return (
        <div className="min-h-screen bg-white font-sans relative">
            {/* Sticky CTA Button - Desktop */}

            <div
                className={`hidden md:block right-[200px] z-50 ${buttonPosition === 'fixed'
                    ? 'fixed'
                    : 'absolute'
                    }`}
                style={{
                    top: buttonTop
                }}
            >
                <div className="flex flex-col items-center">
                    <div className="relative w-full pb-5">
                        <img
                            // src="/image/cta_img.png"
                            // src="https://dummyimage.com/580x580/f2f2f2/222"
                            src={productDetails?.section1_image}
                            alt="SinaVita Migraine Support Kit"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <Link href={`/product-cart/${id}`} className="mt-5 bg-transparent border-4 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-orange-500 transition-all transform hover:scale-105 shadow-lg w-full md:w-auto">
                        GET YOUR KIT TODAY!
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-yellow-500 to-orange-500 to-orange-400 px-4 lg:px-8 py-12 md:py-20">
                <div className='container m-auto'>
                    <div className="max-w-4xl grid md:grid-cols-1 gap-8 items-center">
                        <div className="text-white space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-9xl font-bold leading-tight">
                                {productDetails?.section1_title}
                            </h2>
                            <div dangerouslySetInnerHTML={{ __html: productDetails?.section1_desc }} />
                            {/* <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
                                Experience the power of SinaVita® Migraine Support – a clinically formulated all-in-one kit designed to support you during migraine episodes.
                            </p> */}

                            {/* <div className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <Check className="w-6 h-6 flex-shrink-0" />
                                        <span className="text-lg">{benefit}</span>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Works Section */}
            <section className="bg-gradient-to-r from-yellow-500 to-orange-500 to-orange-400 px-4 lg:px-8 py-12 md:py-20">
                <div className='container m-auto'>
                    <div className="max-w-4xl grid md:grid-cols-1">
                        <h2 className="text-white text-4xl md:text-5xl lg:text-9xl font-bold mb-8">
                            {productDetails?.section2_title}
                        </h2>
                        <div className='text-white text-lg md:text-xl leading-relaxed mb-12 max-w-4xl' dangerouslySetInnerHTML={{ __html: productDetails?.section2_desc }} />
                        {/* <p className="text-white text-lg md:text-xl leading-relaxed mb-12 max-w-4xl">
                            SinaVita® Migraine Support is based on a synergistic formulation of carefully selected medicinal plants, each with a long tradition of use in supporting the body during migraine and headache episodes. By combining calming, circulatory, and soothing properties, the formula helps maintain balance and well-being when it matters most.
                        </p> */}

                        <div className="rounded-xl ">
                            <h3 className="text-white text-1xl md:text-2xl font-bold mb-6">Zoom in the ingredients</h3>
                            <div className="space-y-3 max-w-4xl">
                                <div>
                                    {productCartData?.product_benefit?.map((ingredient, index) => (
                                        <div
                                            key={index}
                                            ref={(el) => {
                                                sectionRefs.current[index] = el; // ✅ Fixed: No return value
                                            }}
                                            className="border-b-2 py-4 last:border-b-0 border-white-300"
                                        >
                                            {/* Title & Button */}
                                            <div className="flex items-center gap-4">
                                                <button
                                                    className="text-white font-semibold text-start py-2 rounded-lg w-[100%]"
                                                    onClick={() => toggleAccordion(index)}
                                                >
                                                    <h2 className="text-3xl md:text-4xl font-bold">{ingredient?.ingredient_name}</h2>
                                                </button>
                                                <button onClick={() => toggleAccordion(index)}>
                                                    <ArrowRightCircle
                                                        className={`text-[#FFFFFF] w-16 h-16 transition-transform ${openIndex === index ? "rotate-45" : ""
                                                            }`}
                                                    />
                                                </button>
                                            </div>

                                            {/* Accordion Content */}
                                            {openIndex === index && (
                                                <div>
                                                    <div className="py-2 rounded-lg mb-6">
                                                        <p className="text-white font-bold">
                                                            {ingredient?.ingredient_tag}
                                                        </p>
                                                        <p className="text-white mt-4">{ingredient?.short_note}</p>
                                                    </div>

                                                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                                                        {/* Ingredient Image */}
                                                        {/* <div className="w-full lg:w-1/2 flex justify-center">
                                                        {ingredient?.ingredient_image && <img
                                                            src={ingredient?.ingredient_image}
                                                            width={400} // Adjust size for mobile
                                                            height={400}
                                                            alt={ingredient?.ingredient_name}
                                                            className="w-[300px] md:w-[400px] lg:w-[600px] h-auto"
                                                            loading="lazy"
                                                        />}
                                                    </div> */}

                                                        {/* Benefits Section */}
                                                        <div className="w-full lg:w-2/2">
                                                            <div className="bg-white text-gray-600 text-sm font-semibold px-4 py-2 rounded-md w-fit mb-6">
                                                                Benefits
                                                            </div>

                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                                                                <div>
                                                                    <h3 className="text-lg font-semibold text-white mb-2">
                                                                        {ingredient.benefit1_name}
                                                                    </h3>
                                                                    <p className="text-white">{ingredient.benefit1_desc}</p>
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-lg font-semibold text-white mb-2">
                                                                        {ingredient.benefit2_name}
                                                                    </h3>
                                                                    <p className="text-white">{ingredient.benefit2_desc}</p>
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-lg font-semibold text-white mb-2">
                                                                        {ingredient.benefit3_name}
                                                                    </h3>
                                                                    <p className="text-white">{ingredient.benefit3_desc}</p>
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-lg font-semibold text-white mb-2">
                                                                        {ingredient.benefit4_name}
                                                                    </h3>
                                                                    <p className="text-white">{ingredient.benefit4_desc}</p>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            {/* Complete Kit Section */}
            <section className="bg-gradient-to-r from-yellow-500 to-orange-500 to-orange-400 px-4 lg:px-8 py-12 md:py-20">
                <div className='container m-auto'>
                    <div className="max-w-4xl grid md:grid-cols-1 gap-8 items-center">
                        <div className="text-white space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-9xl font-bold leading-tight max-w-4xl">
                                {productDetails?.section3_title}
                            </h2>
                            <div dangerouslySetInnerHTML={{ __html: productDetails?.section3_desc }} />
                            {/* <p className="text-xl md:text-2xl font-semibold max-w-4xl">
                                Everything you need, from prevention to relief in one trusted system!
                            </p>
                            <p className="text-lg leading-relaxed max-w-4xl">
                                The SinaVita® Migraine Support Kit combines tablets, nasal spray, inhalation drops, and a medical-grade mesh nebulizer into one synergistic package. From people with migraine, for people with migraine – so you are in charge, not the pain!
                            </p> */}

                            {/* <div className="space-y-3">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <Check className="w-6 h-6 flex-shrink-0" />
                                        <span className="text-lg">{feature}</span>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Limited Offer Section */}
            <section className="bg-gradient-to-r from-yellow-500 to-orange-500 to-orange-400 px-4 lg:px-8 py-12 md:py-20">
                <div className='container m-auto'>
                    <div className="max-w-4xl grid md:grid-cols-2 gap-12 items-center relative">
                        <div className="text-white space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-9xl font-bold leading-tight">
                                LIMITED OFFER
                            </h2>

                            <div dangerouslySetInnerHTML={{ __html: productDetails?.limited_desc }} />
                            <div className="md:block hidden">
                                <img
                                    src={productDetails?.limited_image}
                                    alt=""
                                    className="absolute top-0 bottom-0 left-[35%] w-[600px] h-[600px] object-cover"
                                />
                            </div>
                            {/* <p className="text-2xl md:text-3xl font-bold">
                                Get a FREE Nebulizer (value 99 USD)<br />with the first 100 kits ordered!
                            </p>

                            <div className="space-y-4">
                                <p className="text-xl font-semibold">Limited Pre-Launch Stock Available</p>
                                <p className="text-lg">once sold out, this offer will never return.</p>
                                <p className="text-lg">Your one-time opportunity to access SinaVita®'s</p>
                            </div> */}

                            <div className='mt-5'>
                                <Link href={`/product-cart/${id}`} className="bg-transparent border-4 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-orange-500 transition-all transform hover:scale-105 shadow-lg">
                                    CLAIM YOUR OFFER!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Section */}
            <section ref={qualitySectionRef} id="quality-section" className="bg-gradient-to-r from-yellow-500 to-orange-500 to-orange-400 px-4 lg:px-8 py-12 md:py-20">
                <div className='container m-auto'>
                    <div className="max-w-4xl grid md:grid-cols-1 gap-8 items-center">
                        <div className="text-white space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-9xl font-bold leading-tight max-w-4xl">
                                {productDetails?.section4_title}
                            </h2>

                            {/* <div className="space-y-2 max-w-4xl">
                                <p className="text-2xl font-bold">Certified Production</p>
                                <p className="text-2xl font-bold">Documented Ingredients</p>
                                <p className="text-2xl font-bold">Transparent Standards</p>
                            </div> */}

                            {/* <p className="text-lg leading-relaxed max-w-4xl">
                                At SinaVita®, we follow EU MDR 2017/745 standards for medical devices and EU dietary supplement regulations for our tablets. Every product is produced in Norway under GMP-quality guidelines, ensuring consistency, safety, and reliability.
                            </p> */}

                            {/* <div className="space-y-4 max-w-4xl" >
                                {qualityPoints.map((point, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-xl font-bold">{point.title}</p>
                                            <p className="text-lg">{point.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div> */}

                            <div dangerouslySetInnerHTML={{ __html: productDetails?.section4_desc }} />

                            <div className="p-9 mt-8 max-w-3xl" ref={stoppButtonRef}>
                                {/* <p className="text-lg ">
                                    If you're not fully satisfied with your SinaVita® Migraine Support Kit, you're covered by our <span className="font-bold">30-day satisfaction guarantee</span>.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default SinaVitaLanding;