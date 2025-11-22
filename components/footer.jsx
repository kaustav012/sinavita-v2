'use client'
import { BUSINESS_API } from "../services/product";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube
} from "react-icons/fa";

const Footer = ({ id }) => {

  const [businessData, setBusinessData] = useState([])
  useEffect(() => {
    const fetchRideTypes = async () => {
      try {
        const data = await BUSINESS_API();
        setBusinessData(data || []);
      } catch (error) {
        console.error("Error fetching ride types", error);
      }
    };

    fetchRideTypes();
  }, []);



  return (
    <footer className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-5 md:py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 hidden md:block">
          <h3 className="text-3xl font-semibold">
            <Link href="/" className="text-2xl font-bold">
              <Image src={businessData?.sections?.footer_logo || "/logo.png"} width={150} height={150} alt="" />
            </Link>
          </h3>
          <p className="text-lg px-3">&copy; {businessData?.sections?.copyright_text}</p>
        </div>

        {/* Center Section */}
        <div className="flex flex-wrap md:text-left">
          <div>
            <h3 className="text-xl">
              <Link href="/" className="hover:text-black">
                Home
              </Link>
            </h3>
            <h3 className="text-xl py-2">
              <Link href={id ? `/product-support/${id}` : "#"} className="hover:text-black">
                About Us
              </Link>
            </h3>
            <h3 className="text-xl">
              <Link href="/blog" className="hover:text-black">
                Blog
              </Link>
            </h3>
          </div>
          <div className="px-24 md:px-24 pb-10 md:pb-0">
            <h3 className="text-xl">
              <Link href={id ? `/product-faq/${id}` : "#"} className="hover:text-black">
                FAQ
              </Link>
            </h3>
            <h3 className="text-xl py-2">
              <Link href="/contact" className="hover:text-black">
                Contact
              </Link>
            </h3>
            <h3 className="text-xl ">
              <Link href="/login" className="hover:text-black">
                Login
              </Link>
            </h3>
          </div>
          <div>
            <h3 className="text-xl">
              <Link href="/terms" className="hover:text-black">
                Terms and Conditions
              </Link>
            </h3>
            <h3 className="text-xl py-2">
              <Link href="/privacy" className="hover:text-black">
                Privacy Policy
              </Link>
            </h3>
            <h3 className="text-xl">
              <Link href="/cookies" className="hover:text-black">
                Cookies
              </Link>
            </h3>
          </div>
        </div>

        {/* Right Section - Text and Social Media Icons */}
        <div className="text-center md:text-right mt-5 md:mt-0">
          {/* <p className="text-lg font-light">
            Text Us - Your 24/7 Immunity Consultants
          </p> */}
          <div className="flex space-x-4 justify-center md:justify-end mt-2">
            {
              businessData?.sections?.facebook_link && <Link href={businessData?.sections?.facebook_link}>
                <FaFacebookF className="text-2xl cursor-pointer hover:text-gray-200" />
              </Link>
            }
            {
              businessData?.sections?.insta_link && <Link href={businessData?.sections?.insta_link}>
                <FaInstagram className="text-2xl cursor-pointer hover:text-gray-200" />
              </Link>
            }
            {
              businessData?.sections?.twitter_link && <Link href={businessData?.sections?.twitter_link}>
                <FaTwitter className="text-2xl cursor-pointer hover:text-gray-200" />
              </Link>
            }
            {
              businessData?.sections?.FaYoutube && <Link href={businessData?.sections?.FaYoutube}>
                <FaTwitter className="text-2xl cursor-pointer hover:text-gray-200" />
              </Link>
            }

            {/* {
              businessData?.sections?.facebook_link && <Link href={businessData?.sections?.facebook_link}>
                <FaLinkedinIn className="text-2xl cursor-pointer hover:text-gray-200" />
              </Link>
            }
            {
              businessData?.sections?.facebook_link && <Link href={businessData?.sections?.facebook_link}>
                <FaTiktok className="text-2xl cursor-pointer hover:text-gray-200" />
              </Link>
            } */}




          </div>
        </div>
        <div className="mt-12 md:mb-0 flex items-end justify-between md:hidden block">
          <h3 className="text-3xl font-semibold">
            <Link href="/" className="text-2xl font-bold">
              <Image src="/logo.png" width={150} height={150} alt="" />
            </Link>
          </h3>
          <p className="text-lg px-3">&copy; {businessData?.sections?.copyright_text}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

