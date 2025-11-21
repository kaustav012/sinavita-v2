import { Typography, Button } from '@mui/material';

export default function LimitedOfferSection() {
    return (
        <section className="bg-orange-500 text-white py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left: Offer Text */}
                <div className="flex-1 max-w-xl">
                    <Typography variant="h4" className="font-bold mb-2 leading-tight" style={{ fontSize: '2rem' }}>
                        LIMITED OFFER
                    </Typography>
                    <Typography variant="h6" className="font-semibold mb-4">
                        Get a FREE Nebulizer (value 99 USD) with the first 100 kits ordered!
                    </Typography>
                    <Typography variant="body1" className="mb-4">
                        <span className="font-bold">Limited Pre-Launch Stock Available</span><br />
                        Once sold out, this offer will never return.
                    </Typography>
                    <Typography variant="body2" className="mb-6">
                        Your one-time opportunity to access SinaVita®’s full migraine support system with <span className="font-bold">LIMITED LAUNCH BONUS</span>.
                    </Typography>
                    <Button variant="outlined" color="inherit" className="border-2 border-white" style={{ marginBottom: "1.5rem" }}>
                        CLAIM YOUR OFFER!
                    </Button>
                </div>
                {/* Right: Nebulizer Image + Badge */}
                <div className="flex-1 flex flex-col items-center justify-center relative min-w-[180px]">
                    <img
                        src="https://dummyimage.com/180x180/f2f2f2/222"
                        alt="Free Nebulizer"
                        className="mb-4 rounded shadow-lg"
                    />
                    <div className="bg-black text-white rounded-full px-4 py-2 font-bold absolute mt-[-2rem] ml-14 text-center">
                        LIMITED<br />LAUNCH BONUS
                    </div>
                </div>
            </div>
        </section>
    );
}
