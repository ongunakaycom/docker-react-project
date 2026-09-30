# ☁️ Cloud-Native ReactOps Pipeline

[![Build & Publish to GHCR](https://github.com/ongunakaycom/cloud-native-react-pipeline/actions/workflows/deploy.yml/badge.svg)](https://github.com/ongunakaycom/cloud-native-react-pipeline/actions/workflows/deploy.yml)
[![Vercel](https://img.shields.io/badge/Vercel-Live-000000?logo=vercel&logoColor=white)](https://docker-react-rosy.vercel.app)
[![Docker](https://img.shields.io/badge/Docker-Multi--Stage-2496ED?logo=docker&logoColor=white)](https://github.com/ongunakaycom/cloud-native-react-pipeline/blob/main/Dockerfile)
[![GHCR](https://img.shields.io/badge/GHCR-Published-2496ED?logo=github&logoColor=white)](https://github.com/ongunakaycom?tab=packages)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A production-grade React 18 application demonstrating modern containerization, hardened nginx runtime, and automated CI/CD with keyless publishing to GitHub Container Registry.

## 🔗 Live

| Environment | URL |
|-------------|-----|
| **Edge (Vercel)** | https://docker-react-rosy.vercel.app |
| **Container Image** | `ghcr.io/ongunakaycom/cloud-native-react-pipeline:latest` |

## 🏛️ Architecture

```
[ Push to main ]
        │
        ▼
[ GitHub Actions CI/CD ]
   ├─► npm ci + Jest unit tests
   ├─► npm audit (dependency scan)
   ├─► Multi-stage Docker build
   ├─► Trivy vulnerability scan (CRITICAL/HIGH)
   └─► Push to GitHub Container Registry (GHCR)
        │
        ▼
[ Production Image: ghcr.io/ongunakaycom/cloud-native-react-pipeline ]
   ├─► Multi-stage build (Node 20 → nginx 1.27 alpine)
   ├─► Non-root runtime (dedicated appuser)
   ├─► Hardened nginx (CSP, HSTS, X-Frame-Options)
   ├─► /healthz endpoint for orchestrator probes
   └─► ~52 MB final image
```

## 🛠️ Tech Stack

| Layer | Technology | Engineering Decision |
|-------|-----------|---------------------|
| Frontend | React 18 | Lightweight SPA |
| Container | Multi-stage Docker → nginx Alpine | Minimal attack surface |
| Runtime | nginx 1.27 non-root (port 8080) | CIS-aligned, orchestrator-friendly |
| CI/CD | GitHub Actions | Automated test → scan → build → publish |
| Registry | GHCR | Keyless publish via `GITHUB_TOKEN` |
| Security | Trivy + npm audit | Blocks CRITICAL/HIGH CVEs |
| Edge | Vercel | CDN + preview deploys |

## 🗂️ Repository Structure

```
.
├── .github/workflows/deploy.yml   # CI/CD: test → scan → build → GHCR push
├── docker/nginx.conf              # Hardened nginx (security headers, /healthz)
├── src/                           # React 18 source
├── public/                        # Static assets
├── Dockerfile                     # Multi-stage production build
├── docker-compose.yml             # Local orchestration
├── vercel.json                    # Edge headers + SPA fallback
├── .dockerignore
└── README.md
```

## 🚀 Local Development

```bash
# Node dev server
npm install
npm start                # http://localhost:3000

# Production container
docker compose up --build
# → http://localhost:8080
```

## 🧪 Testing

```bash
npm test -- --watchAll=false
npm audit --audit-level=high
```

## 📦 Pull the Production Image

```bash
docker pull ghcr.io/ongunakaycom/cloud-native-react-pipeline:latest
docker run -p 8080:8080 ghcr.io/ongunakaycom/cloud-native-react-pipeline:latest
# → http://localhost:8080
```

## 🔐 Security Highlights

- **Non-root container** — dedicated `appuser` (CIS 4.1)
- **Security headers** — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- **Health probes** — `/healthz` endpoint for Cloud Run / Kubernetes / ECS
- **Trivy scan** — blocks CRITICAL/HIGH CVEs in CI
- **Keyless publishing** — no long-lived credentials; `GITHUB_TOKEN` with `packages: write`
- **Minimal base images** — `node:20-alpine`, `nginx:1.27-alpine`
- **`.dockerignore`** — keeps build context small

## 📈 Image Size

```
52.3 MB
```

Multi-stage build keeps the final runtime slim — only the compiled React bundle, nginx, and the hardened config.

## 👤 Author

**Ongun Akay** — Senior Cloud & DevOps Engineer

🌐 [ongunakay.com](https://ongunakay.com) · 💼 [LinkedIn](https://linkedin.com/in/ongunakay) · 🧑‍💻 [GitHub](https://github.com/ongunakaycom) · 📧 info@ongunakay.com

Specialized in GCP/OCI infrastructure, Terraform IaC, Kubernetes, serverless, container security, and AI/LLM application orchestration.

## 📄 License

MIT — see [LICENSE](./LICENSE).