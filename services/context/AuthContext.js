'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const BASE_URL = 'https://sinavita-admin.flameoflames.com/api';

    const [userToken, setUserToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register user
    const register = async ({ name, phone, email, password, password_confirmation }) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/user/register`,
                { name, phone, email, password, password_confirmation },
                { headers: { Accept: 'application/json' } }
            );

            if (response.data.success) {
                const token = response.data.token;
                handleLoginSuccess(token);
            }

            return response.data;
        } catch (error) {
            console.error('Registration Error:', error.response?.data || error.message);
            return { success: false, message: error?.response?.data?.message || 'Registration failed' };
        }
    };

    // Login user
    const login = async ({ email, password }) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/user/login`,
                { email, password },
                { headers: { Accept: 'application/json' } }
            );

            if (response.data.success) {
                const token = response.data.token;
                handleLoginSuccess(token);
            }

            return response.data;
        } catch (error) {
            console.error('Login Error:', error.response?.data || error.message);
            return { success: false, message: 'Login failed' };
        }
    };

    const sendPasswordReset = async ({ email }) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/user/forget_password`,
                { email },
                { headers: { Accept: 'application/json' } }
            );

            return response.data;
        } catch (error) {
            console.error('Password Reset Error:', error.response?.data || error.message);
            return { success: false, message: error?.response?.data?.message || 'Failed to send reset link' };
        }
    };

    // Handle successful login or registration
    const handleLoginSuccess = (token) => {
        setUserToken(token);
        localStorage.setItem('userToken', token);
        fetchUserData(token);
    };

    // Fetch user data
    const fetchUserData = async (token) => {
        try {
            const response = await axios.get(`${BASE_URL}/user/self-api`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                },
            });

            setUserData(response?.data?.data || null);
        } catch (error) {
            console.error('Error fetching user data:', error.response?.data || error.message);
            setUserData(null);
        }
    };

    // Logout user
    const logout = () => {
        setUserToken(null);
        setUserData(null);
        localStorage.removeItem('userToken');
    };

    // Check if user is already logged in on mount
    const checkLoginStatus = () => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('userToken');
            if (token) {
                setUserToken(token);
                fetchUserData(token);
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        checkLoginStatus();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                userToken,
                userData,
                loading,
                register,
                login,
                sendPasswordReset,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
