import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaInstagram } from "react-icons/fa";
import Nav from "./Nav";

const SideSection = () => {

  return (
    <div className="sticky top-0 md:h-screen text-center md:text-start py-4 md:py-[4rem] mb-[5rem] md:mb-0 flex flex-col justify-between gap-10">
        <div id="intro" className="pt-10 md:pt-0">
            <h1 className="text-4xl font-bold mb-8 ">Vatsal Patel</h1>
            <h3 className="text-xl mb-8">•Software Developer - Fullstack<br />•AI/ML Enthusiast</h3>
            <p className="text-sm"><span className="font-bold text-primary">Open to SDE (Web or AI/ML) </span>roles, internships, and collaborations.</p>
        </div>

        <Nav />
        
        <div id="contact" className="flex justify-center md:justify-start items-center gap-3">
            <a href="mailto:vatsalpatel952005@gmail.com" target="_blank" className="mr-4" rel="noopener noreferrer">
                <FaEnvelope size={30} />
            </a>
            <a href="https://www.linkedin.com/in/vatsalpatel09/" target="_blank" className="mr-4" rel="noopener noreferrer">
                <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/Vatsal-Patel-09" target="_blank" className="mr-4" rel="noopener noreferrer">
                <FaGithub size={30} />
            </a>
            <a href="https://www.instagram.com/vatsal_patel_09/" target="_blank" className="mr-4" rel="noopener noreferrer">
                <FaInstagram size={30} />
            </a>
            {/* <a href="https://twitter.com/JerryClarkIan" target="_blank" className="mr-4" rel="noopener noreferrer">
                <FaTwitter size={30} />
            </a> */}
            {/* <a href="https://www.facebook.com/jerryclarkian.cabuntucan/" target="_blank" className="mr-4" rel="noopener noreferrer">
                <FaFacebook size={30} />
            </a> */}            
        </div>
    </div>
  )
}

export default SideSection
