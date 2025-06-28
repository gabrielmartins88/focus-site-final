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
                  Nossa Missão
                </h2>
                <p className="mt-6 text-lg text-gray-600">
                  Na Focus, nossa missão é fornecer soluções inovadoras e personalizadas que ajudam empresas a
                  prosperarem na era digital. Combinamos expertise técnica com uma abordagem centrada no cliente para
                  entregar resultados excepcionais.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Acreditamos que cada empresa é única, e por isso desenvolvemos estratégias sob medida que atendem às
                  necessidades específicas de cada cliente, sempre com foco na qualidade e na inovação.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-display text-xl font-bold text-focus-black mb-4">Nossos Valores</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-focus-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Inovação constante e tecnologia de ponta</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-focus-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Compromisso com a excelência e qualidade</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-focus-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Transparência e ética em todas as relações</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-focus-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Foco no sucesso e crescimento dos clientes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-focus-black sm:text-4xl mb-12">
              Nossos Números
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-focus-orange mb-2">100+</div>
                <div className="text-gray-600">Projetos Concluídos</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-focus-green mb-2">50+</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-focus-teal mb-2">5+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-focus-red mb-2">24/7</div>
                <div className="text-gray-600">Suporte Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
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
                <p className="text-gray-600 text-sm mt-2">Visão estratégica e direcionamento</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-focus-green to-focus-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DEV</span>
                </div>
                <h3 className="font-semibold text-focus-black">Desenvolvimento</h3>
                <p className="text-gray-600 text-sm mt-2">Soluções técnicas inovadoras</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-focus-teal to-focus-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SUP</span>
                </div>
                <h3 className="font-semibold text-focus-black">Suporte</h3>
                <p className="text-gray-600 text-sm mt-2">Atendimento e suporte especializado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
