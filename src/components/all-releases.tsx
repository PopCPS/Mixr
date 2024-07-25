import { TracksInterface } from "../lib/tracks"
import { useState, createRef } from "react";
import { dateFormatter } from "../lib/date-formatter";
import { formatTrackLength } from "../lib/format-track-length";
import { Ellipsis, Play } from "lucide-react";

interface AllReleasesProps {
  tracksList: TracksInterface[]
  setTrack: (arg0: number) => void
  openAbout: () => void
}

export function AllReleases({ 
  tracksList,
  setTrack,
  openAbout,
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

            const { id, title, artist, image, releaseDate, audioSrc } = track

            return (
              <div key={id}>
                <audio 
                  src={track.audioSrc}
                  ref={audioRef}
                />
                <div onClick={() => {setTrack(id)}} className="space-y-3 w-full cursor-pointer">
                  <audio 
                    src={audioSrc}
                    ref={audioRef}
                  />
                  <div className="grid grid-cols-music items-center">
                    <div className="flex items-center gap-4">
                      <img className="size-10 rounded-lg" src={image} alt="img" />
                      <h3 className="font-semibold dark:text-zinc-300">{title}</h3>
                    </div>
                    <span className="font-normal text-left text-slate-500 text-sm dark:text-zinc-400">{artist}</span>
                    <span className="font-normal text-left text-slate-500 text-sm dark:text-zinc-400">{dateFormatter(releaseDate, 'D MMM YY', 'pt-br')}</span>
                    <span className="font-normal text-left text-slate-500 text-sm dark:text-zinc-400">{audioRef.current && formatTrackLength(audioRef.current.duration)}</span>
                    <div className="flex gap-2 justify-self-end mr-3">
                      <div onClick={openAbout} className="flex items-center justify-center border border-slate-300 rounded-lg size-8 p-1.5 dark:border-zinc-700">
                        <Ellipsis className="text-lime size-5" />
                      </div>
                      <div className="flex items-center justify-center border border-slate-300 rounded-lg size-8 p-1.5 dark:border-zinc-700">
                        <Play className="text-lime size-5 fill-current" />
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-full bg-slate-300 dark:bg-zinc-400" />
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </div>
  )
}

{/* <PodcastListed
  index={track.id}
  title={track.title}
  artist={track.artist}
  image={track.image}
  audioSrc={track.audioSrc}
  releaseDate={track.releaseDate}
  setTrack={setTrack}
  openAbout={openAbout}
/>   */}