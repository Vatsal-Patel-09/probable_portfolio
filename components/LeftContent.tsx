import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";
import Nav from "./Nav";

const LeftContent = () => {

  return (
    <div className="sticky top-0 md:h-screen text-center md:text-start p-4 md:p-[4rem] mb-[5rem] md:mb-0 pe-2 flex flex-col justify-between gap-10">
        <div id="intro" className="pt-10 md:pt-0">
            <h1 className="text-4xl font-bold mb-8 ">Jerry Clark Ian Cabuntucan</h1>
            <h3 className="text-xl mb-8">Full Stack Web Developer - Cloud Enthusiast</h3>
            <p className="text-sm">Empowering Web Innovation with Fullstack Expertise</p>
        </div>

        <Nav />
        
        <div id="contact" className="flex justify-center md:justify-start items-center gap-3">
            <a href="https://github.com/Ayan0420" target="_blank" className="mr-4" rel="noopener noreferrer">
                <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/jerry-clark-ian-cabuntucan-277223228/" target="_blank" className="mr-4" rel="noopener noreferrer">
                <FaLinkedin size={30} />
            </a>
            <a href="https://twitter.com/JerryClarkIan" target="_blank" className="mr-4" rel="noopener noreferrer">
                <FaTwitter size={30} />
            </a>
            <a href="https://www.facebook.com/jerryclarkian.cabuntucan/" target="_blank" className="mr-4" rel="noopener noreferrer">
                <FaFacebook size={30} />
            </a>
            <a href="mailto:jeryclarkc0420@gmail.com" target="_blank" className="mr-4" rel="noopener noreferrer">
                <FaEnvelope size={30} />
            </a>
        </div>
    </div>
  )
}

export default LeftContent
