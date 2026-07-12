# 🚀 T4 Fitness — Quick Start

## Repositório

**GitHub**: https://github.com/conddiz/t4fitness

```bash
# Clone localmente
git clone https://github.com/conddiz/t4fitness.git
cd t4fitness

# Instalar dependências
pnpm install

# Rodar dev server
pnpm dev
# Abre em http://localhost:3000
```

## Estrutura

```
src/
├── app/               # Next.js App Router
│   ├── layout.tsx     # HTML, metadados, fontes
│   └── page.tsx       # Página inicial
├── components/        # 10 componentes React
└── styles/           # Tailwind CSS
```

## Desenvolvimento

```bash
# Dev (hot reload com Turbopack)
pnpm dev

# Lint
pnpm lint:fix

# Type check
pnpm typecheck

# Build
pnpm build
pnpm start
```

## Deploy (Cloudflare Pages)

### Automático (via GitHub)

1. Cada `git push origin main` dispara build
2. Cloudflare Pages constrói e deploya automaticamente
3. URL: `https://t4fitness.com.br` (após DNS propagar)

### Manual (via CLI)

```bash
# Sincronizar credenciais
cd C:\Projects\.global-vault
.\Sync-DeployEnv.ps1 -Project C:\Projects\t4fitness -Profiles conddiz/cloudflare

# Deploy
cd C:\Projects\t4fitness
pnpm build
pnpm pages:deploy
```

## Customizar

### Cores (Tailwind)

```typescript
// tailwind.config.ts
colors: {
  orange: { 500: "#ff6a00" },  // Primária
  ink: "#0b0b0c",              // Texto
  cream: "#f3f0ea",            // Background claro
}
```

### Unidades (7 academias)

```typescript
// src/app/page.tsx - Array UNITS
const UNITS = [
  { id: 1, name: "Guadalajara", address: "Rua Araré, 641", ... },
  // ...
]
```

### Imagens

```
public/
├── logo-horizontal.jpeg
├── unidade-exterior.jpeg
├── cardio-01.jpeg
├── cardio-02.jpeg
├── reception.jpeg
├── locker-room.jpeg
└── wellhub-totalpass.webp
```

## Performance

- **Lighthouse**: 90+ target
- **Bundle**: ~50KB gzipped
- **Time to Interactive**: <2s
- **Lighthouse check**: https://pagespeed.web.dev

## Troubleshooting

| Problema | Solução |
|----------|---------|
| Build falha | `pnpm clean && pnpm install && pnpm build` |
| Tipos errados | `pnpm typecheck` |
| Lint errors | `pnpm lint:fix` |
| Imagens 404 | Verificar `public/` folder |

## Links

- **README**: Documentação completa
- **CLAUDE.md**: Guia de desenvolvimento
- **DEPLOYMENT.md**: Setup Cloudflare Pages
- **Portal (referência)**: https://github.com/conddiz/portal

---

**Pronto para produção!** 🎉

Após DNS propagar (t4fitness.com.br), o site estará live em https://t4fitness.com.br
