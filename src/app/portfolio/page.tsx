"use client";

import Image from 'next/image';
import { GrLinkNext } from 'react-icons/gr';

const portfolioData = [
    {
        image: "/images/web.jpg",
        title: "Halo Company Website",
        details: "See project details on GitHub",
        link: "https://github.com/elielMengue",
        id: 1
    },
    {
        image: "/images/web1.jpg",
        title: "Internal Messaging Application",
        details: "See project details on GitHub",
        link: "https://github.com/elielMengue",
        id: 2
    },
    {
        image: "/images/mobile.jpg",
        title: "Mobile App",
        details: "See project details on GitHub",
        link: "https://github.com/elielMengue",
        id: 3
    },
];

export default function PortfolioPage() {
    return (
        <div className="w-full min-h-screen bg-gray-100 py-12">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-semibold text-gray-800">Latest Achievements</h1>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                {portfolioData.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <Image src={item.image} alt={item.title} width={400} height={250} className="w-full object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                            <p className="text-gray-600 mt-2">{item.details}</p>
                            <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="mt-4 inline-flex items-center text-primary hover:underline"
                            >
                                View Project <GrLinkNext className="ml-2" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button className="flex items-center text-lg font-medium text-primary hover:underline">
                    See More <GrLinkNext className="ml-2" />
                </button>
            </div>
        </div>
    );
}
