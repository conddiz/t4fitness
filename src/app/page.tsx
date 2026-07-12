"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import MediaBreak from "@/components/MediaBreak";
import UnitsSection from "@/components/UnitsSection";
import Modalities from "@/components/Modalities";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import VIP from "@/components/VIP";
import Footer from "@/components/Footer";

const UNITS = [
  {
    id: 1,
    name: "Guadalajara",
    address: "Rua Araré, 641",
    district: "Guadalajara",
    search: "01 guadalajara rua arare",
  },
  {
    id: 2,
    name: "Potira",
    address: "Rua Padre Alfredo Nesi, 1322",
    district: "Potira",
    search: "02 potira rua padre alfredo nesi",
  },
  {
    id: 3,
    name: "Arianópolis",
    address: "Rua Danilo Correia, 777",
    district: "Arianópolis",
    search: "03 arianopolis rua danilo correia",
  },
  {
    id: 4,
    name: "Parque Albano",
    address: "Rua Gonçalves Dias, 1988",
    district: "Parque Albano",
    search: "04 parque albano rua goncalves dias",
  },
  {
    id: 5,
    name: "Granja Lisboa",
    address: "Rua Xavier da Silveira, 3949",
    district: "Granja Lisboa",
    search: "05 granja lisboa rua xavier da silveira",
  },
  {
    id: 6,
    name: "Bela Vista",
    address: "Rua Espiriro Santo, 614",
    district: "Bela Vista",
    search: "06 bela vista rua espiriro santo espirito",
  },
  {
    id: 7,
    name: "Antônio Bezerra",
    address: "Rua Martins Neto, 810",
    district: "Antônio Bezerra",
    search: "07 antonio bezerra rua martins neto",
  },
];

export default function Home() {
  const [filteredUnits, setFilteredUnits] = useState(UNITS);
  const [selectedUnit, setSelectedUnit] = useState<string>("");

  const handleSearch = (query: string) => {
    const normalized = query
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");

    if (!query.trim()) {
      setFilteredUnits(UNITS);
    } else {
      setFilteredUnits(
        UNITS.filter((unit) =>
          unit.search.includes(normalized)
        )
      );
    }
  };

  const handleSelectUnit = (unit: string) => {
    setSelectedUnit(unit);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <MediaBreak />
        <UnitsSection
          units={filteredUnits}
          onSearch={handleSearch}
          onSelectUnit={handleSelectUnit}
        />
        <Modalities />
        <Gallery />
        <Partners />
        <VIP selectedUnit={selectedUnit} />
      </main>
      <Footer />
    </>
  );
}
