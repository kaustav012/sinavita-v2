"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../product";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [token, setToken] = useState(null);

    const [tax, setTax] = useState(null);
    const [total, setTotal] = useState(null);
    const [taxRate, setTaxRate] = useState(0);
    const [taxLoading, setTaxLoading] = useState(false);
    const [taxParcentage, setTaxParcentage] = useState(0);

    /* -----------------------------------
     * LOAD AUTH TOKEN
     ----------------------------------- */
    useEffect(() => {
        const storedToken = localStorage.getItem("userToken");
        setToken(storedToken);
    }, []);

    /* -----------------------------------
     * LOAD CART BASED ON TOKEN
     ----------------------------------- */
    useEffect(() => {
        if (token) {
            fetchServerCart();
        } else {
            const localCart = getCartFromLocalStorage();
            setCartItems(localCart);
        }
    }, [token]);

    /* -----------------------------------
     * LOCAL CART GET/SET
     ----------------------------------- */
    const getCartFromLocalStorage = () => {
        try {
            const stored = localStorage.getItem("cart");
            const parsed = stored ? JSON.parse(stored) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (err) {
            console.error("Failed to parse local cart", err);
            return [];
        }
    };

    const setCartToLocalStorage = (cart) => {
        try {
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch (err) {
            console.error("Failed to set cart in localStorage", err);
        }
    };

    /* -----------------------------------
     * FETCH SERVER CART
     ----------------------------------- */
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

    /* -----------------------------------
     * SUBSCRIPTION TYPE → QTY MAPPING
     ----------------------------------- */
    const subscriptionQtyMap = {
        "monthly": 1,
        "3_monthly": 3,
        "6_monthly": 6,
        "12_monthly": 12
    };

    /* -----------------------------------
     * ADD TO CART
     ----------------------------------- */
    const addToCart = async (product, price, subscriptionType) => {
        console.log("product:", product);

        const productId = product?.product_id || product?.id;
        const quantity = subscriptionQtyMap[subscriptionType] || 1;

        // FIXED EXISTS CHECK ✔
        const exists = cartItems.find(
            (item) =>
                item.product_id === product?.product_id ||
                item.product_id === product?.id
        );

        /* -----------------------------------
         * IF PRODUCT NOT EXIST — ADD LOCALLY
         ----------------------------------- */
        if (!exists) {
            const selectedProduct = {
                product_id: productId,
                title: product.title || product.name,
                price: price * quantity,
                image: product?.product?.featured_image || product?.featured_image,
                subscription_type: subscriptionType,
                quantity: quantity
            };

            const updatedCart = [...cartItems, selectedProduct];
            setCartItems(updatedCart);
            setCartToLocalStorage(updatedCart);
        }

        // 🔐 If logged in, push to server
        if (token) {
            try {
                await axios.post(
                    `${BASE_URL}/user/add-cart`,
                    { product_id: productId, quantity },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                fetchServerCart();
            } catch (err) {
                console.error("Error adding to server cart", err);
            }
        }
    };

    /* -----------------------------------
     * REMOVE ITEM
     ----------------------------------- */
    const removeFromCart = async (productId) => {
        const updatedCart = cartItems.filter(
            (item) => item.product_id !== productId
        );

        setCartItems(updatedCart);
        setCartToLocalStorage(updatedCart);
    };

    /* -----------------------------------
     * CLEAR CART
     ----------------------------------- */
    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cart");
    };

    /* -----------------------------------
     * SUBTOTAL CALCULATION
     ----------------------------------- */
    const subtotal = cartItems.reduce((acc, item) => {
        // const qty = subscriptionQtyMap[item.subscription_type] || 1;
        return acc + Number(item.price) * 1;
    }, 0);

    /* -----------------------------------
     * TAX FETCH + CALCULATIONS
     ----------------------------------- */
    const fetchTaxRate = async () => {
        setTaxLoading(true);

        try {
            const response = await axios.get(`${BASE_URL}/tax-data`);
            const percentage = parseFloat(response?.data?.data[0]?.percentage);

            setTaxParcentage(percentage);

            if (!isNaN(percentage)) {
                setTaxRate(percentage / 100);
            }
        } catch (err) {
            console.error("Failed to fetch tax data:", err);
        }

        setTaxLoading(false);
    };

    const handleTax = (subtotal) => {
        const t = parseFloat((subtotal * taxRate).toFixed(2));
        const totalVal = parseFloat((subtotal + t).toFixed(2));
        setTax(t);
        setTotal(totalVal);
    };

    useEffect(() => {
        if (taxRate > 0) handleTax(subtotal);
    }, [subtotal, taxRate]);

    /* -----------------------------------
     * PROVIDER RETURN
     ----------------------------------- */
    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                subtotal,
                tax,
                total,
                taxLoading,
                taxParcentage,
                fetchTaxRate
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
