"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { ContactModal } from "./contact-modal"

interface SocialMedia {
  username: string
  followers: string
  url: string
}

interface Influencer {
  id: number
  name: string
  image: string
  category: string
  instagram?: SocialMedia
  tiktok?: SocialMedia
  tiktok2?: SocialMedia
  youtube?: SocialMedia
  twitch?: SocialMedia
}

export function InfluencerCard({ influencer }: { influencer: Influencer }) {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <div className="bg-card rounded-2xl overflow-hidden border border-border/30 hover:border-primary/50 transition-colors group">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={influencer.image || "/placeholder.svg"}
            alt={influencer.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-primary">{influencer.category}</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">{influencer.name}</h3>

          <div className="space-y-3 mb-6">
            {influencer.instagram && (
              <Link
                href={influencer.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm hover:text-primary transition-colors"
              >
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={16} />
                  <span>{influencer.instagram.username}</span>
                </div>
                <span className="text-primary font-semibold">{influencer.instagram.followers}</span>
              </Link>
            )}

            {influencer.tiktok && (
              <Link
                href={influencer.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm hover:text-primary transition-colors"
              >
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span>{influencer.tiktok.username}</span>
                </div>
                <span className="text-primary font-semibold">{influencer.tiktok.followers}</span>
              </Link>
            )}

            {influencer.tiktok2 && (
              <Link
                href={influencer.tiktok2.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm hover:text-primary transition-colors"
              >
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span>{influencer.tiktok2.username}</span>
                </div>
                <span className="text-primary font-semibold">{influencer.tiktok2.followers}</span>
              </Link>
            )}

            {influencer.youtube && (
              <Link
                href={influencer.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm hover:text-primary transition-colors"
              >
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Youtube size={16} />
                  <span>{influencer.youtube.username}</span>
                </div>
                <span className="text-primary font-semibold">{influencer.youtube.followers}</span>
              </Link>
            )}

            {influencer.twitch && (
              <Link
                href={influencer.twitch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm hover:text-primary transition-colors"
              >
                <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
                  </svg>
                  <span>{influencer.twitch.username}</span>
                </div>
                <span className="text-primary font-semibold">{influencer.twitch.followers}</span>
              </Link>
            )}
          </div>

          <Button
            onClick={() => setIsContactOpen(true)}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Contactar
          </Button>
        </div>
      </div>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
