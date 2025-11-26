"use client"

import Image from "next/image"

export function TrustedBySection() {
  const brands = [
    {
      name: "Roobet",
      logo: "/images/roobet.png",
    },
    {
      name: "Bonoxs",
      logo: "/images/bnx-logo-full-201.png",
      invert: true,
    },
    {
      name: "Sony",
      logo: "/images/sony-logo-png5-204.png",
    },
    {
      name: "Buenos Aires Trap",
      logo: "/images/logo-2024100109355497814.png",
      size: "large",
    },
    {
      name: "Takenos",
      logo: "/images/images-20-283-29-201.png",
    },
    {
      name: "Netflix",
      logo: "/images/netflix.png",
      size: "large",
    },
    {
      name: "Gula Alfajor",
      logo: "/images/logo-2-201.png",
      invert: true,
    },
  ]

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="py-16 bg-card/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground mb-12">Confían en nosotros</p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee-continuous">
          {duplicatedBrands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 mx-8 md:mx-16 flex items-center justify-center">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={150}
                height={60}
                className={`${brand.size === "large" ? "h-12 md:h-16" : "h-8 md:h-12"} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity ${brand.invert ? "invert" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
