import { PodcastListed } from "./podcast-listed";
import { TracksInterface } from "../lib/tracks"
import { useState, createRef } from "react";

interface AllReleasesProps {
  tracksList: TracksInterface[]
  setTrack: (arg0: number) => void
}

export function AllReleases({ 
  tracksList,
  setTrack
}: AllReleasesProps) {

  const [ audioRef ] = useState(createRef<HTMLAudioElement>());

  return (
    <div className="space-y-8 ">

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold dark:text-zinc-300">Todos os episódios</h2>
        <span className="font-normal text-sm text-slate-500 dark:text-zinc-400">{tracksList.length} ao total</span>
      </div>

      <div>
        <div className="space-y-3">
          <div className="grid grid-cols-music mr-1">
            <span className="font-normal text-slate-500 text-ss dark:text-zinc-400">PODCAST</span>
            <span className="font-normal text-slate-500 text-sm dark:text-zinc-400">INTEGRANTES</span>
            <span className="font-normal text-slate-500 text-sm dark:text-zinc-400">DATA</span>
            <span className="font-normal text-slate-500 text-sm dark:text-zinc-400">DURAÇÃO</span>
          </div>
          <div className="h-px w-full bg-slate-300 dark:bg-zinc-400" />
        </div>

        <div className="overflow-y-scroll max-h-[438px]">
          {tracksList.map((track) => {
            return (
              <div key={track.id}>
                <audio 
                  src={track.audioSrc}
                  ref={audioRef}
                />
                <PodcastListed
                  index={track.id}
                  title={track.title}
                  artist={track.artist}
                  image={track.image}
                  audioSrc={track.audioSrc}
                  releaseDate={track.releaseDate}
                  audioRef={audioRef}
                  setTrack={setTrack}
                />  
              </div>
            )
          })}
        </div>

      </div>

    </div>
  )
}