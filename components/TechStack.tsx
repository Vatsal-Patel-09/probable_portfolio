"use client";

import { useEffect } from "react";

const TechStack = () => {
  const techStack = [
    <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-html5-plain text-4xl" title="HTML"></i>
    </a>,
    <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
      <i className="devicon-css3-plain text-4xl" title="CSS"></i>
    </a>,
    <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-reactbootstrap-plain text-4xl" title="React Bootstrap"></i>
    </a>,
    <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-javascript-plain text-4xl" title="JavaScript"></i>
    </a>,
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-typescript-plain text-4xl" title="TypeScript"></i>
    </a>,
    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-react-plain text-4xl" title="React"></i>
    </a>,
    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-nodejs-plain text-4xl" title="Node.js"></i>
    </a>,
    <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-express-original text-4xl" title="Express"></i>
    </a>,
    <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-mongodb-plain text-4xl" title="MongoDB"></i>
    </a>,
    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-nextjs-plain text-4xl" title="Next.js"></i>
    </a>,
    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-tailwindcss-plain text-4xl" title="Tailwind CSS"></i>
    </a>,
    <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-git-plain text-4xl" title="Git"></i>
    </a>,
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <i className="devicon-github-plain text-4xl" title="GitHub"></i>
    </a>,
    <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-docker-plain text-4xl" title="Docker"></i>
    </a>,
    <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-amazonwebservices-plain-wordmark text-4xl" title="AWS"></i>
    </a>,
    <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-vercel-plain text-4xl" title="Vercel"></i>
    </a>,
    <a href="https://www.render.com/" target="_blank" rel="noopener noreferrer">
      Render
    </a>,
    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
      <i className="devicon-python-plain text-4xl" title="Python"></i>
    </a>,
  ];

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if(!window.matchMedia("(preferes-reduce-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
            // Iterate through each scroller element
            scrollers.forEach((scroller) => {
                // Set the data-animated attribute to true
                scroller.setAttribute("data-animated", "true");

                // Get the .scroller__inner element within the scroller
                const scrollerInner = scroller.querySelector(".scroller__inner");
                // Get the children of the .scroller__inner element
                const scrollerContent = Array.from(scrollerInner?.children as HTMLCollectionOf<HTMLElement>);
                
                // For each item in the scroller content
                scrollerContent.forEach((item) => {
                    // Create a copy of the item
                    const duplicatedItem = item.cloneNode(true);
                    // Set the aria-hidden attribute to true for the duplicated item
                    (duplicatedItem as HTMLElement).setAttribute('aria-hidden', 'true');
                    // Append the duplicated item to the scrollerInner
                    scrollerInner?.appendChild(duplicatedItem);
                })
            })  

        }
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="scroller">
        <div className="flex flex-nowrap gap-4 justify-center md:justify-start scroller__inner">
            {techStack.map((tech, i) => (
            <div
                key={i}
                className="bg-transparent text-secondary-content rounded px-4 py-2 font-bold shadow-lg carousel-item"
            >
                <div className="text-center">
                    {tech}
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
