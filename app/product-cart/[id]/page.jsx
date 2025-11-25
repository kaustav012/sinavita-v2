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

  const [selectedOption, setSelectedOption] = useState("monthly");
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [productCartData, setProductCartData] = useState([]);
  const [subPrice, setSubPrice] = useState(0);

  // Product Cart Data
  useEffect(() => {
    const fetchRideTypes = async () => {
      setLoading(true);
      try {
        const data = await PRODUCT_CART_BY_ID(id);
        setProductCartData(data || []);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRideTypes();
  }, [id]);

  // Product Details + Image Section
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
        }
        if (imagesResult.status === "fulfilled") {
          setImageSequence(imagesResult.value || []);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRideTypes();
  }, [id]);

  const subscriptionPackage = [
    {
      id: "monthly",
      label: "MONTHLY PLAN",
      price: productCartData?.product?.single_price,
      description:
        productCartData?.product?.single_price_desc || "Monthly supply",
    },
    {
      id: "subscription",
      label: "Subscription PLAN",
      price: productCartData?.product?.subscription_price,
      description:
        productCartData?.product?.subscription_price_desc ||
        "Delivery every 2 months",
    },
  ];

  const subscriptionOptions = [
    {
      id: "3_monthly",
      label: "3 MONTH",
      price: productCartData?.product?.single_price * 1,
      description:
        productCartData?.product?.subscription_price_desc || "Monthly supply",
    },
    {
      id: "6_monthly",
      label: "6 MONTH",
      price: productCartData?.product?.single_price * 2,
      description:
        productCartData?.product?.subscription_price_desc ||
        "Delivery every 2 months",
    },
    {
      id: "12_monthly",
      label: "12 MONTH",
      price: productCartData?.product?.single_price * 3,
      description:
        productCartData?.product?.subscription_price_desc ||
        "Delivery every 3 months",
    },
  ];

  // Handler for plan change (monthly vs subscription)
  const handlePlanChange = (value) => {
    console.log("value: ", value);

    if (value === "subscription") {
      setSubPrice(productCartData?.product?.subscription_price)
      // When subscription is selected, default to first subscription option
      setSelectedOption("3_monthly");
    } else {
      setSubPrice(productCartData?.product?.single_price)
      // When monthly is selected
      setSelectedOption("monthly");
    }
  };

  return loading ? (
    <LoadingText />
  ) : (
    <div className="min-h-screen bg-white">
      <Header id={productCartData?.product_id} />

      {/* Main Product Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-start py-12">
          {/* Image */}
          <div className="relative flex items-center justify-center bg-white rounded-full p-8 border-[4px] border-[#f36c21] w-[380px] h-[380px] md:w-[650px] md:h-[650px] mx-auto">
            <div className="relative w-[80%] flex items-center justify-center">
              <img
                src={productCartData?.product?.section1_image}
                alt="Sinavita"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray-800 mb-2">
                {productCartData?.title}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: productCartData?.section1_short_note || "",
                }}
              />
            </div>

            <h2 className="text-5xl font-bold pb-6 text-[#f36c21]">
              {productCartData?.call_to_action}
            </h2>

            {/* Subscription Package Options */}
            <RadioGroup
              value={selectedOption === "monthly" ? "monthly" : "subscription"}
              onValueChange={handlePlanChange}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {subscriptionPackage.map((option) => (
                  <Label
                    key={option.id}
                    htmlFor={option.id}
                    className="cursor-pointer block mb-5"
                  >
                    <div className="relative">
                      <div
                        className={`relative bg-gray-100 rounded-2xl pt-8 pb-4 px-6 ${(option.id === "monthly" && selectedOption === "monthly") ||
                          (option.id === "subscription" && selectedOption !== "monthly")
                          ? "ring-2 ring-[#f97316]"
                          : ""
                          }`}
                      >
                        <div className="absolute text-xl w-100 -top-4 left-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-2 px-6 rounded-md">
                          {option.label}
                        </div>

                        <div className="absolute -top-8 -right-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold w-20 h-20 flex items-center justify-center rounded-full">
                          ${option.price}/M
                        </div>

                        <div className="space-y-2 flex items-start gap-3">
                          <div className="mt-2">
                            <RadioGroupItem value={option.id} id={option.id} />
                          </div>

                          <div
                            dangerouslySetInnerHTML={{
                              __html: option.description,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Label>
                ))}
              </div>
            </RadioGroup>

            {/* Subscription Duration Options - Only shown when subscription is selected */}
            {selectedOption !== "monthly" && (
              <RadioGroup
                value={selectedOption}
                onValueChange={setSelectedOption}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  {subscriptionOptions.map((option) => (
                    <Label
                      key={option.id}
                      htmlFor={option.id}
                      className="cursor-pointer block"
                    >
                      <div
                        className={`relative bg-gray-50 rounded-2xl p-3 transition-all ${selectedOption === option.id
                          ? "ring-2 ring-[#f97316] shadow-lg"
                          : "hover:bg-gray-100"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem
                            value={option.id}
                            id={option.id}
                            className="w-5 h-5"
                          />
                          <div className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-6 rounded-lg text-center text-lg">
                            {option.label}
                          </div>
                        </div>
                      </div>
                    </Label>
                  ))}
                </div>
              </RadioGroup>
            )}

            {/* Button */}
            <div className="grid gap-4">
              <Link href="/cart">
                <Button
                  onClick={() =>
                    addToCart(
                      productCartData,
                      subPrice,
                      selectedOption
                    )
                  }
                  className="py-6 w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg font-bold"
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
                      <img
                        className="w-20 h-20 md:w-40 md:h-40 text-slate-600 stroke-[1.5]"
                        src={badge?.badge_image_url}
                        alt={badge.badge_title}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MigraineKitSection id={productDetails?.id} productCartData={productCartData} />
      <IngredientsSection productCartData={productCartData} />
      <MigraineOfferSection productCartData={productCartData} />
      <WhyOfferMatters productCartData={productCartData} id={productDetails?.id} />

      <MigrainSupport productDetails={productDetails} id={productDetails?.id} />
      <Footer productDetails={productDetails} id={productDetails?.id} />
    </div>
  );
}