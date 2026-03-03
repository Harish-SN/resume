import React, { useEffect, useRef, useState } from 'react';
import MoleGame from './MoleGame.jsx';

const words = [
    "Cloud Architecture on AWS",
    "Designing Scalable Systems",
    "Building Production Backends",
    "Operating Reliable Infrastructure",
    "Serverless & Container Native",
    "From EC2 to EKS",
];

export default function Hero() {
    const txtRef = useRef(null);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const cur = setInterval(() => setBlink(v => !v), 500);
        return () => clearInterval(cur);
    }, []);

    useEffect(() => {
        let w = 0, i = 0, dir = 1, t;
        const loop = () => {
            if (txtRef.current) txtRef.current.textContent = words[w].slice(0, i);
            if (dir > 0 && i === words[w].length) { dir = -1; t = setTimeout(loop, 1400); return; }
            if (dir < 0 && i === 0) { dir = 1; w = (w + 1) % words.length; }
            i += dir; t = setTimeout(loop, dir > 0 ? 80 : 40);
        };
        loop();
        return () => clearTimeout(t);
    }, []);

    return (
        <section id="home" className="hero">
            <h1>Hello, I’m <span>Harish</span></h1>
            <p className="tagline typed">
                <span ref={txtRef} className="txt"></span>
                <span className="cur" style={{ opacity: blink ? 1 : 0 }}>|</span>
            </p>

            <MoleGame />

            <a href="#skills" className="cta">
                See My Work <i className="fa-solid fa-arrow-down"></i>
            </a>
        </section>
    );
}