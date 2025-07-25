import { LogoFooter } from "@/components/logo-footer"
import Link from "next/link"
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-focus-black text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <LogoFooter />
            <p className="mt-4 text-gray-400 max-w-xs">
              Fornecendo soluções inovadoras para ajudar empresas a prosperarem na era digital.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://www.instagram.com/focusconsultoria_rs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-focus-orange"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/focus-consultoria-e-serviços-ltda/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-focus-orange"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Sobre nós", href: "/sobre-nos" },
                { name: "Serviços", href: "/servicos" },
                { name: "Compliance", href: "/compliance" },
                { name: "Privacidade de Dados", href: "/privacidade-de-dados" },
                { name: "Vagas", href: "/vagas" },
                { name: "Blog", href: "/blog" },
                { name: "Contato", href: "/contato" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-focus-orange">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                "Limpeza Profissional",
                "Segurança Patrimonial",
                "Serviços de Apoio",
                "Terceirização de Processos e Equipes",
                "Soluções em Alimentação",
                "Segurança e Monitoramento",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/servicos/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-focus-orange"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-focus-orange mr-2 flex-shrink-0" />
                <span className="text-gray-400">
                  Av. General Flores da Cunha, 1891 Andar 3, sala 308
                  <br />
                  Cachoeirinha, RS - 94910 003
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-focus-orange mr-2 flex-shrink-0" />
                <Link href="tel:+551123456789" className="text-gray-400 hover:text-focus-orange">
                  (51) 99676-2055
                  <br />
                  (51) 99515-8649
                </Link>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-focus-orange mr-2 flex-shrink-0" />
                <Link href="mailto:contato@focuscompany.com.br" className="text-gray-400 hover:text-focus-orange">
                  bauer@rsfocus.com.br
                  <br />
                  galvao@rsfocus.com.br
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Focus. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/politica-de-privacidade" className="text-sm text-gray-400 hover:text-focus-orange">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-servico" className="text-sm text-gray-400 hover:text-focus-orange">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
