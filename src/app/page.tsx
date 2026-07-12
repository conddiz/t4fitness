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
      <div className="topbar">
        <span>7 unidades em Fortaleza</span>
        <span className="topbar-dot"></span>
        <span>Wellhub e TotalPass aceitos</span>
      </div>

      <header className="header" id="header">
        <a className="brand" href="#inicio" aria-label="T4 Fitness - início">
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" />
        </a>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#unidades" onClick={() => setMenuOpen(false)}>
            Unidades
          </a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>
            A experiência
          </a>
          <a href="#modalidades" onClick={() => setMenuOpen(false)}>
            Modalidades
          </a>
          <a href="#convenios" onClick={() => setMenuOpen(false)}>
            Convênios
          </a>
        </nav>
        <a className="btn btn-small btn-orange" href="#unidades">
          Matricule-se <span>↗</span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-visual">
            <img src="/unidade-exterior.jpeg" alt="Fachada de uma unidade T4 Fitness" />
          </div>
          <div className="hero-shade"></div>
          <div className="grid-overlay"></div>
          <div className="hero-orb"></div>
          <div className="hero-content wrap">
            <p className="eyebrow">
              <span></span> T4 FITNESS · FORTALEZA
            </p>
            <h1>
              Mais energia para<br />
              <em>a sua evolução.</em>
            </h1>
            <p className="hero-copy">
              Treine onde o seu ritmo acontece. Estrutura completa, modalidades para
              todos os estilos e uma comunidade que puxa você pra cima.
            </p>
            <div className="hero-actions">
              <a className="btn btn-orange" href="#unidades">
                Encontre sua unidade <span>↘</span>
              </a>
              <a className="text-link" href="#experiencia">
                Conheça a T4 <span>→</span>
              </a>
            </div>
          </div>
          <div className="hero-stats">
            <div>
              <strong>7</strong>
              <span>unidades</span>
            </div>
            <div>
              <strong>+</strong>
              <span>energia todo dia</span>
            </div>
            <div>
              <strong>VIP</strong>
              <span>ofertas exclusivas</span>
            </div>
          </div>
          <a className="scroll-cue" href="#unidades">
            Role para descobrir <i></i>
          </a>
        </section>

        <section className="marquee" aria-label="Destaques">
          <div className="marquee-track">
            <span>SEU CORPO · SEU RITMO · SUA T4</span>
            <b>✦</b>
            <span>SEU CORPO · SEU RITMO · SUA T4</span>
            <b>✦</b>
            <span>SEU CORPO · SEU RITMO · SUA T4</span>
            <b>✦</b>
          </div>
        </section>

        <section className="intro wrap" id="experiencia">
          <div className="section-kicker">A T4 É MOVIMENTO</div>
          <div className="intro-grid">
            <h2>
              Um treino que<br />
              cabe na <em>sua vida.</em>
            </h2>
            <div>
              <p>
                Na T4, você encontra mais do que equipamentos. Encontra espaço para
                ganhar força, se divertir, dançar, lutar e cuidar de você.
              </p>
              <a className="text-link dark" href="#modalidades">
                Veja as modalidades <span>→</span>
              </a>
            </div>
          </div>
          <div className="feature-grid">
            <article>
              <div className="feature-num">01</div>
              <h3>Estrutura que inspira</h3>
              <p>Ambientes modernos, equipamentos e um clima que dá vontade de voltar.</p>
            </article>
            <article>
              <div className="feature-num">02</div>
              <h3>Do seu jeito</h3>
              <p>Musculação, cardio e aulas para você variar a rotina sem perder o foco.</p>
            </article>
            <article>
              <div className="feature-num">03</div>
              <h3>Perto de você</h3>
              <p>Sete endereços para o seu treino estar sempre no caminho.</p>
            </article>
          </div>
        </section>

        <section className="media-break">
          <img src="/cardio-01.jpeg" alt="Área de cardio da T4 Fitness" />
          <div className="media-caption">
            <span>VAI NO</span>
            <strong>SEU RITMO</strong>
            <span>VAI MAIS LONGE</span>
          </div>
        </section>

        <section className="units-section" id="unidades">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="section-kicker light">SUA T4 MAIS PRÓXIMA</p>
                <h2>
                  Escolha onde<br />
                  você vai <em>evoluir.</em>
                </h2>
              </div>
              <p>São 7 unidades esperando por você em Fortaleza.</p>
            </div>
            <div className="unit-toolbar">
              <label className="search">
                <span>⌕</span>
                <input
                  id="unitSearch"
                  type="search"
                  placeholder="Busque por bairro ou unidade"
                  value={unitSearch}
                  onChange={(e) => setUnitSearch(e.target.value)}
                />
              </label>
              <span id="unitCount">{unitCount} unidade{unitCount !== 1 ? 's' : ''}</span>
            </div>
            <div className="units-grid" id="unitsGrid">
              <article className="unit-card" data-search="01 guadalajara rua arare">
                <span className="unit-index">01</span>
                <h3>Guadalajara</h3>
                <p>
                  Rua Araré, 641<br />
                  Guadalajara · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Guadalajara">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card" data-search="02 potira rua padre alfredo nesi">
                <span className="unit-index">02</span>
                <h3>Potira</h3>
                <p>
                  Rua Padre Alfredo Nesi, 1322<br />
                  Potira · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Potira">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card" data-search="03 arianopolis rua danilo correia">
                <span className="unit-index">03</span>
                <h3>Arianópolis</h3>
                <p>
                  Rua Danilo Correia, 777<br />
                  Arianópolis · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Arianópolis">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card" data-search="04 parque albano rua goncalves dias">
                <span className="unit-index">04</span>
                <h3>Parque Albano</h3>
                <p>
                  Rua Gonçalves Dias, 1988<br />
                  Parque Albano · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Parque Albano">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card" data-search="05 granja lisboa rua xavier da silveira">
                <span className="unit-index">05</span>
                <h3>Granja Lisboa</h3>
                <p>
                  Rua Xavier da Silveira, 3949<br />
                  Granja Lisboa · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Granja Lisboa">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card" data-search="06 bela vista rua espiriro santo espirito">
                <span className="unit-index">06</span>
                <h3>Bela Vista</h3>
                <p>
                  Rua Espiriro Santo, 614<br />
                  Bela Vista · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Bela Vista">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
              <article className="unit-card unit-card-cta" data-search="07 antonio bezerra rua martins neto">
                <span className="unit-index">07</span>
                <h3>Antônio Bezerra</h3>
                <p>
                  Rua Martins Neto, 810<br />
                  Antônio Bezerra · Fortaleza, CE
                </p>
                <a href="#contato" data-unit="Antônio Bezerra">
                  Quero treinar aqui <span>↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="modalities wrap" id="modalidades">
          <div className="section-heading">
            <div>
              <p className="section-kicker">TODA ENERGIA CONTA</p>
              <h2>
                Encontre o seu<br />
                <em>movimento.</em>
              </h2>
            </div>
            <p>Da intensidade do treino à leveza da dança. Escolha uma modalidade ou misture todas.</p>
          </div>
          <div className="modality-list">
            <button>Musculação <span>01</span></button>
            <button>Funcional <span>02</span></button>
            <button>Muay Thai <span>03</span></button>
            <button>FitDance <span>04</span></button>
            <button>Jiu-Jítsu <span>05</span></button>
            <button>Forró <span>06</span></button>
            <button>Karatê <span>07</span></button>
          </div>
        </section>

        <section className="gallery wrap">
          <div className="gallery-primary">
            <img src="/cardio-02.jpeg" alt="Esteiras e equipamentos da T4 Fitness" />
            <span>
              ENERGIA EM CADA<br />
              DETALHE
            </span>
          </div>
          <div className="gallery-side">
            <img src="/reception.jpeg" alt="Recepção de uma unidade T4 Fitness" />
            <img src="/locker-room.jpeg" alt="Vestiário moderno da T4 Fitness" />
          </div>
        </section>

        <section className="partners" id="convenios">
          <div className="wrap partner-grid">
            <div>
              <p className="section-kicker light">TREINE COM LIBERDADE</p>
              <h2>
                Seu benefício<br />
                também treina <em>aqui.</em>
              </h2>
              <p className="partner-copy">
                A T4 aceita os principais benefícios corporativos para tornar o seu
                treino ainda mais acessível.
              </p>
              <a href="#unidades" className="btn btn-white">
                Escolha sua unidade <span>↘</span>
              </a>
            </div>
            <div className="partner-badges">
              <img src="/wellhub-totalpass.webp" alt="Wellhub e Totalpass - Parceiros T4 Fitness" />
            </div>
          </div>
        </section>

        <section className="vip" id="contato">
          <div className="vip-inner wrap">
            <div>
              <p className="section-kicker">PRIMEIRO PASSO</p>
              <h2>
                Vem pra <em>T4.</em>
              </h2>
              <p>
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
            >
              <label>
                Seu nome
                <input name="name" required placeholder="Como podemos te chamar?" />
              </label>
              <label>
                Unidade de interesse
                <select id="unitSelect" name="unit" required>
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
              <small>
                Ao enviar, você será direcionado ao Instagram da T4 para continuar o
                atendimento.
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer-grid">
          <img src="/logo-horizontal.jpeg" alt="T4 Fitness" />
          <p>Mais energia para a sua evolução.</p>
          <a href="https://www.instagram.com/t4fitness_/" target="_blank" rel="noreferrer">
            Instagram @t4fitness_ ↗
          </a>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 T4 Fitness. Todos os direitos reservados.</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
    </>
  );
}
