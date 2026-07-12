# T4 Fitness — Guia de Deployment

Repositório: https://github.com/conddiz/t4fitness

## Status

- ✅ Repositório criado em `conddiz/t4fitness`
- ✅ Código pushado (branch `main`)
- ⏳ Cloudflare Pages: **Pendente configuração**
- ⏳ DNS: t4fitness.com.br (em propagação)

## Configurar Cloudflare Pages

### 1. No Dashboard Cloudflare

1. Acesse: https://dash.cloudflare.com → **Pages**
2. Clique em **"Create a project"** → **"Connect to Git"**
3. Autorize GitHub (conddiz org)
4. Selecione repositório: `conddiz/t4fitness`
5. Clique **"Begin setup"**

### 2. Build Configuration

Na tela de Build settings:

| Campo | Valor |
|-------|-------|
| **Framework** | Next.js |
| **Build command** | `pnpm build` |
| **Build output directory** | `.next` |
| **Root directory** | `/` |
| **Environment** | Production |

### 3. Environment Variables

Clique em **"Environment variables"** → **"Add variable"**

Copie de `.env.deploy` ou configure:

```
CF_ACCOUNT_API_TOKEN = [valor de .env.deploy]
CF_ACCOUNT_ID = [valor de .env.deploy]
```

### 4. Deploy

Clique **"Save and Deploy"**

Cloudflare vai:
1. Clonar repositório
2. Rodar `pnpm install`
3. Rodar `pnpm build`
4. Fazer deploy de `.next` para Pages
5. Gerar URL temporária (ex: `t4fitness.pages.dev`)

---

## Conectar Domínio

### 1. No Cloudflare (Zona t4fitness.com.br)

1. Acesse: https://dash.cloudflare.com → **Domains** → **t4fitness.com.br**
2. DNS → Records
3. Adicione ou atualize:

```
Type: CNAME
Name: @
Target: t4fitness.pages.dev
TTL: Auto
Proxy: Proxied (laranja)
```

ou via CLI:

```bash
wrangler pages deployment list --project=t4fitness
# Pegar o URL da deployment mais recente
```

### 2. Em Cloudflare Pages (Project Settings)

1. Acesse Pages → **t4fitness** → **Settings**
2. **Custom domains** → **Add custom domain**
3. Digite: `t4fitness.com.br`
4. Cloudflare vai gerar registros DNS automaticamente
5. Configure redirect de `www.t4fitness.com.br` → `t4fitness.com.br`

---

## GitHub Secrets (Opcional para CI/CD Manual)

Se quiser fazer deploy manual via GitHub Actions:

1. Acesse: https://github.com/conddiz/t4fitness → **Settings** → **Secrets and variables** → **Actions**
2. Clique **"New repository secret"**
3. Adicione:

```
Name: CLOUDFLARE_API_TOKEN
Value: [CF_ACCOUNT_API_TOKEN de .env.deploy]

Name: CLOUDFLARE_ACCOUNT_ID
Value: [CF_ACCOUNT_ID de .env.deploy]
```

---

## Verificar Deploy

### Build em Progresso

1. GitHub: https://github.com/conddiz/t4fitness/actions (vê CI runs)
2. Cloudflare Pages: https://dash.cloudflare.com → Pages → t4fitness (vê deployments)

### URL de Teste

Assim que o build terminar:
- Acesse: `https://t4fitness.pages.dev` (URL temporária)
- Teste responsividade, links, formulário

### Após DNS Propagar

- Acesse: `https://t4fitness.com.br` (URL final)
- Verifique HTTPS (cadeado verde)
- Teste lighthouse: https://pagespeed.web.dev

---

## Troubleshooting

### Build falha no Cloudflare

**Logs**: Pages → t4fitness → **Deployments** → clique no build com erro → **View build log**

**Causas comuns**:
- Node.js version incompatível
  - Solução: Adicionar `NODE_VERSION = 22.10.7` em Environment
- pnpm não encontrado
  - Solução: Usar `pnpm` explicitamente no build command
- Credenciais ausentes
  - Solução: Verificar se `.env.deploy` foi sincronizado

**Comando manual de teste**:
```bash
cd C:\Projects\t4fitness
pnpm install
pnpm build
pnpm pages:dev  # Testa localmente como se fosse Pages
```

### DNS não resolve

- Aguardar propagação (até 48h)
- Verificar: https://dnschecker.org → `t4fitness.com.br`
- Em Cloudflare, ir para **DNS** e confirmar CNAME está correto

### HTTPS não funciona

- Cloudflare Pages gera certificado automático
- Pode levar 1-2 min após DNS propagar
- Se persistir: Pages → Settings → SSL/TLS → Force HTTPS

---

## Monitoramento Pós-Deploy

### Performance

- Lighthouse: https://pagespeed.web.dev/?url=https://t4fitness.com.br
- Target: 90+ em Performance, SEO, Best Practices

### Logs & Erros

- Cloudflare: https://dash.cloudflare.com → t4fitness.com.br → Analytics
- GitHub: https://github.com/conddiz/t4fitness/actions

### Atualizações

1. Edit código localmente
2. `git push origin main`
3. GitHub Actions + Cloudflare redeploy automaticamente
4. ~2-3 min até estar live em produção

---

## Stack de Referência

- Portal Conddiz: https://github.com/conddiz/portal
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Cloudflare Pages: https://developers.cloudflare.com/pages
- Wrangler: https://developers.cloudflare.com/workers/wrangler

---

## Contato

- **T4 Fitness Instagram**: [@t4fitness_](https://www.instagram.com/t4fitness_/)
- **Conddiz GitHub**: [conddiz](https://github.com/conddiz)
- **Domínio**: t4fitness.com.br (Conddiz Cloudflare Account)
