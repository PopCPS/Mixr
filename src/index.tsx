import { Headphones, Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";

export function Index() {
  return (
    <div className="flex">
      <div className="bg-neutral-50 w-[1400px]">
        <nav className="flex items-center px-16 h-28 justify-between">
          <div className="flex items-center gap-x-8">
            <img className="h-10" src="/logo.svg" alt="img" />
            <div className="w-px h-6 bg-slate-300" />
            <p className="text-slate-500 text-sm font-normal">O melhor para você ouvir, sempre</p>
          </div>
          <span className="text-slate-500 text-sm font-normal">Qui, 8 Abril</span>
        </nav>

        <main className="bg-sky-50 px-16 py-8 space-y-8">

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Ultimos lançamentos</h2>

            <div className="flex gap-x-6">
              <div className="flex bg-neutral-50 border rounded-3xl p-5 gap-x-4 w-[432px]">
                <img className="rounded-xl size-24" src="#" alt="img" />

                <div className="space-y-2 flex-1">
                  
                  <h3 className="font-semibold font-xl">O que é um bom código?</h3>

                  <div className="flex justify-between items-end">
                    <div className="space-y-3">
                      <span className="text-slate-500">Diego e Richard</span>
                      <div className="flex gap-x-2 items-center">
                        <span className="text-slate-500 font-normal">8 Jan 21</span>
                        <div className="size-1 rounded-lg bg-slate-300" />
                        <span className="text-slate-500 font-normal">1:35:18</span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center border border-slate-300 rounded-xl size-10">
                      <Play fill="rgb(132 204 22)" className="text-lime-500" />
                    </button>
                  </div>

                </div>

              </div>
              <div className="flex bg-neutral-50 border rounded-3xl p-5 gap-x-4 w-[432px]">
                <img className="rounded-xl size-24" src="#" alt="img" />

                <div className="space-y-2 flex-1">
                  
                  <h3 className="font-semibold font-xl">O que é um bom código?</h3>

                  <div className="flex justify-between items-end">
                    <div className="space-y-3">
                      <span className="text-slate-500">Diego e Richard</span>
                      <div className="flex gap-x-2 items-center">
                        <span className="text-slate-500 font-normal">8 Jan 21</span>
                        <div className="size-1 rounded-lg bg-slate-300" />
                        <span className="text-slate-500 font-normal">1:35:18</span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center border border-slate-300 rounded-xl size-10">
                      <Play fill="rgb(132 204 22)" className="text-lime-500" />
                    </button>
                  </div>

                </div>

              </div>
              <div className="flex bg-neutral-50 border rounded-3xl p-5 gap-x-4 w-[432px]">
                <img className="rounded-xl size-24" src="#" alt="img" />

                <div className="space-y-2 flex-1">
                  
                  <h3 className="font-semibold font-xl">O que é um bom código?</h3>

                  <div className="flex justify-between items-end">
                    <div className="space-y-3">
                      <span className="text-slate-500">Diego e Richard</span>
                      <div className="flex gap-x-2 items-center">
                        <span className="text-slate-500 font-normal">8 Jan 21</span>
                        <div className="size-1 rounded-lg bg-slate-300" />
                        <span className="text-slate-500 font-normal">1:35:18</span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center border border-slate-300 rounded-xl size-10">
                      <Play fill="rgb(132 204 22)" className="text-lime-500" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Todos os episódios</h2>
              <span className="font-normal text-sm text-slate-500">16 ao total</span>
            </div>

            <div>
              <div>
                <span>PODCAST</span>
                <span>INTEGRANTES</span>
                <span>DATA</span>
                <span>DURAÇÃO</span>
              </div>
            </div>
          </div>

        </main>
      </div>

      <aside className="flex flex-col items-center justify-between bg-violet-500 h-screen py-8 w-full">
        <div className="flex items-center gap-4">
          <Headphones className="text-lime-500 size-8" />
          <span className="font-semibold text-neutral-50">Tocando agora</span>
        </div>
        <div className="flex items-center justify-center border-2 border-slate-300 border-dashed bg-violet-400 w-80 h-96 rounded-3xl">
          <span className="text-center text-neutral-50 font-semibold w-40">Selecione um <br /> podcast para ouvir</span>
        </div>    
        <div className="p-3 space-y-10">
          <div className="flex items-center gap-4">
            <span className="text-slate-300 text-sm">00:00</span>
            <div className="w-40 bg-violet-400 h-1 rounded-sm" />
            <span className="text-slate-300 text-sm">00:00</span>
          </div>
          <div className="flex items-center justify-between w-64">
            <Shuffle className="size-6 text-slate-300" />
            <SkipBack className="size-6 text-slate-300" />
            <div className="p-4 bg-violet-400 rounded-2xl">
              <Play className="size-8 text-slate-300" />
            </div>
            <SkipForward className="size-6 text-slate-300" />
            <Repeat className="size-6 text-slate-300" />
          </div>
        </div>
      </aside>

    </div>
  )
}