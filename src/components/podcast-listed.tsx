import { Ellipsis, Play } from "lucide-react";
import { createRef, useState } from "react";
import { dateFormatter } from "../lib/date-formatter";
import { formatTrackLength } from "../lib/format-track-length";

interface PodcastListedProps {
  index: number,
  title: string,
  artist: string,
  image: string,
  audioSrc: string,
  releaseDate: string,
  setTrack: (arg0: number) => void,
  openAbout: () => void,
}

export function PodcastListed({
  index,
  title,
  artist,
  image,
  audioSrc,
  releaseDate,
  setTrack,
  openAbout,
}: PodcastListedProps) {

  const [ audioRef ] = useState(createRef<HTMLAudioElement>());

  return (
    <div onClick={() => {setTrack(index)}} className="space-y-3 w-full cursor-pointer">
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
  )
}