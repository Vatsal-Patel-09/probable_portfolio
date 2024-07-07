import { useEffect, useState } from "react";

const Nav = () => {

    const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = (): void => {
      const sections = ['about', 'work-experience', 'projects', 'blog'];
      const sectionElements = sections.map(section => document.getElementById(section) as HTMLDivElement | null);

      const scrollPosition = window.scrollY;

      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(sections[i]);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div id="nav" className="hidden lg:flex flex-col justify-start gap-3">
        <a href="#about" className={`hover:text-primary w-fit ${activeSection === 'about' ? 'nav-active' : ''}`}>
            <div className="flex items-center">
                <span className="navlink-line"></span>
                <span className="line-height-0">About</span>
            </div>
        </a>
        <a href="#work-experience-heading" className={`hover:text-primary w-fit ${activeSection === 'work-experience' ? 'nav-active' : ''}`}>
        <div className="flex items-center">
                <span className="navlink-line"></span>
                <span className="line-height-0">Work Experience</span>
            </div>
        </a>
        <a href="#projects-heading" className={`hover:text-primary w-fit ${activeSection === 'projects' ? 'nav-active' : ''}`}>
        <div className="flex items-center">
                <span className="navlink-line"></span>
                <span className="line-height-0">Projects</span>
            </div>
        </a>
        <a href="#blog-heading" className={`hover:text-primary w-fit ${activeSection === 'blog' ? 'nav-active' : ''}`}>
        <div className="flex items-center">
                <span className="navlink-line"></span>
                <span className="line-height-0">Blog</span>
            </div>
        </a>
    </div>
  )

}

export default Nav