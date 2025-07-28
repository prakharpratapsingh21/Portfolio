import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-600 py-1 text-center  ">
      {/* <h3 className="text-lg font-bold text-white">Prakhar Pratap Singh</h3> */}

      {/* <div className="flex justify-center gap-6  text-xl mb-2 mt-2">
        <a href="#" aria-label="Facebook" className="text-blue-700 hover:text-blue-800">
         <FaFacebook/>
        </a>
        <a href="#" aria-label="Instagram" className="text-pink-600 hover:text-pink-700">
          <FaInstagram/>
        </a>
        <a href="#" aria-label="Twitter" className="text-gray-800 hover:text-black">
          <FaXTwitter />
        </a>
      </div> */}

      <p className="text-gray-300 text-sm pt-1">
        © {new Date().getFullYear()} Prakhar Pratap Singh. All rights reserved.
      </p>
    </footer>
  );
}
