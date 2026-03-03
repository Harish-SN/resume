
import React from "react";

export default function Experience() {
    return (
        <section id="experience" className="block glass centre">
            <h2>Experience</h2>

            <ul className="timeline">

                <li>
                    <strong>Founder • Cloud / DevOps / Backend Engineer</strong><br />
                    <em>XamBook.com — 2023–Present</em>

                    <ul>
                        <li>
                            Designed, built, and operate a production EdTech SaaS platform with a{" "}
                            <strong>Node.js + Express</strong> backend and secure{" "}
                            <strong>Razorpay</strong> subscription payments.
                        </li>

                        <li>
                            Architected a scalable AWS environment using{" "}
                            <strong>S3, CloudFront, Route 53, EC2/ALB, IAM, Secrets Manager,
                            DynamoDB, Cognito, SES, SQS,</strong> and{" "}
                            <strong>CloudWatch</strong>.
                        </li>

                        <li>
                            Implemented authentication and authorization with{" "}
                            <strong>Amazon Cognito</strong> including secure token-based sessions.
                        </li>

                        <li>
                            Built automation workflows using{" "}
                            <strong>Python (AWS Lambda) + EventBridge</strong> for lifecycle tasks
                            such as subscription management and inactive user cleanup.
                        </li>

                        <li>
                            Programmatically managed cloud resources using{" "}
                            <strong>AWS SDK v3</strong> for DynamoDB (Document API), Cognito auth
                            flows, and secure S3 uploads with signed URLs + lifecycle policies.
                        </li>

                        <li>
                            Delivered static content securely via{" "}
                            <strong>CloudFront Origin Access Control</strong> to protect S3 origins.
                        </li>

                        <li>
                            Configured <strong>Nginx</strong> reverse proxying with{" "}
                            <strong>PM2</strong> to manage Node.js application processes and rolling restarts.
                        </li>

                        <li>
                            Designed CI/CD pipelines using{" "}
                            <strong>GitHub Actions</strong> for automated testing and deployment
                            of both backend and frontend. Infrastructure expressed via{" "}
                            <strong>CloudFormation</strong>.
                        </li>

                        <li>
                            Implemented observability with{" "}
                            <strong>CloudWatch metrics, log groups, dashboards and alarms</strong>.
                        </li>

                        <li>
                            Practiced <strong>cost-optimised architecture</strong>
                            including right-sizing compute, reserved capacity planning, storage lifecycle policies,
                            and budget alerts.
                        </li>

                        <li>
                            Performed security hardening including{" "}
                            <strong>IAM least privilege, TLS enforcement, WAF rule design,
                            secret isolation,</strong> and periodic audit reviews.
                        </li>
                    </ul>
                </li>

                <li>
                    <strong>Hybrid Cloud Storage Engineering</strong><br />
                    <em>2023–Present</em>

                    <ul>
                        <li>
                            Built a <strong>Raspberry-Pi-based NAS</strong> with{" "}
                            <strong>Samba</strong> for LAN access and replication to{" "}
                            <strong>Amazon S3 + Glacier</strong>.
                        </li>
                        <li>
                            Added integrity validation and{" "}
                            <strong>SES alerting</strong> for backup reliability monitoring.
                        </li>
                    </ul>
                </li>

                <li>
                    <strong>Generative AI Engineering</strong><br />
                    <em>2024–Present</em>

                    <ul>
                        <li>
                            Designed and deployed secure AI chat workflows using{" "}
                            <strong>Amazon Bedrock</strong> with foundation model-based responses.
                        </li>
                        <li>
                            Built serverless AI API layers using{" "}
                            <strong>Lambda + Python</strong>.
                        </li>
                        <li>
                            Focused on prompt safety, logging, throttling,
                            and secure integration with existing backend services.
                        </li>
                    </ul>
                </li>

                <li>
                    <strong>Platform Reliability & Operations</strong><br />
                    <em>2023–Present</em>

                    <ul>
                        <li>
                            Maintain and evolve production workloads including
                            uptime, scaling, monitoring, backups, CI/CD, and
                            security posture management.
                        </li>
                    </ul>
                </li>

                <li>
                    <strong>Cloud & Application Security Research</strong><br />
                    <em>2024–Present</em>

                    <ul>
                        <li>
                            Perform lab-based penetration testing and vulnerability analysis
                            to improve application and cloud security posture.
                        </li>
                        <li>
                            Applied controls including{" "}
                            <strong>IAM least privilege, encrypted storage, HTTPS-only,
                            and secure authentication flows</strong>.
                        </li>
                    </ul>
                </li>

                <li>
                    <strong>React Portfolio Developer</strong>

                    <ul>
                        <li>
                            Built a personal <strong>React</strong> portfolio hosted on{" "}
                            <strong>S3 + CloudFront</strong> with{" "}
                            <strong>GitHub Actions</strong> CI/CD.
                        </li>
                        <li>
                            Focused on performance, accessibility,
                            glass-UI theming, and responsive design.
                        </li>
                    </ul>
                </li>

            </ul>
        </section>
    );
}