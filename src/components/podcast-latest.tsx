import { Play } from "lucide-react";

interface PodcastLatestProps {
  id: number,
  title: string, 
  artist: string,
  image: string,
}

export function PodcastLatest({
  id,
  title,
  artist,
  image,
}: PodcastLatestProps) {
  return (
    <button key={id} className="flex bg-neutral-50 border rounded-3xl p-5 gap-x-4 w-[432px] dark:bg-zinc-900 dark:border-zinc-800">
      <img className="rounded-xl size-24" src={image} alt="img" />

      <div className="space-y-2 flex-1">
        
        <h3 className="font-semibold font-xl text-left truncate dark:text-zinc-300">{title}</h3>

        <div className="flex justify-between items-end">
          <div className="space-y-3 text-left">
            <span className="text-slate-500 dark:text-zinc-400">{artist}</span>
            <div className="flex gap-x-2 items-center">
              <span className="text-slate-500 font-normal dark:text-zinc-400">8 Jan 21</span>
              <div className="size-1 rounded-lg bg-slate-300" />
              <span className="text-slate-500 font-normal dark:text-zinc-400">1:35:18</span>
            </div>
          </div>
          <div className="flex items-center justify-center border border-slate-300 rounded-xl size-10 dark:border-zinc-800">
            <Play fill="#04D361" className="text-lime" />
          </div>
        </div>

      </div>

    </button>
  )
}