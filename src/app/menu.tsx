import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";


export default function Menu() {
    return (
        <div className="flex justify-between p-4">

            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
                        EM
                </div>

                <div className="my-3 px-3 font-medium">
                    <Link href="/" className="mx-2">AboutMe</Link>
                    <Link href="/portfolio" className="mx-2">Portfolio</Link>
                    <Link href="/blog" className="mx-2">Blog</Link>
                </div>

            </div>
        
            <div className="my-3 px-3 flex">
                <div className="underline font-medium">
                <Link href="/contact">Contact</Link>
                </div>
               <div>
                    <MdArrowOutward />
               </div>

            </div>
        </div>
    );
}