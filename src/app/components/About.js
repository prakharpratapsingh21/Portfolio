import Image from "next/image";
import Profile2 from "../images/aboutprofile.png"

export default function About() {
  return (
    <section id="about" className="py-4 px-20 ">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src={Profile2}
            alt="About Alexa"
            width={450}
            height={450}
            className="rounded-lg  object-cover "
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 leading-none">About Me </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            I am Prakhar Pratap Singh, a passionate and detail-oriented 
            frontend developer with a strong foundation in building user-friendly 
            and responsive web interfaces. Proficient in modern technologies like 
            HTML, CSS, JavaScript, React, and Tailwind CSS, I am committed to crafting 
            visually appealing and functional websites.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            As a fresher, I bring enthusiasm, a willingness to learn, and a dedication 
            to delivering high-quality work. I am excited to contribute my skills to 
            innovative projects and grow as a professional in the ever-evolving field 
            of web development.<br/>
            My designs are focused on usability and performance, ensuring that
            users have a seamless experience across devices.
          </p>
        </div>
      </div>
    </section>
  );
}
