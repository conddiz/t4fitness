# T4 Fitness - Guia do Projeto

## Sobre o Projeto

Site institucional para rede de 7 academias T4 Fitness em Fortaleza, com página de venda
de equipamentos para investidores. Stack: Next.js 16 (App Router, static export) + React 19 +
TypeScript + Tailwind CSS 4, hospedado no Cloudflare Pages, domínio gerenciado pela conta Conddiz.

## Stack & Deployment

- **Framework**: Next.js 16 com `output: "export"` (site 100% estático em `out/`)
- **UI**: React 19 + Tailwind CSS 4 (config CSS-first via `@theme` em `src/styles/globals.css` —
  NÃO existe `tailwind.config.ts`; Tailwind v4 não lê config JS)
- **Ícones**: Font Awesome (`@fortawesome/react-fontawesome`) — nunca usar setas unicode
- **Fontes**: DM Sans + Barlow Condensed via `next/font/google` (self-hosted no build)
- **Hospedagem**: Cloudflare Pages (conta conddiz), projeto `t4fitness`
- **Domínio**: t4fitness.com.br (zona Conddiz)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`): pnpm install → build → `wrangler pages deploy out`
- **Credenciais**: sincronizadas de `C:\Projects\.global-vault` via `Sync-DeployEnv.ps1`
- **Node**: >= 22 · **pnpm**: >= 10

## Estrutura

```
src/app/layout.tsx            # Root layout: fonts, metadata/OG, FontAwesome config
src/app/page.tsx              # Homepage (hero, unidades, modalidades, convênios, VIP)
src/app/investidores/page.tsx # Catálogo de 26 equipamentos à venda (B2B)
src/app/icon.svg              # Favicon
src/styles/globals.css        # @theme (tokens da marca) + @layer base/components
public/                       # Imagens (logo, fotos, equipamentos/equipamento-NN.jpeg)
docs/img/equipamentos/        # Fotos originais do cliente (arquivo-fonte)
wrangler.toml                 # Pages config (pages_build_output_dir = "out")
```

## Comandos

```bash
pnpm dev            # dev server (turbopack)
pnpm build          # build estático → out/
pnpm typecheck      # tsc --noEmit
pnpm lint           # biome check src
pnpm pages:deploy   # build + wrangler pages deploy out   (use pnpm run, não `pnpm deploy`)
```

## Deploy Manual

```powershell
cd C:\Projects\.global-vault
.\Sync-DeployEnv.ps1 -Project C:\Projects\t4fitness -Profiles conddiz/cloudflare,conddiz/github
cd C:\Projects\t4fitness
# wrangler lê CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID — mapear a partir do .env.deploy
pnpm install
pnpm pages:deploy
```

## Design — regras

- **Tokens da marca** em `@theme` (globals.css): `orange-500 #ff6a00`, `orange-400 #ff8a00`,
  `ink #0b0b0c`, `muted #6e6e72`, `cream #f3f0ea`, `line #d9d5cd`, `text-2xs 12px`, `text-3xs 11px`
- **Somente classes Tailwind** no JSX — zero `style={{}}`. Gradientes multi-stop complexos vivem
  em `@layer components` (`.hero-fade`, `.grid-overlay`, `.wrap`, `.edge-pad`, `.btn*`, `.text-link*`)
- Referência visual original: `git show e448d10:index.html` / `git show e448d10:styles.css`

## Contatos & Links (fonte da verdade)

- WhatsApp: (85) 98745-3332 → `tel:+5585987453332` / `wa.me/5585987453332`
- Chat WhatsApp: https://api.whatsapp.com/message/7DVJU2H7CTALF1
- VIP Antônio Bezerra: https://chat.whatsapp.com/JQaxKZssrRm3oUhNLvBogj
- VIP Bela Vista: https://chat.whatsapp.com/J1kUHS184lcCOCH33YoHdA
- Instagram: https://www.instagram.com/t4fitness_/
- Facebook: https://www.facebook.com/arenafits/

## Performance Checklist

- [x] Imagens otimizadas (<300KB cada)
- [x] Fontes self-hosted (next/font)
- [x] Favicon + OpenGraph pt_BR
- [ ] Lighthouse 90+ (validar em produção)

## Troubleshooting

**Classe Tailwind não gera CSS** — verifique se o token existe no `@theme` do globals.css
(v4 ignora tailwind.config.ts). **Deploy falha** — confirme `wrangler.toml` com
`pages_build_output_dir = "out"` e variáveis `CLOUDFLARE_*` no ambiente.
**`.next/`/`out/` no git** — são ignorados; nunca commitar build.
