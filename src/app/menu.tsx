import Link from "next/link";


export default function Menu() {
    return (
        <div className="flex justify-between bg-gray-200">

            <div className="my-3 px-3 font-medium">
                <Link href="/" className="mx-2">Home</Link>
                <Link href="/about" className="mx-2">About Me</Link>
                <Link href="/contact" className="mx-2">Contact</Link>
                <Link href="/blog" className="mx-2">Blog</Link>
            </div>

            <div className="my-3 px-3 underline font-medium">
                <Link href="">Book Appointment</Link>
            </div>
        </div>
    );
}