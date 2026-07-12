"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-8 bg-orange-500 text-white flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider">
        <span>7 unidades em Fortaleza</span>
        <span className="w-1 h-1 rounded-full bg-white" />
        <span>Wellhub e TotalPass aceitos</span>
      </div>

      <header className="fixed top-8 left-0 right-0 z-40 h-20 bg-black flex items-center px-6 gap-10 border-b border-gray-700 w-full">
        <Link href="#inicio" className="shrink-0">
          <img
            src="/logo-horizontal.jpeg"
            alt="T4 Fitness"
            className="h-7 w-auto"
          />
        </Link>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-20 left-0 w-full bg-black flex-col gap-4 px-4 py-5 md:static md:flex md:flex-row md:ml-auto md:gap-6`}
        >
          <a
            href="#unidades"
            className="text-white text-sm font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Unidades
          </a>
          <a
            href="#experiencia"
            className="text-white text-sm font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            A experiência
          </a>
          <a
            href="#modalidades"
            className="text-white text-sm font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Modalidades
          </a>
          <a
            href="#convenios"
            className="text-white text-sm font-semibold hover:text-orange-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Convênios
          </a>
        </nav>

        <button
          className="hidden md:flex items-center gap-4 px-5 py-3 bg-orange-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-orange-400 ml-auto"
          onClick={() => {
            document.getElementById("unidades")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Matricule-se <span>↗</span>
        </button>

        <button
          className="md:hidden ml-auto flex w-9 h-9 items-center justify-center gap-1.5 border border-gray-600 bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </button>
      </header>
    </>
  );
}
