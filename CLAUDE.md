# T4 Fitness - Guia do Projeto

## Sobre o Projeto

Site institucional para rede de 7 academias T4 Fitness em Fortaleza. Stack: HTML/CSS/JS puro, hospedado no Cloudflare Pages, domínio gerenciado pela conta Conddiz.

## Stack & Deployment

- **Tipo**: Static site (HTML/CSS/JS)
- **Hospedagem**: Cloudflare Pages (conddiz account)
- **Domínio**: t4fitness.com.br (zona Conddiz)
- **CI/CD**: GitHub Actions (via Wrangler)
- **Credenciais**: Sincronizadas de C:\Projects\.global-vault via `Sync-DeployEnv.ps1`

## Estrutura

```
assets/              # Imagens (logo, fotos unidades, equipamentos)
docs/img/            # Imagens adicionais do cliente
index.html           # Página principal (única)
styles.css           # Estilos (minificado inline)
script.js            # Interatividade (busca, menu, form)
```

## Fluxo de Trabalho

1. **Editar localmente**: Modifique HTML/CSS/JS diretamente
2. **Testar**: Abra `index.html` no navegador ou use `npm run dev`
3. **Commit**: `git add . && git commit -m "..."`
4. **Push**: `git push origin main`
5. **Deploy**: Cloudflare Pages faz deploy automaticamente

## Deploy Manual

Se GitHub Actions não estiver configurado:

```bash
cd C:\Projects\.global-vault
.\Sync-DeployEnv.ps1 -Project C:\Projects\t4fitness -Profiles conddiz/cloudflare
cd C:\Projects\t4fitness
npm install
wrangler pages deploy .
```

## Configuração Cloudflare

- **Account**: conddiz
- **Zone**: t4fitness.com.br
- **Branch**: main
- **Build Command**: (nenhum - site estático)
- **Output Directory**: .

## Customizações Comuns

### Mudar cores
Edite `:root { }` em `styles.css`:
- `--orange`: cor primária (atualmente #ff6a00)
- `--cream`: fundo claro (atualmente #f3f0ea)

### Atualizar textos
- Hero: h1, p no `.hero-content`
- Unidades: `.unit-card` (HTML hardcoded)
- Modal: `.modality-list button`

### Adicionar imagens
1. Coloque em `assets/`
2. Atualize `src` no HTML
3. Nomeie descritivamente (ex: `galeria-01.jpeg`)

### Instagram & Redes
- Link Instagram: `.footer-grid a` e form submit
- Atualizar URL: `https://www.instagram.com/t4fitness_/`

## Performance Checklist

- [ ] Imagens otimizadas (<300KB cada)
- [ ] CSS inline (< 50KB)
- [ ] JS vanilla, sem deps pesadas
- [ ] Mobile-first responsive
- [ ] Lighthouse 90+ (target)

## Segurança

- Sem banco de dados (formulário redireciona para Instagram)
- HTTPS garantido por Cloudflare
- Headers de segurança configurados na zona CF
- Nenhum dado sensível no repo (credenciais em .env.deploy)

## Troubleshooting

**Domínio não resolve**
- Verifique DNS em Cloudflare (zona conddiz)
- Propagação pode levar até 48h

**Deploy falha**
- Verifique logs em Cloudflare Pages dashboard
- Confirme `.env.deploy` sincronizado corretamente

**Estilos não carregam**
- Limpe cache do navegador (Ctrl+Shift+Del)
- Verifique console para erros 404

## Próximos Passos

- [ ] Criar repositório em conddiz/t4fitness no GitHub
- [ ] Conectar ao Cloudflare Pages via GitHub
- [ ] Configurar GitHub Actions para auto-deploy
- [ ] Testes em produção após propagação DNS
- [ ] Analytics (considerar Privacy-friendly: Plausible ou Simple Analytics)
