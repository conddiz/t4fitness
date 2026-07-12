'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const CATEGORIES = [
  { key: 'all', label: 'Todos' },
  { key: 'pernas', label: 'Pernas & Glúteos' },
  { key: 'costas', label: 'Costas' },
  { key: 'peito-ombros', label: 'Peito & Ombros' },
  { key: 'bracos', label: 'Braços' },
  { key: 'core', label: 'Core & Lombar' },
];

const EQUIPAMENTOS = [
  { id: 1, category: 'pernas', name: 'Leg Press Horizontal' },
  { id: 2, category: 'peito-ombros', name: 'Crucifixo Invertido / Peck Deck' },
  { id: 3, category: 'peito-ombros', name: 'Elevação Lateral em Pé' },
  { id: 4, category: 'pernas', name: 'Leg Press Sentado' },
  { id: 5, category: 'costas', name: 'Puxada com Banco Conjugado' },
  { id: 6, category: 'core', name: 'Abdominal Máquina' },
  { id: 7, category: 'core', name: 'Extensão Lombar' },
  { id: 8, category: 'costas', name: 'Puxada Alta / Lat Pulldown' },
  { id: 9, category: 'pernas', name: 'Cadeira Extensora' },
  { id: 10, category: 'bracos', name: 'Tríceps Máquina' },
  { id: 11, category: 'pernas', name: 'Cadeira Extensora Premium' },
  { id: 12, category: 'costas', name: 'Puxada Convergente' },
  { id: 13, category: 'pernas', name: 'Cadeira Adutora' },
  { id: 14, category: 'costas', name: 'Remada Baixa' },
  { id: 15, category: 'peito-ombros', name: 'Crucifixo / Deltoide Posterior' },
  { id: 16, category: 'pernas', name: 'Cadeira Adutora Premium' },
  { id: 17, category: 'costas', name: 'Remada Sentada' },
  { id: 18, category: 'peito-ombros', name: 'Supino Máquina / Chest Press' },
  { id: 19, category: 'pernas', name: 'Mesa Flexora Sentada' },
  { id: 20, category: 'costas', name: 'Graviton — Barra Assistida' },
  { id: 21, category: 'pernas', name: 'Leg Press Sentado Premium' },
  { id: 22, category: 'pernas', name: 'Mesa Flexora' },
  { id: 23, category: 'bracos', name: 'Tríceps Press Sentado' },
  { id: 24, category: 'bracos', name: 'Rosca Bíceps Máquina' },
  { id: 25, category: 'peito-ombros', name: 'Chest Press Vertical' },
  { id: 26, category: 'peito-ombros', name: 'Desenvolvimento de Ombros' },
];

const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.key, c.label])
);

const investorNavLinks = [
  { href: '/', label: 'Voltar ao site' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#contato', label: 'Contato' },
];

export default function Investidores() {
  const [filter, setFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered =
    filter === 'all' ? EQUIPAMENTOS : EQUIPAMENTOS.filter((e) => e.category === filter);

  const whatsappFor = (name: string) =>
    `https://wa.me/5585987453332?text=${encodeURIComponent(`Olá! Tenho interesse no equipamento: ${name}. Pode me enviar mais informações?`)}`;

  return (
    <>
      <div className="h-[34px] bg-orange-500 text-orange-950 flex items-center justify-center gap-2.5 text-[10px] md:text-2xs uppercase font-extrabold tracking-[.13em]">
        <span>Equipamentos profissionais</span>
        <span className="w-1 h-1 rounded-full bg-orange-950"></span>
        <span>Para academias e investidores</span>
      </div>

      <header className={`edge-pad h-[72px] md:h-[84px] flex items-center gap-6 md:gap-[42px] absolute z-10 w-full top-[34px] border-b border-white/[.13] ${menuOpen ? 'bg-ink' : 'bg-black'}`}>
        <a className="shrink-0" href="/" aria-label="T4 Fitness - início">
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" className="w-[135px] md:w-[160px] block" />
        </a>

        <nav className="hidden md:flex items-center gap-[26px] ml-auto" aria-label="Navegação">
          {investorNavLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white no-underline font-semibold text-[16px] hover:text-orange-500 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn btn-small btn-orange hidden md:inline-flex">
          Solicitar orçamento <FontAwesomeIcon icon={faArrowRight} className="text-[14px] -rotate-45" />
        </a>

        <button
          type="button"
          className="md:hidden grid place-content-center gap-1.5 ml-auto w-[37px] h-[37px] border border-[#4a4a4a] bg-transparent cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className="w-[17px] h-px bg-white block"></span>
          <span className="w-[17px] h-px bg-white block"></span>
        </button>

        {menuOpen && (
          <nav className="absolute top-[71px] left-0 z-50 w-full bg-ink px-[19px] pt-[22px] pb-[25px] flex flex-col gap-[19px] md:hidden" aria-label="Navegação móvel">
            {investorNavLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold text-[16px]">
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="relative min-h-[520px] bg-[#111] text-white overflow-hidden isolate" id="inicio">
          <div className="grid-overlay"></div>
          <div className="absolute z-[1] w-[530px] h-[530px] rounded-full right-[-270px] top-[100px] bg-orange-500 blur-[80px] opacity-[.15] pointer-events-none"></div>

          <div className="wrap relative z-[2] pt-[174px] md:pt-[200px] pb-[80px]">
            <p className="text-[11px] font-extrabold uppercase tracking-[.14em] text-white mb-[18px] flex items-center gap-[9px]">
              <span className="w-[30px] h-0.5 bg-orange-500"></span>
              T4 FITNESS · INVESTIDORES
            </p>
            <h1 className="text-white">
              Equipamentos de<br />
              <em>alta performance.</em>
            </h1>
            <p className="w-[min(480px,100%)] text-[16px] leading-[1.65] text-[#ececec] my-[25px]">
              A T4 também vende equipamentos profissionais para academias, condomínios e estúdios.
              Máquinas seminovas revisadas, com qualidade e procedência garantidas.
            </p>
            <a href="#catalogo" className="btn btn-orange">
              Ver catálogo <FontAwesomeIcon icon={faArrowRight} className="text-[14px] rotate-45" />
            </a>
          </div>
        </section>

        <section className="wrap py-[83px] md:py-[120px]" id="catalogo">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-[30px]">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[.14em] text-orange-500 mb-[26px]">CATÁLOGO</p>
              <h2>
                Monte a sua<br />
                <em>academia.</em>
              </h2>
            </div>
            <p className="text-[15px] text-muted max-w-[290px] leading-[1.6] mb-[9px]">
              {EQUIPAMENTOS.length} máquinas de musculação disponíveis. Valores sob consulta.
            </p>
          </div>

          <div className="mt-[42px] mb-10 flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setFilter(cat.key)}
                className={`px-5 py-3 border-2 text-[13px] font-bold uppercase tracking-[.06em] cursor-pointer transition-all duration-250 ${
                  filter === cat.key
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-transparent text-ink border-line hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((equip) => (
              <article key={equip.id} className="group flex flex-col overflow-hidden bg-white border border-line transition-all duration-250 hover:shadow-form hover:-translate-y-1">
                <div className="aspect-square overflow-hidden bg-white">
                  <img
                    src={`/equipamentos/equipamento-${String(equip.id).padStart(2, '0')}.jpeg`}
                    alt={equip.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-250 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 border-t border-line flex flex-col gap-2 grow">
                  <span className="text-3xs font-extrabold uppercase tracking-[.12em] text-orange-500">
                    {CATEGORY_LABELS[equip.category]}
                  </span>
                  <h3 className="text-[24px] tracking-[-.02em]">{equip.name}</h3>
                  <a
                    href={whatsappFor(equip.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto pt-3 text-2xs font-extrabold uppercase tracking-[.09em] text-ink no-underline inline-flex items-center gap-[5px] hover:text-orange-500 transition-colors"
                  >
                    Solicitar valor <FontAwesomeIcon icon={faArrowRight} className="text-[13px] text-orange-500 -rotate-45" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#0d0d0e] text-white py-[80px] md:py-[110px]" id="contato">
          <div className="wrap">
            <p className="text-[11px] font-extrabold uppercase tracking-[.14em] text-orange-500 mb-[26px]">ENTRE EM CONTATO</p>
            <h2 className="text-white">
              Solicite um <em>orçamento.</em>
            </h2>
            <p className="max-w-[440px] text-[16px] leading-[1.65] text-[#c4c4c4] mt-6 mb-12">
              Fale direto com nossa equipe pelo WhatsApp ou telefone. Enviamos fotos, medidas e condições de cada equipamento.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <h3 className="text-[20px] text-white mb-6">Redes sociais</h3>
                <div className="flex gap-5">
                  <a href="https://www.instagram.com/t4fitness_/" target="_blank" rel="noreferrer" aria-label="Instagram da T4 Fitness" className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 hover:-translate-y-0.5 transition-all">
                    <FontAwesomeIcon icon={faInstagram} className="text-[20px]" />
                  </a>
                  <a href="https://www.facebook.com/arenafits/" target="_blank" rel="noreferrer" aria-label="Facebook da T4 Fitness" className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 hover:-translate-y-0.5 transition-all">
                    <FontAwesomeIcon icon={faFacebook} className="text-[20px]" />
                  </a>
                  <a href="https://api.whatsapp.com/message/7DVJU2H7CTALF1" target="_blank" rel="noreferrer" aria-label="WhatsApp da T4 Fitness" className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 hover:-translate-y-0.5 transition-all">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-[20px]" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] text-white mb-6">Contato direto</h3>
                <div className="flex flex-col gap-3">
                  <a href="tel:+5585987453332" className="text-orange-400 hover:text-orange-300 text-[15px] font-semibold no-underline inline-flex items-center gap-2 transition-colors">
                    <FontAwesomeIcon icon={faPhone} className="text-[14px]" /> (85) 98745-3332
                  </a>
                  <a href="https://api.whatsapp.com/message/7DVJU2H7CTALF1" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 text-[15px] font-semibold no-underline inline-flex items-center gap-2 transition-colors">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-[16px]" /> Chat no WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[20px] text-white mb-6">Grupos VIP</h3>
                <div className="flex flex-col gap-3">
                  <a href="https://chat.whatsapp.com/JQaxKZssrRm3oUhNLvBogj" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 text-[15px] font-semibold no-underline transition-colors">
                    VIP Antônio Bezerra
                  </a>
                  <a href="https://chat.whatsapp.com/J1kUHS184lcCOCH33YoHdA" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 text-[15px] font-semibold no-underline transition-colors">
                    VIP Bela Vista
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white pt-[55px] pb-5">
        <div className="wrap grid grid-cols-1 md:grid-cols-3 items-center gap-[23px] md:gap-5">
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" className="w-[190px]" />
          <p className="font-display text-[29px] leading-[.9] uppercase m-0 text-[#d8d8d8]">
            Mais energia para a sua evolução.
          </p>
          <div className="flex items-center gap-5 md:justify-self-end">
            <a href="https://www.instagram.com/t4fitness_/" target="_blank" rel="noreferrer" aria-label="Instagram da T4 Fitness" className="text-orange-500 hover:text-orange-400 hover:-translate-y-0.5 transition-all">
              <FontAwesomeIcon icon={faInstagram} className="text-[22px]" />
            </a>
            <a href="https://www.facebook.com/arenafits/" target="_blank" rel="noreferrer" aria-label="Facebook da T4 Fitness" className="text-orange-500 hover:text-orange-400 hover:-translate-y-0.5 transition-all">
              <FontAwesomeIcon icon={faFacebook} className="text-[22px]" />
            </a>
            <a href="https://api.whatsapp.com/message/7DVJU2H7CTALF1" target="_blank" rel="noreferrer" aria-label="WhatsApp da T4 Fitness" className="text-orange-500 hover:text-orange-400 hover:-translate-y-0.5 transition-all">
              <FontAwesomeIcon icon={faWhatsapp} className="text-[22px]" />
            </a>
          </div>
        </div>
        <div className="wrap mt-[50px] pt-[18px] border-t border-[#2c2c2e] flex flex-col md:flex-row md:justify-between gap-[14px] md:gap-0 text-3xs uppercase tracking-[.06em]">
          <span className="text-[#858589]">© 2026 T4 Fitness. Todos os direitos reservados.</span>
          <a href="#inicio" className="text-white no-underline order-first md:order-none inline-flex items-center gap-1 hover:text-orange-500 transition-colors">
            Voltar ao topo <FontAwesomeIcon icon={faArrowUp} className="text-[11px]" />
          </a>
        </div>
      </footer>
    </>
  );
}
