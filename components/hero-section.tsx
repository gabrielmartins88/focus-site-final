"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-focus-black via-focus-black/95 to-focus-orange/20 py-20 md:py-28 lg:py-32">
      <style>{`
  @keyframes gradient-x {
    0%, 100% {
      background-size: 200% 200%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 6s ease-in-out infinite;
  }
`}</style>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-focus-black to-focus-black/90"></div>
      </div>
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Soluções Inovadoras</span>
              <span className="block bg-gradient-to-r from-focus-orange via-focus-red to-focus-teal bg-clip-text text-transparent animate-gradient-x">
                Para Sua Empresa
              </span>
            </h1>
            <p className="max-w-lg text-lg text-gray-300">
              Oferecemos serviços de ponta para ajudar sua empresa a crescer e ter sucesso no mercado competitivo atual.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-focus-orange hover:bg-focus-orange/90 text-white"
                onClick={scrollToServices}
              >
                Nossos Serviços
              </Button>
              <Link href="/contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-focus-orange bg-black/30 hover:bg-black/50 hover:text-white"
                >
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className="absolute -right-4 top-4 h-72 w-72 rounded-full bg-focus-teal/20 blur-3xl"></div>
            <div className="absolute -left-4 bottom-4 h-72 w-72 rounded-full bg-focus-orange/20 blur-3xl"></div>
            <div className="relative z-10 rounded-lg bg-white/5 p-6 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-focus-orange/10 p-4 text-center">
                  <div className="text-3xl font-bold text-focus-orange">10+</div>
                  <div className="mt-1 text-sm text-white">Anos de Experiência</div>
                </div>
                <div className="rounded-md bg-focus-green/10 p-4 text-center">
                  <div className="text-3xl font-bold text-focus-green">20+</div>
                  <div className="mt-1 text-sm text-white">Contratos Ativos</div>
                </div>
                <div className="rounded-md bg-focus-teal/10 p-4 text-center">
                  <div className="text-3xl font-bold text-focus-teal">300+</div>
                  <div className="mt-1 text-sm text-white">Colaboradores</div>
                </div>
                <div className="rounded-md bg-focus-red/10 p-4 text-center">
                  <div className="text-3xl font-bold text-focus-red">95%</div>
                  <div className="mt-1 text-sm text-white">Satisfação do Cliente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
