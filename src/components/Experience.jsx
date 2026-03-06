import React from "react";

export default function Experience() {
    return (
        <section id="experience" className="block glass centre">
            <h2>Experience</h2>

            <ul className="timeline">

                <li>
                    <strong>Founder • Cloud / DevOps / Backend Engineer</strong><br />
                    <em>XamBook.com — 2024–Present</em>

                    <ul>
                        <li>
                            Designed and operate a production EdTech SaaS platform with a 
                            <strong> Node.js + Express </strong> backend and secure 
                            <strong> Razorpay </strong> subscription payments.
                        </li>

                        <li>
                            Architected a scalable cloud platform on <strong>AWS</strong> using 
                            <strong> EC2, Auto Scaling, Application Load Balancer, VPC, Route 53, 
                            S3, CloudFront, IAM, DynamoDB, Cognito, SES, SQS, Secrets Manager </strong> 
                            and <strong>CloudWatch</strong>.
                        </li>

                        <li>
                            Automated infrastructure and operational workflows using 
                            <strong> AWS Lambda, EventBridge, DynamoDB, and CloudFormation </strong>.
                        </li>

                        <li>
                            Implemented secure authentication and authorization flows using 
                            <strong> Amazon Cognito </strong> with token-based sessions and identity management.
                        </li>

                        <li>
                            Designed CI/CD pipelines using <strong>GitHub Actions</strong> for automated
                            testing, build and deployment of backend services and static frontend assets
                            to <strong>S3 + CloudFront</strong>.
                        </li>

                        <li>
                            Containerized services using <strong>Docker</strong> and maintained runtime
                            reliability on EC2 using <strong>Nginx + PM2</strong> with rolling restarts
                            and zero-downtime deployments.
                        </li>

                        <li>
                            Implemented observability and operational monitoring using 
                            <strong> CloudWatch metrics, log groups, dashboards, and alarms </strong>.
                        </li>

                        <li>
                            Applied cost-optimized architecture including right-sizing compute,
                            storage lifecycle policies, reserved capacity planning,
                            and <strong>AWS Budgets</strong> monitoring.
                        </li>

                        <li>
                            Implemented security best practices including 
                            <strong>IAM least privilege, WAF rules, TLS enforcement,
                            secret isolation, encrypted storage, and periodic security audits</strong>.
                        </li>
                    </ul>
                </li>


                <li>
                    <strong>DevOps & Cloud Engineer • Independent Consulting / Freelance</strong><br />
                    <em>2020–Present</em>

                    <ul>

                        <li>
                            Provisioned infrastructure as code using 
                            <strong> Terraform</strong> and <strong> CloudFormation </strong> 
                            for repeatable and version-controlled deployments.
                        </li>

                        <li>
                            Built CI/CD pipelines using 
                            <strong> GitHub Actions, CodeBuild, and CodeDeploy </strong> 
                            enabling automated build, test, and release workflows.
                        </li>

                        <li>
                            Implemented GitOps deployment workflows using 
                            <strong> ArgoCD </strong> with declarative configuration management.
                        </li>

                        <li>
                            Deployed and operated containerized applications using 
                            <strong> Docker </strong> and <strong> Kubernetes (EKS)</strong>, 
                            including <strong>Helm-based releases</strong> and cluster operations.
                        </li>

                        <li>
                            Implemented observability stacks using 
                            <strong> Prometheus, Grafana, CloudWatch, and CloudTrail</strong>.
                        </li>

                        <li>
                            Performed Linux system administration including patching,
                            backups, production troubleshooting, and performance tuning.
                        </li>

                    </ul>
                </li>


                <li>
                    <strong>Hybrid Cloud Storage Engineering</strong><br />
                    <em>2023–Present</em>

                    <ul>
                        <li>
                            Built a <strong>Raspberry Pi-based NAS</strong> using 
                            <strong>Samba</strong> for LAN file access with 
                            replication to <strong> Amazon S3 + Glacier</strong>.
                        </li>

                        <li>
                            Implemented backup integrity validation and 
                            automated alerting using <strong>SES</strong>.
                        </li>
                    </ul>
                </li>


                <li>
                    <strong>Generative AI Engineering</strong><br />
                    <em>2024–Present</em>

                    <ul>
                        <li>
                            Built secure AI chat workflows using 
                            <strong> Amazon Bedrock</strong> foundation models.
                        </li>

                        <li>
                            Developed serverless AI API layers using 
                            <strong> AWS Lambda + Python</strong>.
                        </li>

                        <li>
                            Implemented logging, prompt safety controls,
                            request throttling, and secure backend integrations.
                        </li>
                    </ul>
                </li>


                <li>
                    <strong>Platform Reliability & Operations</strong><br />
                    <em>2023–Present</em>

                    <ul>
                        <li>
                            Maintain production workloads including uptime,
                            scaling, monitoring, CI/CD pipelines, backups,
                            and security posture management.
                        </li>
                    </ul>
                </li>


                <li>
                    <strong>Cloud & Application Security Research</strong><br />
                    <em>2024–Present</em>

                    <ul>
                        <li>
                            Perform lab-based penetration testing and vulnerability analysis
                            to improve cloud and application security posture.
                        </li>

                        <li>
                            Implement controls including 
                            <strong> IAM least privilege, encrypted storage,
                            HTTPS-only policies, and secure authentication flows</strong>.
                        </li>
                    </ul>
                </li>


                <li>
                    <strong>React Portfolio Developer</strong>

                    <ul>
                        <li>
                            Built a personal <strong>React</strong> portfolio hosted on 
                            <strong> S3 + CloudFront</strong> with automated CI/CD using 
                            <strong> GitHub Actions</strong>.
                        </li>

                        <li>
                            Focused on performance optimization,
                            accessibility, glass-UI theming, and responsive design.
                        </li>
                    </ul>
                </li>

            </ul>
        </section>
    );
}