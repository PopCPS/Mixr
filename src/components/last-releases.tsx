import { createRef, useState } from "react";
import { TracksInterface } from "../lib/tracks";
import { dateFormatter } from "../lib/date-formatter";
import { formatTrackLength } from "../lib/format-track-length";
import { Ellipsis, Pause, Play } from "lucide-react";

interface LastReleasesProps {
  isPlaying: boolean
  tracksList: TracksInterface[]
  setTrack: (arg0 :number) => void
  openAbout: () => void
}

export function LastReleases({ 
  isPlaying,
  tracksList, 
  setTrack,
  openAbout,
}: LastReleasesProps) {

  const [ audioRef ] = useState(createRef<HTMLAudioElement>());

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold dark:text-zinc-300">Ultimos lançamentos</h2>

      <div className="flex gap-x-10">

        {tracksList.map((track, index) => {
          if(index == 2) {
            return
          }

          const { id, title, artist, image, releaseDate, audioSrc } = track

          return (
            <div 
              key={id}
              onClick={() => {setTrack(id)}} 
              className="flex bg-neutral-50 border rounded-3xl p-5 gap-x-4 w-full cursor-pointer dark:bg-zinc-900 dark:border-zinc-800"
            >
              <audio 
                src={audioSrc}
                ref={audioRef}
              />
              <img className="rounded-xl size-24" src={image} alt="img" />

              <div className="space-y-2 flex-1">

                  <div className="flex items-center h-full">
                    <div className="flex flex-col flex-1">
                      <h3 className="font-semibold font-xl text-left truncate dark:text-zinc-300">{title}</h3>
                    <div className="space-y-3 text-left">
                      <span className="text-slate-500 truncate dark:text-zinc-400">{artist}</span>
                      <div className="flex gap-x-2 items-center">
                        <span className="text-slate-500 font-normal dark:text-zinc-400">{dateFormatter(releaseDate, 'D MMM YY', 'pt-br')}</span>
                        <div className="size-1 rounded-lg bg-slate-300" />
                        <span className="text-slate-500 font-normal truncate dark:text-zinc-400">{audioRef.current && formatTrackLength(audioRef.current.duration)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    {isPlaying ? (
                      <button className="flex items-center justify-center border border-slate-300 rounded-xl size-10 dark:border-zinc-800">
                        <Pause className="text-lime fill-current" />
                      </button>
                    ) : (
                      <button className="flex items-center justify-center border border-slate-300 rounded-xl size-10 dark:border-zinc-800">
                        <Play className="text-lime fill-current" />
                      </button>
                    )}
                    <button onClick={openAbout} className="flex items-center justify-center border border-slate-300 rounded-xl size-10 dark:border-zinc-800">
                      <Ellipsis className="text-lime fill-current" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )
        })}

      </div>
    </div>
  )
}
