"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Contato", href: "/contato" },
  { name: "Sobre nós", href: "/sobre-nos" },
  { name: "Serviços", href: "#services" },
  { name: "Projeto", href: "/projeto" },
  { name: "Compliance", href: "/compliance" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-900 hover:text-focus-orange transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:gap-x-4">
          <Link href="/orcamento">
            <Button className="bg-focus-green hover:bg-focus-green/90 text-white">Solicite um orçamento</Button>
          </Link>
          <Link href="/carreiras">
            <Button className="bg-focus-orange hover:bg-focus-orange/90 text-white">Faça parte da equipe</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Alternar menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", mobileMenuOpen ? "fixed inset-0 z-40 bg-white" : "hidden")}>
        <div className="container mt-16 space-y-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-base font-medium text-gray-900 hover:text-focus-orange"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/orcamento">
            <Button className="mt-4 w-full bg-focus-green hover:bg-focus-green/90 text-white">
              Solicite um orçamento
            </Button>
          </Link>
          <Link href="/carreiras">
            <Button className="mt-4 w-full bg-focus-orange hover:bg-focus-orange/90 text-white">
              Faça parte da equipe
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
