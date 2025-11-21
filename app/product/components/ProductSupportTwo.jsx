'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const ProductSupportTwo = ({ productDetails }) => {

    const data = [
        {
            title: "Reduce Headache Intensity",
            description: "Harness the natural power of Tanacetum parthenium and Nigella Sativa to alleviate migraine pain and lessen the severity of attacks.",
            icon: "/icons_two/1.png",
        },
        {
            title: "Calm Neuroinflammation",
            description: "Our unique blend, featuring Matricaria chamomilla and Lavandula officinalis, helps soothe neuroinflammation, reducing the frequency and impact of migraine episodes.",
            icon: "/icons_two/2.png",
        },
        {
            title: "Enhance Blood Flow & Circulation",
            description: "Eucalyptus globulus and Echium amoenum work synergistically to promote healthy blood flow, potentially minimizing the triggers behind migraine attacks.",
            icon: "/icons_two/3.png",
        },
        {
            title: "Promote Overall Well-Being",
            description: "By managing migraine symptoms, it allows you to engage fully in daily activities",
            icon: "/icons_two/4.png",
        },
        {
            title: "Improve Quality of Life",
            description: "By targeting the root causes of migraine discomfort, our supplement supports your overall health, enabling you to enjoy life without constant worry of migraine flare-ups.",
            icon: "/icons_two/5.png",
        },
        {
            title: "Enhance Relaxation & Stress Relief",
            description: "The natural, calming properties of our ingredients not only ease migraine symptoms but also promote relaxation and reduce daily stress.",
            icon: "/icons_two/6.png",
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
                                {productDetails?.section5_title}
                            </h2>
                        </motion.div>

                        <div className="flex flex-wrap justify-between gap-6">
                            {productDetails?.product_result?.map((symptom, index) => (
                                <motion.div
                                    key={index}
                                    className="w-full sm:w-[35%] border-2 rounded-lg p-16 my-10 text-gray-800 relative group transform transition duration-500 hover:scale-105"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="absolute z-10 border-2 bg-white top-[-40px] md:top-[-35px] right-[50%] transform translate-x-1/2 p-4 md:p-6 rounded-full">
                                        <Image loading="lazy" className="invert brightness-75" src={symptom.image} width={55} height={55} alt="" />
                                    </div>
                                    <h3 className="text-2xl text-white font-semibold pb-2 pt-12 md:pt-6 text-center">
                                        {symptom.title}
                                    </h3>
                                    <p className="text-lg text-white text-center" dangerouslySetInnerHTML={{ __html: symptom.desc }}>
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

export default ProductSupportTwo
