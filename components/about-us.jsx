import { Button } from "../components/ui/button"

export default function AboutUs() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>
      <div className="flex items-center justify-between flex-wrap">
        <p className="text-gray-600 mb-8 max-w-3xl">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <Button className="p-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">Read More</Button>
      </div>
    </section>
  )
}

