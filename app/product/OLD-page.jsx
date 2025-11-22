"use client";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Star,
  ArrowUpRight,
  UserCheck,
  ChevronRight,
  ShieldCheck,
  Leaf,
  ArrowRight,
  ShoppingCart,
  Truck,
  Clock,
  ArrowUpLeftFromCircle,
  ArrowUpRightFromCircle,
} from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
// import ProductBenefits from "./components/ProductBenefits";
// import "../../components/ProductAnimation/index.css";
import Testimonials from "../../components/testimonials";
import MigrainSupport from "../../components/MigrainSupport";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ProductPage() {
  const benefitsList = [
    {
      title: "Echium amoenum",
      description: "(Nouri et al., 2019)",
      image: "/molecules/Echium amoenum/Rosmarinic_acid_Cart.png", // Replace with actual image if available
      benefits: [
        "Analgesic Properties",
        "Neuroprotective Effects",
        "Anti-inflammatory Properties",
        "Vasodilatory Effects",
        "Holds Antioxidant Properties",
      ],
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
    },
    {
      title: "Matricaria chamomilla",
      description: "(Zargaran et al., 2018)",
      image: "/molecules/Matricaria chamomilla/Matricaria_chamomilla.png", // Replace with actual image if available
      benefits: [
        "Support Pain Relief",
        "Muscle Relaxation Effects",
        "Anti-inflammatory Properties",
        "Stress Reduction Effects",
        "Improves Sleep Quality",
      ],
      bgColor:
        "bg-gradient-to-r from-[#919CFF] to-[#6F00FF] p-8 rounded-lg text-white",
    },
    {
      title: "Eucalyptus globulus",
      description: "(Lapid et al., 2017)",
      image: "/molecules/Eucalyptus Globulus/Eucalyptol.png", // Replace with actual image if available
      benefits: [
        "Support Pain Relief",
        "Promote Mental Clarity and Relaxation",
        "Anti-inflammatory Properties",
        "Vasodilatory Effects",
        "Sinus Relief",
      ],
      bgColor:
        "bg-gradient-to-r from-[#A9B2FF] to-[#F2F3FF] p-8 rounded-lg text-gray-800",
    },
    {
      title: "Nigella Sativa",
      description: "(Sarker, Mazumder and Rashid, 2011)",
      image: "/molecules/Nigella Sativa/Nigella_Sativa.png", // Replace with actual image if available
      benefits: [
        "Support Pain Relief",
        "Cerebrovascular Effects",
        "Anti-inflammatory Effects",
        "Antioxidant Properties",
        "Neuroprotective Effects",
      ],
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
    },
    {
      title: "Tanacetum parthenium",
      description: "(Shrivastava, Pechadre and John, 2012)",
      image: "/molecules/Tanacetum parthenium/Tanacetum_parthenium.png", // Replace with actual image if available
      benefits: [
        "Reduction in Migraine Frequency",
        "Analgesic Properties",
        "Anti-inflammatory Effects",
        "Vasodilatory Effects",
        "Antioxidant Activity",
      ],
      bgColor:
        "bg-gradient-to-r from-[#919CFF] to-[#6F00FF] p-8 rounded-lg text-white",
    },
    {
      title: "Lavandula officinalis",
      description: "(European Medicine Agency, 2012)",
      image: "/molecules/Lavandula officinalis/Lavandula_officinalis.png", // Replace with actual image if available
      benefits: [
        "Support Pain Relief",
        "Improving Sleep Quality",
        "Calming and Relaxing Effects",
        "Anti-inflammatory Effects",
        "Anxiolytic Effects",
      ],
      bgColor:
        "bg-gradient-to-r from-[#A9B2FF] to-[#F2F3FF] p-8 rounded-lg text-gray-800",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
        </Head>
        <Header />
        <main className="container px-4" role="main">
          <section
            className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 py-16 md:py-24 md:order-2"
            aria-label="Hero Section"
          >
            {/* Content Section (Second on Mobile, First on Desktop) */}
            <motion.div
              className="space-y-6 md:space-y-8 w-full md:w-1/2"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={fadeIn.transition}
            >
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray leading-tight tracking-tight">
                EXPERIENCE THE POWER OF SINAVITA® MIGRAINE SUPPORT
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg">
                Trusted by thousands seeking a natural solution, SinaVita®
                Migraine Support is your partner in migraine management. With an
                impressive 88.5% satisfaction rate among users and recognition
                from the American Headache Society, this science-backed formula
                promotes head comfort, calmness, and resilience. Take the
                natural, effective path to better well-being with SinaVita®
                Migraine Support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/product-cart">
                  <Button className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg px-20 py-6 text-lg font-medium transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.02]">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </motion.div>
            {/* Image Section (First on Mobile, Second on Desktop) */}
            <motion.div
              className="relative flex justify-center items-center w-full md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <Image
                  src="/product-4.png"
                  alt="Sinavita Immune Support Bottle"
                  width={400}
                  height={530}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </section>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center pb-16 md:pb-24">
            <div className="relative aspect-square w-full">
              <Image
                src="/product-4.png"
                alt="Sinavita Migraine Support supplement bottle"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray leading-tight">
                TAKE CONTROL OF YOUR MIGRAINES
              </h1>
              <p className="text-gray-600 font-bold leading-relaxed">
                DON&apos;T WAIT FOR THE PAIN TO END. BE PROACTIVE ABOUT YOUR
                WELL-BEING.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No one really thinks about managing their migraines until
                they&apos;re in the middle of one. The pain is debilitating, and
                it often takes a major episode to remind us.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sinavita&apos;s Migraine Support helps you stay ahead of the
                pain and maintain your quality of life.
              </p>
              <Link href="/product-cart">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-white px-20 py-6 mt-10"
                >
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
          <section
            className="pb-16 md:pb-24"
            aria-label="Living with Allergies"
          >
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-7xl text-gray mb-4">
                LIVING WITH ALLERGY SUCKS
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
              {[
                {
                  title: "Sneezing Fits",
                  description: "Interrupting your daily life and activities",
                  icon: "/icons/cold.png",
                },
                {
                  title: "Heightened Sensitivities",
                  description: "Making you vulnerable to everyday irritants",
                  icon: "/icons/cold-1.png",
                },
                {
                  title: "Nasal Congestion",
                  description: "Leaving you feeling stuffed up and miserable",
                  icon: "/icons/cold-2.png",
                },
                {
                  title: "Unpredictable Triggers",
                  description: "Catching you off guard at the worst moments",
                  icon: "/icons/cold-3.png",
                },
                {
                  title: "Life Disruption",
                  description:
                    "Impacting your work, social life, and well-being",
                  icon: "/icons/cold-4.png",
                },
                {
                  title: "Anxiety & Stress",
                  description:
                    "Weighing down your mental health and peace of mind",
                  icon: "/icons/cold-5.png",
                },
              ].map((symptom, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 rounded-lg shadow-md p-6 text-white relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute z-10 shadow-md bg-gray-100 border-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white top-[-35px] md:top-[-30px] right-[125px] md:right-[-40px] p-3 md:p-8 rounded-full">
                    <Image
                      src={symptom.icon}
                      width={55}
                      height={55}
                      alt=""
                      className="filter invert brightness-0"
                    />
                  </div>
                  <h3 className="text-3xl text-gray-600 font-semibold pb-2 pt-8 md:pt-0 md:mb-10 text-center md:text-left">
                    {symptom.title}
                  </h3>
                  <p className="text-xl text-gray-600 text-center md:text-left">
                    {symptom.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-white pb-16 md:pb-24 px-4 sm:px-8">
            {/* Headings */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-black text-gray">
                YOU DESERVE WELL-BEING
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-black text-gray mb-4">
                BREAK FREE FROM THE RELENTLESS GRIP OF MIGRAINES
              </h1>
              <p className="text-gray-600 text-sm md:text-xl max-w-2xl mx-auto lg:mx-0">
                Lifestyle changes are essential, but true support goes beyond
                them. Empower yourself with
              </p>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mt-12 lg:mt-20">
              {/* Left Column Benefits */}
              <div className="grid grid-cols-1 gap-10 w-full lg:w-1/3">
                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="font-semibold text-lg md:text-2xl text-gray-700">
                    Alleviate Sneezing and Nasal Congestion
                  </h3>
                  <p className="text-sm md:text-md text-gray-600">
                    Helps reduce those pesky allergy symptoms, allowing you to
                    breathe easier
                  </p>
                </div>
                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="font-semibold text-lg md:text-2xl text-gray-700">
                    Promote Overall Well-Being
                  </h3>
                  <p className="text-sm md:text-md text-gray-600">
                    By managing allergy symptoms, it allows you to engage fully
                    in daily activities without the
                  </p>
                </div>
                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="font-semibold text-lg md:text-2xl text-gray-700">
                    Alleviate Sneezing and Nasal Congestion
                  </h3>
                  <p className="text-sm md:text-md text-gray-600">
                    Helps reduce those pesky allergy symptoms, allowing you to
                    breathe easier
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center w-full lg:w-auto">
                <div className="bg-white z-10 rounded-full shadow-md w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] flex items-center justify-center">
                  <Image
                    src="/product-4.png"
                    alt="Sinavita Immune Support Bottle"
                    width={280}
                    height={280}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Right Column Benefits */}
              <div className="grid grid-cols-1 gap-10 w-full lg:w-1/3">
                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="font-semibold text-lg md:text-2xl text-gray-700">
                    Alleviate Sneezing and Nasal Congestion
                  </h3>
                  <p className="text-sm md:text-md text-gray-600">
                    Helps reduce those pesky allergy symptoms, allowing you to
                    breathe easier
                  </p>
                </div>
                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="font-semibold text-lg md:text-2xl text-gray-700">
                    Promote Overall Well-Being
                  </h3>
                  <p className="text-sm md:text-md text-gray-600">
                    By managing allergy symptoms, it allows you to engage fully
                    in daily activities without the
                  </p>
                </div>
              </div>
            </div>

            {/* Buy Now Button */}
            <div className="flex justify-center mt-6">
              <Link href="/product-cart">
                <Button className="px-10 md:px-20 py-4 md:py-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:bg-yellow-700 text-lg md:text-xl">
                  Buy Now
                </Button>
              </Link>
            </div>
          </section>

          <section aria-label="Allergy Support Design pb-16 md:pb-24">
            <div className="">
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-7xl text-gray font-bold mb-4">
                  GROUNDED FOR MIGRAINEURS BY MIGRAINEURS
                </h1>
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
                    className={`rounded-2xl p-8 border-2 text-gray-600 cursor-pointer shadow-md 
      ${index === 1
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                        : ""
                      }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        {/* <ProductBenefits benefitsList={benefitsList} /> */}

        <main role="">
          <section
            className="container flex flex-col md:flex-row items-center justify-center mx-auto py-16 md:py-24 px-4 gap-8 md:gap-16"
            aria-label="Product Features"
          >
            {/* Features List */}
            <div className="space-y-[-20px] md:space-y-[-50px] text-center md:text-left">
              {[
                "SCIENCE-BACKED",
                "DRUG FREE",
                "VEGAN",
                "DAIRY FREE",
                "GLUTEN FREE",
                "NOTHING ARTIFICIAL",
                "SOY-FREE",
                "NON-GMO",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="py-2 md:py-4 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-gray font-semibold">
                    {feature}
                  </h1>
                </motion.div>
              ))}
            </div>

            {/* Quality Section */}
            <div className="text-yellow-700 border-2 p-6 sm:p-8 border-yellow-500 rounded-md text-center md:text-left">
              <p className="text-3xl sm:text-4xl">
                Quality you <br /> don&apos;t have to question
              </p>
            </div>
          </section>

          <div className="container mx-auto pb-16 md:pb-24 px-4">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray mb-6">
              HOW IT WORKS
            </h1>

            <p className="text-gray-600 text-lg mb-16 max-w-4xl">
              Take control of your wellness journey and explore the potential
              benefits of SinaVita® Allergy Support with these three simple
              steps for migraine management
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md">
                <div
                  className="absolute top-[-50px]
right-[125px] md:top-[10] md:left-[0] w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center"
                >
                  <Image
                    src="/icons/how-it-works-1.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center md:text-left">
                  Begin Your Journey
                </h3>
                <p className="text-gray-600 text-center md:text-left">
                  Start by choosing the option that best fits your needs.
                  Whether you prefer the flexibility of a one-time purchase or
                  the convenience of a subscription plan, SinaVita® Allergy
                  Support offers both. Click the &apos;&apos;Buy Now&apos;&apos;
                  button to explore our range and select the choice that aligns
                  with your lifestyle.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pt-16 pb-6 mt-12 md:mt-0 px-6 bg-gray-100 rounded-lg shadow-md">
                <div
                  className="absolute top-[-50px]
right-[125px] md:top-[10] md:left-[0] w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center"
                >
                  <Image
                    src="/icons/how-it-works-2.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center md:text-left">
                  Enhance Your Lifestyle
                </h3>
                <p className="text-gray-600 text-center md:text-left">
                  Your SinaVita® Allergy Support package will be shipped
                  promptly upon order. Regardless of the subscription plan you
                  select, you&apos;ll gain access to valuable educational
                  resources and a supportive community. This will empower you to
                  make informed lifestyle choices that may contribute to your
                  overall well-being.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pt-16 pb-6 px-6 bg-gray-100 rounded-lg shadow-md mt-12 md:mt-0">
                <div
                  className="absolute top-[-50px]
right-[125px] md:top-[10] md:left-[0] w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center"
                >
                  <Image
                    src="/icons/how-it-works-3.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center md:text-left">
                  Proceed with Confidence
                </h3>
                <p className="text-gray-600 text-center md:text-left">
                  Experience the potential benefits of SinaVita® Allergy Support
                  by trying it for a minimum of 120 days. If you decide not to
                  continue for any reason, simply notify us before the next
                  shipment. Our 24/7 customer portal allow you to manage your
                  subscriptions conveniently.
                </p>
              </div>
            </div>
          </div>
          <Testimonials />
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex pt-16 md:pt-24">
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold leading-tight">
                  Unlock a pain-free future with &apos;Migraine
                  Release&apos;—your comprehensive guide to a headaches-free
                  life.
                </h1>
                <p className="leading-relaxed">
                  We invite you to embark on a journey into the intricate world
                  of migraines—a journey that promises to shed light on this
                  often-misunderstood neurological condition. Migraines are not
                  just headaches; they are complex and multi-faceted experiences
                  that affect billions of people worldwide. Whether you are
                  personally grappling with migraines or supporting a loved one
                  through their migraine journey, we will support and equip you
                  with knowledge, tools, and strategies to take control and find
                  relief.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="text"
                    placeholder="Name"
                    className="flex-1 text-white"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="flex-1 text-white"
                  />
                  <Button className="bg-white text-gray-600">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
              <div className="relative h-[500px] rounded-md">
                <Image
                  src="/Migraine_Release.png"
                  alt="Migraine Release Book Cover"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <MigrainSupport />
        </main>
      </div>
      <Footer />
    </div>
  );
}
