import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { PiXLogoBold } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-900 text-white">
            <div className="flex items-center gap-6">
                <motion.div 
                    className="w-14 h-14 bg-tertiary rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                >
                    EM
                </motion.div>

        
                <nav className="flex gap-4 text-tertiary font-medium">
                    <Link href="/" className="hover:text-white transition">About Me</Link>
                    <Link href="/portfolio" className="hover:text-white transition">Portfolio</Link>
                    <Link href="/blog" className="hover:text-white transition">Blog</Link>
                </nav>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4 mt-4 md:mt-0">
                <div className="flex gap-4 text-tertiary text-2xl">
                    <SiWhatsapp className="hover:text-green-500 transition cursor-pointer" />
                    <PiXLogoBold className="hover:text-gray-500 transition cursor-pointer" />
                    <FaFacebook className="hover:text-blue-500 transition cursor-pointer" />
                </div>
                
                <div className="flex items-center gap-2 text-tertiary text-lg font-medium underline">
                    <Link href="/contact" className="hover:text-white transition">contact@em.com</Link>
                    <MdArrowOutward className="text-xl" />
                </div>
            </div>
        </div>
    );
}