# 🚀 Harish SN — Cloud & DevOps Engineer Portfolio

This repository contains the source code for my personal resume website built using **React + Vite** and deployed on **AWS S3 + CloudFront** with automated CI/CD.

---

## 🌐 Live Website

Production URL: https://harish8.com  
GitHub Repository: https://github.com/Harish-SN/resume

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- JavaScript (ES6+)
- CSS
- Responsive UI Design

### Cloud & DevOps
- AWS S3 (Static Hosting)
- AWS CloudFront (CDN)
- AWS CodeBuild (CI)
- AWS CodePipeline (CD)
- AWS Lambda (Backend Chat API)
- AWS API Gateway
- IAM (Least Privilege Access)
- GitHub (Version Control)

---

## 📂 Project Structure

src/
components/
styles/
public/
buildspec.yml
vite.config.js

Main UI Sections:
- Navbar
- Hero
- Skills
- Experience
- Certificates
- Projects
- Milestones
- Contact
- ChatWidget (Serverless backend integration)

---

## 💬 Chat Widget Architecture

The chat feature uses:

Frontend → API Gateway → Lambda → Response

- Secure IAM role configuration
- No secrets exposed in frontend
- API throttling enabled
- CORS configured properly

---

## 🚀 Deployment Architecture

GitHub → CodeBuild → S3 → CloudFront

### Deployment Flow

1. Code pushed to GitHub
2. CodeBuild installs dependencies
3. Production build generated (Vite dist/)
4. Files synced to S3
5. CloudFront cache invalidated

Fully automated CI/CD pipeline.

---

## 🧪 Local Development

Clone repository:
git clone https://github.com/Harish-SN/resume.git
cd resume

Install dependencies: npm install

Run development server: npm run dev

Build for production: npm run build

Preview production build: npm run preview

---

## 🔐 Security Considerations

- No AWS credentials stored in repository
- Environment variables handled securely
- IAM roles follow least privilege principle
- CloudFront enforces HTTPS
- API Gateway rate limiting enabled

---

## 📈 Future Enhancements

- Terraform-based infrastructure provisioning
- Multi-environment deployment (dev/stage/prod)
- Monitoring & logging improvements
- Performance optimization audits
- Custom domain with ACM SSL

---

## 👨‍💻 About Me

Cloud & DevOps Engineer focused on:

- AWS Architecture
- CI/CD Automation
- Infrastructure as Code
- Kubernetes & Containers
- Cloud Security Best Practices

---

## 📬 Contact

Email: snharish85@gmail.com  
GitHub: https://github.com/Harish-SN

---

⭐ If you like this project, feel free to star the repository.