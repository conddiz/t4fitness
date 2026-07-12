'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const units = [
  { id: 1, name: 'Guadalajara', address: 'Rua Araré, 641', neighborhood: 'Guadalajara', search: '01 guadalajara rua arare' },
  { id: 2, name: 'Potira', address: 'Rua Padre Alfredo Nesi, 1322', neighborhood: 'Potira', search: '02 potira rua padre alfredo nesi' },
  { id: 3, name: 'Arianópolis', address: 'Rua Danilo Correia, 777', neighborhood: 'Arianópolis', search: '03 arianopolis rua danilo correia' },
  { id: 4, name: 'Parque Albano', address: 'Rua Gonçalves Dias, 1988', neighborhood: 'Parque Albano', search: '04 parque albano rua goncalves dias' },
  { id: 5, name: 'Granja Lisboa', address: 'Rua Xavier da Silveira, 3949', neighborhood: 'Granja Lisboa', search: '05 granja lisboa rua xavier da silveira' },
  { id: 6, name: 'Bela Vista', address: 'Rua Espírito Santo, 614', neighborhood: 'Bela Vista', search: '06 bela vista rua espirito santo espiriro' },
  { id: 7, name: 'Antônio Bezerra', address: 'Rua Martins Neto, 810', neighborhood: 'Antônio Bezerra', search: '07 antonio bezerra rua martins neto' },
];

const modalities = [
  { id: 1, name: 'Musculação', number: '01', img: '/icons/musculacao.png' },
  { id: 2, name: 'Funcional', number: '02', img: '/icons/funcional.png' },
  { id: 3, name: 'Muay Thai', number: '03', img: '/icons/muaythai.png' },
  { id: 4, name: 'FitDance', number: '04', img: '/icons/mulher.png' },
  { id: 5, name: 'Jiu-Jítsu', number: '05', img: '/icons/agarrar.png' },
  { id: 6, name: 'Forró', number: '06', img: '/icons/acordeao.png' },
  { id: 7, name: 'Karatê', number: '07', img: '/icons/karate.png' },
];

const navLinks = [
  { href: '#unidades', label: 'Unidades' },
  { href: '#experiencia', label: 'A experiência' },
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#convenios', label: 'Convênios' },
  { href: '/investidores', label: 'Investidores' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [unitSearch, setUnitSearch] = useState('');
  const [unitCount, setUnitCount] = useState(units.length);

  useEffect(() => {
    const normalize = (value: string) =>
      value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

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
      <div className="h-[34px] bg-orange-500 text-orange-950 flex items-center justify-center gap-2.5 text-[10px] md:text-2xs uppercase font-extrabold tracking-[.13em]">
        <span>7 unidades em Fortaleza</span>
        <span className="w-1 h-1 rounded-full bg-orange-950"></span>
        <span>Wellhub e TotalPass aceitos</span>
      </div>

      <header className={`edge-pad h-[72px] md:h-[84px] flex items-center gap-6 md:gap-[42px] absolute z-10 w-full top-[34px] border-b border-white/[.13] ${menuOpen ? 'bg-ink' : 'bg-black'}`}>
        <a className="shrink-0" href="#inicio" aria-label="T4 Fitness - início">
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" className="w-[135px] md:w-[160px] block" />
        </a>

        <nav className="hidden md:flex items-center gap-[26px] ml-auto" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white no-underline font-semibold text-[14px] hover:text-orange-500 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#unidades" className="btn btn-small btn-orange hidden md:inline-flex">
          Matricule-se <FontAwesomeIcon icon={faArrowRight} className="text-[14px] -rotate-45" />
        </a>

        <button
          className="md:hidden grid place-content-center gap-1.5 ml-auto w-[37px] h-[37px] border border-[#4a4a4a] bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className="w-[17px] h-px bg-white block"></span>
          <span className="w-[17px] h-px bg-white block"></span>
        </button>

        {menuOpen && (
          <nav className="absolute top-[71px] left-0 w-full bg-ink px-[19px] pt-[22px] pb-[25px] flex flex-col gap-[19px] md:hidden" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-white no-underline font-semibold">
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="relative min-h-[650px] md:min-h-[630px] h-[calc(100vh-34px)] md:h-[min(780px,calc(100vh-34px))] bg-[#111] text-white overflow-hidden isolate" id="inicio">
          <div className="absolute inset-0">
            <img src="/hero-mobile.jpg" alt="" aria-hidden="true" className="md:hidden w-full h-full object-cover object-center saturate-[.95] contrast-[1.02]" />
            <img src="/hero.jpg" alt="Fachada da T4 Fitness com letreiro 24h" className="hidden md:block w-full h-full object-cover object-[center_45%] saturate-[.95] contrast-[1.02]" />
            <div className="hero-fade"></div>
          </div>
          <div className="hero-shade"></div>
          <div className="grid-overlay"></div>
          <div className="absolute z-[1] w-[530px] h-[530px] rounded-full right-[-270px] top-[160px] bg-orange-500 blur-[80px] opacity-[.13] pointer-events-none"></div>

          <div className="wrap relative z-[2] pt-[174px] md:pt-[208px]">
            <div className="md:max-w-[640px] md:ml-auto">
              <p className="text-[12px] font-extrabold uppercase tracking-[.14em] text-white mb-[18px] flex items-center gap-[9px]">
                <span className="w-[30px] h-0.5 bg-orange-500"></span>
                T4 FITNESS · FORTALEZA
              </p>
              <h1 className="text-white md:text-[clamp(60px,4.8vw,92px)]">
                Mais energia para<br />
                <em>a sua evolução.</em>
              </h1>
              <p className="w-[min(440px,100%)] text-[16px] leading-[1.65] text-[#ececec] my-[25px]">
                Treine onde o seu ritmo acontece. Estrutura completa, modalidades para todos os estilos e uma comunidade que puxa você pra cima.
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-[18px] md:gap-[30px]">
                <a href="#unidades" className="btn btn-orange">
                  Encontre sua unidade <FontAwesomeIcon icon={faArrowRight} className="text-[14px] rotate-45" />
                </a>
                <a href="#experiencia" className="text-link">
                  Conheça a T4 <FontAwesomeIcon icon={faArrowRight} className="text-[15px] ml-1 text-orange-500" />
                </a>
              </div>
            </div>
          </div>

          <div className="absolute z-[2] left-[19px] right-[19px] md:right-auto md:left-[max(24px,calc((100%-1160px)/2))] bottom-[55px] md:bottom-[70px] flex justify-between md:justify-start gap-2.5 md:gap-[30px] text-white pointer-events-none">
            <div className="border-l border-orange-500 pl-[13px] flex flex-col">
              <strong className="font-display text-[27px] md:text-[32px] leading-[.8]">7</strong>
              <span className="text-3xs uppercase tracking-[.08em] mt-[7px]">unidades</span>
            </div>
            <div className="border-l border-orange-500 pl-[13px] flex flex-col">
              <strong className="font-display text-[27px] md:text-[32px] leading-[.8]">+</strong>
              <span className="text-3xs uppercase tracking-[.08em] mt-[7px]">energia todo dia</span>
            </div>
            <div className="border-l border-orange-500 pl-[13px] flex flex-col">
              <strong className="font-display text-[27px] md:text-[32px] leading-[.8]">VIP</strong>
              <span className="text-3xs uppercase tracking-[.08em] mt-[7px]">ofertas exclusivas</span>
            </div>
          </div>

          <a href="#unidades" className="absolute z-[2] bottom-5 left-[19px] md:left-auto md:right-[max(24px,calc((100%-1160px)/2))] text-white text-3xs uppercase tracking-[.13em] no-underline flex items-center gap-2.5 hover:text-orange-500 transition-colors">
            Role para descobrir <i className="h-px w-10 bg-orange-500"></i>
          </a>
        </section>

        <section className="bg-orange-500 overflow-hidden whitespace-nowrap" aria-label="Destaques">
          <div className="h-[50px] md:h-[65px] flex items-center gap-[30px] pr-[30px] w-max animate-marquee motion-reduce:animate-none font-display font-extrabold text-[21px] md:text-[27px]">
            <span>SEU CORPO · SEU RITMO · SUA T4</span>
            <b className="text-[22px]" aria-hidden="true">✦</b>
            <span aria-hidden="true">SEU CORPO · SEU RITMO · SUA T4</span>
            <b className="text-[22px]" aria-hidden="true">✦</b>
            <span aria-hidden="true">SEU CORPO · SEU RITMO · SUA T4</span>
            <b className="text-[22px]" aria-hidden="true">✦</b>
          </div>
        </section>

        <section className="wrap py-[83px] md:pt-[132px] md:pb-[118px]" id="experiencia">
          <div className="text-[12px] font-extrabold uppercase tracking-[.14em] text-orange-500 mb-[26px]">
            A T4 É MOVIMENTO
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-[27px] md:gap-[70px] items-end">
            <h2>
              Um treino que<br />
              cabe na <em>sua vida.</em>
            </h2>
            <div>
              <p className="text-[16px] leading-[1.75] text-ink max-w-[360px] mt-[5px] mb-6">
                Na T4, você encontra mais do que equipamentos. Encontra espaço para ganhar força, se divertir, dançar, lutar e cuidar de você.
              </p>
              <a href="#modalidades" className="text-link text-link-dark inline-flex items-center gap-1 mt-2">
                Veja as modalidades <FontAwesomeIcon icon={faArrowRight} className="text-[15px] text-orange-500" />
              </a>
            </div>
          </div>

          <div className="mt-[55px] md:mt-[98px] border-t border-line grid grid-cols-1 md:grid-cols-3">
            <article className="py-[23px] md:pt-7 md:pb-0 md:pr-[42px] border-b md:border-b-0 border-line">
              <div className="text-[12px] text-orange-500 font-extrabold mb-5 md:mb-8">01</div>
              <h3 className="text-[35px] tracking-[-.02em]">Estrutura que inspira</h3>
              <p className="text-[15px] leading-[1.7] text-muted max-w-[250px]">
                Ambientes modernos, equipamentos e um clima que dá vontade de voltar.
              </p>
            </article>
            <article className="py-[23px] md:pt-7 md:pb-0 md:px-[42px] border-b md:border-b-0 md:border-l border-line">
              <div className="text-[12px] text-orange-500 font-extrabold mb-5 md:mb-8">02</div>
              <h3 className="text-[35px] tracking-[-.02em]">Do seu jeito</h3>
              <p className="text-[15px] leading-[1.7] text-muted max-w-[250px]">
                Musculação, cardio e aulas para você variar a rotina sem perder o foco.
              </p>
            </article>
            <article className="py-[23px] md:pt-7 md:pb-0 md:pl-[42px] md:border-l border-line">
              <div className="text-[12px] text-orange-500 font-extrabold mb-5 md:mb-8">03</div>
              <h3 className="text-[35px] tracking-[-.02em]">Perto de você</h3>
              <p className="text-[15px] leading-[1.7] text-muted max-w-[250px]">
                Sete endereços para o seu treino estar sempre no caminho.
              </p>
            </article>
          </div>
        </section>

        <section className="h-[400px] md:h-[500px] relative overflow-hidden bg-[#14111b]">
          <img src="/cardio-01.jpeg" alt="Área de cardio da T4 Fitness" className="w-full h-full object-cover object-[center_44%] opacity-[.78]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.55),transparent_70%)]"></div>
          <div className="absolute inset-0 z-[1] flex flex-col justify-center pl-[19px] md:pl-[max(24px,calc((100vw-1160px)/2))] font-display uppercase">
            <span className="text-[clamp(28px,3.4vw,47px)] font-bold tracking-[.04em] text-white">VAI NO</span>
            <strong className="text-[clamp(58px,8vw,110px)] leading-[.78] text-orange-500 font-black">SEU RITMO</strong>
            <span className="text-[clamp(28px,3.4vw,47px)] font-bold tracking-[.04em] text-white">VAI MAIS LONGE</span>
          </div>
        </section>

        <section className="bg-[#0d0d0e] text-white py-[82px] md:py-[126px]" id="unidades">
          <div className="wrap">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-[30px]">
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[.14em] text-orange-300 mb-[26px]">SUA T4 MAIS PRÓXIMA</p>
                <h2>
                  Escolha onde<br />
                  você vai <em>evoluir.</em>
                </h2>
              </div>
              <p className="text-[15px] text-[#c4c4c4] max-w-[290px] leading-[1.6] mb-[9px]">
                São 7 unidades esperando por você em Fortaleza.
              </p>
            </div>

            <div className="mt-[42px] md:mt-[64px] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <label className="h-[52px] bg-[#181819] flex items-center px-[17px] gap-3 text-orange-500 w-full md:w-[360px]">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[18px]" />
                <input
                  type="search"
                  placeholder="Busque por bairro ou unidade"
                  aria-label="Busque por bairro ou unidade"
                  value={unitSearch}
                  onChange={(e) => setUnitSearch(e.target.value)}
                  className="w-full border-0 outline-0 bg-transparent text-white placeholder:text-[#858589] font-sans text-[15px]"
                />
              </label>
              <span className="text-[12px] uppercase tracking-[.12em] text-[#a5a5a6]" aria-live="polite">
                {unitCount === 0 ? 'Nenhuma unidade encontrada' : `${unitCount} ${unitCount === 1 ? 'unidade' : 'unidades'}`}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-[#39393b]">
              {units.map((unit) => (
                <article
                  key={unit.id}
                  className={`unit-card group min-h-[210px] md:min-h-[245px] p-[27px] border-r border-b border-[#39393b] flex flex-col transition-colors duration-250 hover:bg-orange-500 hover:text-[#111] ${unit.id === 7 ? 'bg-[#181819]' : ''}`}
                  data-search={unit.search}
                >
                  <span className="text-[11px] text-orange-500 font-bold tracking-[.1em] group-hover:text-[#111]">
                    {String(unit.id).padStart(2, '0')}
                  </span>
                  <h3 className="text-[38px] md:text-[42px] tracking-[-.025em] mt-[23px] md:mt-[34px] mb-[13px]">
                    {unit.name}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#b7b7bb] m-0 group-hover:text-[#111]">
                    {unit.address}<br />
                    {unit.neighborhood} · Fortaleza, CE
                  </p>
                  <a href="#contato" className="mt-auto text-white text-2xs font-extrabold uppercase tracking-[.09em] no-underline inline-flex items-center gap-[5px] group-hover:text-[#111]">
                    Quero treinar aqui <FontAwesomeIcon icon={faArrowRight} className="text-[13px] text-orange-500 -rotate-45 group-hover:text-[#111]" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap py-[83px] md:py-[130px]" id="modalidades">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-[30px]">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[.14em] text-orange-500 mb-[26px]">TODA ENERGIA CONTA</p>
              <h2>
                Encontre o seu<br />
                <em>movimento.</em>
              </h2>
            </div>
            <p className="text-[15px] text-muted max-w-[290px] leading-[1.6] mb-[9px]">
              Da intensidade do treino à leveza da dança. Escolha uma modalidade ou misture todas.
            </p>
          </div>

          <ul className="mt-[65px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-l border-line list-none m-0 p-0">
            {modalities.map((mod) => (
              <li
                key={mod.id}
                className="group border-r border-b border-line p-6 md:p-7 min-h-[160px] flex flex-col gap-5 transition-colors duration-250 hover:bg-orange-500"
              >
                <div className="flex items-start justify-between">
                  <img src={mod.img} alt="" aria-hidden="true" className="h-8 w-auto group-hover:brightness-0 transition-[filter] duration-250" />
                  <span className="font-sans text-[12px] font-bold text-orange-500 group-hover:text-[#111] transition-colors">{mod.number}</span>
                </div>
                <span className="mt-auto font-display font-bold uppercase leading-none text-[26px] md:text-[30px] group-hover:text-[#111] transition-colors">
                  {mod.name}
                </span>
              </li>
            ))}
            <li className="border-r border-b border-line p-6 md:p-7 min-h-[160px] flex flex-col gap-5 bg-[#0d0d0e] text-white">
              <span className="font-display font-bold uppercase leading-none text-[26px] md:text-[30px]">
                Vem pra <em className="not-italic text-orange-500">T4.</em>
              </span>
              <a href="#contato" className="mt-auto text-2xs font-extrabold uppercase tracking-[.09em] text-white no-underline inline-flex items-center gap-[5px] hover:text-orange-500 transition-colors">
                Matricule-se <FontAwesomeIcon icon={faArrowRight} className="text-[13px] text-orange-500 -rotate-45" />
              </a>
            </li>
          </ul>
        </section>

        <section className="wrap pb-[80px] md:pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-[15px] h-[525px] md:h-[560px] grid-rows-[2fr_1fr] md:grid-rows-1">
            <div className="relative overflow-hidden">
              <img src="/cardio-02.jpeg" alt="Esteiras e equipamentos da T4 Fitness" className="w-full h-full object-cover" />
              <span className="absolute bottom-[25px] left-[25px] font-display font-extrabold text-[33px] md:text-[42px] leading-[.82] text-white">
                ENERGIA EM CADA<br />
                DETALHE
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 grid-rows-1 md:grid-rows-2 gap-[15px] overflow-hidden">
              <img src="/reception.jpeg" alt="Recepção de uma unidade T4 Fitness" className="w-full h-full object-cover" />
              <img src="/locker-room.jpeg" alt="Vestiário moderno da T4 Fitness" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-[80px] md:py-[110px]" id="convenios">
          <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-[45px] md:gap-[70px] items-center">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[.14em] text-white mb-[18px]">TREINE COM LIBERDADE</p>
              <h2 className="text-ink">
                Seu benefício<br />
                também treina <em className="text-white">aqui.</em>
              </h2>
              <p className="max-w-[375px] text-[16px] leading-[1.65] my-7 text-[#1a1a1c]">
                A T4 aceita os principais benefícios corporativos para tornar o seu treino ainda mais acessível.
              </p>
              <a href="#unidades" className="btn btn-white">
                Escolha sua unidade <FontAwesomeIcon icon={faArrowRight} className="text-[14px] rotate-45" />
              </a>
            </div>
            <div className="relative overflow-hidden">
              <img src="/wellhub-totalpass.webp" alt="Wellhub e TotalPass aceitos na T4 Fitness" className="w-full h-auto block" />
              <div className="absolute inset-0 bg-black/25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-[14px] md:text-[17px] font-extrabold uppercase tracking-[.2em]">ACEITAMOS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream py-[80px] md:py-[125px]" id="contato">
          <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-[42px] md:gap-[100px] items-start">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[.14em] text-orange-500 mb-[18px]">PRIMEIRO PASSO</p>
              <h2>
                Vem pra <em>T4.</em>
              </h2>
              <p className="max-w-[400px] leading-[1.7] text-[16px] text-ink mt-6">
                Entre no Grupo VIP e fique por dentro das ofertas de inauguração, condições especiais e novidades da sua unidade.
              </p>
              <div className="mt-8 flex flex-col gap-2">
                <a href="https://chat.whatsapp.com/JQaxKZssrRm3oUhNLvBogj" target="_blank" rel="noreferrer" className="text-orange-600 hover:text-orange-500 transition-colors font-semibold text-[15px] no-underline inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-[18px]" /> Grupo VIP Antônio Bezerra
                </a>
                <a href="https://chat.whatsapp.com/J1kUHS184lcCOCH33YoHdA" target="_blank" rel="noreferrer" className="text-orange-600 hover:text-orange-500 transition-colors font-semibold text-[15px] no-underline inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-[18px]" /> Grupo VIP Bela Vista
                </a>
                <a href="tel:+5585987453332" className="text-orange-600 hover:text-orange-500 transition-colors font-semibold text-[15px] no-underline inline-flex items-center gap-2 mt-1">
                  (85) 98745-3332
                </a>
              </div>
            </div>
            <form
              className="p-8 bg-white grid gap-[17px] shadow-form"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const text = `Olá! Sou ${data.get('name')} e quero entrar no Grupo VIP da unidade ${data.get('unit')}.`;
                window.open(`https://wa.me/5585987453332?text=${encodeURIComponent(text)}`, '_blank');
              }}
            >
              <label className="text-2xs font-extrabold tracking-[.08em] uppercase grid gap-2">
                Seu nome
                <input
                  name="name"
                  required
                  placeholder="Como podemos te chamar?"
                  className="text-[15px] font-sans border-0 border-b border-[#d5d2cc] py-2.5 px-0 outline-0 bg-transparent focus:border-orange-500 transition-colors"
                />
              </label>
              <label className="text-2xs font-extrabold tracking-[.08em] uppercase grid gap-2">
                Unidade de interesse
                <select
                  name="unit"
                  required
                  className="text-[15px] font-sans border-0 border-b border-[#d5d2cc] py-2.5 px-0 outline-0 bg-transparent focus:border-orange-500 transition-colors"
                >
                  <option value="">Escolha uma unidade</option>
                  {units.map((unit) => (
                    <option key={unit.id}>{unit.name}</option>
                  ))}
                </select>
              </label>
              <button type="submit" className="btn btn-orange">
                Quero entrar no VIP <FontAwesomeIcon icon={faArrowRight} className="text-[14px] -rotate-45" />
              </button>
              <small className="text-3xs leading-[1.5] text-[#777]">
                Ao enviar, você será direcionado ao WhatsApp da T4 para continuar o atendimento.
              </small>
            </form>
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
