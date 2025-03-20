
interface CardProps{
    title: string,
    subtitle: string
}
export default function Card( props: CardProps ){

    return(

        <div className="p-4 border-b boder-1 m-5">
            <h1 className="text-3xl font-bold text-gray-800">{props.title}</h1>
            <p className="text-lg text-gray-600">{props.subtitle}</p>
        </div>
    )
}