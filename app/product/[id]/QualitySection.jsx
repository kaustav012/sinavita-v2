import { Typography } from '@mui/material';

const qualities = [
    "Certified Production",
    "Documented Ingredients",
    "Transparent Standards",
];

export default function QualitySection() {
    return (
        <section className="bg-white py-8 px-4">
            <Typography variant="h5" className="font-semibold mb-6 text-center">
                Quality, Safety & Trust
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {qualities.map((quality) => (
                    <div key={quality} className="bg-gray-100 p-5 rounded shadow text-center">
                        <img
                            src="https://dummyimage.com/120x120/f2f2f2/222"
                            alt={quality}
                            className="w-12 h-12 mx-auto mb-2"
                        />
                        <Typography variant="subtitle1">
                            {quality}
                        </Typography>
                    </div>
                ))}
            </div>
            <div className="mt-4 border border-gray-200 rounded p-4 text-xs text-gray-500 text-center">
                EU MDR 2017/745 | GMP Certified Manufacturing
            </div>
        </section>
    );
}
