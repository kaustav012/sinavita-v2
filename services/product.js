import api from './api';

export const BASE_URL = "https://sinavita-admin.flameoflames.com/api";

export const PRODUCT_LIST = async () => {
    const response = await api.get('/product-list');
    return response?.data?.data || [];
};

export const PRODUCT_DETAILS_BY_ID = async (id) => {
    try {
        const response = await api.get(`/product-home/${id}`);
        return response?.data?.data;
    } catch (error) {
        console.error("Error fetching ride type:", error);
        throw error;
    }
};
export const PRODUCT_IMAGE_SEQUENCE_BY_ID = async (id) => {
    try {
        const response = await api.get(`/product-multi_image/${id}`);
        return response?.data;
    } catch (error) {
        console.error("Error fetching ride type:", error);
        throw error;
    }
};
export const PRODUCT_ANIMATION_BY_ID = async (id) => {
    try {
        const response = await api.get(`/product-animation/${id}`);
        return response?.data?.data;
    } catch (error) {
        console.error("Error fetching ride type:", error);
        throw error;
    }
};
export const PRODUCT_SUPPORT_BY_ID = async (id) => {
    try {
        const response = await api.get(`/product-support/${id}`);
        return response?.data?.data;
    } catch (error) {
        console.error("Error fetching ride type:", error);
        throw error;
    }
};
export const PRODUCT_CART_BY_ID = async (id) => {
    try {
        const response = await api.get(`/product-cart/${id}`);
        return response?.data?.data;
    } catch (error) {
        console.error("Error fetching ride type:", error);
        throw error;
    }
};
export const PRODUCT_FAQ_BY_ID = async (id) => {
    try {
        const response = await api.get(`/faq-data/${id}`);
        return response?.data?.data;
    } catch (error) {
        console.error("Error fetching ride type:", error);
        throw error;
    }
};
export const BUSINESS_API = async () => {
    const response = await api.get('/home-cms');
    return response?.data?.data || [];
};
export const POLICY_API = async () => {
    const response = await api.get('/terms');
    return response?.data?.data || [];
};
export const BLOG_API = async () => {
    const response = await api.get('/blogs');
    return response?.data?.data || [];
};
export const BLOG_BY_ID = async (id) => {
    try {
        const response = await api.get(`/blogs/${id}`);
        return response?.data?.data;
    } catch (error) {
        console.error("Error fetching ride type:", error);
        throw error;
    }
};

export const PAYMENT_GET_WAY_API = async () => {
    const response = await api.get('/payment-api');
    return response?.data?.data || [];
};



//   export const createRideTypes = async (rideTypeData) => {
//     const response = await api.post('/ride-types', rideTypeData);
//     return response.data;
//   };