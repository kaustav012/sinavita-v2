// context/BusinessContext.js
'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { BUSINESS_API } from '../../services/product';

const BusinessContext = createContext();

export const useBusiness = () => useContext(BusinessContext);

export const BusinessProvider = ({ children }) => {
    const [businessData, setBusinessData] = useState(null);

    useEffect(() => {
        const fetchBusinessData = async () => {
            try {
                const data = await BUSINESS_API();
                setBusinessData(data || {});
            } catch (err) {
                console.error("Failed to fetch business data", err);
            }
        };

        fetchBusinessData();
    }, []);

    return (
        <BusinessContext.Provider value={{ businessData }}>
            {children}
        </BusinessContext.Provider>
    );
};
