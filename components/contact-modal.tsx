"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Send, Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate email sending - in production, this would call an API route
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Create mailto link as fallback
    const subject = encodeURIComponent(`Nuevo contacto de ${formData.empresa} - ${formData.servicio}`)
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.telefono}\n` +
        `Empresa: ${formData.empresa}\n` +
        `Servicio de interés: ${formData.servicio}\n\n` +
        `Mensaje:\n${formData.mensaje}`,
    )

    window.open(`mailto:contacto@trendwaves.net?subject=${subject}&body=${body}`, "_blank")

    setIsSubmitting(false)
    setIsSuccess(true)

    setTimeout(() => {
      setIsSuccess(false)
      onClose()
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        servicio: "",
        mensaje: "",
      })
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card border border-border rounded-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card p-6 border-b border-border/20 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Contáctanos</h2>
            <p className="text-muted-foreground text-sm mt-1">Cuéntanos sobre tu proyecto</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre completo *</Label>
            <Input
              id="nombre"
              required
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono *</Label>
            <Input
              id="telefono"
              type="tel"
              required
              placeholder="+54 9 11 1234-5678"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="empresa">Nombre de la empresa *</Label>
            <Input
              id="empresa"
              required
              placeholder="Tu empresa"
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="servicio">Servicio de interés *</Label>
            <Select
              required
              value={formData.servicio}
              onValueChange={(value) => setFormData({ ...formData, servicio: value })}
            >
              <SelectTrigger className="bg-background border-border focus:border-primary">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="influencer-marketing">Influencer Marketing</SelectItem>
                <SelectItem value="social-media">Social Media Management</SelectItem>
                <SelectItem value="content-creation">Content Creation</SelectItem>
                <SelectItem value="brand-strategy">Brand Strategy</SelectItem>
                <SelectItem value="eventos">Eventos</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje">Mensaje adicional</Label>
            <Textarea
              id="mensaje"
              placeholder="Cuéntanos más sobre tu proyecto..."
              rows={4}
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              className="bg-background border-border focus:border-primary resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : isSuccess ? (
              "¡Mensaje enviado!"
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviar mensaje
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Te responderemos a la brevedad a <span className="text-primary">contacto@trendwaves.net</span>
          </p>
        </form>
      </div>
    </div>
  )
}
