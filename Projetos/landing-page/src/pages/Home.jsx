import ButtonFill from "../compontents/ButtonFill"
import ButtonNoFill from "../compontents/ButtonNoFill"
import Header from "../compontents/Header"

function Home() {
  return (
    <main className=" bg-zinc-100 flex flex-col items-center">
    
      <div className="h-80 text-center flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold text-5xl">Import data from <br />your users 10x faster</h2>
        <p className="text-sm text-zinc-600">Embed our self-server data importer directly into your product and unlock new sales opportunities in minutes.</p>

        <div className="flex gap-3">
          <ButtonFill title="Get started" />
          <ButtonNoFill title="Book a demo" />
        </div>
      </div>

      <div className="w-full h-80 text-center flex flex-col justify-center items-center gap-4 bg-zinc-200">
        <p className="text-sm text-zinc-600">Save mounths of effot</p>
        <h2 className="font-bold text-5xl">Every integration. <br /> One project.</h2>
        <p className="text-sm text-zinc-600">Fabra integrates with all of the most popular data sources, like Snowflake, BigQuery, and Redshift.</p>
      </div>

      <div className="w-full h-80 bg-zinc-900">

      </div>


      <div className="w-full h-80">

      </div>

    </main>
  )
}

export default Home