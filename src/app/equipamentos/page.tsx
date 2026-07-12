'use client';

import { useState } from 'react';

export default function Equipamentos() {
  const [filter, setFilter] = useState('all');

  const equipamentos = [
    { id: 1, category: 'cardio', name: 'Esteira Elétrica', image: '/cardio-01.jpeg' },
    { id: 2, category: 'cardio', name: 'Bicicleta Ergométrica', image: '/cardio-02.jpeg' },
    { id: 3, category: 'musculacao', name: 'Rack Multiuso', image: '/reception.jpeg' },
    { id: 4, category: 'musculacao', name: 'Barras e Halteres', image: '/locker-room.jpeg' },
  ];

  const filtered =
    filter === 'all' ? equipamentos : equipamentos.filter((e) => e.category === filter);

  return (
    <>
      <div className="flex items-center justify-center gap-3 bg-black px-6 py-4 text-sm text-cream">
        <span>Equipamentos Profissionais</span>
        <span className="h-1 w-1 rounded-full bg-orange-500"></span>
        <span>Para sua academia</span>
      </div>

      <header className="sticky top-0 z-50 flex items-center justify-between gap-6 bg-white px-6 py-5" id="header">
        <a className="shrink-0" href="/" aria-label="T4 Fitness - início">
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação">
          <a href="/" className="text-sm font-semibold text-ink no-underline transition-colors hover:text-orange-500">Voltar ao site</a>
          <a href="#equipamentos" className="text-sm font-semibold text-ink no-underline transition-colors hover:text-orange-500">Equipamentos</a>
          <a href="#contato" className="text-sm font-semibold text-ink no-underline transition-colors hover:text-orange-500">Contato</a>
        </nav>
        <a className="btn btn-small btn-orange hidden md:inline-flex" href="#contato">
          Solicitar Orçamento <span>↗</span>
        </a>
      </header>

      <main>
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-linear-to-br from-orange-500 to-orange-600" id="inicio">
          <div className="grid-overlay-alt"></div>

          <div className="wrap relative z-10 flex flex-col items-start justify-center py-24 text-white md:py-32">
            <p className="eyebrow">
              <span></span> T4 FITNESS · EQUIPAMENTOS
            </p>
            <h1 className="mb-8 max-w-2xl text-white">
              Equipamentos de<br />
              <em>alta performance</em>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-white md:text-lg">
              Temos os melhores equipamentos para sua academia. Qualidade, durabilidade e
              performance garantida.
            </p>
            <a className="btn btn-orange" href="#equipamentos">
              Ver catálogo <span>↘</span>
            </a>
          </div>
        </section>

        <section className="wrap py-16 md:py-24" id="equipamentos">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="section-kicker">CATÁLOGO</p>
              <h2>
                Escolha os melhores<br />
                <em>equipamentos.</em>
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-base text-muted md:text-lg">Desde cardio até musculação, temos tudo que você precisa.</p>
            </div>
          </div>

          <div className="mb-12 flex flex-wrap gap-3">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Todos
            </button>
            <button
              className={`filter-btn ${filter === 'cardio' ? 'active' : ''}`}
              onClick={() => setFilter('cardio')}
            >
              Cardio
            </button>
            <button
              className={`filter-btn ${filter === 'musculacao' ? 'active' : ''}`}
              onClick={() => setFilter('musculacao')}
            >
              Musculação
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((equip) => (
              <article key={equip.id} className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <img src={equip.image} alt={equip.name} className="aspect-video w-full object-cover" />
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-bold uppercase text-ink">{equip.name}</h3>
                  <a href="#contato" className="btn btn-orange btn-small">
                    Solicitar <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-cream py-16 md:py-24" id="contato">
          <div className="wrap max-w-2xl">
            <p className="section-kicker">ENTRE EM CONTATO</p>
            <h2 className="mb-6">
              Vamos conversar sobre <em>seu projeto?</em>
            </h2>
            <p className="mb-12 text-base leading-relaxed text-ink md:text-lg">
              Temos um time pronto para ajudá-lo a montar a academia dos seus sonhos.
            </p>

            <div className="mb-12 flex flex-col gap-3">
              <a href="https://api.whatsapp.com/message/7DVJU2H7CTALF1" className="contact-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006a6.506 6.506 0 00-6.487 6.522 6.516 6.516 0 001.911 4.613l.996 1.605.793-2.584a6.511 6.511 0 119.237-8.156"/>
                </svg>
                WhatsApp: (85) 98745-3332
              </a>
              <a href="tel:+558598745332" className="contact-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.6l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Ligar: (85) 98745-3332
              </a>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase text-ink">Grupos VIP:</p>
              <div className="flex flex-col gap-2">
                <a href="https://chat.whatsapp.com/JQaxKZssrRm3oUhNLvBogj" className="vip-link">
                  Grupo VIP Antônio Bezerra
                </a>
                <a href="https://chat.whatsapp.com/J1kUHS184lcCOCH33YoHdA" className="vip-link">
                  Grupo VIP Bela Vista
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-300 bg-white">
        <div className="wrap grid grid-cols-1 gap-8 py-12 md:grid-cols-3 md:gap-12 md:py-16">
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" className="h-8 w-auto" />
          <p className="text-sm text-muted md:col-span-1">Mais energia para a sua evolução.</p>
          <div className="flex items-center gap-6 justify-self-end md:col-span-1">
            <a href="https://www.instagram.com/t4fitness_/" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center h-6 w-6 text-orange-500 no-underline transition-all duration-250 hover:text-orange-400 hover:-translate-y-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/arenafits/" target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center h-6 w-6 text-orange-500 no-underline transition-all duration-250 hover:text-orange-400 hover:-translate-y-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://api.whatsapp.com/message/7DVJU2H7CTALF1" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex items-center justify-center h-6 w-6 text-orange-500 no-underline transition-all duration-250 hover:text-orange-400 hover:-translate-y-0.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006a6.506 6.506 0 00-6.487 6.522 6.516 6.516 0 001.911 4.613l.996 1.605.793-2.584a6.511 6.511 0 119.237-8.156"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="wrap flex flex-col items-center justify-between gap-4 border-t border-gray-300 py-8 md:flex-row">
          <span className="text-xs text-muted">© 2026 T4 Fitness. Todos os direitos reservados.</span>
          <a href="#inicio" className="text-xs font-semibold text-ink no-underline transition-colors hover:text-orange-500">Voltar ao topo ↑</a>
        </div>
      </footer>
    </>
  );
}
