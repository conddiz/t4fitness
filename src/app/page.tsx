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
          <a href="/equipamentos" onClick={() => setMenuOpen(false)}>
            Equipamentos
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
          <div className="footer-social">
            <a href="https://www.instagram.com/t4fitness_/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/arenafits/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://api.whatsapp.com/message/7DVJU2H7CTALF1" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006a6.506 6.506 0 00-6.487 6.522 6.516 6.516 0 001.911 4.613l.996 1.605.793-2.584a6.511 6.511 0 119.237-8.156"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 T4 Fitness. Todos os direitos reservados.</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
    </>
  );
}
