import ContainerOutput from "@/Components/ContainerOutput";
import Input from "@/Components/Input";

export default function Users() {
    return(
      <div className="w-full flex flex-col gap-4">
        <div>
          <p className="font-semibold">Faça o cadastro de usuários e edite, caso necessário</p>
          <p className="font-light">Pronto para cadastrar?</p>
        </div>
        
        <div className="p-5 flex flex-col items-center gap-6 bg-gradient-to-r from-blue-950/[.80] rounded-md border border-l-slate-50/[.60] border-y-slate-50/[.30] border-r-slate-50/[.10]">
          
          <h1 className="font-black text-3xl">Cadastro</h1>

          <div className="flex gap-32">

            <div className="flex flex-col gap-2 items-start">
              <label className="text-orange font-bold text-lg" htmlFor="name">Nome</label>
              <Input type="text" id="name" />
            </div>
            
            <div className="flex flex-col gap-2 items-start">
              <label className="text-orange font-bold text-lg" htmlFor="email">Email</label>
              <Input type="email" id="email" />
            </div>
            
            <div className="flex flex-col gap-2 items-start">
              <label className="text-orange font-bold text-lg" htmlFor="tel">Telefone</label>
              <Input type="tel" id="tel" />
            </div>

          </div>

          <button className="w-60 h-10 px-2 bg-green rounded-md text-black font-bold">Cadastrar</button>
        </div>
          <ContainerOutput />
      </div>
    );
  }