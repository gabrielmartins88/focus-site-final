import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, FileText, Users, CheckCircle, AlertTriangle } from "lucide-react"

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-focus-black via-focus-black/90 to-focus-teal/20 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-focus-orange/10 p-4">
                <Shield className="h-12 w-12 text-focus-orange" />
              </div>
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
              Compliance e
              <span className="block bg-gradient-to-r from-focus-orange via-focus-red to-focus-teal bg-clip-text text-transparent">
                Conformidade
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Garantimos total conformidade com as regulamentações e padrões de segurança mais rigorosos do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Overview */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl mb-6">
              Nosso Compromisso com a Conformidade
            </h2>
            <p className="text-lg text-gray-600">
              Na Focus, levamos a conformidade regulatória a sério. Seguimos rigorosamente todas as normas e
              regulamentações aplicáveis para garantir a segurança e proteção dos dados de nossos clientes.
            </p>
          </div>

          {/* Compliance Areas */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <Card className="border-focus-orange/20 hover:border-focus-orange/40 transition-colors">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-focus-orange/10">
                  <Lock className="h-6 w-6 text-focus-orange" />
                </div>
                <CardTitle className="text-focus-black">LGPD</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conformidade total com a Lei Geral de Proteção de Dados Pessoais, garantindo a privacidade e segurança
                  dos dados.
                </p>
              </CardContent>
            </Card>

            <Card className="border-focus-green/20 hover:border-focus-green/40 transition-colors">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-focus-green/10">
                  <FileText className="h-6 w-6 text-focus-green" />
                </div>
                <CardTitle className="text-focus-black">ISO 27001</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seguimos os padrões internacionais de segurança da informação para proteger dados e sistemas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-focus-teal/20 hover:border-focus-teal/40 transition-colors">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-focus-teal/10">
                  <Users className="h-6 w-6 text-focus-teal" />
                </div>
                <CardTitle className="text-focus-black">SOX</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conformidade com a Lei Sarbanes-Oxley para transparência e responsabilidade corporativa.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            {/* Data Protection */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-focus-orange/10 p-3 mr-4">
                  <Shield className="h-8 w-8 text-focus-orange" />
                </div>
                <h3 className="font-display text-2xl font-bold text-focus-black">Proteção de Dados</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-focus-black mb-3">Princípios LGPD</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-focus-green mr-2" />
                      Finalidade específica e legítima
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-focus-green mr-2" />
                      Adequação e necessidade
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-focus-green mr-2" />
                      Transparência e qualidade
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-focus-green mr-2" />
                      Segurança e prevenção
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-focus-black mb-3">Medidas de Segurança</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-focus-green mr-2" />
                      Criptografia de dados
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-focus-green mr-2" />
                      Controle de acesso
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-focus-green mr-2" />
                      Backup e recuperação
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-focus-green mr-2" />
                      Monitoramento contínuo
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-focus-teal/10 p-3 mr-4">
                  <FileText className="h-8 w-8 text-focus-teal" />
                </div>
                <h3 className="font-display text-2xl font-bold text-focus-black">Políticas e Procedimentos</h3>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-focus-black mb-3">Política de Privacidade</h4>
                  <p className="text-gray-600 mb-4">
                    Definimos claramente como coletamos, usamos e protegemos informações pessoais.
                  </p>
                  <a href="#" className="text-focus-orange hover:text-focus-orange/80 font-medium">
                    Ver Política →
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-focus-black mb-3">Termos de Uso</h4>
                  <p className="text-gray-600 mb-4">Estabelecemos os termos e condições para uso de nossos serviços.</p>
                  <a href="#" className="text-focus-orange hover:text-focus-orange/80 font-medium">
                    Ver Termos →
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-focus-black mb-3">Código de Conduta</h4>
                  <p className="text-gray-600 mb-4">
                    Nossos padrões éticos e de conduta profissional para toda a equipe.
                  </p>
                  <a href="#" className="text-focus-orange hover:text-focus-orange/80 font-medium">
                    Ver Código →
                  </a>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-r from-focus-green/5 to-focus-teal/5 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-focus-black mb-4">Certificações e Auditorias</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Mantemos certificações atualizadas e passamos por auditorias regulares para garantir conformidade
                  contínua com os padrões mais rigorosos.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-4 text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 bg-focus-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-focus-green" />
                  </div>
                  <h4 className="font-semibold text-focus-black mb-2">ISO 27001</h4>
                  <p className="text-sm text-gray-600">Certificado</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 bg-focus-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-focus-orange" />
                  </div>
                  <h4 className="font-semibold text-focus-black mb-2">LGPD</h4>
                  <p className="text-sm text-gray-600">Conforme</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 bg-focus-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-focus-teal" />
                  </div>
                  <h4 className="font-semibold text-focus-black mb-2">SOX</h4>
                  <p className="text-sm text-gray-600">Auditado</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 bg-focus-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-8 w-8 text-focus-red" />
                  </div>
                  <h4 className="font-semibold text-focus-black mb-2">PCI DSS</h4>
                  <p className="text-sm text-gray-600">Em processo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-focus-black rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl font-bold text-white mb-4">Dúvidas sobre Compliance?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nossa equipe de compliance está disponível para esclarecer qualquer questão sobre nossas práticas de
              conformidade e segurança.
            </p>
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-md bg-focus-orange px-6 py-3 text-base font-medium text-white hover:bg-focus-orange/90 transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
