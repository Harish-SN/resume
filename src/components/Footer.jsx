import React from "react";

export default function Footer() {
    const today = new Date();
    const fullDate = today.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <footer id="site-footer" className="hf-wrapper glass">
            <div className="hf-footer-centre">
                <div className="hf-brand">
                    <h3 className="hf-title flicker">sudo rm -rf /Harish</h3>
                    <p className="hf-tagline">I test my code. Reality tests it harder.</p>
                </div>

                <div className="hf-meta">
                    <p className="hf-stack">
                        ⚡ Built with <span className="rainbow">React</span> ☁️ Cloud Native — which mostly means I rent computers from Jeff Bezos
                    </p>
                </div>

                <div className="hf-ticker">
                    <div className="hf-ticker-text">
                        Containers may contain actual whales → 🐳 &nbsp; • &nbsp;
                        CloudFront: latency, outsourced → 🤷 &nbsp; • &nbsp;
                        Debugging = staring at code until it confesses → 🐛 &nbsp; • &nbsp;
                        Shipped to prod on purpose (mostly) → 🚀
                    </div>
                </div>

                <div className="hf-footer-date">
                    📅 {fullDate}
                </div>

                <div className="hf-footer-bottom">
                    © {today.getFullYear()} Harish. All bugs reserved.
                </div>
            </div>
        </footer>
    );
}