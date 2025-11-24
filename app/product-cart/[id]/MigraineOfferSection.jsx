import Link from "next/link";

export default function MigraineOfferSection({ id, productCartData }) {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16 px-6 md:px-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 uppercase">
            {productCartData?.section3_title}
          </h2>

          <div
            dangerouslySetInnerHTML={{
              __html:
                productCartData?.section3_short_note || "",
            }}
          />

          {/* <ul className="space-y-2 mb-8 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-black">✔</span> Science-driven
            </li>
            <li className="flex items-center gap-2">
              <span className="text-black">✔</span> Clinically designed
            </li>
            <li className="flex items-center gap-2">
              <span className="text-black">✔</span> MDR compliant
            </li>
          </ul> */}

          {/* <p className="font-semibold text-white mb-2">
            Limited Pre-Launch Stock Available
          </p>
          <p className="text-white/90 mb-4">
            Once sold out, this offer will never return.
          </p> */}

          {/* <p className="text-white/90 leading-relaxed mb-8">
            Your one-time opportunity to access SinaVita®’s complete migraine
            management system at an exclusive launch price and receive a
            medical-grade mesh nebulizer for <strong>FREE</strong>.
          </p> */}
        </div>
        <div className="flex flex-col items-center relative">
          <div className=" w-full max-w-md">
            <img
              src={productCartData?.section3_image}
              alt={productCartData?.section3_title}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="absolute bottom-[100px] left-[100px] md:bottom-[100px] md:left-[200px] -translate-x-1/2 bg-black text-white text-center font-bold text-sm md:text-base rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
            LIMITED <br /> LAUNCH <br /> BONUS
          </div>
          <Link
            href={id ? `/product-cart/${id}` : "#"}
            className="bg-transparent border-4 border-white text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-orange-500 transition-all transform hover:scale-105 shadow-lg w-full md:w-auto"
          >
            CLAIM YOUR OFFER!
          </Link>
        </div>
      </div>
    </section>
  );
}
