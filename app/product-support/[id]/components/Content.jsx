"use client"
import { ArrowRightCircle } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const steps = [
    {
        id: 1,
        title: "Identifying Key Health Challenges ",
        description:
            "Our process begins with identifying common health challenges such as migraines, seasonal immune challenges, allergies, and more. By focusing on prevalent wellness needs, we aim to develop targeted natural solutions.",
        icon: "/process/1.png",
    },
    {
        id: 2,
        title: "Novel Natural Solutions Through Systems Biology",
        description:
            "Our unique approach combines insights from medicinal plant sciences, medical research, systems science, and engineering to discover innovative solutions that promote overall well-being.",
        icon: "/process/2.png",
    },
    {
        id: 3,
        title: "Comprehensive Data Collection",
        description:
            "We gather extensive data related to selected health challenges, including genomic, proteomic, metabolic, and clinical information, as well as details on plant properties and bioactive compounds. Data is sourced from scientific literature, public databases, and advanced analytics, with AI integration to accelerate data processing and research.",
        icon: "/process/3.png",
    },
    {
        id: 4,
        title: "Advanced Data Processing",
        description:
            "Using sophisticated data processing techniques—including data cleaning, clustering, classification, association, and visualization—we analyze medicinal plant data and health-related information. This enables us to draw valuable insights, supporting our mission to create effective, science-backed natural health solutions.",
        icon: "/process/4.png",
    },
    {
        id: 5,
        title: "Integrating Nature with Science ",
        description:
            "We bridge traditional knowledge with modern scientific disciplines by integrating pharmacognosy, medical sciences, and pharmacology. This allows us to identify relevant bioactive compounds from plants, analyzing their biological, chemical, biochemical, and physical properties to ensure high-quality, effective formulations.",
        icon: "/process/5.png",
    },
    {
        id: 6,
        title: "Bioactivity of Key Compounds ",
        description:
            "Our team selects potent bioactive compounds and their plant sources, carefully chosen for their potential to support wellness and maximize effectiveness in our formulations.",
        icon: "/process/6.png",
    },
    {
        id: 7,
        title: "Novel Formulation Using Systems Approach ",
        description:
            "By combining bioactive compounds and medicinal herbs, we develop cutting-edge formulations for supplements and wellness products. Our interdisciplinary approach leverages statistical and computational tools, including multicriteria decision theory, fuzzy modeling, network analysis, and matrix theory, to refine and optimize our formulations.",
        icon: "/process/7.png",
    },
    {
        id: 8,
        title: "Extraction of Bioactive Compounds",
        description:
            "We utilize a specialized extraction process to obtain highly purified bioactive compounds from selected medicinal plants, ensuring that our formulations contain the highest-quality ingredients.",
        icon: "/process/8.png",
    },
    {
        id: 9,
        title: "Product Safety",
        description:
            "Safety is our top priority. We conduct thorough safety assessments, including toxicity and histological studies, to evaluate potential risks. These assessments help us ensure the safety and quality of our products.",
        icon: "/process/9.png",
    },
    {
        id: 10,
        title: "Clinical Evaluation",
        description:
            "With ethics approval and necessary permissions, we conduct clinical trials to evaluate the safety and efficacy of our products in supporting wellness and health.",
        icon: "/process/10.png",
    },
    {
        id: 11,
        title: "Quality Manufacturing",
        description:
            "Our products are crafted in various forms—including tablets, capsules, nasal sprays, inhalers, and more—using rigorous, high-quality manufacturing processes. These include specialized granulation techniques, such as the CCG method, and advanced extraction procedures designed to preserve the potency and purity of our ingredients.",
        icon: "/process/11.png",
    },
    {
        id: 12,
        title: "Quality Control and Assurance ",
        description:
            "We prioritize quality at every stage of production. By implementing customized quality control solutions and adhering to strict manufacturing practices, we ensure that each product meets the high standards required by regulatory authorities. Our team employs advanced equipment and validated sampling techniques to maintain consistency and quality throughout the production cycle.",
        icon: "/process/12.png",
    },

];


const Content = ({ productSupport }) => {
    const [openIndex, setOpenIndex] = useState(null)
    const sectionRefs = useRef([])

    // Scroll to active item AFTER state update (openIndex change)
    useEffect(() => {
        if (openIndex !== null) {
            setTimeout(() => {
                sectionRefs.current[openIndex]?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }, 100) // Delay ensures content is rendered first
        }
    }, [openIndex]) // Runs when openIndex changes

    const toggleAccordion = index => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index))
    }

    const ingredients = [
        {
            name: productSupport?.section1_title,
            description: ""
        },
        {
            name: productSupport?.section2_title,
            description: ""

        },
        {
            name: productSupport?.section3_title,
            description: ``
        },

    ]

    return (
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <section className="container mx-auto py-16 px-4 pb-16 md:pb-24">
                <h2 className="text-3xl md:text-5xl lg:text-9xl font-bold text-white pb-4 border-b-2 border-white-300">
                    {productSupport?.page_title}
                </h2>

                <div>
                    {ingredients.map((ingredient, index) => (
                        <div
                            key={index}
                            ref={el => {
                                sectionRefs.current[index] = el // ✅ Fixed: No return value
                            }}
                            className="border-b-2 py-4 last:border-b-0 border-white-300"
                        >
                            {/* Title & Button */}
                            <div className="flex items-center gap-4">
                                <button
                                    className="text-white font-semibold text-start py-2 rounded-lg w-[100%]"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h2 className="text-3xl md:text-7xl">{ingredient.name}</h2>
                                </button>
                                <button onClick={() => toggleAccordion(index)}>
                                    <ArrowRightCircle
                                        className={`text-[#FFFFFF] w-16 h-16 transition-transform ${openIndex === index ? "rotate-45" : ""
                                            }`}
                                    />
                                </button>
                            </div>

                            {/* Accordion Content */}
                            {openIndex === index && (
                                <div>
                                    {index === 0 &&
                                        <div>
                                            {/* Research Section */}
                                            <section className="pb-16 md:pb-24">
                                                <div className="">
                                                    {/* <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white mb-2">
                                                        SinaVita® Migraine Support: Grounded in Decades of Scientific
                                                        Research
                                                    </h2> */}
                                                    <div className="space-y-6 text-white">
                                                        <h3 className="text-xl font-semibold text-white-900 uppercase mb-8">
                                                            {productSupport?.section2_short_note}
                                                        </h3>
                                                        <div dangerouslySetInnerHTML={{ __html: productSupport?.section1_long_desc }} />
                                                    </div>
                                                </div>
                                            </section>

                                            {/* Product Image Section */}
                                            <section className="pb-16 md:pb-24">
                                                <div className="">
                                                    <div className="flex flex-col md:flex-row items-start">
                                                        <Image
                                                            src={productSupport?.product1_image || "/mi.png"}
                                                            alt="SinaVita Migraine Support Product"
                                                            width={550}
                                                            height={550}
                                                            className="mx-auto"
                                                            loading="lazy"
                                                        />
                                                        <div className="space-y-4">
                                                            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white pb-6">
                                                                {productSupport?.product1_name}
                                                            </h2>
                                                            <p className="text-white">
                                                                {productSupport?.product1_desc}
                                                            </p>
                                                            {productSupport?.product1_dosage && <div>
                                                                <p className="font-semibold">Dosage:</p>
                                                                <p>
                                                                    {productSupport?.product1_dosage}
                                                                </p>
                                                            </div>}
                                                        </div>

                                                    </div>
                                                </div>
                                                <p className="font-bold italic pt-12">
                                                    *{productSupport?.product1_safety_note}
                                                </p>
                                            </section>
                                            {/* Product Image Section */}
                                            <section className="pb-16 md:pb-24">
                                                <div className="">
                                                    <div className="flex flex-col md:flex-row items-start">

                                                        <div className="space-y-4">
                                                            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white pb-6">
                                                                {productSupport?.product2_name}
                                                            </h2>
                                                            <p className="text-white">
                                                                {productSupport?.product2_desc}
                                                            </p>
                                                            {productSupport?.product2_dosage && <div>
                                                                <p className="font-semibold">Dosage:</p>
                                                                <p>
                                                                    {productSupport?.product2_dosage}
                                                                </p>
                                                            </div>}
                                                        </div>
                                                        <Image
                                                            src={productSupport?.product2_image || "/mi.png"}
                                                            alt="SinaVita Migraine Support Product"
                                                            width={450}
                                                            height={450}
                                                            className="mx-auto"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                                <p className="font-bold italic pt-12">
                                                    *{productSupport?.product2_safety_note}
                                                </p>
                                            </section>
                                            <section className="pb-16 md:pb-24">
                                                <div className="">
                                                    <div className="flex flex-col md:flex-row items-start">
                                                        {productSupport?.product3_image && <Image
                                                            src={productSupport?.product3_image || "/mi.png"}
                                                            alt="SinaVita Migraine Support Product"
                                                            width={450}
                                                            height={450}
                                                            className="mx-auto"
                                                            loading="lazy"
                                                        />}
                                                        <div className="space-y-4">
                                                            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white pb-6">
                                                                {productSupport?.product3_name}
                                                            </h2>
                                                            <p className="text-white">
                                                                {productSupport?.product3_desc}
                                                            </p>
                                                            {productSupport?.product3_dosage && <div>
                                                                <p className="font-semibold">Dosage:</p>
                                                                <p>
                                                                    {productSupport?.product3_dosage}
                                                                </p>
                                                            </div>}
                                                        </div>

                                                    </div>
                                                </div>
                                                <p className="font-bold italic pt-12">
                                                    *{productSupport?.product3_safety_note}
                                                </p>
                                            </section>

                                            <section aria-label="Allergy Support Design">
                                                <div className="pb-16 md:pb-24">
                                                    <motion.div
                                                        className="pb-12"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white pb-6">
                                                            WHAT SETS US APART
                                                        </h2>
                                                        {/* <p className="text-white max-w-3xl">
                                                            We understand the frustration of living with allergies—the
                                                            endless sneezing, the constant nasal congestion, and the
                                                            unpredictability of triggers. It&apos;s exhausting to miss out
                                                            on cherished moments, always worrying about what might set off
                                                            your symptoms next.
                                                        </p> */}
                                                    </motion.div>

                                                    <div className="grid md:grid-cols-3 gap-8">
                                                        {productSupport?.detail.map((feature, index) => (
                                                            <motion.div
                                                                key={index}
                                                                className="rounded-2xl p-8 border-2 text-white "
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                            >
                                                                <h3 className="text-2xl font-semibold mb-4">
                                                                    {feature.title}
                                                                </h3>
                                                                <div dangerouslySetInnerHTML={{ __html: feature?.long_desc }} />
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </section>

                                            {/* Quality Control Section */}
                                            {productSupport?.quality_control && <section className="pb-16 md:pb-24">
                                                <div className="">
                                                    <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white pb-6">
                                                        QUALITY CONTROL
                                                    </h2>
                                                    <div className="space-y-6 text-white">
                                                        <div dangerouslySetInnerHTML={{ __html: productSupport?.quality_control }} />
                                                    </div>
                                                </div>
                                            </section>}
                                        </div>
                                    }
                                    {
                                        index === 1 &&
                                        <div>
                                            <div className="container mx-auto pb-16 md:pb-24">
                                                <h3 className="text-xl font-semibold text-white-900 uppercase mb-8">
                                                    {productSupport?.section2_short_note}
                                                </h3>
                                                <p className="text-white text-lg mb-20" dangerouslySetInnerHTML={{ __html: productSupport?.section2_long_desc }}>

                                                </p>

                                                <div className="grid md:grid-cols-3 gap-20">
                                                    {productSupport?.process?.map((step) => (
                                                        <div
                                                            key={step.id}
                                                            className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md"
                                                        >
                                                            <div className="absolute -top-10 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center">
                                                                <Image src={step.icon} width={60} height={60} alt={step.icon} loading="lazy" />
                                                            </div>
                                                            <h3 className="text-xl font-bold text-gray-800 mb-4">{step.name}</h3>
                                                            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: step?.long_desc }}></p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {
                                        index === 2 &&
                                        <div>
                                            {/* The Proof Section */}
                                            <section className="pb-16 md:pb-24">
                                                <div className="">

                                                    <div className="space-y-6 text-white">
                                                        <div className="textEditorContent">
                                                            <div dangerouslySetInnerHTML={{ __html: productSupport?.section3_desc }} />
                                                        </div>
                                                        <Link href={productSupport?.link} target="_blank">
                                                            <Button className="py-6 bg-transparent border-2 text-gray hover:text-white text-xl">
                                                                EXPLORE CLINICAL STUDIES
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    }
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Content;
