const WhySinavita = () => (
    <section className="max-w-5xl mx-auto px-4 py-16">
        {/* Section Title */}
        <h1
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight font-ravenna tracking-tightcustom text-center"
            style={{ letterSpacing: '0.1vw', lineHeight: 1.2 }}
        >
            Why SinaVita®
        </h1>

        {/* Badge Points */}
        <div className="mx-auto justify-items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-16 mb-12 max-w-3xl ">
                <div className="flex items-center gap-4">
                    <span className="inline-block bg-[rgb(111,165,160)] rounded-full p-2">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>
                    <span className="font-semibold">EU MDR-certified</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="inline-block bg-[rgb(111,165,160)] rounded-full p-2">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>
                    <span className="font-semibold">GMP manufactufuring</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="inline-block bg-[rgb(111,165,160)] rounded-full p-2">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>
                    <span className="font-semibold">Clinically inspired formulations</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="inline-block bg-[rgb(111,165,160)] rounded-full p-2">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>
                    <span className="font-semibold">Backed by science</span>
                </div>
            </div>
        </div>

        {/* Feature Points */}
        <div className="space-y-6  mx-auto text-left text-gray-800 max-w-3xl">
            <p>
                <strong>EU MDR Certified</strong> Products developed and registered under the strict EU MDR framework.
            </p>
            <p>
                <strong>GMP Quality Verified</strong> Manufactured following the highest GMP and ISO 13485 standards.
            </p>
            <p>
                <strong>Clinically Inspired Formulas</strong> Backed by research, developed for real-world health needs.
            </p>
            <p>
                <strong>Trusted Across the EU/EEA</strong> Designed and approved for seamless distribution within the EU and EEA.
            </p>
        </div>
    </section>
);

export default WhySinavita;
