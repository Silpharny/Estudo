import Card from "@/Components/Card";

import FilmIcon from '../../public/assets/filmIcon.svg'
import StarIcon from '../../public/assets/starIcon.svg'
import CategoryIcon from '../../public/assets/categoryIcon.svg'

export default function Home() {
  return (
    <div className="w-full p-10 bg-gradient-to-r from-blue-950/[.80] rounded-md border border-l-slate-50/[.60] border-y-slate-50/[.30] border-r-slate-50/[.10]">
      <h1 className="text-orange text-2xl">Monte sua coletânea de filmes...</h1>
      <p className="mt-1 font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, sed...</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente at, nesciunt mollitia maxime blanditiis vero sit quia laborum aliquam velit voluptas cumque adipisci tenetur illo sequi fugiat vel necessitatibus facere ducimus veniam odit modi expedita dolorum.</p>

      <div className="flex justify-center gap-10 mt-16">
        <Card icon={FilmIcon} title="Filme" />
        <Card icon={StarIcon} title="Avaliações" />
        <Card icon={CategoryIcon} title="Categorias" />
      </div>      
    
    </div>
  );
}
