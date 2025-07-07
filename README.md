# ⚛️ ReactOps – Dockerized React App with Testing & CI/CD

This project is a production-ready **React application** built with modern frontend tooling, Docker support, and test scaffolding. It serves as a foundation for full-stack scalability and DevOps automation.

> ✅ **Live Preview**: _(https://docker-react-rosy.vercel.app/)_  
> 🐳 **Dockerized** • 🧪 Test-Ready • 🔁 CI/CD-Enabled • ⚛️ React 18

---

## 🚀 Tech Stack

| Layer        | Tools/Technologies                                      |
|--------------|----------------------------------------------------------|
| Front-End    | React 18, CSS Modules, Web Vitals                        |
| Testing      | Jest, React Testing Library                              |
| CI/CD        | GitHub Actions (optional setup)                          |
| Deployment   | Docker (multi-env), Vercel/Netlify compatible            |
| Dev Tools    | ESLint, Browserslist, Lighthouse, Web Vitals             |

---

## 🧰 Features

- 📦 **React 18 App** bootstrapped with `create-react-app`
- 🧪 **Testing Support** with `Jest` and `@testing-library/react`
- 🐳 **Dockerized** for containerized development & production
- 🔧 **DevOps-Ready**: Easily integrate with GitHub Actions or GitLab CI
- 🧠 **Performance Monitored** with `reportWebVitals.js`
- 📱 **Responsive, PWA-Friendly** with `manifest.json` + `favicon`

---

## 🛠️ Project Structure

├── .gitignore
├── docker
├── Dockerfile
├── package-lock.json
├── package.json
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
└── yarn.lock


---

## 🐳 Docker Support

**Build and run in Docker:**

```bash
# Build image
docker build -t reactops-app .

# Run container
docker run -p 3000:3000 reactops-app


## 🧪 Testing
Run tests with:

```bash
npm test

Uses Jest with React Testing Library
Custom setup via setupTests.js


##  ⚙️ Scripts
Command	Description
npm start	Starts local dev server
npm build	Builds app for production
npm test	Runs test suite with coverage
npm eject	Ejects CRA config (not advised)

🔐 Security & CI/CD (Optional Setup)
This app is ready for:

✅ GitHub Actions CI pipelines: lint → test → build → deploy

✅ Dependabot alerts for dependency security

✅ Container scanning with DockerHub/GitHub workflow integration

📌 Use Cases
This project is ideal for:

🔄 DevOps CI/CD pipelines

🐳 Docker image deployment for frontend services

🧪 Test-driven frontend development (TDD/BDD)

⚙️ Containerized microfrontend architecture

💼 DevOps + Frontend hybrid portfolios

## 📣 Credits
React – UI Library

Jest – JavaScript Testing

Testing Library – React Component Testing

Docker – Containerization

Create React App – Boilerplate Starter

This project is licensed under the MIT License. See LICENSE for details.


👨‍💻 About the Engineer
I'm Ongun Akay – a front-end developer and DevOps engineer crafting scalable, testable, and deployable applications. I love bringing infrastructure and UI together through CI/CD automation, cloud-native tools, and modern front-end frameworks.

🌍 ongunakay.com | 🧑‍💻 GitHub | 📫 info@ongunakay.com

