
import React from "react";

export default function Projects() {
    return (
        <section
            id="projects"
            className="block glass centre"
            aria-labelledby="projects-heading"
        >
            <h2 id="projects-heading">Projects</h2>

            <div className="card-grid">

                <a
                    className="proj"
                    href="https://xambook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>XamBook — AWS-Powered EdTech SaaS</h3>

                    <p>
                        Production <strong>EdTech SaaS platform</strong> built with
                        <strong> Node.js + Express</strong> and secure
                        <strong> Razorpay</strong> subscriptions.
                    </p>

                    <p>
                        End-to-end AWS architecture including
                        <strong> S3, CloudFront (OAC), Route 53, EC2/ALB, IAM,
                        Secrets Manager, DynamoDB, Cognito, SES</strong>.
                    </p>

                    <span className="proj-cta">Click to view →</span>
                </a>

                <a
                    className="proj"
                    href="https://pypi.org/project/brewbar/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>brewBar — Python Package (PyPI)</h3>

                    <p>
                        A lightweight <strong>progress bar library</strong> published on
                        <strong> PyPI</strong> with a clean API, semantic versioning,
                        and modern Python packaging.
                    </p>

                    <span className="proj-cta">Click to view →</span>
                </a>

                <a
                    className="proj"
                    href="https://github.com/Harish-SN/pinglo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>Pinglo — LAN-First Chat Application</h3>

                    <p>
                        Minimal <strong>offline-first messaging app</strong> for private
                        local networks. No accounts. No cloud. No tracking.
                    </p>

                    <span className="proj-cta">Click to view →</span>
                </a>

                <a
                    className="proj"
                    href="https://note.harish8.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>Sticky Notes App</h3>

                    <p>
                        Interactive <strong>sticky-notes tool</strong> built with
                        <strong> Vanilla JS</strong>, featuring drag/snap, resizing,
                        pinning, animations, and <strong>LocalStorage sync</strong>.
                    </p>

                    <span className="proj-cta">Click to view →</span>
                </a>

                <a
                    className="proj"
                    href="https://devbook.harish8.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>DevBook — Developer Cheatsheet</h3>

                    <p>
                        Minimal <strong>reference hub</strong> for developers to quickly
                        access commands and concepts with a distraction-free UI.
                    </p>

                    <span className="proj-cta">Click to view →</span>
                </a>

                <a
                    className="proj"
                    href="https://qrcode.harish8.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>QR Code Generator</h3>

                    <p>
                        Lightweight <strong>client-side QR generator</strong> for URLs
                        and text, built for speed and privacy.
                    </p>

                    <span className="proj-cta">Click to view →</span>
                </a>

                <a
                    className="proj"
                    href="https://github.com/Harish-SN/art-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>Art Hub — Pure CSS Art</h3>

                    <p>
                        Creative visual pieces built using <strong>pure CSS</strong>,
                        exploring animation, composition and layout.
                    </p>

                    <span className="proj-cta">Click to view →</span>
                </a>

                <a
                    className="proj"
                    href="https://github.com/Harish-SN/study-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>Study Hub</h3>

                    <p>
                        Curated repository of digital study resources for organised,
                        structured learning.
                    </p>

                    <span className="proj-cta">Click to view →</span>
                </a>

                <a
                    className="proj"
                    href="https://github.com/Harish-SN/resume-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h3>Resume Hub</h3>

                    <p>
                        Modern, responsive resume templates for developers and engineers.
                    </p>

                    <span className="proj-cta">Click to view →</span>
                </a>

            </div>
        </section>
    );
}