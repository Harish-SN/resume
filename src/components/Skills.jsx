import React from "react";

function SkillCard({ title, icon, items, tall = false, grid = false }) {
    return (
        <div
            className={`skill-card ${tall ? "skill-card--tall" : ""}`.trim()}
            role="region"
            aria-label={title}
        >
            <div className="skill-title">
                <i className={icon} aria-hidden="true" />
                <span className="title-text">{title}</span>
            </div>
            <ul className={`pill-list ${grid ? "pill-grid" : ""}`.trim()}>
                {items.map((label) => (
                    <li className="pill" key={label}>{label}</li>
                ))}
            </ul>
        </div>
    );
}

export default function Skills() {
    const groups = [
        {
            title: "Cloud Architecture (AWS)",
            icon: "fa-solid fa-cloud",
            items: [
                "AWS Multi-Account Architecture",
                "Well-Architected Framework",
                "High Availability & Fault Tolerance",
                "Cost Optimization",
                "Disaster Recovery Design"
            ],
        },
        {
            title: "Compute & Container Services",
            icon: "fa-solid fa-microchip",
            items: [
                "Amazon EC2",
                "Auto Scaling Groups",
                "AWS Fargate",
                "Amazon EKS",
                "Container Lifecycle Management"
            ],
        },
        {
            title: "Kubernetes (Production-Grade)",
            icon: "fa-solid fa-dharmachakra",
            items: [
                "Cluster Architecture & Administration",
                "RBAC & Security Policies",
                "Namespaces & Multi-Tenancy",
                "Ingress Controllers",
                "Resource Optimization",
                "Pod Scheduling & Networking"
            ],
        },
        {
            title: "GitOps & Continuous Delivery",
            icon: "fa-solid fa-code-branch",
            items: [
                "Argo CD",
                "Argo Workflows",
                "GitOps Strategy",
                "Progressive Delivery",
                "Blue-Green / Canary Deployments"
            ],
        },
        {
            title: "Infrastructure as Code",
            icon: "fa-solid fa-layer-group",
            items: [
                "Terraform (Advanced Modules)",
                "Remote State Management",
                "Reusable Infrastructure Patterns",
                "AWS CloudFormation"
            ],
        },
        {
            title: "Observability & Reliability Engineering",
            icon: "fa-solid fa-chart-line",
            items: [
                "Prometheus",
                "Grafana",
                "OpenTelemetry",
                "Distributed Tracing",
                "SLO / SLA Design"
            ],
        },
        {
            title: "Serverless & Event-Driven Systems",
            icon: "fa-solid fa-bolt",
            items: [
                "AWS Lambda",
                "API Gateway",
                "Step Functions",
                "Amazon EventBridge",
                "SQS / SNS"
            ],
        },
        {
            title: "Networking & Traffic Management",
            icon: "fa-solid fa-network-wired",
            items: [
                "VPC Design",
                "Subnets & Routing",
                "Security Groups / NACLs",
                "Load Balancers (ALB/NLB)",
                "DNS (Route 53)"
            ],
        },
        {
            title: "Security & Identity Management",
            icon: "fa-solid fa-shield-halved",
            items: [
                "IAM Policy Design",
                "AWS KMS",
                "Secrets Manager",
                "Kubernetes Network Policies",
                "Pod Security Standards"
            ],
        },
        {
            title: "Data & Storage Systems",
            icon: "fa-solid fa-database",
            items: [
                "Amazon S3",
                "Amazon DynamoDB",
                "Amazon RDS",
                "Amazon OpenSearch",
                "Backup & Snapshot Strategies"
            ],
        },
        {
            title: "CI/CD & Automation Engineering",
            icon: "fa-solid fa-screwdriver-wrench",
            items: [
                "GitHub Actions",
                "Pipeline Design",
                "Release Automation",
                "Infrastructure Automation",
                "Docker"
            ],
        },
        {
            title: "Systems Engineering Foundations",
            icon: "fa-solid fa-toolbox",
            items: [
                "Linux Administration",
                "Shell Scripting",
                "Networking Fundamentals",
                "Performance Tuning",
                "System Design Thinking"
            ],
        }
    ];

    return (
        <section id="skills" className="block glass centre skills-comic">
            <h2>Skills</h2>
            <div className="skill-cards">
                {groups.map((g) => (
                    <SkillCard
                        key={g.title}
                        title={g.title}
                        icon={g.icon}
                        items={g.items}
                        tall={g.tall}
                        grid={g.grid}
                    />
                ))}
            </div>
        </section>
    );
}