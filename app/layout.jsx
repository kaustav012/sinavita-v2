"use client";

import localFont from "next/font/local";
import "./globals.css";
import {
  OrderProvider,
  AddressProvider,
  BusinessProvider,
  AuthProvider,
  CartProvider
} from "@/services/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/header";
// Load the custom font
const ravennaFont = localFont({
  src: "/fonts/ravenna-serial-extrabold-regular.ttf",
  variable: "--font-ravenna",
  weight: "100 800",
  style: "normal",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ravennaFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OrderProvider>
          <AddressProvider>
            <BusinessProvider>
              <AuthProvider>
                <CartProvider>
                  {children}
                  <ToastContainer position="top-center" autoClose={3000} />
                </CartProvider>
              </AuthProvider>
            </BusinessProvider>
          </AddressProvider>
        </OrderProvider>
      </body>
    </html>
  );
}
