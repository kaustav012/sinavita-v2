"use client";
import { Button } from "../../../components/ui/button";
import { Shield, CheckCircle, Calendar, Lock } from "lucide-react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { Label } from "../../../components/ui/label";
import { IngredientsSection } from "../../../components/ingredients-section";
import { MechanismSection } from "../../../components/mechanism-section";
import { motion } from "framer-motion";
import Link from "next/link";
import MigrainSupport from "../../../components/MigrainSupport";
import CardScrollCart from "../../product/components/CardScrollCart";
import MarqueeComponents from "../../product/components/MarqueeComponents";
import MigraineKitSection from "./MigraineKitSection";
import MigraineOfferSection from "./MigraineOfferSection";
import WhyOfferMatters from "./WhyOfferMatters";


import { useParams } from "next/navigation";
import {
    PRODUCT_CART_BY_ID,
    PRODUCT_DETAILS_BY_ID,
    PRODUCT_IMAGE_SEQUENCE_BY_ID,
} from "../../../services/product";
import LoadingText from "../../../components/LoadingText";
import { useCart } from "../../../services/context/CartContext";

export default function Page() {
    const { addToCart } = useCart();

    const [selectedOption, setSelectedOption] = useState("single");
    const { id } = useParams(); // Get the ID from the URL

    const [loading, setLoading] = useState(true);
    const [productCartData, setProductCartData] = useState([]);
    useEffect(() => {
        const fetchRideTypes = async () => {
            setLoading(true);
            try {
                const data = await PRODUCT_CART_BY_ID(id);
                setProductCartData(data || []);
            } catch (error) {
                console.error("Error fetching ride types", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRideTypes();
    }, [id]);

    const [productDetails, setProductDetails] = useState([]);
    const [imageSequence, setImageSequence] = useState([]);
    useEffect(() => {
        const fetchRideTypes = async () => {
            setLoading(true);

            try {
                const [detailsResult, imagesResult] = await Promise.allSettled([
                    PRODUCT_DETAILS_BY_ID(id),
                    PRODUCT_IMAGE_SEQUENCE_BY_ID(id),
                ]);

                if (detailsResult.status === "fulfilled") {
                    setProductDetails(detailsResult.value || []);
                } else {
                    console.error(
                        "Error fetching product details:",
                        detailsResult.reason
                    );
                }

                if (imagesResult.status === "fulfilled") {
                    setImageSequence(imagesResult.value || []);
                } else {
                    console.error("Error fetching image sequence:", imagesResult.reason);
                }
            } catch (error) {
                console.error("Unexpected error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRideTypes();
    }, [id]);

    const badges = [
        {
            icon: Shield,
            title: "EU MDR",
            subtitle: "Certified",
        },
        {
            icon: CheckCircle,
            title: "GMP Quality",
            subtitle: "Verified",
        },
        {
            icon: Calendar,
            title: "30-Day",
            subtitle: "Guarantee",
        },
        {
            icon: Lock,
            title: "Secure",
            subtitle: "Payment",
        },
    ];

    return loading ? (
        <LoadingText />
    ) : (
        <div className="min-h-screen bg-white">
            <Header id={productCartData?.product_id} />
            {/* Main Product Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-8 items-start py-12">
                    {/* 🟠 Image Section */}
                    <div className="relative flex items-center justify-center bg-white rounded-full p-8 border-[4px] border-[#f36c21] w-[380px] h-[380px] md:w-[650px] md:h-[650px] mx-auto">
                        <div className="relative w-[80%] flex items-center justify-center">
                            <img
                                // src="/image/cta_img.png"
                                src={productCartData?.product?.section1_image}

                                alt="SinaVita Migraine Support Kit"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* 🟠 Text + Options Section */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray-800 mb-2">
                                {productCartData?.title}
                            </h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        productCartData?.section1_short_note || "",
                                }}
                            />
                            {/* <p className="text-gray-600">
                {productCartData?.section1_short_note}
              </p> */}
                        </div>

                        <h2 className="text-5xl font-bold pb-6 text-[#f36c21]">
                            {productCartData?.call_to_action}
                        </h2>

                        <RadioGroup
                            value={selectedOption}
                            onValueChange={setSelectedOption}
                            className="space-y-4"
                        >
                            <div className="grid md:grid-cols-2 gap-4">
                                {/* 🟠 Single Purchase */}
                                <Label htmlFor="single" className="cursor-pointer block">
                                    <div className="relative">
                                        <div
                                            className={`relative bg-gray-100 rounded-2xl pt-8 pb-4 px-6 ${selectedOption === "single"
                                                ? "ring-2 ring-[#f97316]"
                                                : ""
                                                }`}
                                        >
                                            <div className="absolute text-xl w-100 -top-4 left-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-2 px-6 rounded-md">
                                                SINGLE PURCHASE
                                            </div>
                                            <div className="absolute -top-8 -right-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold w-16 h-16 flex items-center justify-center rounded-full">
                                                ${productCartData?.product?.single_price}
                                            </div>
                                            <div className="space-y-2 flex items-start gap-3">
                                                <div className="mt-2">
                                                    <RadioGroupItem value="single" id="single" />
                                                </div>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            productCartData?.product?.single_price_desc || "",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Label>

                                {/* 🟠 Monthly Subscription */}
                                <Label
                                    htmlFor="monthly"
                                    className="cursor-pointer block mt-6 md:mt-0"
                                >
                                    <div className="relative">
                                        <div
                                            className={`relative bg-gray-100 rounded-2xl pt-8 pb-4 px-6 ${selectedOption === "monthly"
                                                ? "ring-2 ring-[#f97316]"
                                                : ""
                                                }`}
                                        >
                                            <div className="absolute text-xl -top-4 w-100 left-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-2 px-6 rounded-md">
                                                SUBSCRIBE AND SAVE
                                            </div>
                                            <div className="absolute -top-8 -right-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold w-16 h-16 flex items-center justify-center rounded-full">
                                                ${productCartData?.product?.subscription_price}/M
                                            </div>
                                            <div className="space-y-2 flex items-start gap-3">
                                                <div className="mt-2">
                                                    <RadioGroupItem value="monthly" id="monthly" />
                                                </div>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            productCartData?.product
                                                                ?.subscription_price_desc || "",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Label>
                            </div>
                        </RadioGroup>

                        {/* 🟠 Add to Cart Button */}
                        <div className="grid gap-4">
                            <Link href="/cart">
                                <Button
                                    onClick={() =>
                                        addToCart(
                                            productCartData,
                                            selectedOption === "single"
                                                ? productCartData?.product?.single_price
                                                : productCartData?.product?.subscription_price,
                                            selectedOption
                                        )
                                    }
                                    className="py-6 w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white text-lg font-bold"
                                    variant="outline"
                                >
                                    GET YOUR KIT TODAY!
                                </Button>
                            </Link>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {productCartData?.product?.trust_badges?.map((badge, index) => {

                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center text-center space-y-3"
                                        >
                                            {/* <Icon
                        className="w-12 h-12 md:w-16 md:h-16 text-slate-600 stroke-[1.5]"
                        strokeWidth={1.5}
                      /> */}
                                            <img className="w-20 h-20 md:w-40 md:h-40 text-slate-600 stroke-[1.5]" src={badge?.badge_image_url} alt={badge.badge_title} />
                                            <div>
                                                {/* <h3 className="text-slate-700 font-bold text-base md:text-lg leading-tight">
                          {badge.badge_title}
                        </h3> */}
                                                {/* <p className="text-slate-700 font-bold text-base md:text-lg leading-tight">
                          {badge.badge_title}
                        </p> */}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MigraineKitSection id={productDetails?.id} productCartData={productCartData} />

            {/* What's Inside Section */}
            <IngredientsSection productCartData={productCartData} />
            <MigraineOfferSection productCartData={productCartData} />
            <WhyOfferMatters productCartData={productCartData} id={productDetails?.id} />

            <MigrainSupport productDetails={productDetails} id={productDetails?.id} productCartData={productCartData} />
            <Footer productDetails={productDetails} id={productDetails?.id} />
        </div>
    );
} t   