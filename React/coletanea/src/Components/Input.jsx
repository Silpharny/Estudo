export default function Input(props) {

    return(
        <>
            <input type={props.type} className="w-60 h-10 px-2 bg-gradient-to-r from-zinc-400 bg-transparent border border-r-0 border-l-zinc-300 border-y-zinc-800 rounded-md" id={props.id} />
        </>
    )
}  