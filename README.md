# ⚛️ ReactOps – Dockerized React App with Testing & CI/CD

This project is a production-ready **React application** built with modern frontend tooling, Docker support, and test scaffolding.

> ✅ **Live Preview**: [https://docker-react-rosy.vercel.app/](https://docker-react-rosy.vercel.app/)  
> 🐳 **Dockerized** • 🧪 Test-Ready • 🔁 CI/CD-Enabled • ⚛️ React 18

---

## 🚀 Tech Stack

| Layer        | Tools                          |
|--------------|--------------------------------|
| Front-End    | React 18, CSS Modules         |
| Testing      | Jest, React Testing Library   |
| CI/CD        | GitHub Actions                |
| Deployment   | Docker, Vercel                |
| Dev Tools    | ESLint, Prettier              |

---

## 🧰 Features

- 📦 **React 18** with create-react-app  
- 🧪 **Jest + Testing Library**  
- 🐳 **Multi-stage Dockerfile**  
- 🔧 **CI/CD-ready workflows**  
- 📱 **PWA configuration**

---

## 🛠️ Project Structure

```text
.
├── .github/           # CI workflows
├── docker/            # Docker configs
├── public/            # Static assets
├── src/               # Application code
│   ├── components/    # React components
│   ├── tests/         # Test files
│   └── ...            # App source
├── Dockerfile         # Production build
├── docker-compose.yml # Dev environment
└── ...                # Config files
```

---

## 🐳 Docker Commands

**Development:**
```bash
docker-compose up --build
```

**Production:**
```bash
docker build -t reactapp .
docker run -p 3000:80 reactapp
```

---

## 🧪 Testing

**Run tests:**
```bash
npm test
# or
docker-compose run app npm test
```

**Coverage report:**
```bash
npm test -- --coverage
```

---

## ⚙️ Development Scripts

| Command         | Action                         |
|-----------------|--------------------------------|
| `npm start`     | Start development server       |
| `npm build`     | Create production build        |
| `npm test`      | Run test suite                 |
| `npm run lint`  | Run ESLint                     |

---

## 🔐 Security Features

1. **Dependency Scanning**
   ```bash
   npm audit
   ```
2. **Container Security**
   ```bash
   docker scan reactapp
   ```
3. **CI Pipeline Checks**
   - Automated vulnerability scanning  
   - Build-time security checks

---

## 📌 Ideal For

- 🔄 CI/CD Pipelines  
- 🐳 Containerized Deployments  
- 🧪 Test-Driven Development  
- ⚡ Rapid Prototyping

---

## 📄 License

MIT Licensed - See [LICENSE](LICENSE) for details.

---

## 👋 About Me

Ongun Akay, a Senior Full-Stack Developer with expertise across various technologies.

👀 I specialize in full-stack development with extensive experience in frontend and backend technologies.
🌱 Currently, I'm sharpening my skills in advanced concepts of web development.
💞️ I’m always open to exciting collaborations and projects that challenge my abilities.
📫 You can reach me at info@ongunakay.com.

- 🌐 **Website**: [ongunakay.com](https://ongunakay.com)  
- 💼 **LinkedIn**: [linkedin.com/in/ongunakay](https://linkedin.com/in/ongunakay)  
- 🧑‍💻 **GitHub**: [github.com/ongunakaycom](https://github.com/ongunakaycom)  
- 📬 **Email**: info@ongunakay.com  

I'm open to **remote and hybrid opportunities across Europe and globally**. Let’s build something impactful together!

