import { Play } from "lucide-react";

interface PodcastListedProps {
  id: number,
  title: string,
  artist: string,
  image: string,
}

export function PodcastListed({
  id,
  title,
  artist,
  image
}: PodcastListedProps) {
  return (
    <button key={id} className="space-y-3 w-full">
      <div className="grid grid-cols-music items-center">
        <div className="flex items-center gap-4">
          <img className="size-10 rounded-lg" src={image} alt="img" />
          <h3 className="font-semibold dark:text-zinc-300">{title}</h3>
        </div>
        <span className="font-normal text-left text-slate-500 text-sm dark:text-zinc-400">{artist}</span>
        <span className="font-normal text-left text-slate-500 text-sm dark:text-zinc-400">8 Jan 21</span>
        <span className="font-normal text-left text-slate-500 text-sm dark:text-zinc-400">1:35:18</span>
        <div className="flex items-center justify-center border border-slate-300 rounded-lg size-8 p-1.5 justify-self-end mr-2 dark:border-zinc-700">
          <Play fill="#04D361" className="text-lime size-5" />
        </div>
      </div>
      <div className="h-px w-full bg-slate-300 dark:bg-zinc-400" />
    </button>
  )
}