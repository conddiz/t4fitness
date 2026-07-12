"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-8.5 bg-orange-500 text-orange-50 flex items-center justify-center gap-2.5 text-2xs font-bold uppercase tracking-widest">
        <span>7 unidades em Fortaleza</span>
        <span className="w-1 h-1 rounded-full bg-orange-50" />
        <span>Wellhub e TotalPass aceitos</span>
      </div>

      <header className="fixed top-8.5 left-0 right-0 z-40 h-21 bg-black flex items-center px-6 gap-10.5 border-b border-white/13 w-full">
        <Link href="#inicio" className="shrink-0">
          <img
            src="/logo-horizontal.jpeg"
            alt="T4 Fitness"
            className="h-7.5 w-auto"
          />
        </Link>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-21 left-0 w-full bg-black flex-col gap-4.75 px-4.75 py-5.5 md:static md:flex md:flex-row md:ml-auto md:gap-6.5`}
        >
          <a
            href="#unidades"
            className="text-white text-xs font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Unidades
          </a>
          <a
            href="#experiencia"
            className="text-white text-xs font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            A experiência
          </a>
          <a
            href="#modalidades"
            className="text-white text-xs font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Modalidades
          </a>
          <a
            href="#convenios"
            className="text-white text-xs font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Convênios
          </a>
        </nav>

        <button
          className="hidden md:flex btn btn-orange btn-small ml-auto"
          onClick={() => {
            const section = document.getElementById("unidades");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Matricule-se <span>↗</span>
        </button>

        <button
          className="md:hidden ml-auto grid w-9.25 h-9.25 place-content-center gap-1.5 border border-gray-600 bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="w-4.25 h-4.25 text-white" />
          ) : (
            <Menu className="w-4.25 h-4.25 text-white" />
          )}
        </button>
      </header>
    </>
  );
}
