"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    contato: "",
    tipoServico: "",
    numeroProfissionais: "",
    horasSemanais: "",
    frequenciaSemanal: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const emailBody = `
Solicitação de Orçamento

Nome: ${formData.nome}
Empresa: ${formData.empresa}
Contato: ${formData.contato}

Tipo de Serviço: ${formData.tipoServico}
Número de Profissionais: ${formData.numeroProfissionais}
Horas Semanais: ${formData.horasSemanais}
Frequência Semanal: ${formData.frequenciaSemanal}

Atenciosamente,
Solicitação via site Focus
    `.trim()

    const mailtoLink = `mailto:galvao@rsfocus.com.br?subject=Solicitação de Orçamento&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-focus-black">Solicite um Orçamento</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Preencha os dados abaixo para receber uma proposta personalizada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="nome">Nome *</Label>
              <input
                id="nome"
                type="text"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="empresa">Empresa *</Label>
              <input
                id="empresa"
                type="text"
                value={formData.empresa}
                onChange={(e) => handleInputChange("empresa", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Nome da sua empresa"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contato">Contato *</Label>
              <input
                id="contato"
                type="text"
                value={formData.contato}
                onChange={(e) => handleInputChange("contato", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Telefone ou email para contato"
                required
              />
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="tipoServico">Tipo de Serviço *</Label>
                <Select onValueChange={(value) => handleInputChange("tipoServico", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultoria">Consultoria</SelectItem>
                    <SelectItem value="desenvolvimento">Desenvolvimento</SelectItem>
                    <SelectItem value="suporte">Suporte Técnico</SelectItem>
                    <SelectItem value="treinamento">Treinamento</SelectItem>
                    <SelectItem value="auditoria">Auditoria</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="numeroProfissionais">Número de Profissionais *</Label>
                <Select onValueChange={(value) => handleInputChange("numeroProfissionais", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Quantos profissionais necessários?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 profissional</SelectItem>
                    <SelectItem value="2-3">2-3 profissionais</SelectItem>
                    <SelectItem value="4-5">4-5 profissionais</SelectItem>
                    <SelectItem value="6-10">6-10 profissionais</SelectItem>
                    <SelectItem value="10+">Mais de 10 profissionais</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="horasSemanais">Horas Semanais *</Label>
                <Select onValueChange={(value) => handleInputChange("horasSemanais", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Quantas horas por semana?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 horas</SelectItem>
                    <SelectItem value="11-20">11-20 horas</SelectItem>
                    <SelectItem value="21-30">21-30 horas</SelectItem>
                    <SelectItem value="31-40">31-40 horas</SelectItem>
                    <SelectItem value="40+">Mais de 40 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="frequenciaSemanal">Frequência Semanal *</Label>
                <Select onValueChange={(value) => handleInputChange("frequenciaSemanal", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Com que frequência?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1x">1x por semana</SelectItem>
                    <SelectItem value="2x">2x por semana</SelectItem>
                    <SelectItem value="3x">3x por semana</SelectItem>
                    <SelectItem value="4x">4x por semana</SelectItem>
                    <SelectItem value="5x">5x por semana</SelectItem>
                    <SelectItem value="diario">Diariamente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-focus-orange hover:bg-focus-orange/90 text-white py-3 text-lg">
                Enviar Solicitação
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
