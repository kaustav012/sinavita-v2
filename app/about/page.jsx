import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray mb-4">
          About SinaVita®
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our mission is to provide natural, science-backed solutions for those
          suffering from migraines and headaches. We believe in the power of
          nature combined with modern research to create effective relief
          products.
        </p>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square">
          <Image
            src="/about.jpg"
            alt="Our Story"
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray">
            Our Story
          </h2>
          <p className="text-gray-600">
            SinaVita® was founded with a mission to bridge the gap between
            natural remedies and scientific innovation. Our team of experts,
            researchers, and healthcare professionals have worked tirelessly to
            develop migraine relief products that are safe, effective, and
            backed by research.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Science-Backed Solutions",
              desc: "We rely on clinical research to formulate our products.",
            },
            {
              title: "Natural & Effective",
              desc: "We use only high-quality, natural ingredients proven for their benefits.",
            },
            {
              title: "Customer First",
              desc: "We prioritize our customers' needs and well-being above all else.",
            },
          ].map((value, index) => (
            <Card key={index} className="p-6 bg-gray-50">
              <CardContent className="space-y-4 p-0">
                <h3 className="text-xl font-bold text-ye-600">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6 text-center bg-gray-50">
              <div className="relative aspect-square mx-auto w-32 h-32">
                <Image
                  src={`/member-${i}.jpg`}
                  alt={`Team Member ${i}`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <CardContent className="p-0 mt-4">
                <h3 className="font-semibold text-gray-900">Team Member {i}</h3>
                <p className="text-sm text-gray-600">Position</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Join Us */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray mb-6">
          Join the SinaVita® Family
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          We are constantly growing and looking for passionate individuals to
          join our team. If you share our mission, let’s connect!
        </p>
        <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 py-6">
          Contact Us
        </Button>
      </section>

      <Footer />
    </div>
  );
}
