import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-34 pb-17.5 bg-black text-white overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/unidade-exterior.jpeg"
          alt="Fachada de uma unidade T4 Fitness"
          className="w-full h-full object-cover object-center-bottom opacity-70 saturate-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/25 z-10" />
        <div className="absolute inset-0 z-10 opacity-17 bg-gradient-to-bottom from-transparent to-black" />
      </div>

      <div className="relative z-20 flex-1 flex flex-col justify-center wrap">
        <div className="mb-4.5 flex items-center gap-2.25">
          <span className="w-7.5 h-0.5 bg-orange-500" />
          <p className="text-2xs font-bold uppercase tracking-widest text-white">
            T4 FITNESS · FORTALEZA
          </p>
        </div>

        <h1 className="mb-6.25 text-6xl md:text-8xl font-black leading-tight">
          Mais energia para <em className="text-orange-500">a sua evolução.</em>
        </h1>

        <p className="mb-6.25 max-w-110 text-base leading-7 text-gray-300">
          Treine onde o seu ritmo acontece. Estrutura completa, modalidades para
          todos os estilos e uma comunidade que puxa você pra cima.
        </p>

        <div className="flex flex-col md:flex-row gap-7.5 items-start md:items-center">
          <button
            onClick={() => {
              document.getElementById("unidades")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn btn-orange"
          >
            Encontre sua unidade <span>↘</span>
          </button>
          <a href="#experiencia" className="text-2xs font-bold uppercase tracking-widest text-white hover:text-orange-500">
            Conheça a T4 <span className="text-orange-500 text-base ml-1">→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-17.5 right-6 md:bottom-17.5 md:right-6 z-20 hidden md:flex gap-7.5">
        <div className="border-l border-orange-500 pl-3.25 flex flex-col">
          <strong className="font-display text-2xl leading-tight">7</strong>
          <span className="text-2xs font-bold uppercase tracking-widest">
            unidades
          </span>
        </div>
        <div className="border-l border-orange-500 pl-3.25 flex flex-col">
          <strong className="font-display text-2xl leading-tight">+</strong>
          <span className="text-2xs font-bold uppercase tracking-widest">
            energia todo dia
          </span>
        </div>
        <div className="border-l border-orange-500 pl-3.25 flex flex-col">
          <strong className="font-display text-2xl leading-tight">VIP</strong>
          <span className="text-2xs font-bold uppercase tracking-widest">
            ofertas exclusivas
          </span>
        </div>
      </div>

      <button
        onClick={() => {
          document.getElementById("unidades")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-5 left-6 z-20 text-2xs uppercase tracking-widest text-white flex items-center gap-2.5 hover:text-orange-500"
      >
        Role para descobrir
        <div className="w-10 h-0.5 bg-orange-500" />
      </button>
    </section>
  );
}
