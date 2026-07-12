# T4 Fitness | Website

Website moderno para a rede de academias T4 Fitness em Fortaleza. Construído com **Next.js + Tailwind + TypeScript**, mesmo stack do [portal Conddiz](https://github.com/conddiz/portal).

## Sobre

T4 Fitness é uma rede de 7 academias em Fortaleza oferecendo musculação, cardio, aulas de grupo e lutas. O site apresenta:

- **7 unidades** com busca interativa
- **Modalidades variadas**: Musculação, Funcional, Muay Thai, FitDance, Jiu-Jítsu, Forró, Karatê
- **Benefícios corporativos**: Wellhub (Gympass) e Totalpass aceitos
- **Formulário VIP**: Cadastro com integração Instagram
- **Design responsivo**: Mobile-first, performance otimizada

## Stack

- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Estilos**: Tailwind CSS 4 + PostCSS
- **Qualidade**: Biome (linting + formatting)
- **Deploy**: Cloudflare Pages + Wrangler
- **Package Manager**: pnpm (v10+)
- **Node.js**: 22+

## Estrutura do Projeto

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout com metadados
│   │   └── page.tsx         # Página inicial
│   ├── components/          # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── UnitsSection.tsx
│   │   ├── Partners.tsx
│   │   └── Footer.tsx
│   └── styles/
│       └── globals.css      # Estilos globais + Tailwind
├── public/                  # Imagens estáticas
├── next.config.ts           # Configuração Next.js
├── tailwind.config.ts       # Configuração Tailwind
├── tsconfig.json            # TypeScript
├── biome.json               # Linting
└── wrangler.toml            # Cloudflare Pages
```

## Quick Start

### Instalação

```bash
pnpm install
```

### Desenvolvimento

```bash
pnpm dev  # http://localhost:3000
```

### Build & Deploy

```bash
pnpm build
pnpm pages:deploy
```

## Deploy no Cloudflare Pages

### Via GitHub (Recomendado)

1. Criar repositório em conddiz:
   ```bash
   gh repo create conddiz/t4fitness --public --source=. --remote=origin --push
   ```

2. Conectar ao Cloudflare Pages
3. Configurar GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`

### Sincronizar Credenciais

```bash
cd C:\Projects\.global-vault
.\Sync-DeployEnv.ps1 -Project C:\Projects\t4fitness -Profiles conddiz/cloudflare
```

## Contato

- **Instagram**: [@t4fitness_](https://www.instagram.com/t4fitness_/)
- **Domínio**: t4fitness.com.br (Conddiz account)

## License

© 2026 T4 Fitness. Todos os direitos reservados.
