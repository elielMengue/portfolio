import React from "react"


interface ComponentProp{
    title: string,
    subtitle: string,
    text: string,
    button1: React.ReactNode,
    button2: React.ReactNode
}

export default function Component(props: ComponentProp){

    return(

        <div className="border-b border-b-neutral-300 flex justify-between py-4 m-4 relative">
            <div>
                <h3 className="text-gray-600 font-bold">{props.title}</h3>
                <p className="text-gray-400 text-ligth">{props.subtitle}</p>
            </div>

            <div>
                <p className="text-gray-500  text-ligth">{props.text}</p>
            </div>

            <div className="flex">
                <div className="bg-tertiary p-3 text-ligth text-gray-500 rounded-2xl mx-2">{props.button1}</div>
                <div className="bg-tertiary p-3 text-ligth text-gray-500 rounded-2xl">{props.button2}</div>
            </div>
        </div>
    )
}