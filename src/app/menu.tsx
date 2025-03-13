import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";


export default function Menu() {
    return (
        <div className="flex justify-between bg-gray-200 p-4">

            <div className="my-3 px-3 font-medium">
                <Link href="/" className="mx-2">Home</Link>
                <Link href="/about" className="mx-2">About Me</Link>
                <Link href="/blog" className="mx-2">Blog</Link>
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