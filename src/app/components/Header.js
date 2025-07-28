"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/logo.png"
import { FaBars } from "react-icons/fa6";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["home", "about", "services","skills", "projects", "contact"];

  return (
    <header className="fixed w-full bg-white/30 backdrop-blur-xs shadow z-50">
      <div className="container mx-auto px-6 flex justify-between items-center shadow-xl  ">
        <Link href="#home" className="text-2xl font-bold text-indigo-600">
          <Image
            src={Logo}
            alt="logo"
            width={40}
            height={50}
            className="scale-130"
          />
        </Link>

        <button className="lg:hidden text-lg text-zinc-900 cursor-pointer" onClick={toggleMenu}>
          <FaBars/>
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-full left-0 w-full lg:w-auto bg-white/60 backdrop-blur-lg lg:bg-transparent lg:flex items-center lg:space-x-8 p-6 lg:p-0 shadow-lg lg:shadow-none`}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="block py-2 px-4 text-gray-800 text-sm hover:text-blue-700 lg:hover:scale-105 capitalize "
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
