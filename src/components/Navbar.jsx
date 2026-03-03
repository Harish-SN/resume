import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [dark, setDark] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark", dark);
        localStorage.theme = dark ? "dark" : "light";
    }, [dark]);

    const onNavClick = () => setOpen(false);

    return (
        <header className="navbar glass" role="navigation" aria-label="Primary">
            
            <div className="nav-side left">
                <div className="brand brand-terminal" title="cloud.engineer_">
                    cloud-Native Architect<span className="cursor-blink">_</span>
                </div>
            </div>

            <nav className={`nav-links ${open ? "open" : ""}`}>
                <ul onClick={onNavClick}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#certificates">Certificates</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#milestones">Timeline</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="nav-side right">

                <a href="/resume.pdf" download className="resume-btn">
                    <i className="fa-solid fa-file" /> Resume
                </a>

                <button
                    className={`hamburger ${open ? "is-open" : ""}`}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <label className="toggle" aria-label="Toggle theme">
                    <input
                        type="checkbox"
                        checked={dark}
                        onChange={(e) => setDark(e.target.checked)}
                    />
                    <span className="thumb">
                        <i className="fa-solid fa-sun sun"></i>
                        <i className="fa-solid fa-moon moon"></i>
                    </span>
                </label>
            </div>
        </header>
    );
}