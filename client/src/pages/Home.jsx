import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import KitchenImage from "../assets/kitchen.jpg"
import BathroomImage from "../assets/bathroom_improved.png"
import BasementImage from "../assets/basement_improved.png"
import AdditionImage from "../assets/addition_improved.png"

export default function Home() {
  const heroImages = [
    {
      src: KitchenImage,
      alt: "Renovated kitchen",
    },
    {
      src: BathroomImage,
      alt: "Modern bathroom renovation",
    },
    {
      src: BasementImage,
      alt: "Finished basement",
    },
    {
      src: AdditionImage,
      alt: "Home addition project",
    },
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      )
    }, 4000) // change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: "Kitchen Renovations",
      description:
        "Modernize and transform your kitchen with expert design and quality craftsmanship, tailored for Toronto and GTA homes.",
      image: KitchenImage,
    },
    {
      title: "Bathroom Remodels",
      description:
        "Upgrade your bathroom with functional layouts, luxury finishes, and accessible designs.",
      image: BathroomImage,
    },
    {
      title: "Basement Finishing",
      description:
        "Convert your basement into a comfortable living space, home office, or entertainment area.",
      image: BasementImage,
    },
    {
      title: "Home Additions & Structural Work",
      description:
        "Expand your home safely and efficiently with licensed general contractor expertise.",
      image: AdditionImage,
    },
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-[#F7F5F0] text-[#4A4A4A]">
        <div className="max-w-6xl mx-auto px-4 py-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-[#2B3E34]">
              Baba Kyrillos Renovations
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A]/80">
              Transforming homes across Toronto and the GTA with professional
              residential renovations. Fully licensed, insured, and dedicated
              to quality and integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link to="/contact-us" className="bg-[#E07A5F] text-[#F7F5F0] font-semibold px-6 py-3 rounded-lg hover:bg-[#d06a4f] transition">Request a Free Estimate</Link>
              <a
                href="tel:6475755272"
                className="border border-[#2B3E34] text-[#2B3E34] font-semibold px-6 py-3 rounded-lg hover:bg-[#2B3E34] hover:text-[#F7F5F0] transition"
              >
                Call 647-575-5272
              </a>
            </div>
          </div>
          <div className="md:w-5/12 md:ml-8 lg:ml-12 relative overflow-hidden rounded-xl shadow-lg w-full h-64 sm:h-56 md:h-64 lg:h-72 xl:h-80 mt-10 sm:mt-6 md:mt-0">
            <img
              key={currentImage}
              src={heroImages[currentImage].src}
              alt={heroImages[currentImage].alt}
              className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    currentImage === index ? "bg-[#E07A5F]" : "bg-[#F7F5F0]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Gradient fade into services section */}
      </section>

      {/* Services Section */}
      <section className="bg-white pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
        <h2 className="text-4xl font-bold text-[#4A4A4A] text-center">
          Our Residential Renovation Services
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Baba Kyrillos Renovations specializes in high-quality residential
          renovation projects across Toronto and the GTA. From concept to
          completion, we deliver craftsmanship and professionalism on every job.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-[#4A4A4A]">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
                <Link to="/contact-us" className="inline-block text-[#E07A5F] font-semibold hover:underline">Request a Free Estimate</Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </div>
  )
}