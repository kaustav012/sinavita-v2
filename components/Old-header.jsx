"use client";
import Link from "next/link";
import { useState } from "react";
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Globe,
    ShoppingCart,
    User,
    Menu,
    X,
} from "lucide-react";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full">
            {/* Top Bar */}
            {/* <div className="py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-2">
          <Link href="/login" className="hover:text-gray-600">
            Login
          </Link>
          <p>/</p>
          <Link href="/registration" className="hover:text-gray-600">
            Sign-Up
          </Link>
        </div>
      </div> */}

            {/* Main Navigation */}
            <div className="container mx-auto px-4 lg:rounded-3xl pt-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="">
                        <Image src="/logo.png" width={150} height={150} alt="" />
                        <p className="text-sm">
                            Advanced Health Solutions, Backed by Science
                        </p>
                    </Link>
                    {/* Hamburger Menu */}
                    <button
                        className="sm:hidden p-2 text-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden sm:flex items-center gap-8">
                        <div className="flex items-center gap-5 ml-8">
                            <Link href="/cart" className="hover:text-gray-600 flex gap-2">
                                <ShoppingCart />
                                <span className="text-lg font-semibold">Cart</span>
                            </Link>
                            <Link
                                href="/login"
                                className="hover:text-gray-600 flex items-center gap-2"
                            >
                                <User />
                                <span className="text-lg font-semibold">Login</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-gray-100">
                    <nav className="flex flex-col items-start gap-4 p-4">
                        <div className="flex items-center gap-4 w-full">
                            <Link href="/cart" className="hover:text-gray-600">
                                <ShoppingCart />
                            </Link>
                            <Link
                                href="/dashboard"
                                className="hover:text-gray-600 flex items-center gap-2"
                            >
                                <User />
                                <span>User name</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
