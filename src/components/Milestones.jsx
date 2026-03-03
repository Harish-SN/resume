import React, { useEffect, useRef } from "react";

const items = [
    {
        period: "1995",
        title: "Spawn Point",
        blurb: "Born. No documentation. Learning by trial, error, and observation ever since."
    },

    {
        period: "2005",
        title: "Vice City Curriculum",
        blurb: "Learned open-world problem solving in GTA before long division. Curiosity and improvisation came early."
    },

    {
        period: "2007",
        title: "First Computer",
        blurb: "Low-spec machine, high curiosity. Learned system hygiene after installing more malware than games."
    },

    {
        period: "2011",
        title: "Programming Myth",
        blurb: "Heard about C++. Didn’t write code yet, but the idea of programming quietly took root."
    },
    {
        period: "2012",
        title: "Strategy Phase",
        blurb: "Spent a lot of time with Age of Empires. Learned resource planning, prioritization, and long-term strategy before I had the words for them."
    },

    {
        period: "2013",
        title: "First Laptop",
        blurb: "Finally owned a laptop. Learned the value of backups, clean installs, and controlled experimentation."
    },

    {
        period: "2018",
        title: "System Recovery I",
        blurb: "ACL surgery. Rehab demanded patience, repetition, and discipline — basically debugging a human system with no stack traces."
    },

    {
        period: "2019",
        title: "Linux Commitment",
        blurb: "Switched fully to Linux. Dropped Windows and games to focus on systems, tooling, and how machines actually behave."
    },

    {
        period: "2020",
        title: "Cloud Immersion",
        blurb: "Went deep into AWS. Learned IAM, EC2, S3, and cost control through hands-on mistakes and practical fixes."
    },

    {
        period: "2021",
        title: "Full-Stack Foundations",
        blurb: "Learned JavaScript, React, and Python. Shipped production applications while making peace with async behavior, state management, and undefined states."
    },

    {
        period: "2022",
        title: "System Recovery II",
        blurb: "Second ACL surgery. Same process, higher expectations. Shipped code on schedule anyway."
    },
    {
        period: "2023",
        title: "Raspberry Pi Systems",
        blurb: "Built multiple Raspberry Pi projects including a NAS and CCTV setup. Used low-power hardware to explore self-hosting, storage, networking, and reliability under real constraints."
    },

    {
        period: "2023",
        title: "XamBook Launch",
        blurb: "Shipped a real product. Learned CI/CD, deployment, scaling, and that real users surface real bugs."
    },

    {
        period: "2024",
        title: "Distro Experimentation",
        blurb: "Daily-drove multiple Linux distributions. Tuned shells, workflows, and systems — curiosity evolved into systems literacy."
    },

    {
        period: "2025",
        title: "Author Mode",
        blurb: "Began writing about humans and technology. Currently working on \"The Digital Necropolis\" — exploring social media addiction and the long-term effects of digital platforms on attention and behaviour."
    }
    ];

export default function Milestones() {
    const wrapperRef = useRef(null);
    const progressRef = useRef(null);
    const rafId = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        // Reveal-on-enter (horizontal context)
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("visible");
                });
            },
            {
                root: wrapper,
                rootMargin: "0px 20% 0px 20%",
                threshold: 0.25,
            }
        );

        wrapper
            .querySelectorAll(".timeline-horz__item")
            .forEach((el) => io.observe(el));

        // Wheel → horizontal scroll
        const onWheel = (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                wrapper.scrollLeft += e.deltaY;
            }
        };
        wrapper.addEventListener("wheel", onWheel, { passive: false });

        // Keyboard navigation
        const onKeyDown = (e) => {
            if (e.key === "ArrowRight") wrapper.scrollBy({ left: 320, behavior: "smooth" });
            if (e.key === "ArrowLeft") wrapper.scrollBy({ left: -320, behavior: "smooth" });
        };
        window.addEventListener("keydown", onKeyDown);

        // Scroll progress
        const updateProgress = () => {
            const max = wrapper.scrollWidth - wrapper.clientWidth;
            const pct = max > 0 ? (wrapper.scrollLeft / max) * 100 : 0;
            if (progressRef.current) progressRef.current.style.width = `${pct}%`;
            rafId.current = requestAnimationFrame(updateProgress);
        };
        rafId.current = requestAnimationFrame(updateProgress);

        return () => {
            io.disconnect();
            wrapper.removeEventListener("wheel", onWheel);
            window.removeEventListener("keydown", onKeyDown);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <section id="milestones" className="block" aria-labelledby="timeline-heading">
            <div className="centre" style={{ marginBottom: "0.5rem" }}>
                <h2 id="timeline-heading">Timeline</h2>
            </div>

            <div className="timeline-horz__progress" aria-hidden="true">
                <div className="timeline-horz__progress-bar" ref={progressRef} />
            </div>

            <div
                className="timeline-horz__wrapper"
                ref={wrapperRef}
                aria-label="Personal and technical milestones"
            >
                <ul className="timeline-horz" role="list">
                    {items.map((it, idx) => (
                        <li
                            key={idx}
                            className="timeline-horz__item glass"
                            role="listitem"
                            data-year={it.period}
                        >
                            <div className="timeline-horz__dot" />
                            <span className="timeline-horz__year">{it.period}</span>
                            <h3 className="timeline-horz__title">{it.title}</h3>
                            <p className="timeline-horz__blurb">{it.blurb}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}