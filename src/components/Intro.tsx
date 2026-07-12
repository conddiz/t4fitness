export default function Intro() {
  return (
    <section id="experiencia" className="wrap py-33">
      <div className="mb-6.5">
        <p className="section-kicker">A T4 É MOVIMENTO</p>
      </div>

      <div className="mb-24.5 grid grid-cols-1 md:grid-cols-3 gap-17.5 items-end">
        <div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Um treino que <em className="text-orange-500">cabe na sua vida.</em>
          </h2>
        </div>
        <div className="md:col-span-2">
          <p className="mb-6 leading-7 text-base max-w-90">
            Na T4, você encontra mais do que equipamentos. Encontra espaço para
            ganhar força, se divertir, dançar, lutar e cuidar de você.
          </p>
          <a
            href="#modalidades"
            className="text-2xs font-bold uppercase tracking-widest text-ink hover:text-orange-500"
          >
            Veja as modalidades <span className="text-orange-500">→</span>
          </a>
        </div>
      </div>

      <div className="border-t border-gray-300 grid grid-cols-1 md:grid-cols-3 gap-10.5 pt-7">
        {[
          {
            num: "01",
            title: "Estrutura que inspira",
            desc: "Ambientes modernos, equipamentos e um clima que dá vontade de voltar.",
          },
          {
            num: "02",
            title: "Do seu jeito",
            desc: "Musculação, cardio e aulas para você variar a rotina sem perder o foco.",
          },
          {
            num: "03",
            title: "Perto de você",
            desc: "Sete endereços para o seu treino estar sempre no caminho.",
          },
        ].map((feature) => (
          <article key={feature.num}>
            <p className="text-2xs font-bold text-orange-500 mb-8">
              {feature.num}
            </p>
            <h3 className="text-4xl font-black mb-3">{feature.title}</h3>
            <p className="text-xs leading-relaxed text-muted max-w-62.5">
              {feature.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
