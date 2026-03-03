import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="block glass centre">
            <h2>Contact</h2>

            <div className="contact-links sarcastic">
                <a href="mailto:snharish85@gmail.com">
                    <i className="fa-solid fa-envelope" /> Mail Me
                </a>
                <a href="https://github.com/Harish-SN" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github" /> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/harishsudalaimani/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-linkedin" /> LinkedIn
                </a>
                <a
                    href="https://discordapp.com/users/1341650829115002911"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-discord" /> Discord
                </a>
            </div>
        </section>
    );
}