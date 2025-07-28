import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Man from "../images/hero-removebg-preview.png"

export default function Hero() {

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col-reverse lg:flex-row items-center justify-center px-16 
      pt-26 lg:pt-24 gap-10 text-black ">
      
    {/* Social Icons */}
        <div className="h-full flex lg:flex-col sm:pb-10 justify-center lg:justify-start mt-6 gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/prakhar-pratap-singh-1a89b826a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-600 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/prakharpratapsingh21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:scale-110"
          >
            <FaGithub/>
          </a>
          <a
            href="https://www.instagram.com/prakharpratap_singh_?igsh=a3licWplMjBobW81"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-600 hover:scale-110"
          >
            <FaInstagram/>
          </a>
        </div> 
      
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left ">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-800 mb-6">
            Hi, I am <span className="text-blue-700">Prakhar</span><br />
            a Creative <span className="text-blue-700">Frontend</span> Developer
          </h1>
          <p className="text-gray-600  mb-6">
            I create visually appealing and user-friendly websites.
          </p>
          {/* <a
            href="#contact"
            className="inline-block text-black px-8 border-blue-700 border-[1.5px] py-2 rounded-xl shadow hover:bg-blue-700 hover:text-white transition"
          >
            Hire Me
          </a> */}
          <div className="flex items-center justify-center gap-6">
            <div className="relative inline-block group">
              {/* Glowing Background */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500 
                blur-xl overflow-hidden opacity-90 group-hover:opacity-100 transition duration-300 z-0"></span>
              {/* Actual Button */}
              <a href="#contact"
                className="relative inline-block text-black px-8 py-2 border-white border-[1.5px] rounded-lg 
               hover:border-black hover:scale-105 hover:text-white transition z-10">
               Hire Me
              </a>
            </div>
            {/* Download Resume Button */}
            <div className="relative inline-block group">
              {/* Glowing Background */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500 
                blur-xl overflow-hidden opacity-90 group-hover:opacity-100 transition duration-300 z-0"></span>
              {/* Actual Button */}
              <a 
                href="/Prakhar_Frontend.pdf"
                download
                className="relative inline-block text-black px-8 py-2 border-white border-[1.5px] rounded-lg 
               hover:border-black hover:scale-105 hover:text-white transition z-10">
                Download Resume 
              </a>
            </div>
          </div>

        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* The Image */}
            <Image
              src={Man}
              alt="Hero"
              width={400}
              height={400}
              className="object-contain z-10"
              priority
            />

            {/* The Shadow/Glow */}
            {/* <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-36 h-4 bg-indigo-500 blur-xl opacity-40 rounded-full z-0" /> */}
             <div className="absolute bottom-2 left-[65%] w-[18%] h-2 bg-gray-400 blur-sm rounded-full z-0"></div> 
          </div>
        </div>

    </section>
  );
}
