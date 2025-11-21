// context/OrderContext.js
'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios'; // ✅ Import axios

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    const BASE_URL = 'https://sinavita-admin.flameoflames.com/api';
    const [orderData, setOrderData] = useState(null);
    const [orderLoading, setorderLoading] = useState(false);


    const fetchOrderData = async () => {
        const token = localStorage.getItem('userToken');
        setorderLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/user/my-order`, { // ✅ Update endpoint
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                },
            });
            setOrderData(response?.data?.data || []);
        } catch (error) {
            console.error('Error fetching order data:', error.response?.data || error.message);
            setOrderData([]);
        } finally {
            setorderLoading(false);
        }
    };

    useEffect(() => {
        fetchOrderData();
    }, []);

    return (
        <OrderContext.Provider value={{ orderData, orderLoading, fetchOrderData }}>
            {children}
        </OrderContext.Provider>
    );
};
