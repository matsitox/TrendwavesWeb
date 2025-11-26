"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { ContactModal } from "./contact-modal"

const influencers = [
  {
    id: 1,
    name: "ChinaSSJ",
    image: "/images/chinassj.jpg",
    niche: "Streamer",
  },
  {
    id: 2,
    name: "Nacho Diciocco",
    image: "/images/nacho-diciocco.png",
    niche: "Entretenimiento",
  },
  {
    id: 3,
    name: "Vudu",
    image: "/images/vuduvd.jpg",
    niche: "Streamer",
  },
  {
    id: 4,
    name: "Vickyestt",
    image: "/images/vickyest.jpg",
    niche: "Entretenimiento",
  },
  {
    id: 5,
    name: "Yazmin Elo",
    image: "/images/yazmmin.jpg",
    niche: "Entretenimiento",
  },
  {
    id: 6,
    name: "Delfigranata",
    image: "/images/delfigranata.jpg",
    niche: "Streamer",
  },
  {
    id: 7,
    name: "Camigaray",
    image: "/images/camigaray.webp",
    niche: "Streamer",
  },
  {
    id: 8,
    name: "Agos Torchelli",
    image: "/images/agostorchelli.jpg",
    niche: "Streamer",
  },
  {
    id: 9,
    name: "Priyita",
    image: "/images/priyita.jpg",
    niche: "Streamer",
  },
]

export function InfluencersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const visibleCount = 4
  const maxIndex = Math.max(0, influencers.length - visibleCount)

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section id="influencers" className="py-24 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold mb-4">
              INFLUENCERS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold italic">Nuestros Influencers</h2>
            <p className="text-muted-foreground mt-4 max-w-md">
              Descubre a los talentos que impulsan las marcas del futuro.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="mt-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-md font-medium transition-colors"
            >
              CONTÁCTANOS
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors disabled:opacity-30"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors disabled:opacity-30"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
          >
            {influencers.map((influencer) => (
              <div key={influencer.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="group">
                  <div className="relative aspect-square rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-colors">
                    <img
                      src={influencer.image || "/placeholder.svg"}
                      alt={influencer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-center font-semibold text-lg">{influencer.name}</h3>
                  <p className="text-center text-muted-foreground text-sm">{influencer.niche}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/influencers">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Ver más influencers
            </Button>
          </Link>
        </div>
      </div>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  )
}
