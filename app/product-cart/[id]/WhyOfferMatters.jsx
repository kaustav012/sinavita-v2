"use client";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export default function WhyOfferMatters({ productCartData, id }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16 px-6 md:px-20">
      <div className="container mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl md:text-9xl font-bold mb-8 uppercase">
          {productCartData?.section4_title}
        </h2>

        {productCartData?.reasons?.map((ele, index) => {
          const isOpen = openIndex === index; // <-- FIXED (Define Here)

          return (
            <div key={index} className="mb-6">

              {/* ACCORDION TRIGGER */}
              <div className="space-y-1 text-lg font-semibold w-[50%]">
                <button
                  className="block underline text-white hover:text-white/90 transition-colors text-left"
                  onClick={() => handleToggle(index)}
                >
                  {ele?.reason}
                </button>
              </div>

              {/* ACCORDION CONTENT */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: ele?.description || "",
                  }}
                />
              </div>
            </div>
          );
        })}
        <hr />
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: productCartData?.section5_desc || "",
          }}
        />
        <div style={{
          marginTop: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}>
          <Link
            href={id ? `/product-cart/${id}` : "#"}
            className="bg-transparent border-4 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-orange-500 transition-all transform hover:scale-105 shadow-lg w-full md:w-auto"
          >
            CLAIM YOUR OFFER!
          </Link>
          <p className="pt-4">🔒 Secure Checkout — Encrypted & Protected</p>
        </div>
      </div>
    </section>
  );
}
