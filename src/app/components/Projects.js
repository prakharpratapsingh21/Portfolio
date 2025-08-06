
import Proj1 from "../images/proj1.png"
import Proj2 from "../images/proj2.jpg"
import Proj3 from "../images/proj3.jpg"
import Pixarc from "../images/Pixarc.jpg"
import Proj4 from "../images/proj4.jpg"
import Proj5 from "../images/proj5.jpg"
import Proj6 from "../images/proj6.jpg"
import Image from "next/image";

const projects = [
  { id: 1, image: Proj1, alt: "Project 1", src:"https://pixarc.vercel.app/" },
  { id: 2, image: Proj2, alt: "Project 2" },
  { id: 3, image: Proj3, alt: "Project 3", src:"https://exoape-website-clone-eight.vercel.app/" },
  { id: 4, image: Proj4, alt: "Project 4", src:"https://refokus-clone-gamma.vercel.app/" },
  { id: 5, image: Proj5, alt: "Project 5", src:"https://portfolio-ed4o.vercel.app/" },
  { id: 6, image:Proj6, alt: "Project 6" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-24 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Projects</h2>

        <div className="grid grid-cols-1 sm:px-20 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="overflow-visible rounded-lg hover:shadow-gray-500 hover:shadow-xl hover:scale-105 transition bg-gray-400">
              <a href={project.src}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={350}
                  className="object-cover w-full  rounded-lg cursor-pointer"/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



