"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface Unit {
  id: number;
  name: string;
  address: string;
  district: string;
  search: string;
}

interface UnitsSectionProps {
  units: Unit[];
  onSearch: (query: string) => void;
  onSelectUnit: (unit: string) => void;
}

export default function UnitsSection({
  units,
  onSearch,
  onSelectUnit,
}: UnitsSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <section id="unidades" className="bg-black text-white py-31.5">
      <div className="wrap">
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-7.5 items-end">
          <div>
            <p className="section-kicker light">SUA T4 MAIS PRÓXIMA</p>
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Escolha onde <em className="text-orange-500">você vai evoluir.</em>
            </h2>
          </div>
          <p className="text-sm text-gray-300">
            São 7 unidades esperando por você em Fortaleza.
          </p>
        </div>

        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <label className="flex items-center gap-3 h-13 bg-gray-900 px-4.25 w-full md:w-90">
            <Search className="w-7 h-7 text-orange-500" />
            <input
              type="search"
              placeholder="Busque por bairro ou unidade"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-transparent text-white outline-none text-sm placeholder-gray-600"
            />
          </label>
          <span className="text-2xs uppercase tracking-widest text-gray-500">
            {units.length} unidade{units.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-700">
          {units.map((unit, idx) => (
            <article
              key={unit.id}
              className={`min-h-61.25 p-6.75 border-r border-b border-gray-700 flex flex-col transition-colors duration-250 ${
                idx === units.length - 1
                  ? "bg-gray-900"
                  : "hover:bg-orange-500 hover:text-black hover:[&_*]:text-black"
              }`}
            >
              <p className="text-2xs font-bold text-orange-500 mb-8.5">
                {String(unit.id).padStart(2, "0")}
              </p>
              <h3 className="text-5xl font-black leading-tight mb-3.25">
                {unit.name}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-auto">
                {unit.address}
                <br />
                {unit.district} · Fortaleza, CE
              </p>
              <a
                href="#contato"
                onClick={() => onSelectUnit(unit.name)}
                className="text-white text-2xs font-bold uppercase tracking-widest mt-6 hover:text-orange-500"
              >
                Quero treinar aqui <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
