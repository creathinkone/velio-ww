# velio-ww

Marketing site for [Velio](https://velio.watch) — property management SaaS for Polish housing communities.

## Stack

- Next.js 15 (App Router, standalone output)
- TypeScript
- Tailwind CSS v4
- Deployed on VPS behind Caddy

## Development

```bash
pnpm install
pnpm dev
```

## Deploy

See `deploy/` for systemd service and Caddyfile configuration.

```bash
sudo cp deploy/velio-ww.service /etc/systemd/system/
sudo systemctl daemon-reload && sudo systemctl enable velio-ww
bash deploy/deploy.sh
```
