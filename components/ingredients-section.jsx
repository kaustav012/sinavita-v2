"use client";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ingredients = [
  {
    name: "ECHIUM AMOENUM",
    extractAmount: "145 mg",
    description:
      "Echium amoenum, commonly known as Persian viper's bugloss, is traditionally used for its potential anti-inflammatory and antioxidant properties, which may support migraine relief.",
    image: "/molecules/Echium amoenum/Rosmarinic_acid_Cart.png",
    benefits: [
      {
        title: "Anti-inflammatory Properties",
        description:
          "Echium amoenum is known for its compounds that may possess anti-inflammatory effects. Since inflammation can be linked to discomfort, the traditional use of this plant may support an overall sense of comfort by helping to maintain healthy inflammation levels.",
      },
      {
        title: "Potential Analgesic Effects",
        description:
          "Some compounds found in Echium amoenum are thought to have mild analgesic properties. This traditional usage suggests it may help alleviate discomfort, making it a noteworthy option for individuals seeking natural support.from occasional discomfort.",
      },
      {
        title: "Vasodilatory Potential",
        description:
          "Echium amoenum may have the ability to support normal blood vessel function, which is significant since the regulation of blood flow is important for overall well-being. This aspect may be particularly relevant for individuals who experience tension or discomfort.",
      },
      {
        title: "Antioxidant Activity",
        description:
          "The extract of Echium amoenum contains antioxidants that may help combat oxidative stress. Since oxidative stress is believed to contribute to discomfort in various contexts, the antioxidant properties of this plant could provide additional support.",
      },
    ],
  },
  {
    name: "MATRICARIA CHAMOMILL",
    extractAmount: "125 mg",
    description:
      "Matricaria chamomilla, commonly known as chamomile, has a long history of traditional use as a medicinal plant. While specific scientific research on its direct efficacy for migraines may be limited, chamomile is thought to offer several qualities that could be beneficial for individuals experiencing migraines.",
    image: "/molecules/Matricaria chamomilla/Matricaria_chamomilla.png",
    benefits: [
      {
        title: "Anti-inflammatory Properties",
        description:
          "Chamomile extract is recognized for its potential anti-inflammatory effects. Since inflammation may be associated with discomfort in various contexts, chamomile's anti-inflammatory properties could contribute to an overall sense of comfort for individuals.",
      },
      {
        title: "Calming and Relaxing Effects",
        description:
          "Known for its soothing qualities, chamomile is traditionally used to promote relaxation. Reducing stress and tension is important, as these factors can be related to migraine onset for some individuals.",
      },
      {
        title: "Muscle Tension Relief",
        description:
          "Chamomile extract has mild muscle-relaxing properties. By alleviating tension in muscles, particularly in the neck and shoulders, it may help those who experience tension-related discomfort.",
      },
      {
        title: "Support for Sleep Quality",
        description:
          "Quality sleep is essential for overall well-being, and chamomile has been traditionally used to help promote restful sleep. Improved sleep patterns may play a role in reducing the frequency of migraine episodes for some individuals.",
      },
    ],
  },
  {
    name: "EUCALYPTUS GLOBULUS",
    extractAmount: "125 mg",
    description:
      "Eucalyptus globulus, known for its aromatic properties, has a long history of traditional use in herbal medicine. While specific research on its direct efficacy for migraines may be limited, eucalyptus extract may offer several potential benefits that could be relevant for individuals experiencing migraines.",
    image: "/molecules/Eucalyptus Globulus/Eucalyptol.png",
    benefits: [
      {
        title: "Relaxation and Stress Reduction",
        description:
          "The aroma of eucalyptus is traditionally recognized for promoting relaxation and reducing stress levels. Since stress is a common trigger for migraines, inhaling the scent of eucalyptus oil may contribute to a calming atmosphere that supports overall well-being.",
      },
      {
        title: "Anti-Inflammatory Properties",
        description:
          "Eucalyptus extract has been associated with anti-inflammatory effects. Since inflammation is believed to play a role in various forms of discomfort, the traditional use of eucalyptus may support healthy inflammation levels, contributing to overall comfort.",
      },
      {
        title: "Vasodilatory Potential",
        description:
          "Eucalyptus globulus may support normal blood vessel function, which is significant since maintaining healthy circulation is important for overall well-being. The vasodilatory properties of eucalyptus extract could be relevant for individuals who experience discomfort related to vascular function.",
      },
      {
        title: "Potential Analgesic Effects",
        description:
          "Eucalyptus globulus extract is known to contain compounds that may have mild analgesic properties. Traditionally, applying eucalyptus oil topically or inhaling its vapors is thought to provide comfort from discomfort, potentially benefiting individuals who experience tension-related issues.",
      },
    ],
  },
  {
    name: "NIGELLA SATIVA",
    extractAmount: "124 mg",
    description:
      "Nigella sativa, widely known as black seed, has a long history of traditional use in herbal medicine. While specific research on its direct efficacy for migraines may be limited, black seed extract may offer several potential benefits that could be relevant for individuals experiencing migraines.",
    image: "/molecules/Nigella Sativa/Nigella_Sativa.png",
    benefits: [
      {
        title: "Potential Analgesic Properties",
        description:
          "Nigella sativa extract is known to contain compounds traditionally associated with analgesic effects. These compounds may support the body's natural ability to alleviate discomfort, contributing to a sense of relief during episodes of tension.",
      },
      {
        title: "Anti-Inflammatory Effects",
        description:
          "The extract has demonstrated traditional use for its anti-inflammatory properties. Since inflammation is believed to play a role in various forms of discomfort, Nigella sativa may help maintain healthy inflammation levels, which can contribute to overall comfort.",
      },
      {
        title: "Neuroprotective Qualities",
        description:
          "Some studies suggest that Nigella sativa extract may possess neuroprotective properties. This aspect could be significant for individuals who seek support for brain health and function, particularly during times of discomfort.",
      },
      {
        title: "Antioxidant Activity",
        description:
          "Nigella sativa extract is rich in antioxidants, which are known for their ability to neutralize harmful free radicals in the body. Since oxidative stress is thought to contribute to discomfort, the antioxidant properties of black seed extract may offer supportive benefits.",
      },
    ],
  },
  {
    name: "TANACETUM PARTHENIUM	",
    extractAmount: "96 mg",
    description:
      "Using Tanacetum parthenium extract, commonly known as feverfew extract, for migraines may offer several potential benefits, although specific research on its efficacy for migraines is ongoing. Here are four of the best-known potential benefits:",
    image: "/molecules/Tanacetum parthenium/Tanacetum_parthenium.png",
    benefits: [
      {
        title: "Potential Reduction in Migraine Frequency",
        description:
          "Feverfew extract has been traditionally utilized for its potential role in supporting a decrease in the frequency of migraine attacks. Some studies suggest that regular use of feverfew may be associated with fewer migraine episodes over time.",
      },
      {
        title: "Anti-inflammatory Properties",
        description:
          "The extract has demonstrated traditional use for its anti-inflammatory properties. Since inflammation is believed to play a role in various forms of discomfort, Nigella sativa may help maintain healthy inflammation levels, which can contribute to overall comfort.",
      },
      {
        title: "Vasodilatory Effects",
        description:
          "Feverfew extract may support normal blood vessel function by promoting vasodilation, which is the widening of blood vessels. Since migraines can be linked to blood vessel constriction, this property may help in regulating blood flow in the brain, contributing to overall well-being.",
      },
      {
        title: "Pain Relief Support",
        description:
          "Feverfew extract has been traditionally recognized for its analgesic properties. While it may not be as potent as prescription medications, its natural compounds may offer mild relief from discomfort by influencing certain pathways associated with pain and inflammation.",
      },
    ],
  },
  {
    name: "LAVANDULA OFFICINALIS",
    extractAmount: "84 mg",
    description:
      "Nigella sativa, widely known as black seed, has a long history of traditional use in herbal medicine. While specific research on its direct efficacy for migraines may be limited, black seed extract may offer several potential benefits that could be relevant for individuals experiencing migraines.",
    image: "/molecules/Lavandula officinalis/Lavandula_officinalis.png",
    benefits: [
      {
        title: "Relaxation and Stress Reduction",
        description:
          "Lavender extract is well-known for its calming Lavender extract is well-known for its calming and soothing effects. Since stress is a common trigger for migraines, the ability of lavender to promote relaxation and reduce stress levels may contribute to a sense of overall well-being, potentially aiding in migraine management.",
      },
      {
        title: "Potential Pain Relief",
        description:
          "Lavender extract has been recognized for its analgesic properties. Topical application of lavender oil to areas such as the temples, or inhaling its soothing vapors, may provide mild relief from discomfort associated with headaches.",
      },
      {
        title: "Support for Improved Sleep Quality",
        description:
          "Lavender extract has been traditionally used to enhance sleep quality and duration. Since quality sleep is crucial for overall wellness, and disruptions in sleep patterns can trigger migraines, using lavender extract before bedtime may help promote restful sleep and mitigate sleep-related migraine triggers.",
      },
      {
        title: "Anti-Inflammatory Properties",
        description:
          "Lavender extract contains compounds that may offer anti-inflammatory effects. Since inflammation is believed to play a role in various forms of discomfort, the traditional use of lavender may help maintain healthy inflammation levels, contributing to overall comfort.",
      },
    ],
  },
];

export function IngredientsSection({ productCartData }) {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRefs = useRef([]);

  // Scroll to active item AFTER state update (openIndex change)
  useEffect(() => {
    if (openIndex !== null) {
      setTimeout(() => {
        sectionRefs.current[openIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); // Delay ensures content is rendered first
    }
  }, [openIndex]); // Runs when openIndex changes

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-5xl lg:text-9xl font-bold text-white pb-4 border-b-2 border-white-300 hidden md:block">
          WHAT&apos;S <br />{" "}
          <div className="">
            <span className="text-lg md:text-3xl p-4 ">
              Zoom In the Ingredients
            </span>{" "}
            <span>INSIDE?</span>
          </div>
        </h2>
        <h2 className="text-3xl md:text-5xl lg:text-9xl font-bold text-white pb-4 border-b-2 border-white-300 blocke md:hidden">
          WHAT&apos;S
          <span> INSIDE?</span>
          <div>
            <span className="text-lg md:text-3xl">Zoom In the Ingredients</span>{" "}
          </div>
        </h2>
        <div>
          {productCartData?.product_benefit?.map((ingredient, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el; // ✅ Fixed: No return value
              }}
              className="border-b-2 py-4 last:border-b-0 border-white-300"
            >
              {/* Title & Button */}
              <div className="flex items-center gap-4">
                <button
                  className="text-white font-semibold text-start py-2 rounded-lg w-[100%]"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2 className="text-3xl md:text-7xl">{ingredient?.ingredient_name}</h2>
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
                  <div className="py-2 rounded-lg mb-6">
                    <p className="text-white font-bold">
                      {ingredient?.ingredient_tag}
                    </p>
                    <p className="text-white mt-4">{ingredient?.short_note}</p>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                    {/* Ingredient Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                      {ingredient?.ingredient_image && <Image
                        src={ingredient?.ingredient_image}
                        width={400} // Adjust size for mobile
                        height={400}
                        alt={ingredient?.ingredient_name}
                        className="w-[300px] md:w-[400px] lg:w-[600px] h-auto"
                        loading="lazy"
                      />}
                    </div>

                    {/* Benefits Section */}
                    <div className="w-full lg:w-1/2">
                      <div className="bg-white text-gray-600 text-sm font-semibold px-4 py-2 rounded-md w-fit mb-6">
                        Benefits
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {ingredient.benefit1_name}
                          </h3>
                          <p className="text-white">{ingredient.benefit1_desc}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {ingredient.benefit2_name}
                          </h3>
                          <p className="text-white">{ingredient.benefit2_desc}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {ingredient.benefit3_name}
                          </h3>
                          <p className="text-white">{ingredient.benefit3_desc}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {ingredient.benefit4_name}
                          </h3>
                          <p className="text-white">{ingredient.benefit4_desc}</p>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
