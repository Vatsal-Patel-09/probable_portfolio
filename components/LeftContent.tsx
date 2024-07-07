"use client"
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";
import Nav from "./Nav";

const LeftContent = () => {


  return (
    <div className="sticky top-0 h-screen p-[4rem] pe-2 flex flex-col justify-between">
        <div id="intro">
            <h1 className="text-5xl font-bold mb-8">Jerry Clark Ian Cabuntucan</h1>
            <h3 className="text-2xl mb-8">Full Stack Web Developer - Cloud Enthusiast</h3>
            <p>Empowering Web Innovation with Fullstack Expertise</p>
        </div>

        <Nav />
        
        <div id="contact" className="flex items-center gap-3">
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
