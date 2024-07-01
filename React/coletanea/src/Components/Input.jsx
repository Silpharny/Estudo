export default function Input(props) {

    return(
        <>
            <input type={props.type} placeholder={props.placeholder} className="w-60 h-10 px-2 bg-gradient-to-r from-zinc-400 bg-transparent border border-r-0 border-l-zinc-300 border-y-zinc-800 rounded-md outline-none placeholder:text-zinc-300" id={props.id} />
        </>
    )
}  