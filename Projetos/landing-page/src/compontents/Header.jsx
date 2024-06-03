import ButtonFill from "./ButtonFill"
import ButtonNoFill from "./ButtonNoFill"

function Header() {
    return(
        <header className="w-full h-16 px-5 flex justify-around items-center shadow-sm shadow-zinc-300">
            <h1 className="font-bold text-2xl cursor-default">Logo</h1>
            <nav>
                <ul className="flex gap-6">
                    <li className="px-3 py-1 cursor-pointer hover:opacity-65">Blog</li>
                    <li className="px-3 py-1 cursor-pointer hover:opacity-65">Docs</li>
                    <li className="cursor-pointer"><ButtonNoFill title="Login" /></li>
                    <li className="cursor-pointer"><ButtonFill title="Get Started" /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header