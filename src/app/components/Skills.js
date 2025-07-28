import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiGit } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-600 text-5xl" />,
    description: "Structure web pages with semantic HTML elements.",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-600 text-5xl" />,
    description: "Style responsive layouts with modern CSS features.",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-500 text-5xl" />,
    description: "Add interactivity and dynamic behavior to websites.",
  },
  {
    name: "React",
    icon: <FaReact className="text-sky-500 text-5xl animate-spin-slow" />,
    description: "Build reusable UI components and SPAs.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500 text-5xl" />,
    description: "Design fast using utility-first CSS classes.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black text-5xl" />,
    description: "Build performant apps with SSR and routing.",
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-gray-800 text-5xl" />,
    description: "Track code changes and collaborate with teams.",
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-pink-500 text-5xl" />,
    description: "Design and prototype UI/UX interfaces.",
  },
];

export default function SkillsPage() {
  return (
    <section id="skills" className="py-10 px-24 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">My Skills</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-zinc-200 border border-white/40 rounded-xl shadow-lg p-6 flex flex-col 
              items-center justify-center text-center hover:scale-105 hover:bg-white/30 transition">
              {skill.icon}
              <h3 className="text-lg font-semibold mt-4 text-gray-800">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
