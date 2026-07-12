'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [unitSearch, setUnitSearch] = useState('');
  const [unitCount, setUnitCount] = useState(7);

  useEffect(() => {
    const normalize = (value: string) =>
      value
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase();

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
      <div className="flex items-center justify-center gap-3 bg-black px-6 py-4 text-sm text-cream">
        <span>7 unidades em Fortaleza</span>
        <span className="h-1 w-1 rounded-full bg-orange-500"></span>
        <span>Wellhub e TotalPass aceitos</span>
      </div>

      <header className="sticky top-0 z-50 flex items-center justify-between gap-6 bg-white px-6 py-5" id="header">
        <a className="flex-shrink-0" href="#inicio" aria-label="T4 Fitness - início">
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          <a href="#unidades" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-ink no-underline transition-colors hover:text-orange-500">
            Unidades
          </a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-ink no-underline transition-colors hover:text-orange-500">
            A experiência
          </a>
          <a href="#modalidades" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-ink no-underline transition-colors hover:text-orange-500">
            Modalidades
          </a>
          <a href="#convenios" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-ink no-underline transition-colors hover:text-orange-500">
            Convênios
          </a>
          <a href="/equipamentos" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-ink no-underline transition-colors hover:text-orange-500">
            Equipamentos
          </a>
        </nav>
        <a className="btn btn-small btn-orange hidden md:inline-flex" href="#unidades">
          Matricule-se <span>↗</span>
        </a>
        <button
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block h-0.5 w-6 bg-ink transition-all"></span>
          <span className="block h-0.5 w-6 bg-ink transition-all"></span>
        </button>
      </header>

      <main>
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black" id="inicio">
          <div className="absolute inset-0 z-0">
            <img src="/unidade-exterior.jpeg" alt="Fachada de uma unidade T4 Fitness" className="h-full w-full object-cover opacity-40" />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
          <div className="grid-overlay"></div>
          <div className="absolute top-1/3 right-1/4 -z-10 h-96 w-96 rounded-full bg-orange-500 opacity-20 blur-3xl"></div>

          <div className="wrap relative z-30 flex flex-col items-start justify-center py-24 text-white md:py-32">
            <p className="eyebrow">
              <span></span> T4 FITNESS · FORTALEZA
            </p>
            <h1 className="mb-8 max-w-2xl text-white">
              Mais energia para<br />
              <em>a sua evolução.</em>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-cream md:text-lg">
              Treine onde o seu ritmo acontece. Estrutura completa, modalidades para
              todos os estilos e uma comunidade que puxa você pra cima.
            </p>
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <a className="btn btn-orange" href="#unidades">
                Encontre sua unidade <span>↘</span>
              </a>
              <a className="text-link" href="#experiencia">
                Conheça a T4 <span>→</span>
              </a>
            </div>
          </div>

          <div className="wrap relative z-30 mb-16 grid grid-cols-3 gap-6 md:gap-12">
            <div className="flex flex-col">
              <strong className="text-4xl font-bold text-orange-500 md:text-5xl">7</strong>
              <span className="text-sm text-cream md:text-base">unidades</span>
            </div>
            <div className="flex flex-col">
              <strong className="text-4xl font-bold text-orange-500 md:text-5xl">+</strong>
              <span className="text-sm text-cream md:text-base">energia todo dia</span>
            </div>
            <div className="flex flex-col">
              <strong className="text-4xl font-bold text-orange-500 md:text-5xl">VIP</strong>
              <span className="text-sm text-cream md:text-base">ofertas exclusivas</span>
            </div>
          </div>

          <a className="relative z-30 flex flex-col items-center gap-3 text-cream no-underline transition-all hover:text-orange-500" href="#unidades">
            <span className="text-sm font-semibold">Role para descobrir</span>
            <svg className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </section>

        <section className="overflow-hidden bg-orange-500 py-8 md:py-12" aria-label="Destaques">
          <div className="marquee-track text-white">
            <span>SEU CORPO · SEU RITMO · SUA T4</span>
            <b className="mx-8">✦</b>
            <span>SEU CORPO · SEU RITMO · SUA T4</span>
            <b className="mx-8">✦</b>
            <span>SEU CORPO · SEU RITMO · SUA T4</span>
            <b className="mx-8">✦</b>
          </div>
        </section>

        <section className="wrap py-16 md:py-24" id="experiencia">
          <div className="section-kicker">A T4 É MOVIMENTO</div>
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2>
                Um treino que<br />
                cabe na <em>sua vida.</em>
              </h2>
            </div>
            <div>
              <p className="mb-4 text-base leading-relaxed text-ink md:text-lg">
                Na T4, você encontra mais do que equipamentos. Encontra espaço para
                ganhar força, se divertir, dançar, lutar e cuidar de você.
              </p>
              <a className="text-link dark" href="#modalidades">
                Veja as modalidades <span>→</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            <article>
              <div className="mb-4 text-5xl font-bold text-orange-500 md:text-6xl">01</div>
              <h3 className="mb-3 text-2xl font-bold uppercase text-ink">Estrutura que inspira</h3>
              <p className="text-sm leading-relaxed text-muted md:text-base">Ambientes modernos, equipamentos e um clima que dá vontade de voltar.</p>
            </article>
            <article>
              <div className="mb-4 text-5xl font-bold text-orange-500 md:text-6xl">02</div>
              <h3 className="mb-3 text-2xl font-bold uppercase text-ink">Do seu jeito</h3>
              <p className="text-sm leading-relaxed text-muted md:text-base">Musculação, cardio e aulas para você variar a rotina sem perder o foco.</p>
            </article>
            <article>
              <div className="mb-4 text-5xl font-bold text-orange-500 md:text-6xl">03</div>
              <h3 className="mb-3 text-2xl font-bold uppercase text-ink">Perto de você</h3>
              <p className="text-sm leading-relaxed text-muted md:text-base">Sete endereços para o seu treino estar sempre no caminho.</p>
            </article>
          </div>
        </section>

        <section className="relative h-96 w-full overflow-hidden md:h-screen">
          <img src="/cardio-01.jpeg" alt="Área de cardio da T4 Fitness" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
            <span className="text-2xs font-bold uppercase tracking-widest text-cream">VAI NO</span>
            <strong className="text-5xl font-black uppercase text-orange-500 md:text-7xl">SEU RITMO</strong>
            <span className="text-2xs font-bold uppercase tracking-widest text-cream">VAI MAIS LONGE</span>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-24" id="unidades">
          <div className="wrap">
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <p className="section-kicker light">SUA T4 MAIS PRÓXIMA</p>
                <h2>
                  Escolha onde<br />
                  você vai <em>evoluir.</em>
                </h2>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-base text-muted md:text-lg">São 7 unidades esperando por você em Fortaleza.</p>
              </div>
            </div>

            <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
              <label className="search w-full md:w-auto">
                <span className="mr-3">⌕</span>
                <input
                  id="unitSearch"
                  type="search"
                  placeholder="Busque por bairro ou unidade"
                  value={unitSearch}
                  onChange={(e) => setUnitSearch(e.target.value)}
                  className="border-0 bg-white px-4 py-2 text-ink outline-none placeholder:text-muted"
                />
              </label>
              <span id="unitCount" className="text-sm font-semibold text-muted">{unitCount} unidade{unitCount !== 1 ? 's' : ''}</span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" id="unitsGrid">
              <article className="unit-card rounded-lg border border-gray-300 bg-white p-6 transition-all hover:shadow-lg" data-search="01 guadalajara rua arare">
                <span className="mb-4 inline-block text-3xl font-bold text-orange-500">01</span>
                <h3 className="mb-3 text-lg font-bold uppercase text-ink">Guadalajara</h3>
                <p className="mb-6 text-sm text-muted">
                  Rua Araré, 641<br />
                  Guadalajara · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Guadalajara" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 no-underline transition-colors hover:text-orange-400">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card rounded-lg border border-gray-300 bg-white p-6 transition-all hover:shadow-lg" data-search="02 potira rua padre alfredo nesi">
                <span className="mb-4 inline-block text-3xl font-bold text-orange-500">02</span>
                <h3 className="mb-3 text-lg font-bold uppercase text-ink">Potira</h3>
                <p className="mb-6 text-sm text-muted">
                  Rua Padre Alfredo Nesi, 1322<br />
                  Potira · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Potira" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 no-underline transition-colors hover:text-orange-400">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card rounded-lg border border-gray-300 bg-white p-6 transition-all hover:shadow-lg" data-search="03 arianopolis rua danilo correia">
                <span className="mb-4 inline-block text-3xl font-bold text-orange-500">03</span>
                <h3 className="mb-3 text-lg font-bold uppercase text-ink">Arianópolis</h3>
                <p className="mb-6 text-sm text-muted">
                  Rua Danilo Correia, 777<br />
                  Arianópolis · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Arianópolis" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 no-underline transition-colors hover:text-orange-400">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card rounded-lg border border-gray-300 bg-white p-6 transition-all hover:shadow-lg" data-search="04 parque albano rua goncalves dias">
                <span className="mb-4 inline-block text-3xl font-bold text-orange-500">04</span>
                <h3 className="mb-3 text-lg font-bold uppercase text-ink">Parque Albano</h3>
                <p className="mb-6 text-sm text-muted">
                  Rua Gonçalves Dias, 1988<br />
                  Parque Albano · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Parque Albano" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 no-underline transition-colors hover:text-orange-400">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card rounded-lg border border-gray-300 bg-white p-6 transition-all hover:shadow-lg" data-search="05 granja lisboa rua xavier da silveira">
                <span className="mb-4 inline-block text-3xl font-bold text-orange-500">05</span>
                <h3 className="mb-3 text-lg font-bold uppercase text-ink">Granja Lisboa</h3>
                <p className="mb-6 text-sm text-muted">
                  Rua Xavier da Silveira, 3949<br />
                  Granja Lisboa · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Granja Lisboa" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 no-underline transition-colors hover:text-orange-400">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card rounded-lg border border-gray-300 bg-white p-6 transition-all hover:shadow-lg" data-search="06 bela vista rua espiriro santo espirito">
                <span className="mb-4 inline-block text-3xl font-bold text-orange-500">06</span>
                <h3 className="mb-3 text-lg font-bold uppercase text-ink">Bela Vista</h3>
                <p className="mb-6 text-sm text-muted">
                  Rua Espiriro Santo, 614<br />
                  Bela Vista · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Bela Vista" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 no-underline transition-colors hover:text-orange-400">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card rounded-lg border border-2 border-orange-500 bg-black p-6 transition-all hover:shadow-lg" data-search="07 antonio bezerra rua martins neto">
                <span className="mb-4 inline-block text-3xl font-bold text-orange-500">07</span>
                <h3 className="mb-3 text-lg font-bold uppercase text-cream">Antônio Bezerra</h3>
                <p className="mb-6 text-sm text-gray-400">
                  Rua Martins Neto, 810<br />
                  Antônio Bezerra · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Antônio Bezerra" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 no-underline transition-colors hover:text-orange-400">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="wrap py-16 md:py-24" id="modalidades">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="section-kicker">TODA ENERGIA CONTA</p>
              <h2>
                Encontre o seu<br />
                <em>movimento.</em>
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-base text-muted md:text-lg">Da intensidade do treino à leveza da dança. Escolha uma modalidade ou misture todas.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <button className="rounded-lg border-2 border-gray-300 bg-white px-6 py-4 font-bold uppercase text-ink transition-all hover:border-orange-500 hover:text-orange-500">Musculação <span className="ml-2 text-orange-500">01</span></button>
            <button className="rounded-lg border-2 border-gray-300 bg-white px-6 py-4 font-bold uppercase text-ink transition-all hover:border-orange-500 hover:text-orange-500">Funcional <span className="ml-2 text-orange-500">02</span></button>
            <button className="rounded-lg border-2 border-gray-300 bg-white px-6 py-4 font-bold uppercase text-ink transition-all hover:border-orange-500 hover:text-orange-500">Muay Thai <span className="ml-2 text-orange-500">03</span></button>
            <button className="rounded-lg border-2 border-gray-300 bg-white px-6 py-4 font-bold uppercase text-ink transition-all hover:border-orange-500 hover:text-orange-500">FitDance <span className="ml-2 text-orange-500">04</span></button>
            <button className="rounded-lg border-2 border-gray-300 bg-white px-6 py-4 font-bold uppercase text-ink transition-all hover:border-orange-500 hover:text-orange-500">Jiu-Jítsu <span className="ml-2 text-orange-500">05</span></button>
            <button className="rounded-lg border-2 border-gray-300 bg-white px-6 py-4 font-bold uppercase text-ink transition-all hover:border-orange-500 hover:text-orange-500">Forró <span className="ml-2 text-orange-500">06</span></button>
            <button className="rounded-lg border-2 border-gray-300 bg-white px-6 py-4 font-bold uppercase text-ink transition-all hover:border-orange-500 hover:text-orange-500">Karatê <span className="ml-2 text-orange-500">07</span></button>
          </div>
        </section>

        <section className="wrap grid grid-cols-1 gap-6 py-16 md:grid-cols-3 md:gap-8 md:py-24">
          <div className="relative col-span-1 h-96 overflow-hidden rounded-lg md:col-span-2 md:h-auto md:min-h-96">
            <img src="/cardio-02.jpeg" alt="Esteiras e equipamentos da T4 Fitness" className="h-full w-full object-cover" />
            <span className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/60 to-transparent p-6 text-2xl font-bold uppercase text-cream md:text-3xl">
              ENERGIA EM CADA<br />
              DETALHE
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative h-44 overflow-hidden rounded-lg md:h-auto md:min-h-48">
              <img src="/reception.jpeg" alt="Recepção de uma unidade T4 Fitness" className="h-full w-full object-cover" />
            </div>
            <div className="relative h-44 overflow-hidden rounded-lg md:h-auto md:min-h-48">
              <img src="/locker-room.jpeg" alt="Vestiário moderno da T4 Fitness" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-black py-16 md:py-24" id="convenios">
          <div className="wrap grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="section-kicker light">TREINE COM LIBERDADE</p>
              <h2 className="mb-6 text-white">
                Seu benefício<br />
                também treina <em>aqui.</em>
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-400 md:text-lg">
                A T4 aceita os principais benefícios corporativos para tornar o seu
                treino ainda mais acessível.
              </p>
              <a href="#unidades" className="btn btn-white">
                Escolha sua unidade <span>↘</span>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <img src="/wellhub-totalpass.webp" alt="Wellhub e Totalpass - Parceiros T4 Fitness" className="w-full max-w-sm" />
            </div>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-24" id="contato">
          <div className="wrap grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="section-kicker">PRIMEIRO PASSO</p>
              <h2>
                Vem pra <em>T4.</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink md:text-lg">
                Entre no Grupo VIP e fique por dentro das ofertas de inauguração,
                condições especiais e novidades da sua unidade.
              </p>
            </div>
            <form
              id="vipForm"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                window.open('https://www.instagram.com/t4fitness_/', '_blank', 'noopener,noreferrer');
                e.currentTarget.reset();
                const small = e.currentTarget.querySelector('small');
                if (small) {
                  small.textContent = `Perfeito, ${name}! Abrimos o Instagram da T4 para você continuar o atendimento.`;
                }
              }}
              className="flex flex-col gap-6"
            >
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase text-ink">Seu nome</span>
                <input name="name" required placeholder="Como podemos te chamar?" className="rounded border border-gray-300 bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-orange-500 focus:outline-none" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase text-ink">Unidade de interesse</span>
                <select id="unitSelect" name="unit" required className="rounded border border-gray-300 bg-white px-4 py-3 text-ink focus:border-orange-500 focus:outline-none">
                  <option value="">Escolha uma unidade</option>
                  <option>Guadalajara</option>
                  <option>Potira</option>
                  <option>Arianópolis</option>
                  <option>Parque Albano</option>
                  <option>Granja Lisboa</option>
                  <option>Bela Vista</option>
                  <option>Antônio Bezerra</option>
                </select>
              </label>
              <button className="btn btn-orange" type="submit">
                Quero entrar no VIP <span>↗</span>
              </button>
              <small className="text-xs text-muted">
                Ao enviar, você será direcionado ao Instagram da T4 para continuar o
                atendimento.
              </small>
            </form>
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
