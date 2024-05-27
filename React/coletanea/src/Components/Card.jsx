import Image from "next/image"

export default function Card(props) {
    return(
        <div className="w-72 h-52 p-3 flex flex-col items-center justify-end text-center bg-gradient-to-r from-slate-600 rounded-md border-2 border-l-slate-500 border-r-slate-900 border-y-slate-700">
            
            <Image src={props.icon} className="w-20 relative bottom-6" alt="icon" />
            
            <h3 className="text-orange text-3xl font-bold">{props.title}</h3>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nisi inventore totam earum at officiis ut reprehenderit aperiam</p>
        </div>
    )
}