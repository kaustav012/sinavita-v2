"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function ProductShowcase({ product }) {
  return (
    <section className="w-full py-16 md:py-24 px-4">
      <Swiper
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile
          640: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 3 }, // Small Screens
          1280: { slidesPerView: 4 }, // Large Screens
        }}
        className="w-full py-16 md:py-24"
      >
        {product?.map((product, index) => (
          <SwiperSlide key={index} className="flex justify-center align-center">
            <div className="relative w-full rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Link href={`/product/${product?.id}`}>
                  {product.featured_image && <Image
                    loading="lazy"
                    src={product.featured_image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />}
                </Link>
              </div>
              {/* Product Details */}
              <div

                className="w-full text-center p-4 product-showcase-Button">
                <Link href={`/product/${product?.id}`}>
                  <Button
                    variant="secondary"
                    className="text-sm px-20 py-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
