import React from "react";

export default function Certificates() {
    const certs = [
        {
            title: "AWS Certified Solutions Architect – Professional",
            issuer: "Amazon Web Services",
            date: "2026",
            link: "https://www.credly.com/earner/earned/badge/ded4dfbc-ca13-45f9-83f7-ddaffe6eea59",
            img: "/aws-saa.png"
        },
        {
            title: "HashiCorp Certified: Terraform Associate (004)",
            issuer: "HashiCorp",
            date: "2026",
            link: "https://www.credly.com/earner/earned/badge/e2dee9fd-c02f-40db-83a5-67af7e420994",
            img: "/terraform-associate.png"
        },
        {
            title: "Kubernetes and Cloud Native Associate (KCNA)",
            issuer: "Cloud Native Computing Foundation",
            date: "2026",
            link: "https://www.credly.com/earner/earned/badge/547bdfe4-b9a7-42b1-bdcb-3acc2332f7be",
            img: "/kcna.png"
       }
    ];

    return (
        <section id="certificates" className="block glass centre">
            <h2 className="cert-heading">Certificates</h2>

            <div className="card-grid">
                {certs.map((c, i) => (
                    <a
                        key={i}
                        className="proj cert-card"
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${c.title} certificate on Credly`}
                    >
                        <img src={c.img} alt={`${c.title} badge`} className="cert-img" />
                        <h3 className="cert-title">{c.title}</h3>
                        <p className="cert-meta">
                            {c.issuer} • {c.date}
                        </p>
                        <span className="cert-overlay">Click to View</span>
                    </a>
                ))}
            </div>
        </section>
    );
}