import Link from "next/link";

export default function MigraineKitSection({ id, productCartData }) {
  return (
    <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16 px-6 md:px-20">
      <div className="container mx-auto">
        {/* Full Width Title */}
        <h2 className="text-4xl md:text-9xl font-bold mb-6 md:w-4/5">
          {productCartData?.section2_title}
        </h2>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div dangerouslySetInnerHTML={{ __html: productCartData?.section2_short_note }} />
          </div>

          {/* Right Image */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md">
              <img
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
      </div>
    </section>
  );
}