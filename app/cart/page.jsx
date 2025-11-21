"use client";

import Image from "next/image";
import { MinusCircle, PlusCircle, Loader2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { useCart } from "@/services/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import LoadingText from "@/components/LoadingText";
import { PRODUCT_LIST } from "@/services/product";
import Link from "next/link";
export default function ShoppingCart() {
  const { cartItems, removeFromCart, subtotal, tax, total, taxLoading, fetchTaxRate, taxParcentage } = useCart();

  console.log("cartItems: ", cartItems);

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
      const cartProductIds = cartItems.map(item => item.product_id);
const filtered = (data || []).filter(
  (product) => !cartProductIds.includes(product.id)
);

      setRecommendedProducts(filtered);
      console.log("All products:", data);
console.log("Cart product IDs:", cartProductIds);
console.log("Filtered recommended products:", filtered);

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
      // Not authenticated — redirect to login and pass redirect path
      router.push("/login?redirect=/checkout");
      return;
    }

    // Authenticated — proceed to checkout
    setTimeout(() => {
      setLoadingTwo(false);
      router.push("/checkout");
    }, 2000);
  };



  return (
    taxLoading ?
      <LoadingText /> :
      <div>
        <Header />
        {cartItems?.length === 0 ?
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="bg-yellow-100 text-yellow-700 p-4 rounded-full mb-6">
              <FaShoppingCart className="w-10 h-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Looks like you haven’t added anything to your cart yet.
            </p>
            <Button
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg text-base hover:scale-105 transition-transform duration-200"
              onClick={() => router.push("/")}
            >
              Start Shopping
            </Button>
          </div> :
          <div className="flex justify-center pt-20">
            <div className="container">
              <h1 className="text-3xl md:text-4xl lg:text-8xl font-bold mb-4 md:mb-12 px-4" style={{ textTransform: 'uppercase' }}>
                Shopping Cart
              </h1>

              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="overflow-hidden border-none shadow-lg p-4 md:p-6">
                    <div className="overflow-x-auto">
                      {/* Table wrapper for small screens */}
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
                                className="group"
                              >
                                <td className="p-4 md:p-6">
                                  <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 group-hover:shadow-md transition-shadow duration-200">
                                      <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                      />
                                    </div>
                                    <div className="space-y-1">
                                      <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm md:text-base">
                                        {item.title}
                                      </h3>
                                      <p className="font-bold">{item.subscription_type !== "single" && "12 x"} ${item?.price}{item.subscription_type !== "single" && "/"}{item.subscription_type === "single" ? null : item?.subscription_type}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-4 md:p-6">
                                  <span className="font-medium text-sm md:text-base">${item.price}</span>
                                </td>
                                <td className="p-4 md:p-6">
                                  <span className="font-medium text-sm md:text-base">
                                    ${item.price * (item.subscription_type === "single" ? 1 : 12)}
                                  </span>
                                </td>
                                <td className="p-4 md:p-6">
                                  <Button
                                    variant="ghost"
                                    className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors text-sm md:text-base"
                                    onClick={() => removeFromCart(item.product_id)}
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
                        {
                          cartItems?.map((item, index) => {
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
                                    <p className="font-bold">{item.subscription_type !== "single" && "12 x"} ${item?.price}{item.subscription_type !== "single" && "/"}{item.subscription_type === "single" ? null : item?.subscription_type}</p>
                                  </div>
                                </div>

                                {/* <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-lg p-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-7 w-7 hover:bg-white dark:hover:bg-gray-700 rounded-md transition-colors"
                                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                  <MinusCircle className="h-4 w-4" />
                                </Button>
                                <input
                                  type="number"
                                  value={quantity}
                                  onChange={(e) =>
                                    setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))
                                  }
                                  className="w-10 h-7 text-center bg-transparent border-none focus:outline-none focus:ring-0 text-sm"
                                  min="1"
                                />
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-7 w-7 hover:bg-white dark:hover:bg-gray-700 rounded-md transition-colors"
                                  onClick={() => setQuantity(quantity + 1)}
                                >
                                  <PlusCircle className="h-4 w-4" />
                                </Button>
                              </div>
                              <span className="font-medium text-sm">
                                ${(price * quantity).toFixed(2)}
                              </span>
                            </div> */}

                                <Button
                                  variant="ghost"
                                  className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors text-sm"
                                >
                                  Remove
                                </Button>
                              </motion.div>
                            )
                          })
                        }

                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            Sub Total
                          </span>
                          <span className="font-medium">
                            ${subtotal}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">
                            Tax ({taxParcentage}%)
                          </span>
                          <span className="font-medium">
                            ${tax}
                          </span>
                        </div>
                        <div className="pt-4 border-t">
                          <div className="flex justify-between">
                            <span className="font-semibold">Total</span>
                            <span className="font-semibold">
                              ${total}
                            </span>
                          </div>
                        </div>
                        <Button
                          className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-white rounded-lg px-20 py-6 text-lg font-medium transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.02]"
                          onClick={handleCheckout}
                          disabled={loadingTwo}
                        >
                          {loadingTwo ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          ) : null}
                          {loadingTwo ? "Processing..." : "Proceed to Checkout"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>


                </div>
              </div>
            </div>
          </div>

        }
        <div className="flex flex-col items-center justify-center mt-20">
  <h2 className="text-2xl font-semibold mb-10">Recommended for you</h2>
  {loadingProducts ? (
    <p className="text-center text-gray-500">Loading...</p>
  ) : (
    <div className="border rounded-2xl shadow-xl bg-gray-50 container flex flex-wrap gap-10 items-center justify-center py-10 mb-20">
      {recommendedProducts.map((product) => (
        <Link href={`/product/${product?.id}`}>
        <Card
          key={product.id}
          className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative w-full h-80 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={product.featured_image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{product.name}</h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-bold">${product.single_price}</p>
        </Card>
        </Link>
      ))}
    </div>
  )}
</div>


        <Footer />
      </div>
  );
}
