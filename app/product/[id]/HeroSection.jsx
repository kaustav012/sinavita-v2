import { Typography, Button } from '@mui/material';

export default function HeroMigraineSupportKit() {
    return (
        <section className="bg-orange-500 text-white py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Block */}
                <div className="flex-1 max-w-xl">
                    <Typography variant="h2" className="font-bold mb-2 leading-tight" style={{ fontSize: '2.5rem' }}>
                        YOUR COMPLETE<br />
                        MIGRAINE SUPPORT KIT
                    </Typography>
                    <Typography variant="h6" className="font-semibold mb-4">
                        Everything you need, from prevention to relief in one trusted system!
                    </Typography>
                    <Typography variant="body1" className="mb-6">
                        The SinaVita® Migraine Support Kit combines tablets, nasal spray, inhalation drops, and a medical-grade mesh nebulizer into one synergistic package. From people with migraine, for people with migraine – so you are in charge, not the pain!
                    </Typography>
                    <ul className="mb-6 space-y-2">
                        <li className="font-bold">✔ Preventive daily support with Tablets</li>
                        <li className="font-bold">✔ Rapid relief with Nasal Spray</li>
                        <li className="font-bold">✔ Sensory comfort with Inhalation Drops</li>
                        <li className="font-bold">✔ Advanced delivery with Medical Nebulizer</li>
                    </ul>
                    <Button variant="outlined" color="inherit" className="border-2 border-white" style={{ marginBottom: "1.5rem" }}>
                        GET YOUR KIT TODAY!
                    </Button>
                </div>
                {/* Product Image */}
                <div className="flex-1 flex flex-col items-center justify-center relative">
                    <img
                        src="https://dummyimage.com/225x170/f2f2f2/222"
                        alt="Migraine Support Kit"
                        className="mb-4 rounded shadow-lg"
                    />
                    <div className="bg-black text-white rounded-full px-4 py-1 font-bold absolute mt-[-2rem] ml-16">
                        FREE BONUS<br /><span style={{ fontSize: '0.85rem' }}>(Value 99 USD)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
