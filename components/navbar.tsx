"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ContactModal } from "./contact-modal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo-trend.png" alt="Trendwaves" width={160} height={40} className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </Link>
            <Link href="#influencers" className="text-muted-foreground hover:text-foreground transition-colors">
              Influencers
            </Link>
            <Link href="#proyectos" className="text-muted-foreground hover:text-foreground transition-colors">
              Proyectos
            </Link>
          </nav>

          <Button
            variant="outline"
            onClick={() => setIsContactOpen(true)}
            className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
          >
            Contáctanos
          </Button>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-background border-t border-border/20 px-6 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="#servicios"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#influencers"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Influencers
              </Link>
              <Link
                href="#proyectos"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </Link>
              <Button
                variant="outline"
                onClick={() => {
                  setIsOpen(false)
                  setIsContactOpen(true)
                }}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit bg-transparent"
              >
                Contáctanos
              </Button>
            </nav>
          </div>
        )}
      </header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
