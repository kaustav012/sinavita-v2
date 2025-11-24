'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MigrainSupport = ({ id, productCartData }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
      <section
        className="py-16 md:py-24 px-4 container mx-auto"
        aria-label="Newsletter"
      >
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:text-left">
            <div className="gap-0">
              <h2 className="text-6xl lg:text-9xl lg-text uppercase font-bold text-white">
                {productCartData?.product?.call_to_action_text}
              </h2>
              <Link className="flex" href={id ? `/product-support/${id}` : "#"}>
                <h2 className="text-6xl lg:text-9xl uppercase font-bold text-white ">
                  Support
                </h2>
                <div className="rotate-45 mt-2 mx-2">
                  <Image
                    src="/arrow-up-right.png"
                    width={100}
                    height={50}
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MigrainSupport;
