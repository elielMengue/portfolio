import Image from 'next/image';

const BlogData = [
    {
        image: "/images/eth.png",
        title: "etherum powerfull tools",
        readtime: "10 min read",
        details: "Read full article here",
        link: "https://github.com/elielMengue",
        id: 1
    },
    {
        image: "/images/webconnector.jpg",
        title: "Deploy your smart contract",
        readtime: "10 min read",
        details: "See the full article",
        link: "https://github.com/elielMengue",
        id: 2
    },
    {
        image: "/images/free.png",
        title: "Set up SQlite for your project",
        readtime: "10 min read",
        details: "Discover SQlite",
        link: "https://github.com/elielMengue",
        id: 3
    },
];

export default function Page() {
    return (
        <div className="bg-gray-100 min-h-screen p-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Design Insights & Trends</h1>
                <div className="grid md:grid-cols-2 gap-6">
                    {BlogData.map((item) => (
                        <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Image src={item.image} alt={item.title} width={400} height={250} className="w-full h-48 object-cover" />
                            <div className="p-5">
                                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                                <p className="text-gray-600 text-sm mb-2">{item.readtime}</p>
                                <a href={item.link} target="_blank" className="text-blue-500 hover:underline">{item.details}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='bg-secondary w-full py-16 px-6 text-center mt-10 rounded-lg shadow-lg'>
                <h1 className='text-3xl font-bold text-gray-900 mb-4'>Got a Vision? Lets Bring It to Life</h1>
                <p className='text-gray-700 text-lg max-w-2xl mx-auto'>
                    I am always excited to collaborate on new projects. Whether you are starting from scratch or refining an existing idea, lets work together to make it a reality.
                </p>
            </div>
        </div>
    );
}