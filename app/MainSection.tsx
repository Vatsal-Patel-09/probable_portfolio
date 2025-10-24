import ContactForm from "@/components/ContactForm"
import dynamic from 'next/dynamic'
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import Blog from "../components/Blog"
import ExperienceCard from "../components/ExperienceCard"
import ProjectCard from "../components/ProjectCard"
import Footer from "./Footer"

// Import JSON data
import experiencesData from "@/data/experiences.json"
import projectsData from "@/data/projects.json"

// To disable SSR for CursorEffectComponent
const TechStack = dynamic(() => import('@/components/TechStack'), { ssr: false })


const MainSection = async () => {
  
  // Sort by order field (descending)
  const experiences = [...experiencesData].sort((a, b) => b.order - a.order);
  const projects = [...projectsData].sort((a, b) => b.order - a.order);

  // console.log(projects)
  
  return (
    <>
      <section className="leading-loose text-center md:text-start" id="about">
        <h1 className="block md:hidden text-2xl font-bold mb-5 text-center md:text-start" id="projects-heading">About</h1>
          <p className="mb-3">
          Hi! I'm a passionate programmer hailing from Misamis Oriental, Philippines. I specialize in <span className="font-bold text-primary">building seamless and robust web applications</span>, focusing on modern web development technologies. Alongside my development work, I have a strong interest in all things tech, particularly<span className="font-bold text-primary"> system administration,</span> <span className="font-bold text-primary">cloud technologies</span> and <span className="font-bold text-primary">automation (DevOps)</span>.
          </p>
          <p className="mb-3 ">
          Currently, I am working as an IT instructor, where I get to share my knowledge and inspire the next generation of tech enthusiasts. My enthusiasm for technology drives me to constantly learn and grow. I'm a problem solver and a fast learner, always open to new learning opportunities and eager to embrace new challenges and bring a high level of passion and dedication.
          </p>
          
      </section>
      <section className="pt-[5rem]" id="work-experience">
        
        <h1 className="text-2xl font-bold mb-5 pt-5 text-center md:text-start" id="work-experience-heading">Work Experiences</h1>
        
        <div className="flex flex-col md:flex-row gap-3 mb-8 justify-center md:justify-start">
          <a href="https://drive.google.com/file/d/1-1KpXJFWcCO5yR7GT_RbR8LKFUEHfwUc/view?usp=sharing" target="_blank" className="btn hover:scale-110 transition duration-300 ease-in-out">
            AI/ML Resume
            <FaArrowUpRightFromSquare className="mr-1" />
          </a>
          <a href="https://drive.google.com/file/d/1lNslpqA7robr3nJ1UQ19PWml--clO3wl/view?usp=sharing" target="_blank" className="btn hover:scale-110 transition duration-300 ease-in-out">
            Full stack Resume
            <FaArrowUpRightFromSquare className="mr-1" />
          </a>
        </div>
        
        {
          experiences.map((exp, index) => {
            if(exp.status !== "published") return
            return <ExperienceCard key={index} year={exp.year} company={exp.company} title={exp.title} description={exp.description} techStack={exp.techStack} />
          })
        }
        
      </section>

      <section className="pt-[5rem]" id="tech-stack">
        <h1 className="text-2xl font-bold mb-5 pt-5 text-center md:text-start" id="tech-stack-heading">
          Tech Stack
        </h1>
        <p className="mb-3">I use these technologies to build my projects.</p>
        <TechStack />
      </section>
      
      <section className="min-h-screen pt-[5rem]" id="projects">
          <h1 className="text-2xl font-bold mb-5 pt-5 text-center md:text-start" id="project-heading">Projects</h1>
          
          {
            projects.map((project, index) => {
              if(project.status !== "published") return
              return <ProjectCard key={index} name={project.name} description={project.description} tags={project.tags} thumbnail={project.thumbnail} href={project.href} />
            })
          }


          <div className="mt-10">
              <h1 className="text-lg font-bold mb-3 text-center md:text-start">Other Projects</h1>
              <ul className="list-disc pl-5">
                <li>
                  <a href="https://ayan-blog.onrender.com/" target="_blank" className="text-blue-500 hover:text-blue-300">
                    Simple Blog Site - Node.js, Express.js, EJS, MongoDB
                  </a>
                </li>
                <li>
                  <a href="https://comtech.jcic.online/" target="_blank" className="text-blue-500 hover:text-blue-300">
                    Buisiness Website - HTML, CSS, Boostrap, Javascript
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Ayan0420/comtech-dashboard-order-management-system" target="_blank" className="text-blue-500 hover:text-blue-300">
                    Buisiness Dashboard/IS - Node.js, Express.js, Charts.js, MongoDB
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Ayan0420/ComtechJobOrderSystemflask" target="_blank" className="text-blue-500 hover:text-blue-300">
                    Job Order Management System - Python, Flask, Flaskwebgui, Bootstrap, SQLite
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Ayan0420/comtech-dashboard-order-management-system" target="_blank" className="text-blue-500 hover:text-blue-300">
                    Job Order Tracking System - Node.js, Express.js, Charts.js, MongoDB
                  </a>
                </li>
                <li>
                  <a href="https://movie-search-jcei.onrender.com/" target="_blank" className="text-blue-500 hover:text-blue-300">
                    Simple Movie Search App - React.js, OMDB API
                  </a>
                </li>
              </ul>
          </div>
          
      </section>
      
      {/* <section className="pt-[5rem]" id="blog">
          
          <Blog />
          
      </section> */}

      <section id="contact-form" className="pt-[5rem] min-h-screen">
        <h1 id="contact-heading" className="text-2xl font-bold text-center md:text-start mb-3 pt-5">Contact</h1>
        <p className="mb-3 text-center md:text-start">Have a question or interested in working together?</p>
        <ContactForm />
      </section>

      <section>
        <Footer />
      </section>
    </>

  )
}

export default MainSection