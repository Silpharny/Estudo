import Link from "next/link"

export default function Navbar() {
    
    return(
        <ul className="flex gap-5 font-medium text-lg">
            <li className="text-slate-50 transition-colors hover:text-slate-500"><Link href='/'>Home</Link></li>
            <li className="text-slate-50 transition-colors hover:text-slate-500"><Link href='/Users'>Usuários</Link></li>
            <li className="text-slate-50 transition-colors hover:text-slate-500"><Link href='/Films'>Filmes</Link></li>
            <li className="text-slate-50 transition-colors hover:text-slate-500"><Link href='/Generous'>Gênero</Link></li>
        </ul>
    )
}