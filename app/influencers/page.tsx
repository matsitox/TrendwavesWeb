"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InfluencerCard } from "@/components/influencer-card"

const influencersData = [
  {
    id: 1,
    name: "ChinaSSJ",
    image: "/images/chinassj.jpg",
    category: "Streamer",
    instagram: { username: "@chinassj", followers: "280K", url: "https://www.instagram.com/chinassj/" },
    tiktok: { username: "@chinita_ssj", followers: "590K", url: "https://www.tiktok.com/@chinita_ssj" },
    youtube: { username: "@china_ssj", followers: "167K", url: "https://www.youtube.com/@china_ssj" },
    twitch: { username: "chinassj", followers: "162K", url: "https://www.twitch.tv/chinassj" },
  },
  {
    id: 2,
    name: "Nacho Diciocco",
    image: "/images/nacho-diciocco.png",
    category: "Entretenimiento",
    instagram: { username: "@nachodiciocco", followers: "530K", url: "https://www.instagram.com/nachodiciocco/" },
    tiktok: { username: "@naachodc", followers: "1.3M", url: "https://www.tiktok.com/@naachodc" },
    youtube: { username: "@NaachoDC", followers: "946K", url: "https://www.youtube.com/@NaachoDC" },
  },
  {
    id: 3,
    name: "Vudu",
    image: "/images/vuduvd.jpg",
    category: "Streamer",
    instagram: { username: "@vuduvd", followers: "69.3K", url: "https://www.instagram.com/vuduvd/" },
    tiktok: { username: "@vuduneitor", followers: "86K", url: "https://www.tiktok.com/@vuduneitor" },
    twitch: { username: "vuduvd", followers: "30K", url: "https://twitch.tv/vuduvd" },
  },
  {
    id: 4,
    name: "Vickyestt",
    image: "/images/vickyest.jpg",
    category: "Entretenimiento",
    instagram: { username: "@vickyestt", followers: "59K", url: "https://www.instagram.com/vickyestt/" },
    tiktok: { username: "@vickyest_", followers: "569K", url: "https://www.tiktok.com/@vickyest_" },
    twitch: { username: "vickyest", followers: "27K", url: "https://www.twitch.tv/vickyest" },
  },
  {
    id: 5,
    name: "Yazmin Elo",
    image: "/images/yazmmin.jpg",
    category: "Entretenimiento",
    instagram: { username: "@yazmin.elo", followers: "54.9K", url: "https://www.instagram.com/yazmin.elo/" },
    tiktok: { username: "@yazmmin", followers: "160K", url: "https://www.tiktok.com/@yazmmin" },
    tiktok2: { username: "@yazmmin01", followers: "931K", url: "https://www.tiktok.com/@yazmmin01" },
    youtube: { username: "@yazmmin216", followers: "3.4K", url: "https://www.youtube.com/@yazmmin216" },
  },
  {
    id: 6,
    name: "Delfigranata",
    image: "/images/delfigranata.jpg",
    category: "Streamer",
    instagram: { username: "@delfinagranata", followers: "10.1K", url: "https://www.instagram.com/delfinagranata/" },
    tiktok: { username: "@delfigraanata", followers: "12K", url: "https://www.tiktok.com/@delfigraanata" },
    twitch: { username: "delfigraanata", followers: "11K", url: "https://www.twitch.tv/delfigraanata" },
  },
  {
    id: 7,
    name: "Camigaray",
    image: "/images/camigaray.webp",
    category: "Streamer",
    instagram: { username: "@_camigarayy", followers: "9.8K", url: "https://www.instagram.com/_camigarayy/" },
    tiktok: { username: "@_camigaray", followers: "63K", url: "https://www.tiktok.com/@_camigaray" },
    youtube: { username: "@camigaray", followers: "3.5K", url: "https://www.youtube.com/@camigaray" },
    twitch: { username: "camigarayy", followers: "22K", url: "https://www.twitch.tv/camigarayy" },
  },
  {
    id: 8,
    name: "Agos Torchelli",
    image: "/images/agostorchelli.jpg",
    category: "Streamer",
    instagram: { username: "@agostorchelli", followers: "48K", url: "https://www.instagram.com/agostorchelli/" },
    tiktok: { username: "@agostorchelli", followers: "111K", url: "https://www.tiktok.com/@agostorchelli" },
    twitch: { username: "agostorchelli", followers: "14K", url: "https://twitch.tv/agostorchelli" },
  },
  {
    id: 9,
    name: "Priyita",
    image: "/images/priyita.jpg",
    category: "Streamer",
    instagram: { username: "@carotala_", followers: "21K", url: "https://www.instagram.com/carotala_/" },
    tiktok: { username: "@_carotala", followers: "5K", url: "https://www.tiktok.com/@_carotala" },
    twitch: { username: "priyita", followers: "6.5K", url: "https://www.twitch.tv/priyita" },
  },
]

export default function InfluencersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold mb-4">
              NUESTRO EQUIPO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic mb-6">Todos los Influencers</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce a los creadores de contenido que forman parte de Trendwaves. Cada uno aporta su estilo único y
              conexión auténtica con sus comunidades.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {influencersData.map((influencer) => (
              <InfluencerCard key={influencer.id} influencer={influencer} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
