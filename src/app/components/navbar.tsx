

import Link from "next/link";
export default function Navbar() {
    return (
     
      <div className="text-white w-full">
      <div className="flex flex-col sm:flex-row justify-between bg-black text-center p-4">
        <div className="flex justify-center sm:justify-start">
          <h1 className="text-stone-400 text-2xl font-semibold hover:text-red-500">
            𝕰𝕹
          </h1>
        </div>
        <div>
          <ul className="flex flex-col sm:flex-row gap-5 sm:gap-8 mt-4 sm:mt-0">
            <li><a href="/" className="hover:text-red-500">HOME</a></li>
            <li><a href="Skills" className="hover:text-red-500">SKILLS</a></li>
            <li><a href="Resume" className="hover:text-red-500">RESUME</a></li>
            <li><a href="Portfolio" className="hover:text-red-500">PORTFOLIO</a></li>
            <li><a href="Contact" className="hover:text-red-500">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    );
  }
  