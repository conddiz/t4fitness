'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [unitSearch, setUnitSearch] = useState('');
  const [unitCount, setUnitCount] = useState(7);

  const units = [
    { id: 1, name: 'Guadalajara', address: 'Rua Araré, 641', neighborhood: 'Guadalajara', search: '01 guadalajara rua arare' },
    { id: 2, name: 'Potira', address: 'Rua Padre Alfredo Nesi, 1322', neighborhood: 'Potira', search: '02 potira rua padre alfredo nesi' },
    { id: 3, name: 'Arianópolis', address: 'Rua Danilo Correia, 777', neighborhood: 'Arianópolis', search: '03 arianopolis rua danilo correia' },
    { id: 4, name: 'Parque Albano', address: 'Rua Gonçalves Dias, 1988', neighborhood: 'Parque Albano', search: '04 parque albano rua goncalves dias' },
    { id: 5, name: 'Granja Lisboa', address: 'Rua Xavier da Silveira, 3949', neighborhood: 'Granja Lisboa', search: '05 granja lisboa rua xavier da silveira' },
    { id: 6, name: 'Bela Vista', address: 'Rua Espiriro Santo, 614', neighborhood: 'Bela Vista', search: '06 bela vista rua espiriro santo espirito' },
    { id: 7, name: 'Antônio Bezerra', address: 'Rua Martins Neto, 810', neighborhood: 'Antônio Bezerra', search: '07 antonio bezerra rua martins neto' },
  ];

  const modalities = [
    { id: 1, name: 'Musculação', number: '01' },
    { id: 2, name: 'Funcional', number: '02' },
    { id: 3, name: 'Muay Thai', number: '03' },
    { id: 4, name: 'FitDance', number: '04' },
    { id: 5, name: 'Jiu-Jítsu', number: '05' },
    { id: 6, name: 'Forró', number: '06' },
    { id: 7, name: 'Karatê', number: '07' },
  ];

  useEffect(() => {
    const normalize = (value: string) =>
      value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

    const cards = document.querySelectorAll('.unit-card');
    const query = normalize(unitSearch.trim());
    let visible = 0;

    cards.forEach((card) => {
      const search = card.getAttribute('data-search') || '';
      const matches = normalize(search).includes(query);
      card.classList.toggle('hidden', !matches);
      if (matches) visible += 1;
    });

    setUnitCount(visible);
  }, [unitSearch]);

  return (
    <>
      <div className="h-[34px] bg-orange-500 text-[#16110c] flex items-center justify-center gap-2.5 text-2xs uppercase font-black tracking-[.13em]">
        <span>7 unidades em Fortaleza</span>
        <span className="w-1 h-1 rounded-full bg-[#16110c]"></span>
        <span>Wellhub e TotalPass aceitos</span>
      </div>

      <header className={`h-[84px] bg-black flex items-center absolute z-10 w-full top-[34px] border-b border-white/[.13] transition-all ${menuOpen ? 'bg-[#0b0b0c]' : ''}`} style={{ paddingLeft: 'max(24px, calc((100vw - 1160px)/2))', paddingRight: 'max(24px, calc((100vw - 1160px)/2))' }} id="header">
        <a className="flex-shrink-0" href="#inicio" aria-label="T4 Fitness - início">
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" className="w-[122px] block" />
        </a>

        <nav className={`hidden md:flex items-center gap-[26px] ml-auto`} aria-label="Navegação principal">
          <a href="#unidades" onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold text-[13px] hover:text-orange-500 transition-colors">Unidades</a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold text-[13px] hover:text-orange-500 transition-colors">A experiência</a>
          <a href="#modalidades" onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold text-[13px] hover:text-orange-500 transition-colors">Modalidades</a>
          <a href="#convenios" onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold text-[13px] hover:text-orange-500 transition-colors">Convênios</a>
          <a href="/equipamentos" onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold text-[13px] hover:text-orange-500 transition-colors">Equipamentos</a>
        </nav>

        <a href="#unidades" className="hidden md:inline-flex btn btn-small btn-orange text-[10px] gap-[9px] px-[15px] py-3 font-black uppercase tracking-[.06em]">
          Matricule-se <span className="text-[18px]">↗</span>
        </a>

        <button className="md:hidden flex flex-col gap-1.5 ml-auto" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
          <span className="w-[17px] h-0.5 bg-white block"></span>
          <span className="w-[17px] h-0.5 bg-white block"></span>
        </button>

        {menuOpen && (
          <nav className="absolute top-[84px] left-0 w-full bg-[#0b0b0c] p-[22px_19px_25px] flex flex-col gap-[19px] md:hidden">
            <a href="#unidades" onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold">Unidades</a>
            <a href="#experiencia" onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold">A experiência</a>
            <a href="#modalidades" onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold">Modalidades</a>
            <a href="#convenios" onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold">Convênios</a>
            <a href="/equipamentos" onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold">Equipamentos</a>
          </nav>
        )}
      </header>

      <main>
        <section className="relative min-h-[630px] h-[min(780px,calc(100vh-34px))] bg-[#111] text-white overflow-hidden isolation-isolate" id="inicio">
          <div className="absolute inset-0 z-0">
            <img src="/unidade-exterior.jpeg" alt="Fachada de uma unidade T4 Fitness" className="w-full h-full object-cover object-[center_56%] saturate-[.9] contrast-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090909_3%] via-[rgba(9,9,9,.88)_28%] to-[rgba(9,9,9,.3)]"></div>
          </div>

          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[rgba(0,0,0,.57)] to-transparent"></div>

          <div className="absolute inset-0 z-[1] opacity-[.17] bg-[linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)]" style={{ backgroundSize: '72px 72px', maskImage: 'linear-gradient(90deg, #000, transparent 69%)', WebkitMaskImage: 'linear-gradient(90deg, #000, transparent 69%)' }}></div>

          <div className="absolute w-[530px] h-[530px] rounded-full bg-orange-500 blur-3xl opacity-[.13] z-[1]" style={{ right: '-270px', top: '160px', pointerEvents: 'none' }}></div>

          <div className="relative z-[2] pt-[208px] px-6" style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
            <p className="text-2xs font-black uppercase tracking-[.14em] text-white mb-[18px] flex items-center gap-[9px]">
              <span className="w-[30px] h-0.5 bg-orange-500"></span>
              T4 FITNESS · FORTALEZA
            </p>
            <h1 className="text-white mb-8 max-w-2xl">
              Mais energia para<br />
              <em className="not-italic text-orange-500">a sua evolução.</em>
            </h1>
            <p className="w-[min(440px,100%)] text-[15px] leading-[1.65] text-[#ececec] mb-8">
              Treine onde o seu ritmo acontece. Estrutura completa, modalidades para todos os estilos e uma comunidade que puxa você pra cima.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-[30px]">
              <a href="#unidades" className="btn btn-orange">
                Encontre sua unidade <span>↘</span>
              </a>
              <a href="#experiencia" className="text-link">
                Conheça a T4 <span>→</span>
              </a>
            </div>
          </div>

          <div className="absolute z-[2] right-6 md:right-[max(24px,calc((100vw-1160px)/2))] bottom-[55px] md:bottom-[70px] flex gap-[30px] text-white" style={{ pointerEvents: 'none' }}>
            <div className="border-l border-orange-500 pl-[13px] flex flex-col">
              <strong className="font-display text-[32px] leading-[.8]">7</strong>
              <span className="text-2xs uppercase tracking-[.08em]">unidades</span>
            </div>
            <div className="border-l border-orange-500 pl-[13px] flex flex-col">
              <strong className="font-display text-[32px] leading-[.8]">+</strong>
              <span className="text-2xs uppercase tracking-[.08em]">energia todo dia</span>
            </div>
            <div className="border-l border-orange-500 pl-[13px] flex flex-col">
              <strong className="font-display text-[32px] leading-[.8]">VIP</strong>
              <span className="text-2xs uppercase tracking-[.08em]">ofertas exclusivas</span>
            </div>
          </div>

          <a href="#unidades" className="absolute z-[2] bottom-5 left-6 md:left-[19px] text-white text-2xs uppercase tracking-[.13em] no-underline flex items-center gap-2.5 hover:text-orange-500 transition-colors">
            <span>Role para descobrir</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </section>

        <section className="bg-orange-500 overflow-hidden" aria-label="Destaques">
          <div className="h-[65px] flex items-center gap-[30px] w-max animate-marquee font-display font-black text-[27px] text-white">
            <span>SEU CORPO · SEU RITMO · SUA T4</span>
            <b className="text-[22px]">✦</b>
            <span>SEU CORPO · SEU RITMO · SUA T4</span>
            <b className="text-[22px]">✦</b>
            <span>SEU CORPO · SEU RITMO · SUA T4</span>
            <b className="text-[22px]">✦</b>
          </div>
        </section>

        <section className="py-[83px] md:py-[132px] px-6" style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }} id="experiencia">
          <div className="text-2xs font-black uppercase tracking-[.14em] text-orange-500 mb-[26px]">
            A T4 É MOVIMENTO
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[70px] mb-[55px] md:mb-[98px]">
            <div>
              <h2>
                Um treino que<br />
                cabe na <em className="not-italic text-orange-500">sua vida.</em>
              </h2>
            </div>
            <div>
              <p className="text-[16px] leading-[1.75] text-ink mb-6 max-w-[360px]">
                Na T4, você encontra mais do que equipamentos. Encontra espaço para ganhar força, se divertir, dançar, lutar e cuidar de você.
              </p>
              <a href="#modalidades" className="text-link dark">
                Veja as modalidades <span>→</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[42px] border-t border-[#d9d5cd] py-[23px] md:pt-[28px] md:pb-0">
            <article>
              <div className="text-2xs text-orange-500 font-black mb-8">01</div>
              <h3 className="text-[35px] tracking-[-.02em] mb-4">Estrutura que inspira</h3>
              <p className="text-[13px] leading-[1.7] text-muted max-w-[250px]">
                Ambientes modernos, equipamentos e um clima que dá vontade de voltar.
              </p>
            </article>
            <article className="border-l border-[#d9d5cd] pl-[42px]">
              <div className="text-2xs text-orange-500 font-black mb-8">02</div>
              <h3 className="text-[35px] tracking-[-.02em] mb-4">Do seu jeito</h3>
              <p className="text-[13px] leading-[1.7] text-muted max-w-[250px]">
                Musculação, cardio e aulas para você variar a rotina sem perder o foco.
              </p>
            </article>
            <article className="border-l border-[#d9d5cd] pl-[42px]">
              <div className="text-2xs text-orange-500 font-black mb-8">03</div>
              <h3 className="text-[35px] tracking-[-.02em] mb-4">Perto de você</h3>
              <p className="text-[13px] leading-[1.7] text-muted max-w-[250px]">
                Sete endereços para o seu treino estar sempre no caminho.
              </p>
            </article>
          </div>
        </section>

        <section className="h-[400px] md:h-[500px] relative overflow-hidden bg-[#14111b]">
          <img src="/cardio-01.jpeg" alt="Área de cardio da T4 Fitness" className="w-full h-full object-cover object-[center_44%] opacity-[.78]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,.55)] to-transparent"></div>
          <div className="absolute inset-0 z-[1] flex flex-col justify-center pl-6 md:pl-[max(24px,calc((100vw-1160px)/2))] font-display uppercase">
            <span className="text-[clamp(28px,3.4vw,47px)] font-bold tracking-[.04em] text-white">VAI NO</span>
            <strong className="text-[clamp(58px,8vw,110px)] leading-[.78] text-orange-500 font-black">SEU RITMO</strong>
            <span className="text-[clamp(28px,3.4vw,47px)] font-bold tracking-[.04em] text-white">VAI MAIS LONGE</span>
          </div>
        </section>

        <section className="bg-[#0d0d0e] text-white py-[82px] md:py-[126px] px-6" id="unidades">
          <div style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between md:gap-[30px] mb-[42px] md:mb-[64px]">
              <div>
                <p className="text-2xs font-black uppercase tracking-[.14em] text-[#ff8a29] mb-6">SUA T4 MAIS PRÓXIMA</p>
                <h2 className="max-w-2xl mb-0">
                  Escolha onde<br />
                  você vai <em className="not-italic text-orange-500">evoluir.</em>
                </h2>
              </div>
              <p className="text-[14px] text-[#c4c4c4] max-w-[290px] leading-[1.6] mt-6 md:mt-0">
                São 7 unidades esperando por você em Fortaleza.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
              <div className="h-[52px] bg-[#181819] flex items-center px-[17px] gap-3 text-orange-500 w-full md:w-[360px]">
                <span className="text-[28px] leading-0 translate-y-[-2px]">⌕</span>
                <input
                  type="search"
                  placeholder="Busque por bairro ou unidade"
                  value={unitSearch}
                  onChange={(e) => setUnitSearch(e.target.value)}
                  className="w-full border-0 outline-0 bg-transparent text-white placeholder-[#858589] font-inherit text-[14px]"
                />
              </div>
              <span className="text-2xs uppercase tracking-[.12em] text-[#a5a5a6]">
                {unitCount} unidades
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-[#39393b]">
              {units.map((unit) => (
                <article
                  key={unit.id}
                  className="unit-card group min-h-[210px] md:min-h-[245px] p-[27px] border-r border-b border-[#39393b] flex flex-col transition-colors hover:bg-orange-500"
                  data-search={unit.search}
                >
                  <span className="text-2xs text-orange-500 font-bold tracking-[.1em] group-hover:text-[#111]">
                    {String(unit.id).padStart(2, '0')}
                  </span>
                  <h3 className="font-display font-black text-[38px] md:text-[42px] tracking-[-.025em] my-[34px] md:my-[34px] leading-none group-hover:text-[#111]">
                    {unit.name}
                  </h3>
                  <p className="text-[12px] leading-[1.7] text-[#b7b7bb] m-0 group-hover:text-[#111]">
                    {unit.address}<br />
                    {unit.neighborhood} · Fortaleza, CE
                  </p>
                  <a href="#contato" className="mt-auto text-white text-2xs font-black uppercase tracking-[.09em] no-underline group-hover:text-[#111]">
                    Quero treinar aqui <span className="text-[17px] text-orange-500 ml-[5px] group-hover:text-[#111]">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[83px] md:py-[130px] px-6" id="modalidades">
          <div style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between md:gap-[30px] mb-[65px]">
              <div>
                <p className="text-2xs font-black uppercase tracking-[.14em] text-orange-500 mb-6">TODA ENERGIA CONTA</p>
                <h2 className="max-w-2xl mb-0">
                  Encontre o seu<br />
                  <em className="not-italic text-orange-500">movimento.</em>
                </h2>
              </div>
              <p className="text-[14px] text-muted max-w-[290px] leading-[1.6] mt-6 md:mt-0">
                Da intensidade do treino à leveza da dança. Escolha uma modalidade ou misture todas.
              </p>
            </div>

            <div>
              {modalities.map((mod) => (
                <button
                  key={mod.id}
                  className="w-full text-left border-0 border-t border-[#d9d5cd] bg-transparent py-6 px-0 font-display text-[clamp(34px,4vw,58px)] font-bold uppercase leading-none flex items-center justify-between cursor-default transition-all hover:text-orange-500 hover:pl-3"
                >
                  {mod.name}
                  <span className="font-sans text-2xs text-orange-500 pr-3">{mod.number}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[80px] md:py-[120px] px-6" style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-[15px] h-[400px] md:h-[560px]">
            <div className="relative overflow-hidden rounded-lg">
              <img src="/cardio-02.jpeg" alt="Esteiras e equipamentos da T4 Fitness" className="w-full h-full object-cover" />
              <span className="absolute bottom-[25px] left-[25px] font-display font-black text-[clamp(28px,4vw,42px)] leading-[.82] text-white">
                ENERGIA EM CADA<br />
                DETALHE
              </span>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-[15px]">
              <img src="/reception.jpeg" alt="Recepção de uma unidade T4 Fitness" className="w-full h-full object-cover rounded-lg" />
              <img src="/locker-room.jpeg" alt="Vestiário moderno da T4 Fitness" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-[80px] md:py-[110px] px-6" id="convenios">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[45px] md:gap-[70px] items-center" style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
            <div>
              <p className="text-2xs font-black uppercase tracking-[.14em] text-white mb-[18px]">TREINE COM LIBERDADE</p>
              <h2 className="text-[#0b0b0c] mb-0">
                Seu benefício<br />
                também treina <em className="not-italic text-[#0b0b0c] font-black">aqui.</em>
              </h2>
              <p className="max-w-[375px] text-[15px] leading-[1.65] my-7 text-[#1a1a1c]">
                A T4 aceita os principais benefícios corporativos para tornar o seu treino ainda mais acessível.
              </p>
              <a href="#unidades" className="btn btn-white">
                Escolha sua unidade <span>↘</span>
              </a>
            </div>
            <div className="flex flex-col gap-[18px]">
              <div className="bg-white text-[#0b0b0c] p-[26px_29px] min-h-[138px] flex flex-col justify-center rounded-lg">
                <small className="text-2xs tracking-[.12em] font-black text-[#ff8a29]">ACEITAMOS</small>
                <strong className="font-sans text-[34px] leading-[1.1] tracking-[-.07em] text-[#0b0b0c]">wellhub</strong>
                <span className="text-2xs text-[#666] mt-[5px]">antigo Gympass</span>
              </div>
              <div className="bg-white text-[#0b0b0c] p-[26px_29px] min-h-[138px] flex flex-col justify-center rounded-lg">
                <small className="text-2xs tracking-[.12em] font-black text-[#ff8a29]">ACEITAMOS</small>
                <strong className="font-sans text-[34px] leading-[1.1] tracking-[-.07em] text-[#0b0b0c]">totalpass</strong>
                <span className="text-2xs text-[#666] mt-[5px]">seu benefício em movimento</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream py-[80px] md:py-[125px] px-6" id="contato">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px] md:gap-[100px] items-start" style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
            <div>
              <p className="text-2xs font-black uppercase tracking-[.14em] text-orange-500 mb-[18px]">PRIMEIRO PASSO</p>
              <h2 className="mb-6">
                Vem pra <em className="not-italic text-orange-500">T4.</em>
              </h2>
              <p className="max-w-[400px] leading-[1.7] text-[15px] text-ink">
                Entre no Grupo VIP e fique por dentro das ofertas de inauguração, condições especiais e novidades da sua unidade.
              </p>
            </div>
            <form className="p-8 bg-white flex flex-col gap-[22px] shadow-form rounded-lg">
              <label className="text-2xs font-black uppercase tracking-[.08em] text-ink flex flex-col gap-2 block">
                <span>Seu nome</span>
                <input
                  type="text"
                  placeholder="Como podemos te chamar?"
                  required
                  className="text-[14px] font-sans border-0 border-b border-[#d5d2cc] p-[10px_0] outline-0 bg-transparent text-ink focus:border-orange-500 transition-colors"
                />
              </label>
              <label className="text-2xs font-black uppercase tracking-[.08em] text-ink flex flex-col gap-2 block">
                <span>Unidade de interesse</span>
                <select
                  required
                  className="text-[14px] font-sans border-0 border-b border-[#d5d2cc] p-[10px_0] outline-0 bg-transparent text-ink focus:border-orange-500 transition-colors"
                >
                  <option value="">Escolha uma unidade</option>
                  {units.map((unit) => (
                    <option key={unit.id}>{unit.name}</option>
                  ))}
                </select>
              </label>
              <button type="submit" className="btn btn-orange mt-4">
                Quero entrar no VIP <span>↗</span>
              </button>
              <small className="text-2xs leading-[1.5] text-[#777]">
                Ao enviar, você será direcionado ao Instagram da T4 para continuar o atendimento.
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white pt-[55px] pb-[20px]">
        <div className="px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-[23px] md:gap-5 pb-[50px]" style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" className="w-[150px]" />
          <p className="font-display text-[29px] leading-[.9] uppercase m-0 text-[#d8d8d8]">
            Mais energia para a sua evolução.
          </p>
          <a href="https://www.instagram.com/t4fitness_/" target="_blank" rel="noreferrer" className="text-orange-500 text-2xs no-underline uppercase tracking-[.09em] font-black md:justify-self-end hover:text-orange-400 transition-colors">
            Instagram @t4fitness_ ↗
          </a>
        </div>
        <div className="px-6 border-t border-[#2c2c2e] pt-[18px] flex flex-col md:flex-row md:justify-between md:items-center gap-[14px] md:gap-0" style={{ maxWidth: 'min(1160px, calc(100% - 48px))', margin: '0 auto' }}>
          <span className="text-2xs text-[#858589] uppercase tracking-[.06em]">
            © 2026 T4 Fitness. Todos os direitos reservados.
          </span>
          <a href="#inicio" className="text-white text-2xs no-underline uppercase tracking-[.06em] font-semibold hover:text-orange-500 transition-colors">
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </>
  );
}
