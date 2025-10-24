"use client";
import { useEffect, useState } from "react";

const Nav = () => {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = (): void => {
            const sections = ["about", "work-experience", "tech-stack", "projects", "blog", "contact-form"];
            const sectionElements = sections.map(
                (section) => document.getElementById(section) as HTMLDivElement | null
            );

            console.log(sectionElements);

            const scrollPosition = window.scrollY;

            for (let i = 0; i < sectionElements.length; i++) {
                const section = sectionElements[i];
                if (
                    section &&
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    setActiveSection(sections[i]);
                    return;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="nav" className="hidden md:flex flex-col justify-start gap-3">
            <a
                href="#about"
                className={`hover:text-primary w-fit ${
                    activeSection === "about" ? "nav-active" : ""
                }`}
            >
                <div className="flex items-center">
                    <span className="navlink-line"></span>
                    <span className="line-height-0">About</span>
                </div>
            </a>
            <a
                href="#work-experience-heading"
                className={`hover:text-primary w-fit ${
                    activeSection === "work-experience" ? "nav-active" : ""
                }`}
            >
                <div className="flex items-center">
                    <span className="navlink-line"></span>
                    <span className="line-height-0">Work Experiences</span>
                </div>
            </a>
            <a
                href="#tech-stack-heading"
                className={`hover:text-primary w-fit ${
                    activeSection === "tech-stack" ? "nav-active" : ""
                }`}
            >
                <div className="flex items-center">
                    <span className="navlink-line"></span>
                    <span className="line-height-0">Tech Stack</span>
                </div>
            </a>
            <a
                href="#project-heading"
                className={`hover:text-primary w-fit ${
                    activeSection === "projects" ? "nav-active" : ""
                }`}
            >
                <div className="flex items-center">
                    <span className="navlink-line"></span>
                    <span className="line-height-0">Projects</span>
                </div>
            </a>
            {/* <a
                href="#blog-heading"
                className={`hover:text-primary w-fit ${
                    activeSection === "blog" ? "nav-active" : ""
                }`}
            >
                <div className="flex items-center">
                    <span className="navlink-line"></span>
                    <span className="line-height-0">Blogs</span>
                </div>
            </a> */}

            <a
                href="#contact-heading"
                className={`hover:text-primary w-fit ${
                    activeSection === "contact-form" ? "nav-active" : ""
                }`}
            >
                <div className="flex items-center">
                    <span className="navlink-line"></span>
                    <span className="line-height-0">Contact Me</span>
                </div>
            </a>
        </div>
    );
};

export default Nav;
