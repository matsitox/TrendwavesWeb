"use client"

import { useState } from "react"
import { ContactModal } from "./contact-modal"

const services = [
  {
    title: "Influencer Marketing",
    description:
      "Conectamos tu marca con los influencers ideales para amplificar tu mensaje. Gestionamos desde la selección hasta la medición de resultados, asegurando autenticidad y alcance real.",
    highlights: ["influencers ideales", "autenticidad y alcance real"],
    featured: true,
  },
  {
    title: "Gestión de Redes Sociales",
    description:
      "Nos encargamos de la gestión integral de tus redes sociales: diseño, contenidos y estrategia. A partir de reuniones iniciales, desarrollamos una propuesta adaptada a tu marca, con foco en mantener una comunicación coherente, cercana y activa con tu comunidad.",
    highlights: ["gestión integral", "diseño, contenidos y estrategia", "comunicación coherente"],
  },
  {
    title: "Social Media Suite",
    description:
      "Servicio integral que combina todas nuestras especialidades: influencer marketing, gestión de redes, producción de contenido y estrategia digital. Como agencia nativa digital, entendemos el lenguaje de las nuevas generaciones y adaptamos tu marca a las tendencias actuales del ecosistema digital. Una solución completa para marcas que buscan un socio estratégico en todas las áreas del marketing digital.",
    highlights: ["servicio integral", "agencia nativa digital", "tendencias actuales", "socio estratégico"],
    featured: true,
  },
]

export function ServicesSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <section id="servicios" className="py-24 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold mb-4">
              SERVICIOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold italic mb-6">Nuestros servicios</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Combinamos creatividad, estrategia y comunidad para transformar ideas en resultados. Cada proyecto que
              tomamos lo encaramos con una mirada integral, entendiendo qué necesita la marca y cómo hacerlo realidad de
              forma auténtica y efectiva.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
            >
              CONTÁCTANOS
            </button>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${service.featured ? "bg-card border border-primary/30" : "bg-card/50"}`}
              >
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  {service.title}
                  {service.featured && (
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">MAIN SERVICE</span>
                  )}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description.split(new RegExp(`(${service.highlights.join("|")})`, "gi")).map((part, i) =>
                    service.highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
                      <span key={i} className="text-primary font-medium">
                        {part}
                      </span>
                    ) : (
                      part
                    ),
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-card to-card/50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="cubeGradient1b" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00FF00" />
                      <stop offset="100%" stopColor="#00CC00" />
                    </linearGradient>
                    <linearGradient id="cubeGradient2b" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00CC00" />
                      <stop offset="100%" stopColor="#009900" />
                    </linearGradient>
                    <linearGradient id="cubeGradient3b" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00FF00" />
                      <stop offset="100%" stopColor="#00DD00" />
                    </linearGradient>
                  </defs>
                  <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="url(#cubeGradient1b)" />
                  <polygon points="50,10 90,30 50,50 10,30" fill="url(#cubeGradient3b)" />
                  <polygon points="10,30 50,50 50,90 10,70" fill="url(#cubeGradient2b)" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary">TRENDWAVES</h3>
              <p className="text-muted-foreground mt-2">Influencer Marketing Agency</p>
            </div>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  )
}
