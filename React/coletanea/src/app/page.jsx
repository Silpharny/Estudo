import Card from "@/Components/Card";

import FilmIcon from '../../public/assets/filmIcon.svg'
import StarIcon from '../../public/assets/starIcon.svg'
import CategoryIcon from '../../public/assets/categoryIcon.svg'

export default function Home() {
  return (
    <div className="text-slate-50 flex flex-col items-center gap-1">
      <h1 className="text-orange text-2xl">Monte sua coletânea de filmes...</h1>
      <p className="mt-1 font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, sed...</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente at, nesciunt mollitia maxime blanditiis vero sit quia laborum aliquam velit voluptas cumque adipisci tenetur illo sequi fugiat vel necessitatibus facere ducimus veniam odit modi expedita dolorum.</p>

      <div className="flex gap-10 mt-16">
        <Card icon={FilmIcon} title="Filme" />
        <Card icon={StarIcon} title="Avaliações" />
        <Card icon={CategoryIcon} title="Categorias" />
      </div>      
    
    </div>
  );
}
