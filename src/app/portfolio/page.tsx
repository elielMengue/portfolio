import image1 from '../../../public/images/image1.webp';
import image2 from '../../../public/images/image2.webp';
import Image from 'next/image';


export default function Page (){

    return (
        <div className="w-screen h-screen bg-tertiary">
            <div className="flex justify-center mt-4">
                <h1 className="text-3xl text-gray-800 font-bold">Latest Achivements</h1>
            </div>
          
            <div className="mt-4 flex justify-center gap-4 flex-wrap m-5">
                <Component 
                    image={<Image src={image1} alt="image" className='object-cover rounded-2xl'/>} 
                    description={'Halo Digital Agency Website'} 
                />

                <Component 
                    image={<Image src={image2} alt="image" className='object-cover rounded-2xl'/>} 
                    description={'Halo Digital Agency Website'} 
                />

                <Component 
                    image={<Image src={image2} alt="image" className='object-cover rounded-2xl'/>} 
                    description={'Halo Digital Agency Website'} 
                />

                <Component 
                    image={<Image src={image2} alt="image" className='object-cover rounded-2xl'/>} 
                    description={'Halo Digital Agency Website'} 
                />

                
                <Component 
                    image={<Image src={image2} alt="image" className='object-cover rounded-2xl'/>} 
                    description={'Halo Digital Agency Website'} 
                />

                
                <Component 
                    image={<Image src={image2} alt="image" className='object-cover rounded-2xl'/>} 
                    description={'Halo Digital Agency Website'} 
                />

                
                <Component 
                    image={<Image src={image2} alt="image" className='object-cover rounded-2xl'/>} 
                    description={'Halo Digital Agency Website'} 
                />

                
                <Component 
                    image={<Image src={image2} alt="image" className='object-cover rounded-2xl'/>} 
                    description={'Halo Digital Agency Website'} 
                />

                
            </div>

            
       </div>
    )
}
interface ComponentProp{

    image: React.ReactNode,
    description: string
}

function Component (props: ComponentProp){

    return(

        <>
        <div className=''>
            <div className="w-60 h30 rounded-2xl mx-3">{props.image}</div>
            <div className="text-gray-400 text-ligth mx-5">{props.description}</div>
        </div>
            
        </>
    )
}