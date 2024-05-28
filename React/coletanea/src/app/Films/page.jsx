import Image from "next/image";
import ContainerOutput from "@/Components/ContainerOutput";
import Input from "@/Components/Input";
import FilmIcon from '../../../public/assets/filmIcon.svg'

export default function Films() {
  return(
    <div className="w-full flex flex-col gap-4">
      <div>
        <p className="font-semibold">Cadastre os filmes de sua preferência</p>
        <p className="font-light">Pronto para cadastrar?</p>
      </div>
      
      <div className="p-5 flex flex-col items-center gap-6 bg-gradient-to-r from-blue-950/[.80] rounded-md border border-l-slate-50/[.60] border-y-slate-50/[.30] border-r-slate-50/[.10]">
        
        <h1 className="font-black text-3xl">Filmes</h1>
        <Image src={FilmIcon} className="w-20" alt="icon" />
        
        <div className="flex gap-32">

          <div className="flex flex-col gap-2 items-start">
            <label className="text-orange font-bold text-lg" htmlFor="name">Nome</label>
            <Input type="text" id="name" />
          </div>

          <button className="w-60 h-10 px-2 self-end bg-green rounded-md text-black font-bold">Cadastrar</button>
        </div>

      </div>
        
    </div>
  );
  }