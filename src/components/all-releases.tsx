import { PodcastListed } from "./podcast-listed";
import { TracksInterface } from "../lib/tracks"

interface AllReleasesProps {
  tracksList: TracksInterface[]
}

export function AllReleases({ tracksList }: AllReleasesProps) {
  return (
    <div className="space-y-8 ">

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold dark:text-zinc-300">Todos os episódios</h2>
        <span className="font-normal text-sm text-slate-500 dark:text-zinc-400">16 ao total</span>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-music mr-1">
          <span className="font-normal text-slate-500 text-ss dark:text-zinc-400">PODCAST</span>
          <span className="font-normal text-slate-500 text-sm dark:text-zinc-400">INTEGRANTES</span>
          <span className="font-normal text-slate-500 text-sm dark:text-zinc-400">DATA</span>
          <span className="font-normal text-slate-500 text-sm dark:text-zinc-400">DURAÇÃO</span>
        </div>
        <div className="h-px w-full bg-slate-300 dark:bg-zinc-400" />

        <div className="space-y-3 overflow-y-scroll max-h-[438px]">
          {tracksList.map((track) => {
            return (
              <PodcastListed
                id={track.id}
                title={track.title}
                artist={track.artist}
                image={track.image}
              />  
            )
          })}
        </div>

      </div>

    </div>
  )
}