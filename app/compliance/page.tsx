import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, FileText, Users, Lock, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-focus-black py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Compliance e</span>
              <span className="block bg-gradient-to-r from-focus-orange via-focus-red to-focus-teal bg-clip-text text-transparent">
                Governança Corporativa
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
              Garantimos que sua empresa esteja sempre em conformidade com as regulamentações mais rigorosas, protegendo
              seus dados e operações com os mais altos padrões de segurança.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button className="bg-focus-green hover:bg-focus-green/90 text-white">Fale com Especialista</Button>
              </Link>
              <Link href="/orcamento">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-focus-black bg-transparent"
                >
                  Solicitar Auditoria
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl">
              Áreas de Compliance
            </h2>
            <p className="mt-4 text-lg text-gray-600">Cobrimos todas as principais áreas de conformidade regulatória</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-focus-orange">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-focus-orange" />
                  <CardTitle className="text-focus-black">LGPD</CardTitle>
                </div>
                <CardDescription>Lei Geral de Proteção de Dados Pessoais</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementação completa de políticas de privacidade, mapeamento de dados, e procedimentos de
                  conformidade com a LGPD.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-focus-green">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-focus-green" />
                  <CardTitle className="text-focus-black">ISO 27001</CardTitle>
                </div>
                <CardDescription>Gestão de Segurança da Informação</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Certificação e manutenção de sistemas de gestão de segurança da informação conforme padrões
                  internacionais.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-focus-teal">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-focus-teal" />
                  <CardTitle className="text-focus-black">SOX</CardTitle>
                </div>
                <CardDescription>Sarbanes-Oxley Act</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Controles internos e relatórios financeiros em conformidade com regulamentações de transparência
                  corporativa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-focus-red">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-focus-red" />
                  <CardTitle className="text-focus-black">Trabalhista</CardTitle>
                </div>
                <CardDescription>Conformidade Trabalhista</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Auditoria e adequação de processos trabalhistas, contratos e políticas de recursos humanos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-focus-orange">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-focus-orange" />
                  <CardTitle className="text-focus-black">Fiscal</CardTitle>
                </div>
                <CardDescription>Compliance Fiscal e Tributário</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Revisão e adequação de processos fiscais, tributários e obrigações acessórias.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-focus-green">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-focus-green" />
                  <CardTitle className="text-focus-black">Ambiental</CardTitle>
                </div>
                <CardDescription>Compliance Ambiental</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Adequação às normas ambientais, licenciamentos e sustentabilidade corporativa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl">
              Nosso Processo
            </h2>
            <p className="mt-4 text-lg text-gray-600">Metodologia estruturada para garantir compliance total</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-focus-orange rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-focus-black mb-2">Diagnóstico</h3>
              <p className="text-gray-600 text-sm">Análise completa da situação atual e identificação de gaps</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-focus-green rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-focus-black mb-2">Planejamento</h3>
              <p className="text-gray-600 text-sm">Desenvolvimento de plano de ação personalizado</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-focus-teal rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-focus-black mb-2">Implementação</h3>
              <p className="text-gray-600 text-sm">Execução das adequações e treinamento das equipes</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-focus-red rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-focus-black mb-2">Monitoramento</h3>
              <p className="text-gray-600 text-sm">Acompanhamento contínuo e atualizações regulatórias</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-focus-black">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para Garantir Compliance?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a estar sempre em conformidade.
            </p>
            <div className="mt-8">
              <Link href="/contato">
                <Button className="bg-focus-orange hover:bg-focus-orange/90 text-white">Falar com Especialista</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
