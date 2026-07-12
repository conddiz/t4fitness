'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Investidores() {
  const [filter, setFilter] = useState('all');

  const equipamentos = [
    { id: 1, category: 'cardio', name: 'Esteira Elétrica Profissional', price: 'Sob consulta', image: '/cardio-01.jpeg' },
    { id: 2, category: 'cardio', name: 'Bicicleta Ergométrica', price: 'Sob consulta', image: '/cardio-02.jpeg' },
    { id: 3, category: 'musculacao', name: 'Rack Multiuso Premium', price: 'Sob consulta', image: '/reception.jpeg' },
    { id: 4, category: 'musculacao', name: 'Set de Barras e Halteres', price: 'Sob consulta', image: '/locker-room.jpeg' },
  ];

  const filtered =
    filter === 'all' ? equipamentos : equipamentos.filter((e) => e.category === filter);

  return (
    <>
      <div className="h-[34px] bg-orange-500 text-[#16110c] flex items-center justify-center gap-2.5 text-2xs uppercase font-black tracking-[.13em]">
        <span>Equipamentos Profissionais</span>
        <span className="w-1 h-1 rounded-full bg-[#16110c]"></span>
        <span>Para sua academia</span>
      </div>

      <header className="sticky top-0 z-50 h-[84px] bg-black flex items-center absolute w-full top-[34px] border-b border-white/[.13]" style={{ paddingLeft: 'max(24px, calc((100vw - 1160px)/2))', paddingRight: 'max(24px, calc((100vw - 1160px)/2))' }} id="header">
        <a className="flex-shrink-0" href="/" aria-label="T4 Fitness - início">
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" className="w-[122px] block" />
        </a>

        <nav className="hidden md:flex items-center gap-[26px] ml-auto" aria-label="Navegação">
          <a href="/" className="text-white no-underline font-semibold text-[13px] hover:text-orange-500 transition-colors">Voltar ao site</a>
          <a href="#equipamentos" className="text-white no-underline font-semibold text-[13px] hover:text-orange-500 transition-colors">Equipamentos</a>
          <a href="#contato" className="text-white no-underline font-semibold text-[13px] hover:text-orange-500 transition-colors">Contato</a>
        </nav>

        <a href="#contato" className="hidden md:inline-flex btn btn-small btn-orange text-[10px] gap-[9px] px-[15px] py-3 font-black uppercase tracking-[.06em]">
          Solicitar Orçamento <FontAwesomeIcon icon={faArrowRight} className="text-[14px] -rotate-45" />
        </a>
      </header>

      <main>
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600" id="inicio">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2750%27 height=%2750%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Crect width=%2750%27 height=%2750%27 fill=%27none%27 stroke=%27%23000%27 stroke-width=%271%27/%3E%3C/svg%3E")' }}></div>

          <div className="relative z-10 flex flex-col items-start justify-center py-24 md:py-32 px-6" style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
            <p className="text-2xs font-black uppercase tracking-[.14em] text-white mb-[18px] flex items-center gap-[9px]">
              <span className="w-[30px] h-0.5 bg-white"></span>
              T4 FITNESS · INVESTIDORES
            </p>
            <h1 className="text-white mb-8 max-w-2xl">
              Equipamentos de<br />
              <em className="not-italic text-white font-black">alta performance</em>
            </h1>
            <p className="w-[min(440px,100%)] text-[15px] leading-[1.65] text-white mb-8">
              Temos os melhores equipamentos para sua academia. Qualidade, durabilidade e performance garantida com preços especiais para investidores.
            </p>
            <a href="#equipamentos" className="btn btn-white">
              Ver catálogo <FontAwesomeIcon icon={faArrowRight} className="text-[14px] -rotate-45" />
            </a>
          </div>
        </section>

        <section className="py-[83px] md:py-[132px] px-6" style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }} id="equipamentos">
          <div className="mb-[42px] md:mb-[64px]">
            <p className="text-2xs font-black uppercase tracking-[.14em] text-orange-500 mb-6">CATÁLOGO</p>
            <h2 className="max-w-2xl mb-0">
              Escolha os melhores<br />
              <em className="not-italic text-orange-500">equipamentos.</em>
            </h2>
          </div>

          <div className="mb-12 flex flex-wrap gap-3">
            <button
              className={`px-6 py-3 border-2 border-gray-300 bg-transparent text-ink text-sm font-semibold uppercase cursor-pointer transition-all duration-250 ${filter === 'all' ? 'bg-orange-500 text-white border-orange-500' : 'hover:border-orange-500 hover:text-orange-500'}`}
              onClick={() => setFilter('all')}
            >
              Todos
            </button>
            <button
              className={`px-6 py-3 border-2 border-gray-300 bg-transparent text-ink text-sm font-semibold uppercase cursor-pointer transition-all duration-250 ${filter === 'cardio' ? 'bg-orange-500 text-white border-orange-500' : 'hover:border-orange-500 hover:text-orange-500'}`}
              onClick={() => setFilter('cardio')}
            >
              Cardio
            </button>
            <button
              className={`px-6 py-3 border-2 border-gray-300 bg-transparent text-ink text-sm font-semibold uppercase cursor-pointer transition-all duration-250 ${filter === 'musculacao' ? 'bg-orange-500 text-white border-orange-500' : 'hover:border-orange-500 hover:text-orange-500'}`}
              onClick={() => setFilter('musculacao')}
            >
              Musculação
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((equip) => (
              <article key={equip.id} className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
                <img src={equip.image} alt={equip.name} className="aspect-video w-full object-cover" />
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold uppercase text-ink">{equip.name}</h3>
                  <p className="text-orange-500 font-bold text-sm mb-4">{equip.price}</p>
                  <a href="#contato" className="btn btn-orange btn-small">
                    Solicitar <FontAwesomeIcon icon={faArrowRight} className="text-[14px]" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#0d0d0e] py-[80px] md:py-[110px] px-6" id="contato">
          <div style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
            <p className="text-2xs font-black uppercase tracking-[.14em] text-orange-500 mb-[26px]">ENTRE EM CONTATO</p>
            <h2 className="text-white mb-12 max-w-2xl">
              Solicite um <em className="not-italic text-orange-500">orçamento.</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <h3 className="text-white text-[18px] font-bold mb-6">Redes Sociais</h3>
                <div className="flex gap-6">
                  <a href="https://www.instagram.com/t4fitness_/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 transition-colors">
                    <FontAwesomeIcon icon={faInstagram} className="text-[24px]" />
                  </a>
                  <a href="https://www.facebook.com/arenafits/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 transition-colors">
                    <FontAwesomeIcon icon={faFacebook} className="text-[24px]" />
                  </a>
                  <a href="https://api.whatsapp.com/message/7DVJU2H7CTALF1" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 transition-colors">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-[24px]" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white text-[18px] font-bold mb-6">Contato Direto</h3>
                <div className="space-y-3">
                  <a href="tel:+558598745332" className="text-orange-400 hover:text-orange-300 text-sm font-semibold">
                    (85) 98745-3332
                  </a>
                  <a href="https://api.whatsapp.com/message/7DVJU2H7CTALF1" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 text-sm font-semibold block">
                    Chat WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white text-[18px] font-bold mb-6">Horário</h3>
                <p className="text-orange-400 text-sm font-semibold">
                  Segunda a Sexta<br />
                  09h - 18h<br /><br />
                  Sábados<br />
                  09h - 14h
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white pt-[55px] pb-[20px]">
        <div className="px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-[23px] md:gap-5 pb-[50px]" style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" className="w-[150px]" />
          <p className="font-display text-[29px] leading-[.9] uppercase m-0 text-[#d8d8d8]">
            Mais energia para a sua evolução.
          </p>
          <a href="https://www.instagram.com/t4fitness_/" target="_blank" rel="noreferrer" className="text-orange-500 text-2xs no-underline uppercase tracking-[.09em] font-black md:justify-self-end hover:text-orange-400 transition-colors flex items-center gap-1">
            Instagram @t4fitness_ <FontAwesomeIcon icon={faArrowRight} className="text-[12px] -rotate-45" />
          </a>
        </div>
        <div className="px-6 border-t border-[#2c2c2e] pt-[18px] flex flex-col md:flex-row md:justify-between md:items-center gap-[14px] md:gap-0" style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
          <span className="text-2xs text-[#858589] uppercase tracking-[.06em]">
            © 2026 T4 Fitness. Todos os direitos reservados.
          </span>
          <a href="#inicio" className="text-white text-2xs no-underline uppercase tracking-[.06em] font-semibold hover:text-orange-500 transition-colors flex items-center gap-1">
            Voltar ao topo <FontAwesomeIcon icon={faArrowRight} className="text-[12px]" style={{ transform: 'rotate(90deg)' }} />
          </a>
        </div>
      </footer>
    </>
  );
}
