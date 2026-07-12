export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero-section relative min-h-screen pt-30 pb-17.5 bg-black text-white overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/unidade-exterior.jpeg"
          alt="Fachada de uma unidade T4 Fitness"
          className="hero-image w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="hero-grid absolute inset-0 z-10" />
      </div>

      <div className="relative z-20 flex-1 flex flex-col justify-center wrap">
        <div className="mb-4.5 flex items-center gap-2.5">
          <span className="w-7.5 h-0.5 bg-orange-500" />
          <p className="text-3xs font-bold uppercase tracking-widest text-white">
            T4 FITNESS · FORTALEZA
          </p>
        </div>

        <h1 className="mb-6 text-white">
          Mais energia para{" "}
          <em className="not-italic text-orange-500">a sua evolução.</em>
        </h1>

        <p className="mb-6 max-w-110 text-base leading-relaxed text-gray-300">
          Treine onde o seu ritmo acontece. Estrutura completa, modalidades para
          todos os estilos e uma comunidade que puxa você pra cima.
        </p>

        <div className="flex flex-col md:flex-row gap-7.5 items-start md:items-center">
          <button
            onClick={() => {
              document
                .getElementById("unidades")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn btn-orange"
          >
            Encontre sua unidade <span>↘</span>
          </button>
          <a
            href="#experiencia"
            className="text-2xs font-bold uppercase tracking-widest text-white hover:text-orange-500"
          >
            Conheça a T4 <span className="text-orange-500">→</span>
          </a>
        </div>
      </div>

      <div className="hero-stats absolute bottom-17.5 right-6 z-20 hidden md:flex gap-7.5">
        <div className="border-l border-orange-500 pl-3.25 flex flex-col">
          <strong className="font-display text-8 leading-none">7</strong>
          <span className="text-3xs font-bold uppercase tracking-widest mt-1.75">
            unidades
          </span>
        </div>
        <div className="border-l border-orange-500 pl-3.25 flex flex-col">
          <strong className="font-display text-8 leading-none">+</strong>
          <span className="text-3xs font-bold uppercase tracking-widest mt-1.75">
            energia todo dia
          </span>
        </div>
        <div className="border-l border-orange-500 pl-3.25 flex flex-col">
          <strong className="font-display text-8 leading-none">VIP</strong>
          <span className="text-3xs font-bold uppercase tracking-widest mt-1.75">
            ofertas exclusivas
          </span>
        </div>
      </div>

      <button
        onClick={() => {
          document
            .getElementById("unidades")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-5 left-6 z-20 text-3xs uppercase tracking-wider text-white flex items-center gap-2.5 hover:text-orange-500 bg-transparent border-0 cursor-pointer"
      >
        Role para descobrir
        <span className="w-10 h-0.5 bg-orange-500 inline-block" />
      </button>
    </section>
  );
}
