
export default function ContainerOutput() {
  return (
    <div className="p-10 flex flex-col items-center gap-8 bg-gradient-to-r from-blue-950/[.80] rounded-md border border-l-slate-50/[.60] border-y-slate-50/[.30] border-r-slate-50/[.10]">

    <div className="w-full flex items-center justify-around border-b border-zinc-400/[.40] pb-3">
        <p>Jośe Algusto</p>
        <p>paulo@email.com</p>
        <p>99999-9999</p>

        <div className="flex gap-4">
            <button className="w-28 h-9 px-2 bg-yellow rounded-md text-black font-bold">Editar</button>
            <button className="w-28 h-9 px-2 bg-orange rounded-md text-black font-bold">Excluir</button>
        </div>
    </div>


    <div className="w-full flex items-center justify-around border-b border-zinc-400/[.40] pb-3">
        <p>Jośe Algusto</p>
        <p>paulo@email.com</p>
        <p>99999-9999</p>

        <div className="flex gap-4">
            <button className="w-28 h-9 px-2 bg-yellow rounded-md text-black font-bold">Editar</button>
            <button className="w-28 h-9 px-2 bg-orange rounded-md text-black font-bold">Excluir</button>
        </div>
    </div>

    

    </div>
  );
}
