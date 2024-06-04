function ButtonFill(props) {
    return (
        <a href={props.link}><button className="bg-zinc-900 px-3 py-2 font-medium rounded-lg text-white cursor-pointer border hover:border-zinc-900 hover:bg-transparent hover:text-black">{props.title}</button></a>
    )
}

export default ButtonFill