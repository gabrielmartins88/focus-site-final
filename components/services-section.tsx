import { ArrowRight, BarChart3, Code, Database, Globe, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Limpeza e Conservação",
    description: "Profissionais treinados para manter ambientes organizados, higienizados e adequados ao bem-estar de todos. Nossos auxiliares de serviços gerais atuam com agilidade, discrição e atenção aos detalhes, seguindo protocolos de qualidade e segurança.",
    icon: Globe,
    color: "text-focus-orange",
    bgColor: "bg-focus-orange/10",
  },
  {
    title: "Segurança Patrimonial",
    description: "Contamos com vigilantes capacitados e devidamente certificados, prontos para garantir a proteção de pessoas, patrimônios e instalações. Atuamos com vigilância desarmada, sempre priorizando a prevenção e a atuação estratégica.",
    icon: Shield,
    color: "text-focus-green",
    bgColor: "bg-focus-green/10",
  },
  {
    title: "Serviços Administrativos",
    description: "Disponibilizamos auxiliares administrativos qualificados para apoiar atividades internas com organização, agilidade e precisão. Seja no controle de documentos, atendimento telefônico, agendamento ou apoio à equipe interna, nosso time atua para manter a rotina administrativa fluindo com eficiência.",
    icon: Code,
    color: "text-focus-teal",
    bgColor: "bg-focus-teal/10",
  },
  {
    title: "Serviço de Recepção",
    description: "Oferecemos recepcionistas preparadas para representar sua empresa com cordialidade, postura profissional e excelência no atendimento. Seja em ambientes corporativos, públicos ou institucionais, garantimos uma recepção organizada, educada e eficiente.",
    icon: Database,
    color: "text-focus-red",
    bgColor: "bg-focus-red/10",
  },
  {
    title: "Merenda Escolar",
    description: "Nossas merendeiras são treinadas para preparar e servir refeições com higiene, cuidado e carinho. Trabalhamos com foco na segurança alimentar e no atendimento às exigências nutricionais, promovendo uma alimentação saudável e de qualidade para escolas e instituições.",
    icon: Lightbulb,
    color: "text-focus-orange",
    bgColor: "bg-focus-orange/10",
  },
  {
    title: "Serviços Operacionais",
    description: "Nossos operadores de máquina são responsáveis por operar e monitorar máquinas e equipamentos utilizados na execução de serviços diversos, garantindo o funcionamento adequado, a segurança e a qualidade do trabalho realizado.",
    icon: BarChart3,
    color: "text-focus-green",
    bgColor: "bg-focus-green/10",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-600">Soluções completas para impulsionar sua empresa</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-md ${service.bgColor} flex items-center justify-center mb-4`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/servicos/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group inline-flex items-center text-sm font-medium text-focus-black hover:text-focus-orange"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
