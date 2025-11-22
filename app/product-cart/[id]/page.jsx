"use client";
import { Button } from "../../../components/ui/button";
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
import CartBottol from "./CartBottol";
import Image360Viewer from "./components/Image360Viewer";
import { useParams } from "next/navigation";
import { PRODUCT_CART_BY_ID, PRODUCT_DETAILS_BY_ID, PRODUCT_IMAGE_SEQUENCE_BY_ID } from "../../../services/product";
import LoadingText from "../../../components/LoadingText";
import { useCart } from "../../../services/context/CartContext";

export default function Page() {
  const { addToCart } = useCart();


  const [selectedOption, setSelectedOption] = useState("single");
  const { id } = useParams(); // Get the ID from the URL

  const [loading, setLoading] = useState(true);
  const [productCartData, setProductCartData] = useState([])
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

  const [productDetails, setProductDetails] = useState([])
  const [imageSequence, setImageSequence] = useState([])
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
          console.error("Error fetching product details:", detailsResult.reason);
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

  return (
    loading ?
      <LoadingText /> :
      <div className="min-h-screen bg-white">
        <Header id={productCartData?.product_id} />
        {/* Main Product Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative flex align-center justify-center aspect-square bg-white rounded-lg image-360-cart-product">
              <Image360Viewer imageSequence={imageSequence} />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray mb-2">
                  {productCartData?.title}
                </h1>
                <p className="text-gray-600">
                  {productCartData?.section1_short_note}
                </p>
              </div>

              <h2 className="text-5xl font-bold pb-6"> {productCartData?.call_to_action}</h2>

              <RadioGroup
                value={selectedOption}
                onValueChange={setSelectedOption}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Monthly Subscription */}
                  <Label htmlFor="single" className="cursor-pointer block">
                    <div className="relative">
                      <div
                        className={`relative bg-gray-100 rounded-2xl pt-8 pb-4 px-6 ${selectedOption === "single"
                          ? "ring-2 ring-[#f97316]"
                          : ""
                          }`}
                      >
                        <div className="absolute text-xl w-100 -top-4 left-0  bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-2 px-6 rounded-md">
                          SINGLE PURCHASE
                        </div>
                        <div className="absolute -top-8 -right-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold w-16 h-16 flex items-center justify-center rounded-full">
                          ${productCartData?.product?.single_price}
                        </div>
                        <div className="space-y-2 mt-4 flex items-start gap-3">
                          <div className="mt-2">
                            <RadioGroupItem value="single" id="single" />
                          </div>
                          <div>
                            <div dangerouslySetInnerHTML={{ __html: productCartData?.product?.single_price_desc }} />
                          </div>

                        </div>
                      </div>
                    </div>
                  </Label>

                  {/* 4-Bottle Subscription */}
                  <Label
                    htmlFor="monthly"
                    className="cursor-pointer block mt-6 md:mt-0"
                  >
                    <div className="relative">
                      <div
                        className={`relative bg-gray-100 rounded-2xl pt-8 pb-4 px-6 ${selectedOption === "monthly" ? "ring-2 ring-[#f97316]" : ""
                          }`}
                      >
                        <div className="absolute text-xl -top-4 w-100 left-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-2 px-6 rounded-md">
                          SUBSCRIBE AND SAVE
                        </div>
                        <div className="absolute -top-8 -right-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold w-16 h-16 flex items-center justify-center rounded-full">
                          ${productCartData?.product?.subscription_price}/M
                        </div>
                        <div className="space-y-2 flex items-start  gap-3">
                          <div className="mt-2 ">
                            <RadioGroupItem value="monthly" id="monthly" />
                          </div>
                          <div>
                            <div dangerouslySetInnerHTML={{ __html: productCartData?.product?.subscription_price_desc }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              <div className="grid gap-4">
                <Link href="/cart">
                  <Button
                    onClick={() => addToCart(productCartData, selectedOption === "single" ? productCartData?.product?.single_price : productCartData?.product?.subscription_price, selectedOption)}
                    className="py-6 w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white text-lg font-bold"
                    variant="outline"
                  >
                    Add To Cart
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside Section */}
        <IngredientsSection productCartData={productCartData} />
        <MechanismSection productCartData={productCartData} />
        {/* <Testimonials /> */}
        <CardScrollCart productDetails={productDetails} />
        <MarqueeComponents productDetails={productDetails} />
        <MigrainSupport productDetails={productDetails} id={productDetails?.id} />
        <Footer productDetails={productDetails} id={productDetails?.id} />
      </div>
  );
}
