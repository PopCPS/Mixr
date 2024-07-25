import { Play } from "lucide-react";
import { dateFormatter } from "../lib/date-formatter";
import { formatTrackLength } from "../lib/format-track-length";
import { createRef, useState } from "react";

interface PodcastLatestProps {
  index: number
  title: string, 
  artist: string,
  image: string,
  audioSrc: string,
  releaseDate: string
  setTrack: (arg0: number) => void
}

export function PodcastLatest({
  index,
  title,
  artist,
  image,
  audioSrc,
  releaseDate,
  setTrack,
}: PodcastLatestProps) {

  const [ audioRef ] = useState(createRef<HTMLAudioElement>());

  return (
    <div onClick={() => {setTrack(index)}} className="flex bg-neutral-50 border rounded-3xl p-5 gap-x-4 w-[432px] cursor-pointer dark:bg-zinc-900 dark:border-zinc-800">
      <audio 
        src={audioSrc}
        ref={audioRef}
      />
      <img className="rounded-xl size-24" src={image} alt="img" />

      <div className="space-y-2 flex-1">
        
        <h3 className="font-semibold font-xl text-left truncate dark:text-zinc-300">{title}</h3>

        <div className="flex justify-between items-end">
          <div className="space-y-3 text-left">
            <span className="text-slate-500 truncate dark:text-zinc-400">{artist}</span>
            <div className="flex gap-x-2 items-center">
              <span className="text-slate-500 font-normal dark:text-zinc-400">{dateFormatter(releaseDate, 'D MMM YY', 'pt-br')}</span>
              <div className="size-1 rounded-lg bg-slate-300" />
              <span className="text-slate-500 font-normal truncate dark:text-zinc-400">{audioRef.current && formatTrackLength(audioRef.current.duration)}</span>
            </div>
          </div>
          <div className="flex items-center justify-center border border-slate-300 rounded-xl size-10 dark:border-zinc-800">
            <Play fill="#04D361" className="text-lime" />
          </div>
        </div>

      </div>

    </div>
  )
}