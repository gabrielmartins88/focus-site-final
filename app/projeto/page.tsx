import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, TrendingUp, Award, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export default function ProjetoPage() {
  const featuredProjects = [
    {
      title: "Transformação Digital - Banco Regional",
      client: "Banco Regional do Sul",
      sector: "Financeiro",
      duration: "18 meses",
      location: "Porto Alegre, RS",
      description:
        "Implementação completa de sistema de compliance LGPD e modernização de processos internos, resultando em 40% de redução de tempo de atendimento e 100% de conformidade regulatória.",
      results: [
        "40% redução no tempo de atendimento",
        "100% conformidade LGPD",
        "R$ 2.5M economia anual",
        "95% satisfação dos funcionários",
      ],
      services: ["Compliance", "Transformação Digital", "Treinamento"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Otimização Operacional - Indústria Alimentícia",
      client: "Alimentos Premium Ltda",
      sector: "Alimentício",
      duration: "12 meses",
      location: "Caxias do Sul, RS",
      description:
        "Reestruturação completa dos processos de produção e implementação de sistema de gestão de qualidade, aumentando a produtividade em 35% e reduzindo desperdícios.",
      results: [
        "35% aumento na produtividade",
        "50% redução de desperdícios",
        "Certificação ISO 9001",
        "R$ 1.8M economia anual",
      ],
      services: ["Consultoria Operacional", "Gestão de Qualidade", "Treinamento"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Segurança Corporativa - Shopping Center",
      client: "Shopping Metropolitano",
      sector: "Varejo",
      duration: "24 meses",
      location: "São Paulo, SP",
      description:
        "Implementação de sistema integrado de segurança patrimonial e monitoramento 24/7, com equipe especializada e tecnologia de ponta, reduzindo incidentes em 60%.",
      results: [
        "60% redução de incidentes",
        "24/7 monitoramento ativo",
        "100% cobertura do complexo",
        "98% satisfação dos lojistas",
      ],
      services: ["Segurança Patrimonial", "Monitoramento", "Consultoria"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const partnershipStats = [
    { icon: Building2, value: "150+", label: "Empresas Parceiras" },
    { icon: Users, value: "50K+", label: "Profissionais Impactados" },
    { icon: TrendingUp, value: "R$ 25M+", label: "Economia Gerada" },
    { icon: Award, value: "98%", label: "Taxa de Sucesso" },
  ]

  const sectors = [
    "Financeiro",
    "Indústria",
    "Varejo",
    "Saúde",
    "Educação",
    "Tecnologia",
    "Logística",
    "Energia",
    "Construção",
    "Agronegócio",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-focus-black py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Nossos</span>
              <span className="block bg-gradient-to-r from-focus-orange via-focus-red to-focus-teal bg-clip-text text-transparent">
                Projetos de Sucesso
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
              Conheça algumas das parcerias que transformaram negócios e geraram resultados excepcionais para nossos
              clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnershipStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-focus-orange/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-focus-orange" />
                </div>
                <div className="text-3xl font-bold text-focus-black mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl">
              Projetos em Destaque
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Casos de sucesso que demonstram nosso compromisso com a excelência e resultados
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-focus-orange border-focus-orange">
                          {project.sector}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {project.location}
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-focus-black">{project.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-focus-green">
                        {project.client}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-gray-700">{project.description}</p>

                      <div>
                        <h4 className="font-semibold text-focus-black mb-3">Resultados Alcançados:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-focus-green rounded-full mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-focus-black mb-3">Serviços Aplicados:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, serviceIndex) => (
                            <Badge key={serviceIndex} variant="secondary" className="bg-focus-teal/10 text-focus-teal">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl">
              Setores Atendidos
            </h2>
            <p className="mt-4 text-lg text-gray-600">Nossa experiência abrange diversos segmentos da economia</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-focus-black font-medium">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl">
                Impacto dos Nossos Projetos
              </h2>
              <p className="mt-4 text-lg text-gray-600">Resultados mensuráveis que fazem a diferença</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-l-4 border-l-focus-orange">
                <CardHeader>
                  <CardTitle className="text-focus-orange">Eficiência Operacional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-focus-black mb-2">+35%</div>
                  <p className="text-gray-600">Aumento médio na produtividade dos processos otimizados</p>
                </CardContent>
              </Card>

              <Card className="text-center border-l-4 border-l-focus-green">
                <CardHeader>
                  <CardTitle className="text-focus-green">Redução de Custos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-focus-black mb-2">-25%</div>
                  <p className="text-gray-600">Redução média nos custos operacionais após implementação</p>
                </CardContent>
              </Card>

              <Card className="text-center border-l-4 border-l-focus-teal">
                <CardHeader>
                  <CardTitle className="text-focus-teal">Satisfação</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-focus-black mb-2">98%</div>
                  <p className="text-gray-600">Taxa de satisfação dos clientes com nossos projetos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-focus-black">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para o Próximo Projeto de Sucesso?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Vamos conversar sobre como podemos transformar seu negócio e gerar resultados excepcionais.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contato">
                <Button className="bg-focus-orange hover:bg-focus-orange/90 text-white">Iniciar Conversa</Button>
              </Link>
              <Link href="/orcamento">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-focus-black bg-transparent"
                >
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
