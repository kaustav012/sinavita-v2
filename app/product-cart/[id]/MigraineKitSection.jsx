import Link from "next/link";

export default function MigraineKitSection({ id, productCartData }) {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16 px-6 md:px-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-9xl font-bold mb-6">
            {productCartData?.section2_title}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: productCartData?.section2_short_note }} />
          {/* <p className="mb-6 text-lg leading-relaxed">
            Migraines affect the body in multiple ways – neurological, vascular,
            and sensory. That’s why SinaVita® Migraine Support Kit combines
            different delivery methods for a
            <span className="font-semibold"> multi-targeted approach.</span>
          </p>

          <ul className="space-y-2 mb-6 text-base">
            <li>
              <span className="text-black">✔</span> Preventive and systemic
              support (Tablets)
            </li>
            <li>
              <span className="text-black">✔</span> Fast nasal response during
              acute episodes (Nasal Spray)
            </li>
            <li>
              <span className="text-black">✔</span> Relaxing aromatic comfort
              (Inhalation Drops)
            </li>
            <li>
              <span className="text-black">✔</span> Optimized mist delivery
              (Mesh Nebulizer)
            </li>
          </ul>

          <p className="mb-8 text-base leading-relaxed">
            Together, they create a complete daily system for support, balance,
            and relief.
          </p> */}
        </div>

        {/* Right Image */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md">
            <img
              // src="/image/cta_img.png"
              src={productCartData?.product?.featured_image}
              alt="SinaVita Migraine Support Kit"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <Link
            href={id ? `/product-cart/${id}` : "#"}
            className="bg-transparent border-4 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-orange-500 transition-all transform hover:scale-105 shadow-lg w-full md:w-auto"
          >
            GET YOUR KIT TODAY!
          </Link>
        </div>
      </div>
    </section>
  );
}
