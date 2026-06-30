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
              Lamassu General Contracting
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A]/80">
              From residential renovations to large-scale industrial construction across Toronto and the GTA. Fully licensed, insured, and built on a foundation of quality and integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link to="/contact-us" className="bg-[#E07A5F] text-[#F7F5F0] font-semibold px-6 py-3 rounded-lg hover:bg-[#d06a4f] transition">Request a Free Estimate</Link>
              <a
                href="tel:6479216844"
                className="border border-[#2B3E34] text-[#2B3E34] font-semibold px-6 py-3 rounded-lg hover:bg-[#2B3E34] hover:text-[#F7F5F0] transition md:cursor-default"
              >
                Call 647-921-6844
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

      {/* Industrial Services Section */}
      <section className="bg-[#2B3E34] pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block text-[#E07A5F] text-sm font-semibold uppercase tracking-widest">Commercial & Industrial</span>
            <h2 className="text-4xl font-bold text-[#F7F5F0]">
              Industrial Construction Services
            </h2>
            <p className="text-[#ddd8ce] text-center max-w-2xl mx-auto">
              Lamassu General Contracting delivers large-scale industrial and commercial construction across the GTA. Equipped for demanding job sites with certified operators, heavy machinery, and end-to-end project management.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                  </svg>
                ),
                title: "Site Preparation & Excavation",
                description: "Full-scale land clearing, grading, trenching, and excavation using modern heavy equipment for commercial and industrial builds.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.664-1.329c1.259-.76 1.903-2.668.84-4.06l-1.986-2.322a3 3 0 0 0-4.243 0l-1.16 1.161c-.621.621-.878 1.489-.7 2.315" />
                  </svg>
                ),
                title: "Heavy Machinery Operations",
                description: "Certified operators running excavators, bulldozers, cranes, and lifting equipment for complex industrial construction tasks.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                ),
                title: "Structural Steel & Concrete",
                description: "Industrial-grade structural framing, concrete forming and pouring, and steel erection for warehouses, factories, and commercial facilities.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>
                ),
                title: "Construction Site Management",
                description: "End-to-end coordination of large job sites — scheduling, safety compliance, subcontractor management, and on-site logistics.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                  </svg>
                ),
                title: "Demolition & Deconstruction",
                description: "Safe, compliant demolition of industrial structures and commercial buildings with full debris removal and site remediation.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
                title: "Infrastructure & Utilities",
                description: "Installation and upgrade of underground utilities, drainage systems, roads, and foundational infrastructure for industrial developments.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-[#1A2820] rounded-xl p-6 space-y-4 hover:bg-[#223329] transition border border-[#ddd8ce]/10">
                <div className="text-[#E07A5F]">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#F7F5F0]">{service.title}</h3>
                <p className="text-[#ddd8ce]/80 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link to="/contact-us" className="inline-block bg-[#E07A5F] text-[#F7F5F0] font-semibold px-8 py-3 rounded-lg hover:bg-[#d06a4f] transition">
              Request an Industrial Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
        <h2 className="text-4xl font-bold text-[#4A4A4A] text-center">
          Our Residential Renovation Services
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Lamassu General Contracting specializes in high-quality residential
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