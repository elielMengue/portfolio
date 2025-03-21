
import Image from 'next/image';
import { GrLinkNext } from 'react-icons/gr';

const portfolioData = [
    {
        image: "/images/web.jpg",
        title: "Halo company website",
        details: "see project details on github : https://github.com/elielMengue",
        id:1
    },

    {
        image: "/images/web1.jpg",
        title: "Interne message application",
        details: "see project details on github: https://github.com/elielMengue",
        id:2
    },

    {
        image: "/images/mobile.jpg",
        title: "Mobile app",
        details: "see project details on github: https://github.com/elielMengue",
        id:3
    },
]

export default function Page (){

    const PortfolioItems = () => {
        return portfolioData.map((item) => (
            <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex justify-center gap-2 flex-wrap relative">
                <Image src={item.image} alt={item.title} width={400} height={300} className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <p className="text-gray-700 text-base">{item.details}</p>
                </div>
            </div>
        ));
    };
    return (

        <div className="w-screen h-screen bg-tertiary">
            <div className="flex justify-center mt-4">
                <h1 className="text-3xl text-gray-800 font-bold">Latest Achivements</h1>
            </div>
          
            <div className="mt-4 flex justify-center gap-2 flex-wrap">
                    {<PortfolioItems />}
            </div>

                <div className=" text-gray-700 text-lg flex justify-center rounded-2xl">
                  
                    <button className="underline"> <GrLinkNext className='w-50 h-10 font-bold  text-lg'/>See more</button>
                </div>
            
       </div>
    )
}