import CEOImage from "../assets/kitchen.jpg";

export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800 space-y-16">
      {/* Page Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-[#4A4A4A] mb-4">
          About Lamassu General Contracting
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Providing top-quality residential renovations across Toronto and the Greater Toronto Area with professionalism, integrity, and a focus on client satisfaction.
        </p>
      </header>

      {/* Why Choose Us Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-4">
          Why Choose Us
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Licensed & Insured",
              detail: "Professional General Contractor in Ontario",
              meta: "Fully licensed and insured end-to-end so you never carry the risk.",
            },
            {
              title: "7+ Years Experience",
              detail: "Proven track record in Toronto & GTA",
              meta: "High-quality residential renovations delivered on time and on budget.",
            },
            {
              title: "Transparent Pricing",
              detail: "No hidden costs or surprises",
              meta: "Clear quotes, honest timelines, and professional project management throughout.",
            },
            {
              title: "Craftsmanship First",
              detail: "Safety and attention to detail on every job",
              meta: "Every project is executed with care, precision, and a commitment to lasting quality.",
            },
            {
              title: "Emergency Services",
              detail: "Rapid response for urgent renovations",
              meta: "Available for emergency situations when you need professional help fast.",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-4 p-5 rounded-xl border border-[#2B3E34]/15 bg-[#F7F5F0]">
              <div className="mt-0.5 shrink-0 text-[#2B3E34]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-[#2B3E34]">{item.title}</p>
                <p className="text-sm text-[#4A4A4A]">{item.detail}</p>
                <p className="text-xs text-gray-500">{item.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Licenses Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-4">
          Certifications & Licenses
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "309A Electrician — Construction and Maintenance",
              detail: "Certificate of Qualification",
              meta: "Issued April 8, 2013 · Membership No. 13278490 · Journeypersons Class",
            },
            {
              title: "Master Electrician License",
              detail: "Licensed Master Electrician",
              meta: "License No. 6011598",
            },
            {
              title: "Construction & Maintenance Electrician Pre-Apprentice Program",
              detail: "Diploma",
              meta: "Issued September 22, 2023",
            },
            {
              title: "Industrial Technician",
              detail: "Certificate of Qualification",
              meta: "Issued October 7, 2008 · Certificate No. 400126205",
            },
            {
              title: "Certified Engineering Technologist",
              detail: "Diploma",
              meta: "Issued November 19, 2020",
            },
            {
              title: "Certified Technician",
              detail: "Diploma — Ontario Association of Certified Engineering Technicians and Technologists (OACETT)",
              meta: "Issued February 6, 2020",
            },
            {
              title: "Maintenance Work Management",
              detail: "Certificate",
              meta: "Issued April 24, 2023",
            },
          ].map((cert, index) => (
            <div key={index} className="flex gap-4 p-5 rounded-xl border border-[#2B3E34]/15 bg-[#F7F5F0]">
              <div className="mt-0.5 shrink-0 text-[#2B3E34]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="space-y-0.5">
                <p className="font-semibold text-[#2B3E34]">{cert.title}</p>
                <p className="text-sm text-[#4A4A4A]">{cert.detail}</p>
                <p className="text-xs text-gray-500">{cert.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Types of Residential Work Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-4">
          Residential Renovation Services
        </h2>
        <p className="text-gray-700">
          Lamassu General Contracting specializes in transforming homes across Toronto and the GTA. Our services include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Kitchen renovations and modernizations</li>
          <li>Bathroom remodels, including luxury and accessible designs</li>
          <li>Basement finishing and basement-to-living-space conversions</li>
          <li>Home additions and structural improvements</li>
          <li>Flooring, drywall, framing, and general home improvements</li>
        </ul>
      </section>

      {/* Licensing & Professionalism */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-[#4A4A4A] mb-4">
          Fully Licensed and Professional
        </h2>
        <p className="text-gray-700">
          Lamassu General Contracting is a fully licensed general contractor in Ontario, compliant with all municipal and provincial regulations. Our team is insured, experienced, and dedicated to delivering exceptional residential renovations with integrity and safety at the forefront.
        </p>
      </section>

      {/* CEO Photo + Mission Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-6 md:space-y-0">
        <div className="shrink-0">
          <img
            src={CEOImage}
            alt="CEO of Lamassu General Contracting"
            className="w-64 h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="flex-1 text-gray-700 space-y-4">
          <h2 className="text-3xl font-semibold text-[#4A4A4A]">
            Message from Our CEO
          </h2>
          <p>
            At Lamassu General Contracting, our mission is to transform homes while maintaining the highest standards of quality, professionalism, and integrity. We are committed to exceeding client expectations, building long-term relationships, and ensuring every project is completed on time and on budget.
          </p>
          <p>
            Our goal is simple: to provide Toronto and GTA homeowners with exceptional residential renovations that enhance comfort, functionality, and style. Every decision we make is guided by honesty, transparency, and a dedication to craftsmanship.
          </p>
          <p>
            We take pride in our work, our team, and the trust our clients place in us. Your home is our canvas, and we approach every project with the care and attention it deserves.
          </p>
        </div>
      </section>
    </div>
  )
}