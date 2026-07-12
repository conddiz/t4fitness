"use client";

import { useState } from "react";

const UNITS = [
  "Guadalajara",
  "Potira",
  "Arianópolis",
  "Parque Albano",
  "Granja Lisboa",
  "Bela Vista",
  "Antônio Bezerra",
];

interface VIPProps {
  selectedUnit?: string;
}

export default function VIP({ selectedUnit }: VIPProps) {
  const [formData, setFormData] = useState({ name: "", unit: selectedUnit || "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open("https://www.instagram.com/t4fitness_/", "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", unit: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contato" className="bg-cream py-31.25">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-25 items-start">
        <div>
          <p className="section-kicker">PRIMEIRO PASSO</p>
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-7">
            Vem pra <em className="text-orange-500">T4.</em>
          </h2>
          <p className="text-sm leading-7 max-w-100">
            Entre no Grupo VIP e fique por dentro das ofertas de inauguração,
            condições especiais e novidades da sua unidade.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg">
          <div className="mb-4.25">
            <label className="text-2xs font-bold uppercase tracking-widest block mb-2">
              Seu nome
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Como podemos te chamar?"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-b border-gray-400 py-2.5 outline-none bg-transparent text-sm"
            />
          </div>

          <div className="mb-4.25">
            <label className="text-2xs font-bold uppercase tracking-widest block mb-2">
              Unidade de interesse
            </label>
            <select
              name="unit"
              required
              value={formData.unit}
              onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
              className="w-full border-b border-gray-400 py-2.5 outline-none bg-transparent text-sm"
            >
              <option value="">Escolha uma unidade</option>
              {UNITS.map((unit) => (
                <option key={unit} value={unit} className="bg-white text-black">
                  {unit}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-orange w-full mb-4">
            Quero entrar no VIP <span>↗</span>
          </button>

          <small className="text-2xs text-gray-600">
            {submitted
              ? `Perfeito, ${formData.name}! Abrimos o Instagram da T4 para você continuar o atendimento sobre a unidade ${formData.unit}.`
              : "Ao enviar, você será direcionado ao Instagram da T4 para continuar o atendimento."}
          </small>
        </form>
      </div>
    </section>
  );
}
