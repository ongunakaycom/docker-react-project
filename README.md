# ⚛️ ReactOps – Dockerized React App with Testing & CI/CD

A production-ready **React 18 application** with modern tooling, Docker support, automated testing, and CI/CD workflows.

* ✅ **Live Preview:** [https://docker-react-rosy.vercel.app/](https://docker-react-rosy.vercel.app/)
* 🐳 **Dockerized** 
* 🧪 Test-Ready 
* 🔁 CI/CD-Enabled 
* ⚛️ React 18

---

## 🚀 Tech Stack

| Layer      | Tools                       |
| ---------- | --------------------------- |
| Front-End  | React 18, CSS Modules       |
| Testing    | Jest, React Testing Library |
| CI/CD      | GitHub Actions              |
| Deployment | Docker, Vercel              |
| Dev Tools  | ESLint, Prettier            |

---

## 🧰 Features

* 📦 Modern **React 18** setup with `create-react-app`
* 🧪 Fully configured **Jest** & **React Testing Library**
* 🐳 **Docker-ready** with multi-stage builds
* 🔧 **CI/CD workflows** for automated testing and deployment
* 📱 PWA-ready configuration for offline support
* 🔒 Security scanning with `npm audit` & `docker scan`

---

## 🗂️ Project Structure

```text
docker-react-project/
├── .github/           # GitHub Actions CI/CD workflows
├── docker/            # Docker configuration files
├── public/            # Static assets
├── src/               # Application source code
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── Dockerfile         # Production Docker build
├── docker-compose.yml # Development Docker environment
├── package.json       # Project dependencies and scripts
├── yarn.lock / package-lock.json
└── README.md          # Project documentation
```

---

## 🐳 Docker Commands

**Development environment:**

```bash
docker-compose up --build
```

**Production build & run:**

```bash
docker build -t reactapp .
docker run -p 3000:80 reactapp
```

---

## 🧪 Testing

**Run tests:**

```bash
npm test
# or inside Docker
docker-compose run app npm test
```

**Generate coverage report:**

```bash
npm test -- --coverage
```

---

## ⚙️ Development Scripts

| Command        | Description                 |
| -------------- | --------------------------- |
| `npm start`    | Start development server    |
| `npm build`    | Create production build     |
| `npm test`     | Run test suite              |
| `npm run lint` | Run ESLint for code linting |

---

## 🔐 Security Features

1. **Dependency Scanning:**

   ```bash
   npm audit
   ```
2. **Container Security:**

   ```bash
   docker scan reactapp
   ```
3. **CI/CD Pipeline Checks:**

   * Automated vulnerability scanning
   * Build-time security checks

---

## 📌 Ideal Use Cases

* 🔄 CI/CD Pipelines
* 🐳 Containerized Deployments
* 🧪 Test-Driven Development
* ⚡ Rapid Prototyping

---

## 📄 License

MIT License – see [LICENSE](LICENSE) for details.

---

## 👋 About Me

**Ongun Akay** – Senior Full-Stack Developer

* 🌐 Website: [ongunakay.com](https://ongunakay.com)
* 💼 LinkedIn: [linkedin.com/in/ongunakay](https://linkedin.com/in/ongunakay)
* 🧑‍💻 GitHub: [github.com/ongunakaycom](https://github.com/ongunakaycom)
* 📫 Email: [info@ongunakay.com](mailto:info@ongunakay.com)

I specialize in full-stack development, combining frontend and backend expertise. I enjoy tackling challenging projects and continuously learning advanced web technologies.

---
