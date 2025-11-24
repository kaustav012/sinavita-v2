import Link from "next/link";

export default function MigraineOfferSection({ id, productCartData }) {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16 px-6 md:px-20">
      <div className="container mx-auto">
        {/* Full Width Title - 80% on Desktop */}
        {/* <h2 className="text-4xl md:text-8xl font-extrabold leading-tight mb-6 uppercase max-w-full">
          {productCartData?.section3_title}
        </h2> */}

        <h2 className="text-4xl lg:text-9xl font-bold leading-tight">
          {productCartData?.section3_title}
        </h2>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  productCartData?.section3_short_note || "",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center relative">
            <div className="w-full max-w-md">
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
      </div>
    </section>
  );
}