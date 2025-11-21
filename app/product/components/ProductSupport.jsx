'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const ProductSupport = ({ productDetails }) => {

    const data = [
        {
            title: "INTENSE PAIN",
            description: "Experiencing agonizing and excruciating pain that persists for hours or even days on end?",
            icon: "/icons/cold.png",
        },
        {
            title: "UNPREDICTABILITY",
            description: "Facing the constant dread of an impending attack, striking without warning and disrupting your life?",
            icon: "/icons/cold-1.png",
        },
        {
            title: "SENSITIVITIES",
            description: "Navigating through heightened sensitivities to piercing light (photophobia), deafening sound (phonophobia), and even ordinary scents (osmophobia)?",
            icon: "/icons/cold-2.png",
        },
        {
            title: "NAUSEA AND VOMITING",
            description: "Enduring the distress of nausea and vomiting during an attack, intensifying the physical and emotional strain?",
            icon: "/icons/cold-3.png",
        },
        {
            title: "LIFE DISRUPTION",
            description: "Navigating the disruption of daily activities, work, and social life caused by migraines, living in a constant state of apprehension?",
            icon: "/icons/cold-4.png",
        },
        {
            title: "DEPRESSION AND ANXIETY",
            description: "Battling with the emotional toll of severe pain and upheaval, recognizing the heavy impact on your mental well-being?",
            icon: "/icons/cold-5.png",
        },
    ]

    return (
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <div className="flex flex-col px-6 md:px-12">
                <main className="px-4" role="main">
                    <section className="py-16 md:py-24" aria-label="Living with Allergies">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-8xl text-white font-bold text-center">
                                {productDetails?.section2_title}
                            </h2>
                        </motion.div>

                        <div className="flex flex-wrap justify-between gap-6">
                            {productDetails?.product_about?.map((symptom, index) => (
                                <motion.div
                                    key={index}
                                    className="w-full sm:w-[35%] border-2 rounded-lg p-16 my-10 text-gray-800 relative group transform transition duration-500 hover:scale-105"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="absolute z-10 border-2 bg-white top-[-40px] md:top-[-35px] right-[50%] transform translate-x-1/2 p-4 md:p-6 rounded-full">
                                        <Image className="" src={symptom?.image} width={55} height={55} alt="" loading="lazy" />
                                    </div>
                                    <h3 className="text-2xl text-white font-semibold pb-2 pt-12 md:pt-6 text-center">
                                        {symptom?.title}
                                    </h3>
                                    <p className="text-lg text-white text-center">
                                        {symptom?.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>

    );
}

export default ProductSupport
