export default function Partners() {
  return (
    <section id="convenios" className="bg-orange-500 py-27.5">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-17.5 items-center">
        <div>
          <p className="section-kicker light">TREINE COM LIBERDADE</p>
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-7">
            Seu benefício <em className="text-ink">também treina aqui.</em>
          </h2>
          <p className="text-sm leading-7 max-w-93.75 mb-7">
            A T4 aceita os principais benefícios corporativos para tornar o seu
            treino ainda mais acessível.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("unidades")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn btn-white"
          >
            Escolha sua unidade <span>↘</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4.5">
          <div className="bg-black text-white p-7 min-h-34.5 flex flex-col justify-center">
            <p className="text-2xs uppercase tracking-widest text-gray-500 mb-2">
              ACEITAMOS
            </p>
            <p className="font-display text-6 font-bold uppercase">Wellhub</p>
            <p className="text-2xs text-gray-500">antigo Gympass</p>
          </div>

          <div className="bg-black text-white p-7 min-h-34.5 flex flex-col justify-center">
            <p className="text-2xs uppercase tracking-widest text-gray-500 mb-2">
              ACEITAMOS
            </p>
            <p className="font-display text-6 font-bold uppercase text-cream">
              Totalpass
            </p>
            <p className="text-2xs text-gray-500">seu benefício em movimento</p>
          </div>
        </div>
      </div>
    </section>
  );
}
