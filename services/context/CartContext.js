"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../product";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [token, setToken] = useState(null);
    const [tax, setTax] = useState(null)
    const [total, setTotal] = useState(null)
    const [taxRate, setTaxRate] = useState(0); // dynamic tax rate
    const [taxLoading, setTaxLoading] = useState(false)
    const [taxParcentage, setTaxParcentage] = useState(0)
    // 🔐 Load token safely
    useEffect(() => {
        const storedToken = localStorage.getItem("userToken");
        setToken(storedToken);
    }, []);

    // 🛒 Load initial cart
    useEffect(() => {
        if (token) {
            fetchServerCart();
        } else {
            const localCart = getCartFromLocalStorage();
            setCartItems(localCart);
        }
    }, [token]);

    // 📥 Get local cart
    const getCartFromLocalStorage = () => {
        try {
            const stored = localStorage.getItem("cart");
            const parsed = stored ? JSON.parse(stored) : [];

            if (Array.isArray(parsed)) return parsed;
            if (parsed && Array.isArray(parsed.items)) return parsed.items;

            return [];
        } catch (e) {
            console.error("Failed to parse local cart", e);
            return [];
        }
    };

    // 📤 Set local cart
    const setCartToLocalStorage = (cart) => {
        try {
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch (e) {
            console.error("Failed to set cart in localStorage", e);
        }
    };

    // 🌐 Fetch cart from server
    const fetchServerCart = async () => {
        try {
            const res = await axios.get("/api/cart", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setCartItems(res.data?.data || []);
        } catch (err) {
            console.error("Error fetching server cart", err);
        }
    };

    // ➕ Add to Cart
    const addToCart = async (product, price, subscriptionType) => {
        // console.log("subscriptionType: ", subscriptionType);

        if (token) {
            try {
                if (!Array.isArray(cartItems)) {
                    console.warn("Local cart is invalid. Resetting.");
                    setCartItems([]);
                    return;
                }

                const exists = cartItems.find(
                    (item) => item.product_id === product.product_id
                );

                if (!exists) {
                    const selectedProduct = {
                        product_id: product.product_id,
                        title: product.title,
                        price: price,
                        image: product?.product?.featured_image,
                        subscription_type: subscriptionType
                    };

                    const updatedCart = [...cartItems, selectedProduct];
                    setCartItems(updatedCart);
                    setCartToLocalStorage(updatedCart);
                }
                await axios.post(
                    `${BASE_URL}/user/add-cart`,
                    { product_id: product.product_id, quantity: 1 },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                fetchServerCart();
            } catch (error) {
                console.error("Error adding to server cart", error);
            }
        } else {
            if (!Array.isArray(cartItems)) {
                console.warn("Local cart is invalid. Resetting.");
                setCartItems([]);
                return;
            }

            const exists = cartItems.find(
                (item) => item.product_id === product.product_id
            );

            if (!exists) {
                const selectedProduct = {
                    product_id: product.product_id,
                    title: product.title,
                    price: price,
                    image: product?.product?.featured_image
                };

                const updatedCart = [...cartItems, selectedProduct];
                setCartItems(updatedCart);
                setCartToLocalStorage(updatedCart);
            }
        }
    };

    // ➖ Remove from cart
    const removeFromCart = async (productId) => {
        if (token) {
            const updatedCart = cartItems.filter(
                (item) => item.product_id !== productId
            );
            setCartItems(updatedCart);
            setCartToLocalStorage(updatedCart);
            // try {
            //     await axios.delete(`/api/cart/${productId}`, {
            //         headers: { Authorization: `Bearer ${token}` },
            //     });
            //     fetchServerCart();
            // } catch (error) {
            //     console.error("Error removing from server cart", error);
            // }
        } else {
            const updatedCart = cartItems.filter(
                (item) => item.product_id !== productId
            );
            setCartItems(updatedCart);
            setCartToLocalStorage(updatedCart);
        }
    };

    // 🧹 Clear Cart
    const clearCart = () => {
        if (token) {
            localStorage.removeItem("cart");
        } else {
            setCartItems([]);
            localStorage.removeItem("cart");
        }
    };

    // 💰 Order summary calculations
    const subtotal = cartItems.reduce(
        (acc, item) =>
            acc + Number(item.price || 0) * (item.subscription_type === "single" ? 1 : 12),
        0
    );




    const fetchTaxRate = async () => {
        setTaxLoading(true)
        try {
            const response = await axios.get(`${BASE_URL}/tax-data`, {
                headers: {
                    Accept: 'application/json',
                },
            });

            const percentage = parseFloat(response?.data?.data[0]?.percentage);
            setTaxParcentage(response?.data?.data[0]?.percentage);
            if (!isNaN(percentage)) {
                setTaxRate(percentage / 100); // convert to decimal
            }
            setTaxLoading(false)
        } catch (error) {
            console.error('Failed to fetch tax data:', error);
            setTaxLoading(false)
        }
    };

    const handleTaxt = (subtotal) => {
        console.log("taxRate: ", taxRate);

        const tax = parseFloat((subtotal * taxRate).toFixed(2));
        const total = parseFloat((subtotal + tax).toFixed(2));
        setTax(tax);
        setTotal(total);
    };


    useEffect(() => {
        if (taxRate > 0) {
            handleTaxt(subtotal);
        }
    }, [subtotal, taxRate]);


    return (
        <CartContext.Provider
            value={{
                cartItems,
                taxLoading,
                addToCart,
                taxParcentage,
                removeFromCart,
                clearCart,
                getCartFromLocalStorage,
                subtotal,
                tax,
                total, // also referred to as payable amount
                fetchTaxRate
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
