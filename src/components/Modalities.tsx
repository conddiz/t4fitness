"use client";

import { useState } from "react";

const MODALITIES = [
  { num: "01", name: "Musculação" },
  { num: "02", name: "Funcional" },
  { num: "03", name: "Muay Thai" },
  { num: "04", name: "FitDance" },
  { num: "05", name: "Jiu-Jítsu" },
  { num: "06", name: "Forró" },
  { num: "07", name: "Karatê" },
];

export default function Modalities() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="modalidades" className="wrap py-32.5">
      <div className="mb-16.25 grid grid-cols-1 md:grid-cols-2 gap-7.5 items-end">
        <div>
          <p className="section-kicker">TODA ENERGIA CONTA</p>
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Encontre o seu <em className="text-orange-500">movimento.</em>
          </h2>
        </div>
        <p className="text-sm text-gray-600">
          Da intensidade do treino à leveza da dança. Escolha uma modalidade ou
          misture todas.
        </p>
      </div>

      <div className="border-t border-gray-300">
        {MODALITIES.map((mod) => (
          <button
            key={mod.num}
            onClick={() => setActive(active === parseInt(mod.num) ? null : parseInt(mod.num))}
            className="w-full text-left py-4 border-b border-gray-300 flex items-center justify-between hover:text-orange-500 transition-colors hover:pl-3"
          >
            <span className="font-display font-bold text-4.5 md:text-7.25 uppercase leading-tight">
              {mod.name}
            </span>
            <span className="text-2xs text-orange-500 font-bold">
              {mod.num}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
