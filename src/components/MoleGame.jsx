
import React, { useEffect, useRef, useState } from "react";

const MISS_LIMIT = 3;
const DOG_VISIBLE = 750;
const BETWEEN_POP = 250;
const DOG_SRC = "/dog.png";

export default function MoleGame() {
    const [score, setScore] = useState(0);
    const [miss, setMiss] = useState(0);
    const [playing, setPlaying] = useState(false);

    const playingRef = useRef(false);
    const timerRef = useRef(null);
    const lastRef = useRef(-1);
    const holesRef = useRef([]);
    const overlayRef = useRef(null);
    const barkRef = useRef(null);

    useEffect(() => () => clearTimeout(timerRef.current), []);

    const randHole = () => {
        const len = holesRef.current.length;
        let idx;
        do {
            idx = Math.floor(Math.random() * len);
        } while (idx === lastRef.current);
        lastRef.current = idx;
        return idx;
    };

    const popDog = () => {
        if (!playingRef.current) return;
        const hole = holesRef.current[randHole()];
        if (!hole) return;

        const img = document.createElement("img");
        img.src = DOG_SRC;
        img.alt = "Dog";
        img.className = "dog up";
        hole.appendChild(img);

        setTimeout(() => {
            img.classList.remove("up");
            setTimeout(() => img.remove(), 180);
        }, DOG_VISIBLE);

        timerRef.current = setTimeout(popDog, DOG_VISIBLE + BETWEEN_POP);
    };

    const startGame = () => {
        setScore(0);
        setMiss(0);
        setPlaying(true);
        playingRef.current = true;
        lastRef.current = -1;

        overlayRef.current?.classList.add("hide");
        clearTimeout(timerRef.current);
        setTimeout(popDog, 0);
    };

    /**
      @param {boolean} withZoom
     */
    const endGame = (withZoom = false) => {
        setPlaying(false);
        playingRef.current = false;
        clearTimeout(timerRef.current);

        if (withZoom) {
            const overlay = overlayRef.current;
            const z = overlay?.querySelector(".zoomdog");
            if (overlay && z) {
                overlay.classList.remove("hide");
                z.classList.remove("boom");
                z.offsetWidth;
                z.classList.add("boom");
                if (barkRef.current) {
                    barkRef.current.currentTime = 0;
                    barkRef.current.play().catch(() => { });
                }
                setTimeout(() => overlay.classList.add("hide"), 1650);
            }
        } else {
            overlayRef.current?.classList.add("hide");
        }
    };

    const onHoleClick = (i) => {
        if (!playingRef.current) return;
        const hole = holesRef.current[i];
        if (!hole) return;

        const hit = hole.querySelector(".dog.up");
        if (hit) {
            setScore((s) => {
                hole.classList.add("hit");
                setTimeout(() => hole.classList.remove("hit"), 180);
                return s + 1;
            });
        } else {
            setMiss((m) => {
                const next = m + 1;
                if (next >= MISS_LIMIT) endGame(true);
                return next;
            });
        }
    };

    return (
        <>
            <div className="molebox glass">
                <div className="toprow">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="hole"
                            ref={(el) => (holesRef.current[i] = el)}
                            onClick={() => onHoleClick(i)}
                        />
                    ))}
                </div>
                <div className="midrow">
                    {[3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="hole"
                            ref={(el) => (holesRef.current[i] = el)}
                            onClick={() => onHoleClick(i)}
                        />
                    ))}
                </div>
                <div className="botrow">
                    {[6, 7, 8].map((i) => (
                        <div
                            key={i}
                            className="hole"
                            ref={(el) => (holesRef.current[i] = el)}
                            onClick={() => onHoleClick(i)}
                        />
                    ))}
                </div>

                <p className="meters">
                    Score: <span id="hits">{score}</span>
                    &nbsp; Misses: <span id="miss">{miss}</span>
                </p>

                {!playing ? (
                    <button id="startBtn" onClick={startGame}>Start</button>
                ) : (
                    <button id="restartBtn" onClick={() => endGame(false)}>Stop</button>
                )}
            </div>

            <div id="overlay" ref={overlayRef} className="overlay hide">
                <img src={DOG_SRC} className="zoomdog" alt="Dog" />
            </div>

            <audio id="bark" ref={barkRef} src="/bark.mp3" preload="auto" />
        </>
    );
}