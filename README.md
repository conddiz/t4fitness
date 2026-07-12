# T4 Fitness | Website

Website moderno para a rede de academias T4 Fitness em Fortaleza.

## Sobre

T4 Fitness é uma rede de 7 academias em Fortaleza oferecendo musculação, cardio, aulas de grupo e lutas. O site apresenta:

- **7 unidades**: Todas as endereços com busca interativa
- **Modalidades variadas**: Musculação, Funcional, Muay Thai, FitDance, Jiu-Jítsu, Forró, Karatê
- **Benefícios corporativos**: Wellhub (Gympass) e Totalpass aceitos
- **CTA VIP**: Formulário de cadastro para grupo de interesse

### Unidades

1. Guadalajara - Rua Araré, 641
2. Potira - Rua Padre Alfredo Nesi, 1322
3. Arianópolis - Rua Danilo Correia, 777
4. Parque Albano - Rua Gonçalves Dias, 1988
5. Granja Lisboa - Rua Xavier da Silveira, 3949
6. Bela Vista - Rua Espiriro Santo, 614
7. Antônio Bezerra - Rua Martins Neto, 810

## Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Deploy**: Cloudflare Pages
- **Domain**: t4fitness.com.br (Conddiz Cloudflare Account)
- **DNS**: Managed via Conddiz account

## Estrutura do Projeto

```
.
├── index.html           # Página principal
├── styles.css          # Estilos (minificado)
├── script.js           # Interações e lógica
├── assets/             # Imagens e mídia
│   ├── logo-horizontal.jpeg
│   ├── unidade-exterior.jpeg
│   ├── cardio-*.jpeg
│   ├── reception.jpeg
│   ├── locker-room.jpeg
│   └── wellhub-totalpass.webp
├── docs/img/           # Documentação visual
├── package.json        # Dependências do projeto
├── wrangler.toml       # Configuração Cloudflare Pages
└── .env.deploy         # Credenciais (gitignored)
```

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar dev server local
npm run dev

# Build (não necessário - site estático)
npm run build
```

## Deploy no Cloudflare Pages

### Opção 1: Via Wrangler CLI

```bash
# Login
wrangler login

# Deploy
wrangler pages deploy .
```

### Opção 2: Via GitHub (Recomendado)

1. Crie o repositório na organização Conddiz no GitHub
2. Conecte o repositório ao Cloudflare Pages
3. Configure a branch de produção (main)
4. Cada push para main fará deploy automático

### Configuração de Ambiente

As credenciais Cloudflare são injetadas via `.env.deploy` (sincronizado do cofre global):

```bash
cd C:\Projects\.global-vault
.\Sync-DeployEnv.ps1 -Project C:\Projects\t4fitness -Profiles conddiz/cloudflare
```

## Recursos Implementados

- [x] Design responsivo (Mobile-first)
- [x] Hero section com CTA principal
- [x] Grid de 7 unidades com busca interativa
- [x] Seção de modalidades
- [x] Galeria de imagens
- [x] Badges de parceiros (Wellhub + Totalpass)
- [x] Formulário VIP com integração Instagram
- [x] Menu mobile
- [x] Performance otimizado
- [x] Acessibilidade (ARIA labels)

## Customização

### Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
  --orange: #ff6a00;      /* Cor primária */
  --orange2: #ff8a00;     /* Hover */
  --ink: #0b0b0c;         /* Texto escuro */
  --muted: #6e6e72;       /* Texto secundário */
  --cream: #f3f0ea;       /* Background claro */
  --line: #d9d5cd;        /* Bordas */
}
```

### Conteúdo

Edite diretamente no `index.html`:

- Textos: Procure por tags de conteúdo (h1, p, etc)
- Imagens: Atualize paths em `src`
- Links: URLs de redes sociais em footer e forms

## Performance

- **Imagens**: Otimizadas para web (JPEG/WebP)
- **CSS**: Minificado (inline no HTML)
- **JavaScript**: Vanilla, sem dependências
- **Lighthouse**: Target 90+ em todas as métricas

## Segurança

- HTTPS via Cloudflare
- Headers de segurança configurados
- Sem tracking ou analytics invasivos
- Formulário redireciona para Instagram (não coleta dados localmente)

## Contato

- Instagram: [@t4fitness_](https://www.instagram.com/t4fitness_/)
- Email: [configure em .env.deploy]

## License

© 2026 T4 Fitness. Todos os direitos reservados.
