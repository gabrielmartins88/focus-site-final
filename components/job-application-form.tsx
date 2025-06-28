"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"

export function JobApplicationForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    vaga: "",
    curriculo: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({
      ...prev,
      curriculo: file,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(`Candidatura para vaga: ${formData.vaga}`)
    const body = encodeURIComponent(`
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Email: ${formData.email}
Vaga de interesse: ${formData.vaga}

Currículo anexado: ${formData.curriculo?.name || "Não anexado"}
`)

    const mailtoLink = `mailto:rh@rsfocus.com.br?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-focus-black">Faça Parte da Nossa Equipe</CardTitle>
            <CardDescription className="text-lg">Preencha o formulário abaixo e envie sua candidatura</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="Digite seu telefone"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Digite seu email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vaga">Vaga de Interesse</Label>
                <Input
                  id="vaga"
                  name="vaga"
                  type="text"
                  required
                  value={formData.vaga}
                  onChange={handleInputChange}
                  placeholder="Qual vaga você tem interesse?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="curriculo">Currículo</Label>
                <div className="relative">
                  <Input
                    id="curriculo"
                    name="curriculo"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Label
                    htmlFor="curriculo"
                    className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-focus-orange transition-colors"
                  >
                    <div className="text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        {formData.curriculo ? formData.curriculo.name : "Clique para anexar seu currículo"}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">PDF, DOC ou DOCX (máx. 10MB)</p>
                    </div>
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-focus-orange hover:bg-focus-orange/90 text-white py-3"
                size="lg"
              >
                Enviar Candidatura
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
