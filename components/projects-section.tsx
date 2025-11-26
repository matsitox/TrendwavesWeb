const projects = [
  {
    id: 1,
    title: "Buenos Aires Trap 2024",
    description: "Campaña masiva en redes sociales para el reconocido festival Buenos Aires Trap, organizado por",
    partners: ["Mercado Libre", "Dale Play Live"],
    media: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bsas_trap-vl0tnvvA52Fb7oGknhDbwPScRXRzcZ.mp4",
    type: "video",
  },
  {
    id: 2,
    title: "Campaña promocional Sony",
    description:
      "En marzo de 2024, tras nuestro último evento en Display Studios, colaboramos con Sony para promocionar su nueva línea de auriculares y parlantes, con campañas en redes y menciones en vivo con códigos de descuento.",
    partners: [],
    media: "/images/sony.jpg",
    type: "image",
  },
  {
    id: 3,
    title: "Asociación con Takenos",
    description:
      "Actualmente desarrollamos campañas y contenidos de este estilo para marcas reconocidas, como la billetera virtual",
    partners: ["Takenos"],
    media: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/takenos-Tf88Hvh0oTyxCJNG2K7X0JuxRJucDC.mp4",
    type: "video",
  },
  {
    id: 4,
    title: "Display Studios",
    description:
      "En Display Studios llevamos a cabo nuestro evento más reciente: Ping Pong con Streamers, una experiencia única que reunió a más de 16 influencers de la escena en un exitoso torneo de ping pong, desarrollado en colaboración con diversas marcas.",
    partners: [],
    media: "/images/display-studios.jpg",
    type: "image",
  },
  {
    id: 5,
    title: "Campaña Promocional con Temu",
    description:
      "Campaña de marketing con influencers argentinos para Temu, la reconocida marca internacional que desembarcó en el país con una estrategia de alcance masivo en redes sociales.",
    partners: [],
    media: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/temuvideo-gGWSYJ8ItEPEUQBPi7ovnV1FhCb2y6.mp4",
    type: "video",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold mb-4">
              PROYECTOS DESTACADOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold italic mb-6">Campañas previas</h2>
            <p className="text-muted-foreground leading-relaxed">
              A continuación, te mostramos algunas de nuestras campañas previas realizadas para diversas marcas, junto
              con eventos organizados por nosotros en colaboración con influencers.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <div className="relative aspect-[3/4] max-w-sm rounded-2xl overflow-hidden mb-4">
                  {project.type === "video" ? (
                    <video src={project.media} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                  ) : (
                    <img
                      src={project.media || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">
                  {project.description}{" "}
                  {project.partners.length > 0 &&
                    project.partners.map((partner, i) => (
                      <span key={partner}>
                        <span className="text-primary font-medium">{partner}</span>
                        {i < project.partners.length - 1 && " y "}
                      </span>
                    ))}
                  {project.partners.length > 0 && "."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
