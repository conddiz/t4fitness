export default function Footer() {
  return (
    <footer className="bg-black text-white py-13.75">
      <div className="wrap mb-12.5 grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
        <img
          src="/logo-horizontal.jpeg"
          alt="T4 Fitness"
          className="h-7.5 w-auto"
        />
        <p className="font-display text-7 leading-tight uppercase text-gray-300">
          Mais energia para a sua evolução.
        </p>
        <a
          href="https://www.instagram.com/t4fitness_/"
          target="_blank"
          rel="noreferrer"
          className="text-orange-500 text-2xs font-bold uppercase tracking-widest hover:text-orange-400 justify-self-start md:justify-self-end"
        >
          Instagram @t4fitness_ ↗
        </a>
      </div>

      <div className="wrap pt-4.5 border-t border-gray-700 flex flex-col md:flex-row justify-between items-start gap-3.5 text-2xs uppercase tracking-widest text-gray-600">
        <span>© 2026 T4 Fitness. Todos os direitos reservados.</span>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-white hover:text-orange-500"
        >
          Voltar ao topo ↑
        </button>
      </div>
    </footer>
  );
}
