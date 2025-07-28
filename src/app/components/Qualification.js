"use client";
import { useState } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function Qualification() {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = {
    education: [
      {
        title: "Master's of Computer Applications",
        subtitle: "Mangalayatan University, Aligarh",
        year: "2023 - 2025",
      },
      {
        title: "Bachelor's of Computer Applications",
        subtitle: "Chaudhary Charan Singh University, Meerut",
        year: "2020 - 2023",
      },
      {
        title: "Senior Secondary Education",
        subtitle: "CBSE Board",
        year: "2020",
      },
    ],
    experience: [
      {
        title: "Frontend Developer",
        subtitle: "Freelancer",
        year: "April-2025 - Present",
      },
      {
        title: "Web Developer Intern",
        subtitle: "Codsoft",
        year: "Feb-March-2025",
      },
    ],
  };

  return (
    <section id="qualification" className="py-10 px-20 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Qualification</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            className={`flex items-center gap-2 px-4 py-2 border-b-2 ${
              activeTab === "education"
                ? "border-indigo-600  text-indigo-600"
                : "border-transparent text-gray-700"
            }`}
            onClick={() => setActiveTab("education")}
          >
            <FaGraduationCap /> Education
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 border-b-2 ${
              activeTab === "experience"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-700"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            <FaBriefcase /> Experience
          </button>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-indigo-200 pl-6 space-y-10 text-left">
          {tabs[activeTab].map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute left-[-13px] top-2 w-3 h-3 bg-indigo-600 rounded-full"></span>
              <h3 className="text-lg font-semibold text-gray-800 pl-2">{item.title}</h3>
              <p className="text-gray-600 pl-2">{item.subtitle}</p>
              <span className="text-sm font-normal text-slate-400 pl-2">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
