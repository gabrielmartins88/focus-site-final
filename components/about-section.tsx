import { cn } from "@/lib/utils"

export function AboutSection() {
  return (
    <section id="about" className="bg-focus-black py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={cn("font-display text-3xl font-bold tracking-tight text-white", "sm:text-4xl")}>
            Sobre&nbsp;<span className="text-focus-orange">Nós</span>
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Somos especialistas em soluções focadas nos resultados do seu negócio. A&nbsp;
            <span className="font-semibold text-focus-teal">FOCUS</span> une tecnologia, pessoas e processos&nbsp;—
            entregando serviços sob medida para ajudar empresas a crescer com eficiência e compliance.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Experiência",
              body: "Mais de 10 anos apoiando organizações de diversos setores com projetos de alta complexidade.",
            },
            {
              title: "Especialistas",
              body: "Time multidisciplinar com competências em tecnologia, operações e governança.",
            },
            {
              title: "Resultados",
              body: "Soluções desenhadas para gerar valor mensurável e vantagens competitivas.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-gray-800 p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-focus-green">{item.title}</h3>
              <p className="mt-4 text-gray-300">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
