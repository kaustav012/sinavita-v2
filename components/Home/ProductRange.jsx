import { useState } from "react";
import { useCart } from "../../services/context/CartContext";
import Link from "next/link";



const ProductRange = ({ productGroups }) => {
    const [openIdx, setOpenIdx] = useState({ group: null, item: null });
    const { addToCart } = useCart();

    return (
        <section className="max-w-6xl mx-auto px-4 py-16" id="all-products-section">
            {/* Section Title */}
            <h1
                className="text-4xl md:text-8xl font-bold mb-10 leading-tight text-center font-ravenna tracking-tightcustom"
                style={{ letterSpacing: '0.1vw', lineHeight: 1.2 }}
            >
                Explore Our Full Product Range
            </h1>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 mb-14">
                <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full p-2" style={{ background: "rgb(111 165 160)" }}>
                        <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span className="font-semibold">EU MDR Certified</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full p-2" style={{ background: "rgb(111 165 160)" }}>
                        <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span className="font-semibold">GMP Quality Verified</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full p-2" style={{ background: "rgb(111 165 160)" }}>
                        <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span className="font-semibold">Secure Payment</span>
                </div>
            </div>

            {/* Product Groups */}
            {productGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="mb-16">
                    <span className="font-bold mb-8 block text-xl">{group.name}</span>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {group?.products.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-md cursor-pointer"
                                onMouseEnter={() => setOpenIdx({ group: groupIdx, item: idx })}
                                onMouseLeave={() => setOpenIdx({ group: null, item: null })}
                            >
                                <img
                                    src={item?.featured_image || "https://dummyimage.com/250x300/f2f2f2/222"}
                                    alt={item.name}
                                    className="mb-4 rounded-lg"
                                    draggable={false}
                                />
                                <div className="font-bold mt-2 text-center">{item.name}</div>
                                <div className="mb-2 text-sm text-gray-700 text-center">{item.short_description}</div>
                                <div className="text-lg font-bold mb-2">${item?.single_offer_price || item?.single_base_price}</div>
                                {/* <button className="bg-yellow-400 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition w-full">
                                    ADD TO CART
                                </button> */}

                                {openIdx.group === groupIdx && openIdx.item === idx && (
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white border rounded-xl shadow-xl p-6 w-80 flex flex-col items-center animate-fade">
                                        <img
                                            src={item?.featured_image || "https://dummyimage.com/350x420/f2f2f2/222"}
                                            alt={item.title}
                                            className="mb-5 rounded-xl"
                                            draggable={false}
                                        />
                                        <div className="font-bold text-center mb-1">{item.name}</div>
                                        <div className="mb-3 text-gray-700 text-center">{item.short_description}</div>
                                        <div className="text-lg font-bold mb-3">${item?.single_offer_price || item?.single_base_price}</div>
                                        <Link href="/cart">
                                            <button onClick={() =>
                                                addToCart(
                                                    item,
                                                    item?.single_offer_price || item?.single_base_price,
                                                    "monthly"
                                                )
                                            } className="bg-yellow-400 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition">
                                                ADD TO CART
                                            </button>
                                        </Link>

                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProductRange;
