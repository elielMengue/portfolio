import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-tertiary p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
                    EM
                </div>
            </div>

          
            <button 
                className="md:hidden text-2xl" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-tertiary md:bg-transparent flex flex-col md:flex-row md:items-center transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
                <div className="flex flex-col md:flex-row md:gap-4 text-center md:text-left font-medium">
                    <Link href="/" className="mx-2 p-2 hover:underline">AboutMe</Link>
                    <Link href="/portfolio" className="mx-2 p-2 hover:underline">Portfolio</Link>
                    <Link href="/blog" className="mx-2 p-2 hover:underline">Blog</Link>
                </div>
                <div className="flex justify-center md:justify-start my-3 px-3 font-medium items-center gap-1">
                    <Link href="/contact" className="underline">Contact</Link>
                    <MdArrowOutward />
                </div>
            </div>
        </div>
    );
}
