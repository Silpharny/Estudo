function ButtonFill(props) {
    return (
        <button className="bg-zinc-900 px-3 py-1 font-medium rounded-lg text-white cursor-pointer border hover:border-zinc-900 hover:bg-transparent hover:text-black">{props.title}</button>
    )
}

export default ButtonFill