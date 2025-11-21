import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MechanismSection({ productCartData }) {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray mb-6">
        {productCartData?.section3_title}
      </h2>
      {/* <p>{productCartData?.section3_short_note}</p> */}
      <div dangerouslySetInnerHTML={{ __html: productCartData?.section3_short_note }} />
      <section className="pb-16 md:pb-24 md:pt-20">
        <div className="">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-[48%] w-full">
              {productCartData?.product1_image && <Image
                src={productCartData?.product1_image}
                alt="SinaVita Migraine Support Product"
                width={550}
                height={550}
                className="mx-auto"
                loading="lazy"
              />}
            </div>
            <div className="space-y-4 md:w-[48%] w-full">
              <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gary pb-6">
                {productCartData?.product1_name}
              </h2>
              {/* <p className="text-gary">
                {productCartData?.product1_desc}
              </p> */}
              <div dangerouslySetInnerHTML={{ __html: productCartData?.product1_desc }} />

            </div>

          </div>
        </div>

      </section>
      {/* Product Image Section */}
      <section className="">
        <div className="">
          <div className="flex flex-col md:flex-row items-start pb-16 md:pb-24">
            <div className="space-y-4 md:w-[48%] w-full">
              <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gary pb-6">
                {productCartData?.product2_name}
              </h2>
              {/* <p className="text-gary">
                {productCartData?.product2_desc}
              </p> */}
              <div dangerouslySetInnerHTML={{ __html: productCartData?.product2_desc }} />

            </div>
            <div className="md:w-[48%] w-full">
              {productCartData?.product2_image && <Image
                src={productCartData?.product2_image}
                alt="SinaVita Migraine Support Product"
                width={450}
                height={450}
                className="mx-auto"
                loading="lazy"
              />}
            </div>

          </div>
          <div className="flex flex-col md:flex-row items-start ">
            <div className="md:w-[48%] w-full">
              {productCartData?.product3_image && <Image
                src={productCartData?.product3_image}
                alt="SinaVita Migraine Support Product"
                width={450}
                height={450}
                className="mx-auto"
                loading="lazy"
              />}
            </div>
            <div className="space-y-4 md:w-[48%] w-full">
              <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gary pb-6">
                {productCartData?.product3_name}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: productCartData?.product3_desc }} />

            </div>


          </div>
          <div className="flex w-full flex-row items-start justify-center mt-12 md:mt-24">
            <Link href="/cart">
              <Button
                className="py-6 md:w-[200%] w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white text-lg font-bold"
                variant="outline"
              >
                Buy Now
              </Button>
            </Link>
          </div>
        </div>

      </section>
    </section>
  );
}
