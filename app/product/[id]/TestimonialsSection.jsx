import { Typography, Card, CardContent } from '@mui/material';

const testimonials = [
    { name: "Alice D.", text: "Best support for migraines, it's a lifesaver!", rating: 5 },
    { name: "Ben S.", text: "The kit really works. Top quality.", rating: 5 },
    { name: "Maria P.", text: "Fast-acting and lasts longer than my old product.", rating: 5 },
];

export default function TestimonialsSection() {
    return (
        <section className="py-10 px-4 bg-gray-50">
            <Typography variant="h5" className="font-semibold mb-6 text-center">
                Trusted Migraine Support, Backed by Science & Regulation
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map(({ name, text, rating }) => (
                    <Card key={name} className="p-3">
                        <CardContent>
                            <Typography variant="body2" className="mb-2">"{text}"</Typography>
                            <Typography variant="caption" className="block mb-1 font-medium">{name}</Typography>
                            <div className="text-yellow-500 mb-1">
                                {"★".repeat(rating)}{"☆".repeat(5 - rating)}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
