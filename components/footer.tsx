"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Youtube } from "lucide-react"
import { ContactModal } from "./contact-modal"

export function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <footer className="py-16 bg-background border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/images/logo-trend.png" alt="Trendwaves" width={160} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Conectamos marcas con resultados a través de estrategias creativas y el poder de los influencers.
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="mt-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-md font-medium transition-colors"
            >
              CONTÁCTANOS
            </button>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:contacto@trendwaves.net" className="hover:text-primary transition-colors">
                  contacto@trendwaves.net
                </a>
              </li>
              <li>
                <a href="tel:+5491123456789" className="hover:text-primary transition-colors">
                  +54 9 11 2345-6789
                </a>
              </li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© Trendwaves 2024. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </footer>
  )
}
