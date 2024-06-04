import ButtonFill from "../compontents/ButtonFill"
import CardSpeakers from "../compontents/CardSpeakers"

import AaronCox from '../assets/Speakers/Aaron Cox.svg'
import FreddiePerry from '../assets/Speakers/Freddie Perry.svg'
import JasmineStewart from '../assets/Speakers/Jasmine Stewart.svg'
import JordanReynolds from '../assets/Speakers/Jordan Reynolds.svg'
import MelissaCollins from '../assets/Speakers/Melissa Collins.svg'
import SophieStewart from '../assets/Speakers/Sophie Stewart.svg'

import ConferenceBg from '../assets/ConferenceBg.jpg'
import Conference from '../assets/Conference.svg'

import Form from "../compontents/Form"

function Home() {

  return (
    <main className="bg-zinc-100 flex flex-col justify-between items-center">

      <section className="p-12 text-center flex flex-col justify-center items-center gap-4 bg-[url('./assets/ConferenceBg.jpg')]  w-full h-[500px] bg-cover bg-center" id="home">
        <div className="">
          <h2 className="z-10 font-bold text-5xl">Digital World<br />Conference</h2>
          <p className="text-sm text-zinc-600">Join industry leaders to learn, inspire and connect</p>
        </div>
        <div className="flex flex-col gap-3">
          <ButtonFill link="#ticket" title="Get a ticket" />
        </div>
      </section>

      <section className="w-full p-12 text-center flex flex-col justify-center items-center gap-3 bg-zinc-200">
        <p className="text-sm text-zinc-600"></p>
        <h2 className="font-bold text-5xl">Event Speakers</h2>
        <p className="text-sm text-zinc-600">Join industry leaders to learn, inspire and connect</p>
        <div className="grid gap-10 md:grid-cols-3 grid-cols-2">
          <CardSpeakers img={AaronCox} name="Aaron Cox" senior="CEO" />
          <CardSpeakers img={SophieStewart} name="Sophie Stewart" senior="CEO" />
          <CardSpeakers img={MelissaCollins} name="Melissa Collins" senior="CEO" />
          <CardSpeakers img={FreddiePerry} name="Freddie Perry" senior="CEO" />
          <CardSpeakers img={JasmineStewart} name="Jasmine Stewart" senior="CEO" />
          <CardSpeakers img={JordanReynolds} name="Jordan Reynolds" senior="CEO" />
        </div>
      </section>

      <section className="w-full p-12 text-center flex flex-col justify-center items-center gap-3 bg-zinc-900 text-zinc-50" id="about">
        <div className="flex flex-col md:flex-row  gap-10">
          <div className="w-96 flex flex-col gap-8 justify-between">
            <h2 className="font-bold text-2xl">Why you should join event</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio debitis similique excepturi quidem minima quibusdam soluta mollitia quae dicta. Eum sint officiis ad veritatis, consequuntur similique inventore doloremque odio magnam adipisci aspernatur pariatur cumque earum? Est nemo earum adipisci nulla?</p>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio debitis similique excepturi quidem minima quibusdam soluta mollitia quae dicta. Eum sint officiis ad </p>
          </div>
          <img className="w-96 rounded-md" src={Conference} alt="conference" />
        </div>
      </section>

      <section className="w-full p-12 text-center flex flex-col justify-center items-center gap-3" id="ticket">
        <Form />
      </section>
    </main>
  )
}

export default Home