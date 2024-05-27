import Logo from "./Logo"
import Navbar from "./Navbar"


export default function Header() {
    return(
        <header className="w-3/5 p-5 mt-4 flex justify-between align-middle items-center bg-gradient-to-r from-blue-950/[.80] rounded-md border border-l-slate-50/[.60] border-y-slate-50/[.30] border-r-slate-50/[.10]">
            <Logo />
            <Navbar />
        </header>
    )
}