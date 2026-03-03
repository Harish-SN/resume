# 🚀 Harish SN — Cloud & DevOps Engineer Portfolio

This repository contains the source code for my personal resume website built using **React + Vite** and deployed on **AWS S3 + CloudFront** with automated CI/CD.

---

## 🌐 Live Website

Production URL: https://your-domain.com  
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