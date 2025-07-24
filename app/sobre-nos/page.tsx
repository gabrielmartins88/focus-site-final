import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-focus-black py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Sobre Nós</span>
              <span className="block bg-gradient-to-r from-focus-orange via-focus-red to-focus-teal bg-clip-text text-transparent">
                Nossa História
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
              Conheça a Focus e nossa jornada de inovação e excelência em soluções empresariais.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl">
                  A Focus
                </h2>
                <p className="mt-6 text-lg text-gray-600">
                  Surgimos da união de dois profissionais com ampla experiência no mercado e uma visão em comum: oferecer serviços terceirizados com mais qualidade, eficiência e comprometimento. Após anos atuando em diferentes áreas operacionais e administrativas, perceberam a oportunidade de construir algo novo — uma empresa que valorizasse tanto o cliente quanto o colaborador.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Foi assim que nós surgimos: com o propósito de ser uma parceira estratégica, fornecendo soluções completas em limpeza profissional, merenda escolar, segurança patrimonial, portaria, recepção, entre outros serviços essenciais.
                </p>
                 <p className="mt-4 text-lg text-gray-600">
                  Trabalhamos com equipes qualificadas, processos bem definidos e um forte compromisso com resultados. Cada cliente é único, e nossas soluções são pensadas sob medida para atender às necessidades específicas de cada operação, com foco em agilidade, organização e excelência.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Na Focus, acreditamos que terceirizar é mais do que contratar um serviço — é confiar em quem cuida do seu dia a dia. Por isso, colocamos foco no que realmente importa: pessoas, qualidade e resultados.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-display text-xl font-bold text-focus-black mb-4">Nossos Valores</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-focus-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Comprometimento: Cumprimos o que prometemos com ética e responsabilidade.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-focus-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Qualidade: Buscamos a excelência em cada serviço prestado.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-focus-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Inovação: Estamos sempre em busca de melhorias e soluções modernas.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-focus-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Valorização Humana: Respeitamos e desenvolvemos nossos colaboradores.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-focus-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Transparência: Atuamos com clareza e integridade em todos os processos.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl mb-12">
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Contamos com uma equipe de profissionais altamente qualificados e experientes, dedicados a entregar
              soluções de excelência para nossos clientes.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-focus-orange to-focus-red rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CEO</span>
                </div>
                <h3 className="font-semibold text-focus-black">Liderança Executiva</h3>
                <p className="text-gray-600 text-sm mt-2">Maicon Bauer</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-focus-green to-focus-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">COO</span>
                </div>
                <h3 className="font-semibold text-focus-black">Liderança Operacional</h3>
                <p className="text-gray-600 text-sm mt-2">Jusue Galvão</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-focus-teal to-focus-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CHRO</span>
                </div>
                <h3 className="font-semibold text-focus-black">Liderança em Gestão de Pessoas</h3>
                <p className="text-gray-600 text-sm mt-2">Mayara Champe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
