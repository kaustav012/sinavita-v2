'use client'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { POLICY_API } from "@/services/product";
import LoadingText from "@/components/LoadingText";

export default function PrivecyPolicay() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [loading, setLoading] = useState(true);
    const [policyData, setPolicyData] = useState([])
    useEffect(() => {
        const fetchRideTypes = async () => {
            setLoading(true);
            try {
                const data = await POLICY_API();
                setPolicyData(data || []);
            } catch (error) {
                console.error("Error fetching ride types", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRideTypes();
    }, []);

    return (
        loading ?
            <LoadingText /> :
            <>
                <Header />
                <div className="container mx-auto p-8 space-y-8 text-gray-700 bg-white shadow-lg rounded-2xl mt-10 mb-10 md:p-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl lg:text-8xl font-bold mb-12 md:mb-12" style={{ textTransform: 'uppercase' }}
                    >
                        Privacy Policy
                    </motion.h1>

                    <div dangerouslySetInnerHTML={{ __html: policyData?.privacy_policy }} />

                    {showButton && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Button
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className="fixed bottom-6 right-6 p-3 bg-yellow-600 text-white rounded-full shadow-lg -700 focus:ring-4 focus:ring-yellow-300"
                            >
                                <ArrowUp size={24} />
                            </Button>
                        </motion.div>
                    )}
                </div>
                <Footer />
            </>
    );
}
