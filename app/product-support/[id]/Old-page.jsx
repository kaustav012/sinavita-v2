"use client";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { motion } from "framer-motion";
import { Input } from "../../components/ui/input";
import Link from "next/link";
import MigrainSupport from "../../components/MigrainSupport";
export default function Page() {
    return (
        <div>
            <Header />
            <div className="w-full flex items-center justify-center">
                <div className="container px-4">
                    {/* Header Section */}
                    <section className="py-16 md:py-24">
                        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray mb-4">
                            TRANSPARENCY IS NON-NEGOTIABLE YOU DESERVE THE FACTS!
                        </h1>

                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/icons/development.png"
                                    width={200}
                                    height={200}
                                    alt=""
                                />
                                <span className="text-lg inline-block px-4 py-1 mt-4 rounded-full border border-gray-200">
                                    The Development
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/icons/process.png"
                                    width={200}
                                    height={200}
                                    alt=""
                                />
                                <span className="text-lg inline-block px-4 py-1 mt-4 rounded-full border border-gray-200">
                                    The Process
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image src="/icons/proof.png" width={200} height={200} alt="" />
                                <span className="text-lg inline-block px-4 py-1 mt-4 rounded-full border border-gray-200">
                                    The Proof
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* Research Section */}
                    <section className="pb-16 md:pb-24">
                        <div className="">
                            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray mb-8">
                                SinaVita® Migraine Support: Grounded in Decades of Scientific
                                Research
                            </h2>
                            <div className="space-y-6 text-gray-600">
                                <p>
                                    SinaVita® Migraine Support is a dietary supplement crafted
                                    with medicinal plants traditionally recognized for their
                                    potential role in supporting head comfort and migraine
                                    wellness. Designed as a complementary approach to traditional
                                    strategies, it provides an alternative for individuals seeking
                                    additional options beyond conventional methods. Available in
                                    easy-to-use tablets and aroma drops, SinaVita® Migraine
                                    Support offers specific dosage instructions tailored to
                                    individual needs. Prioritizing safety, we encourage users to
                                    consult with healthcare professionals for personalized
                                    guidance and to address any potential risks.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Backed by Research
                                </h3>
                                <p>
                                    SinaVita® Migraine Support is inspired by the groundbreaking
                                    research that led to the development of MigraineCut®, a
                                    botanical drug clinically studied for its effects on
                                    migraines. In trials involving over 557 participants,
                                    MigraineCut® demonstrated promising results, with 81% of
                                    participants reporting notable relief and satisfaction rates
                                    exceeding 88%. While SinaVita® is not identical to
                                    MigraineCut® and is a dietary supplement rather than a drug,
                                    it incorporates many of the same botanicals studied in these
                                    trials. This research-informed formulation is designed to
                                    support head comfort and help users stay proactive about
                                    migraine management.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Potential Mechanisms of Action
                                </h3>
                                <p>
                                    Research and traditional use suggest that the ingredients in
                                    SinaVita® Migraine Support may:
                                </p>
                                <ul className="list-disc pl-4">
                                    <li>Promote healthy blood vessel function.</li>
                                    <li>
                                        Support melatonin production for improved sleep quality.
                                    </li>
                                    <li>
                                        Help reduce certain compounds in the body associated with
                                        migraines.
                                    </li>
                                </ul>
                                <p>
                                    These combined effects may contribute to a reduction in the
                                    frequency and intensity of migraine episodes, offering users a
                                    more balanced and resilient lifestyle.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Potential Mechanisms of Action
                                </h3>
                                <p>
                                    Clinical research on related botanical formulations highlights
                                    the potential benefits of dietary supplements in supporting
                                    migraine management strategies. While individual results may
                                    vary, these findings emphasize the importance of a
                                    comprehensive approach to head comfort, incorporating natural
                                    ingredients and proactive lifestyle adjustments.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Powerful Ingredients with Traditional Benefits
                                </h3>
                                <p>
                                    The carefully selected ingredients in SinaVita® Migraine
                                    Support, including Echium Amoenum and Black Seed, have a long
                                    history in traditional herbal medicine. Their combined
                                    properties contribute to a holistic and proactive approach to
                                    head comfort and migraine wellness.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Important Note:
                                </h3>
                                <p>
                                    SinaVita® Migraine Support is inspired by clinical research
                                    but is not identical to MigraineCut® or a replacement for any
                                    drug. It is a dietary supplement designed to support your
                                    overall well-being. Individual experiences may vary.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Mechanism of Action
                                </h3>
                                <p>
                                    SinaVita® Migraine Support is suggested to work through
                                    multiple mechanisms, potentially aiding in the management of
                                    headaches by influencing blood vessel function and promoting
                                    better sleep quality. SinaVita® Migraine Support is available
                                    in various forms, including tablets and aroma drops. The
                                    recommended dosage varies by form.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Product Image Section */}
                    <section className="pb-16 md:pb-24">
                        <div className="">
                            <div className="flex flex-col md:flex-row items-start">
                                <div className="space-y-4">
                                    <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray pb-6">
                                        SinaVita® Migraine Support Tablet
                                    </h2>
                                    <p className="text-gray-600">
                                        Formulated to support overall wellness and promote a
                                        balanced internal environment, this tablet aims to address
                                        the underlying factors associated with migraines. Its
                                        targeted ingredients work synergistically to help reduce the
                                        frequency and severity of migraine episodes.
                                    </p>
                                    <div>
                                        <p className="font-semibold">Dosage:</p>
                                        <p>
                                            1 tablet with water every 8 hours, three times a day, for
                                            at least 120 days.
                                        </p>
                                    </div>
                                </div>
                                <Image
                                    src="/mi.png"
                                    alt="SinaVita Migraine Support Product"
                                    width={550}
                                    height={550}
                                    className="mx-auto"
                                />
                            </div>
                        </div>
                        <p className="font-bold italic pt-12">
                            It is recommended not to exceed the advised daily dose. Store
                            safely out of reach of children and consult a healthcare
                            professional, particularly if pregnant, nursing, or under medical
                            supervision.
                        </p>
                    </section>
                    {/* Product Image Section */}
                    <section className="pb-16 md:pb-24">
                        <div className="">
                            <div className="flex flex-col md:flex-row items-start">
                                <Image
                                    src="/Mig_aroma_both.png"
                                    alt="SinaVita Migraine Support Product"
                                    width={450}
                                    height={450}
                                    className="mx-auto"
                                />
                                <div className="space-y-4">
                                    <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray pb-6">
                                        SinaVita® Migraine Support Aroma Drops
                                    </h2>
                                    <p className="text-gray-600">
                                        Designed for inhalation, these aroma drops promote
                                        relaxation and stress reduction, which are essential in
                                        managing migraine triggers. The soothing aroma supports
                                        mental clarity and contributes to a calming atmosphere,
                                        helping to ease tension and discomfort.
                                    </p>
                                    <div>
                                        <p className="font-semibold">Dosage:</p>
                                        <p>
                                            Inhale 10 drops with steam from boiling water (65-70°C or
                                            149-158°F) under a towel or blanket for 20-30 minutes,
                                            twice daily, with an 8-hour gap.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="font-bold italic pt-12">
                            It is recommended not to exceed the advised daily dose. Store
                            safely out of reach of children and consult a healthcare
                            professional, particularly if pregnant, nursing, or under medical
                            supervision.
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
                                <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray pb-6">
                                    WHAT SETS US APART
                                </h2>
                                <p className="text-gray-600 max-w-3xl">
                                    We understand the frustration of living with allergies—the
                                    endless sneezing, the constant nasal congestion, and the
                                    unpredictability of triggers. It&apos;s exhausting to miss out
                                    on cherished moments, always worrying about what might set off
                                    your symptoms next.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Precision Herbal Formulation",
                                        description:
                                            "Unlike many companies that use general herbal blends, we distinguish ourselves through extensive research and innovative formulation techniques. We focus on identifying specific compounds within each herb that are traditionally recognized for their potential benefits.",
                                    },
                                    {
                                        title: "Safety Assurance",
                                        description:
                                            "Before any product reaching you, each SinaVita® product undergoes rigorous safety testing to ensure it meets the highest standards for quality and purity.",
                                    },
                                    {
                                        title: "Clinical Validation",
                                        description:
                                            "Clinical trials conducted by MIM Pharma on MigraineCut®, demonstrated promising results in promoting wellness, with 88% of over 600 participants reporting satisfaction.",
                                    },
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="rounded-2xl p-8 border-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:text-white cursor-pointer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <h3 className="text-2xl font-semibold mb-4">
                                            {feature.title}
                                        </h3>
                                        <p>{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Quality Control Section */}
                    <section className="pb-16 md:pb-24">
                        <div className="">
                            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray pb-6">
                                QUALITY CONTROL
                            </h2>
                            <div className="space-y-6 text-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Stringent Quality Assurance
                                </h3>
                                <p>
                                    We are committed to the highest standards of safety,
                                    consistency, and traceability for every batch of SinaVita®
                                    products. Our rigorous quality system ensures compliance with
                                    all regulatory requirements, with meticulous documentation at
                                    every stage of the process.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Organic Sourcing
                                </h3>
                                <p>
                                    As pioneers in organic cultivation, we proudly source
                                    botanicals from organically certified farms. This commitment
                                    not only enhances the purity of our ingredients but also
                                    supports sustainable farming practices, contributing to the
                                    preservation of farmland and biodiversity.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Community Empowerment
                                </h3>
                                <p>
                                    Through strong partnerships with farmers and farm communities
                                    worldwide, we support rural communities and promote
                                    sustainable livelihoods. Our robust supply chain upholds
                                    organic standards and quality control from sourcing through to
                                    the final product.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Building a Healthy Future
                                </h3>
                                <p>
                                    We are dedicated to developing premium herbal supplements,
                                    blending traditional knowledge with modern science. Our
                                    passionate R&D team, advanced quality control processes, and
                                    cutting-edge production technology drive us to deliver
                                    innovative, natural health ingredients that support wellness
                                    across generations.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="container mx-auto pb-16 md:pb-24">
                        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray pb-6">
                            The Process
                        </h2>

                        <p className="text-gray-600 text-lg mb-20">
                            Medicinal plants have been valued for thousands of years for their
                            potential health-supporting properties. Many active compounds in
                            these plants interact with human biological systems, potentially
                            leading to beneficial effects. Understanding these interactions is
                            essential for creating effective, science-backed wellness
                            solutions. Our expertise in medicinal plants, coupled with
                            innovative computational tools and a systems biology approach,
                            places us at the forefront of natural health research and
                            development.
                        </p>

                        <div className="grid md:grid-cols-3 gap-20">
                            {/* Step 1 */}
                            <div className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md">
                                <div className="absolute -top-10 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/icons/how-it-works-1.png"
                                        width={60}
                                        height={60}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Begin Your Journey
                                </h3>
                                <p className="text-gray-600">
                                    Start by choosing the option that best fits your needs.
                                    Whether you prefer the flexibility of a one-time purchase or
                                    the convenience of a subscription plan, SinaVita® Allergy
                                    Support offers both. Click the ''Buy Now'' button to explore
                                    our range and select the choice that aligns with your
                                    lifestyle.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md">
                                <div className="absolute -top-10 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/icons/how-it-works-2.png"
                                        width={60}
                                        height={60}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Enhance Your Lifestyle
                                </h3>
                                <p className="text-gray-600">
                                    Your SinaVita® Allergy Support package will be shipped
                                    promptly upon order. Regardless of the subscription plan you
                                    select, you&apos;ll gain access to valuable educational
                                    resources and a supportive community. This will empower you to
                                    make informed lifestyle choices that may contribute to your
                                    overall well-being.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md">
                                <div className="absolute -top-10 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/icons/how-it-works-3.png"
                                        width={60}
                                        height={60}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Proceed with Confidence
                                </h3>
                                <p className="text-gray-600">
                                    Experience the potential benefits of SinaVita® Allergy Support
                                    by trying it for a minimum of 120 days. If you decide not to
                                    continue for any reason, simply notify us before the next
                                    shipment. Our 24/7 customer portal allows you to manage your
                                    subscriptions conveniently.
                                </p>
                            </div>
                            <div className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md">
                                <div className="absolute -top-10 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/icons/how-it-works-1.png"
                                        width={60}
                                        height={60}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Begin Your Journey
                                </h3>
                                <p className="text-gray-600">
                                    Start by choosing the option that best fits your needs.
                                    Whether you prefer the flexibility of a one-time purchase or
                                    the convenience of a subscription plan, SinaVita® Allergy
                                    Support offers both. Click the ''Buy Now'' button to explore
                                    our range and select the choice that aligns with your
                                    lifestyle.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md">
                                <div className="absolute -top-10 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/icons/how-it-works-2.png"
                                        width={60}
                                        height={60}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Enhance Your Lifestyle
                                </h3>
                                <p className="text-gray-600">
                                    Your SinaVita® Allergy Support package will be shipped
                                    promptly upon order. Regardless of the subscription plan you
                                    select, you&apos;ll gain access to valuable educational
                                    resources and a supportive community. This will empower you to
                                    make informed lifestyle choices that may contribute to your
                                    overall well-being.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md">
                                <div className="absolute -top-10 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/icons/how-it-works-3.png"
                                        width={60}
                                        height={60}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Proceed with Confidence
                                </h3>
                                <p className="text-gray-600">
                                    Experience the potential benefits of SinaVita® Allergy Support
                                    by trying it for a minimum of 120 days. If you decide not to
                                    continue for any reason, simply notify us before the next
                                    shipment. Our 24/7 customer portal allows you to manage your
                                    subscriptions conveniently.
                                </p>
                            </div>
                            <div className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md">
                                <div className="absolute -top-10 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/icons/how-it-works-1.png"
                                        width={60}
                                        height={60}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Begin Your Journey
                                </h3>
                                <p className="text-gray-600">
                                    Start by choosing the option that best fits your needs.
                                    Whether you prefer the flexibility of a one-time purchase or
                                    the convenience of a subscription plan, SinaVita® Allergy
                                    Support offers both. Click the ''Buy Now'' button to explore
                                    our range and select the choice that aligns with your
                                    lifestyle.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md">
                                <div className="absolute -top-10 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/icons/how-it-works-2.png"
                                        width={60}
                                        height={60}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Enhance Your Lifestyle
                                </h3>
                                <p className="text-gray-600">
                                    Your SinaVita® Allergy Support package will be shipped
                                    promptly upon order. Regardless of the subscription plan you
                                    select, you&apos;ll gain access to valuable educational
                                    resources and a supportive community. This will empower you to
                                    make informed lifestyle choices that may contribute to your
                                    overall well-being.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md">
                                <div className="absolute -top-10 left-0 w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center">
                                    <Image
                                        src="/icons/how-it-works-3.png"
                                        width={60}
                                        height={60}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Proceed with Confidence
                                </h3>
                                <p className="text-gray-600">
                                    Experience the potential benefits of SinaVita® Allergy Support
                                    by trying it for a minimum of 120 days. If you decide not to
                                    continue for any reason, simply notify us before the next
                                    shipment. Our 24/7 customer portal allows you to manage your
                                    subscriptions conveniently.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Proof Section */}
                    <section className="pb-16 md:pb-24">
                        <div className="">
                            <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray pb-6">
                                THE PROOF
                            </h2>
                            <h3 className="text-2xl font-bold mb-8">
                                SinaVita® Migraine Support: Backed by Research, Inspired by
                                Science
                            </h3>
                            <div className="space-y-6 text-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    A Foundation of Scientific Innovation
                                </h3>
                                <p>
                                    SinaVita® Migraine Support is developed by MIM Pharma, the
                                    same team behind the clinical research on MigraineCut®, a
                                    botanical drug designed to address head discomfort. Published
                                    in Headache: The Journal of Head and Face Pain, this
                                    groundbreaking clinical trial demonstrated the potential of
                                    botanical formulations to promote head comfort and overall
                                    well-being.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Scientifically Proven Ingredients for Head Comfort
                                </h3>
                                <p>
                                    Drawing on the findings from the MigraineCut® clinical trial,
                                    SinaVita® Migraine Support is formulated with ingredients
                                    scientifically studied for their ability to support head
                                    comfort, calmness, and resilience. This advanced dietary
                                    supplement integrates traditional botanical wisdom with
                                    cutting-edge research to provide proactive support for those
                                    seeking natural ways to manage head discomfort.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Inspired by MigraineCut® Research
                                </h3>
                                <p>
                                    The clinical trial conducted by MIM Pharma on MigraineCut®
                                    highlighted the effectiveness of plant-based solutions in
                                    promoting balance and head wellness. While these results are
                                    specific to MigraineCut®, they inspired the creation of
                                    SinaVita® Migraine Support, a dietary supplement tailored to
                                    support head comfort and promote daily well-being as part of a
                                    balanced lifestyle.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Comprehensive Head Comfort Support
                                </h3>
                                <p>
                                    SinaVita® Migraine Support is designed to help maintain head
                                    comfort and reduce the frequency of head discomfort as part of
                                    a wellness routine. By incorporating scientifically supported
                                    botanicals, it offers a natural and holistic approach to head
                                    wellness.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Commitment to Quality and Safety
                                </h3>
                                <p>
                                    At MIM Pharma, we are committed to delivering high-quality
                                    dietary supplements that are backed by science and crafted
                                    with care. SinaVita® Migraine Support reflects our dedication
                                    to safety, efficacy, and customer wellness. For personalized
                                    advice, we recommend consulting with a healthcare professional
                                    before adding this supplement to your daily routine.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Important Note
                                </h3>
                                <p>
                                    SinaVita® Migraine Support is a dietary supplement and is not
                                    intended to diagnose, treat, cure, or prevent any disease. The
                                    clinical trial results referenced here apply specifically to
                                    MigraineCut® and do not directly correlate to SinaVita®
                                    Migraine Support. Individual experiences may vary.
                                </p>
                                <Button className="py-6 bg-transparent border-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:text-white text-xl">
                                    Explore Clinical Studies
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <MigrainSupport />
            <Footer />
        </div>
    );
}
