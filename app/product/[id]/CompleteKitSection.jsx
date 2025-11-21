import { Typography, Button } from '@mui/material';

const kitPoints = [
    "Tablets — preventive daily support",
    "Nasal Spray — rapid relief",
    "Inhalation Drops — sensory comfort",
    "Mesh Nebulizer — advanced delivery",
];

export default function CompleteKitSection() {
    return (
        <section className="py-10 px-4 bg-gray-50 flex flex-col items-center">
            <img
                src="https://dummyimage.com/120x120/f2f2f2/222"
                alt="Complete Support Kit"
                className="w-32 h-32 rounded mb-4"
            />
            <Typography variant="h5" className="font-semibold mb-4 text-center">
                Complete Migraine Support Kit
            </Typography>
            <ul className="mb-4 text-left space-y-2 max-w-md w-full">
                {kitPoints.map((point) => (
                    <li key={point} className="pl-4 relative before:content-['•'] before:absolute before:-left-2">
                        {point}
                    </li>
                ))}
            </ul>
            <Button
                variant="contained"
                className="bg-gradient-to-r from-indigo-500 to-green-400 text-white"
            >
                Claim Your Offer
            </Button>
        </section>
    );
}
