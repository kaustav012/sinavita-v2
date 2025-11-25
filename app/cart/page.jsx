"use client";

import Image from "next/image";
import {
  MinusCircle,
  PlusCircle,
  Loader2,
  CreditCard,
  Shield,
  CheckCircle,
  Headphones,
  Book,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useRouter } from "next/navigation";
import { useCart } from "../../services/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import LoadingText from "../../components/LoadingText";
import { PRODUCT_LIST } from "../../services/product";

export default function ShoppingCart() {
  const {
    cartItems,
    removeFromCart,
    subtotal,
    tax,
    total,
    taxLoading,
    fetchTaxRate,
    taxParcentage,
  } = useCart();

  const router = useRouter();
  const [loadingTwo, setLoadingTwo] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      try {
        const data = await PRODUCT_LIST();
        const cartProductIds = cartItems.map((item) => item.product_id);
        const filtered = (data || []).filter(
          (product) => !cartProductIds.includes(product.id)
        );

        setRecommendedProducts(filtered);
        // console.log("All products:", data);
        // console.log("Cart product IDs:", cartProductIds);
        // console.log("Filtered recommended products:", filtered);
      } catch (error) {
        console.error("Error fetching recommended products:", error);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, [cartItems]);

  const price = 25;

  useEffect(() => {
    fetchTaxRate();
  }, []);

  const handleCheckout = () => {
    setLoadingTwo(true);
    const token = localStorage.getItem("userToken");

    if (!token) {
      router.push("/login?redirect=/checkout");
      return;
    }

    setTimeout(() => {
      setLoadingTwo(false);
      router.push("/checkout");
    }, 2000);
  };

  return taxLoading ? (
    <LoadingText />
  ) : (
    <div>
      <Header />
      {cartItems?.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center px-4 min-h-screen">
          <div className="bg-yellow-100 text-yellow-700 p-4 rounded-full mb-6">
            <FaShoppingCart className="w-10 h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg text-base hover:scale-105 transition-transform duration-200"
            onClick={() => router.push("/")}
          >
            Start Shopping
          </Button>
        </div>
      ) : (
        <div className="flex justify-center pt-20">
          <div className="container max-w-6xl px-4">
            {/* Security Badge */}
            <div className="flex items-center gap-2 mb-6 text-sm text-gray-700 dark:text-gray-300">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="font-medium">
                YOUR ORDER IS PROTECTED • EU MDR COMPLIANT – 100% SECURE
                CHECKOUT
              </span>
            </div>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
              style={{ textTransform: "uppercase" }}
            >
              Shopping Cart
            </h1>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-3">
                <div className="overflow-hidden border-none">
                  <div className="overflow-x-auto">
                    {/* Desktop Table */}
                    <div className="hidden md:block">
                      <table className="w-full min-w-[600px]">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-800">
                            <th className="text-left p-4 md:p-6">Product</th>
                            <th className="text-left p-4 md:p-6">Price</th>
                            {/* <th className="text-left p-4 md:p-6">Quantity</th> */}
                            <th className="text-left p-4 md:p-6">Total</th>
                            <th className="text-left p-4 md:p-6">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems?.map((item, index) => (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="group border-b border-gray-100 dark:border-gray-800"
                            >
                              <td className="p-4 md:p-6">
                                <div className="flex items-center gap-4">
                                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                                    <Image
                                      src={item.image}
                                      alt={item.title}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-base">
                                      {item.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                      Clinically designed for migraine support
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4 md:p-6">
                                <span className="font-bold text-lg">
                                  ${item.price}
                                </span>
                              </td>
                              <td className="p-4 md:p-6">
                                <span className="font-medium text-sm md:text-base">
                                  $
                                  {item.price *
                                    (item.subscription_type === "single"
                                      ? 1
                                      : 12)}
                                </span>
                              </td>
                              <td className="p-4 md:p-6">
                                <Button
                                  variant="ghost"
                                  className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors text-sm md:text-base"
                                  onClick={() =>
                                    removeFromCart(item.product_id)
                                  }
                                >
                                  Remove
                                </Button>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile View */}
                    <div className="md:hidden space-y-4">
                      {cartItems?.map((item, index) => {
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="border rounded-lg p-3 flex flex-col gap-4 bg-white dark:bg-gray-900"
                          >
                            <div className="flex gap-3">
                              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <Image
                                  src={item.image}
                                  alt="Product"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                                  {item.title}
                                </h3>
                                <p className="font-bold">${item?.price}</p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors text-sm"
                              onClick={() => removeFromCart(item.product_id)}
                            >
                              Remove
                            </Button>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="border-none">
                  <div className="px-6">
                    <div className="px-6 pb-6 flex justify-end">
                      <Button
                        className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md px-8 py-6 text-sm font-bold transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.02] uppercase"
                        onClick={handleCheckout}
                        disabled={loadingTwo}
                      >
                        {loadingTwo ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : null}
                        {loadingTwo ? "Processing..." : "Proceed to Checkout"}
                      </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                      <div className="flex flex-col items-center text-center">
                        <Shield className="w-8 h-8 text-gray-700 dark:text-gray-300 mb-2" />
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          Secure Check out
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Encrypted & Protected
                        </p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <CheckCircle className="w-8 h-8 text-gray-700 dark:text-gray-300 mb-2" />
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          EU/EEA Shipping
                        </p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Shield className="w-8 h-8 text-gray-700 dark:text-gray-300 mb-2" />
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          EU MDR Compliant
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Medical Devices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Boost Your Migraine Protection Section */}
            <div className="mt-16 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 uppercase">
                Boost Your Migraine Protection
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Audio Book */}
                {[...Array(6)].map((ele, index) => {
                  return (
                    <div className="overflow-hidden border hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div className="flex gap-4">
                          <div>
                            <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden mb-4">
                              <img
                                src="/image/Picture1.png"
                                alt="SinaVita Migraine Support Kit"
                                className="w-full h-auto rounded-lg"
                              />
                            </div>
                            <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                              BEST SELLER
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-bold text-lg mb-1">
                                  Migraine Release
                                </h3>
                                <p className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">
                                  Audio Book
                                </p>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                              Master advanced techniques to map and manage your
                              migraine triggers with this insightful audiobook.
                            </p>
                            <div className="flex items-center gap-2 mb-3">
                              <Headphones className="w-4 h-4 text-gray-600" />
                              <p className="text-sm font-bold">$37.00</p>
                              <span className="text-xs text-gray-500 italic">
                                Instant access today!
                              </span>
                            </div>
                            <Button
                              variant="outline"
                              className="w-full border-2 border-gray-900 dark:border-gray-100 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 uppercase"
                            >
                              Add to My Order
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Physical Book */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recommended Products */}
      {/* <div className="flex flex-col items-center justify-center py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Recommended for you
          </h2>
          {loadingProducts ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedProducts.slice(0, 3).map((product) => (
                <Link href={`/product/${product?.id}`} key={product.id}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={product.featured_image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-xl text-gray-900 dark:text-white font-bold">
                        ${product.single_price}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div> */}

      <Footer />
    </div>
  );
}
