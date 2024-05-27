import Image from 'next/image'
import ImgLogo from '../../public/assets/logoIcon.png'

export default function Logo() {
    return(
        <div className='flex gap-2 cursor-default'>
            <Image src={ImgLogo} className='w-12 h-12' alt="Logo" />
            <div className=''>
                <p className='text-slate-50 text-xl'>Filmes</p>
                <p className='text-slate-50 text-sm'>Collection</p>
            </div>
        </div>
    )
}