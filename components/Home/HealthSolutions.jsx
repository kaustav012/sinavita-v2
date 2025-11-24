import Image from 'next/image';
import Link from 'next/link';

const HealthSolutions = ({ product }) => {

    // Smooth scroll handler
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="max-w-8xl mx-auto px-4 py-12 text-center">

            {/* Main Heading */}
            <h1 className="text-4xl md:text-8xl font-bold mb-20 leading-tight">
                Advanced Health Solutions,<br /> Backed by Science
            </h1>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mb-12">
                <button
                    onClick={() => handleScroll("kits-section")}
                    className="bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-800 transition"
                >
                    EXPLORE OUR KITS
                </button>

                <button
                    onClick={() => handleScroll("all-products-section")}
                    className="bg-orange-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-600 transition"
                >
                    SHOP ALL PRODUCTS
                </button>
            </div>

            {/* Subheading */}
            <h1 id="kits-section" className="text-4xl md:text-8xl font-bold mb-4 mt-20 leading-tight">
                Our Health Solutions
            </h1>
            <p className="max-w-2xl mx-auto mb-10 text-base text-gray-700">
                Explore our clinically designed and proven kits, each offering a complete, science-backed solution for your health needs.
            </p>

            {/* Kit Products Grid */}
            <div className='max-w-7xl mx-auto px-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {product?.map((ele, index) => (
                        <div className="flex flex-col items-center" key={index}>
                            <img
                                src={ele?.featured_image || "https://dummyimage.com/250x300/f2f2f2/222"}
                                alt={ele?.name}
                                className="mb-3 rounded"
                            />
                            <h3 className="font-bold mt-1">{ele?.name}</h3>
                            <p className="text-sm mt-2">{ele?.short_description}</p>
                            <Link
                                href={`/product/${ele?.id}`}
                                className="mt-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
                            >
                                EXPLORE
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default HealthSolutions;
