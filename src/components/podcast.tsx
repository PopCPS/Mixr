import { Pause, Play, Ellipsis } from "lucide-react";
import { dateFormatter } from "../lib/date-formatter";
import { TracksInterface } from "../lib/tracks"
import { tv, VariantProps } from 'tailwind-variants'

const podcastVariants = tv({
  variants: {
    type: {
      flex: '',
      grid: '',
    }
  }
})

interface PodcastProps extends VariantProps<typeof podcastVariants> {
  isPlaying: boolean,
  trackIndex: number | undefined,
  track: TracksInterface,
  handlePlayer: () => void,
  openAbout: () => void,
  setTrack: (arg0: number) => void,
  setAboutIndex: (arg0: number) => void,
}

export function Podcast({
  type,
  isPlaying,
  trackIndex,
  track,
  openAbout,
  handlePlayer,
  setTrack,
  setAboutIndex,
}: PodcastProps) {

  const { id, title, artist, length, image, releaseDate } = track

  return (
    <>
      {type == 'flex' ? (
        <div  
          key={id}
          className="flex flex-col bg-neutral-50 border rounded-3xl p-3 gap-2 w-full dark:bg-zinc-900 dark:border-zinc-800 sm:flex-row md:p-5"
        >
          <img className="max-size-16 rounded-xl sm:size-20 md:size-24" src={image} alt="img" />
          <div className="space-y-2 flex-1">
              <div className="flex flex-col px-2 sm:flex-row md:items-center md:h-full">
                <div className="flex flex-col flex-1 sm:justify-between sm:py-2">
                  <h3 className="font-semibold font-xl text-left truncate dark:text-zinc-300">{title}</h3>
                <div className="space-y-3 text-left">
                  <span className="text-slate-500 truncate dark:text-zinc-400">{artist}</span>
                  <div className="hidden md:flex gap-x-2 items-center">
                    <span className="text-slate-500 font-normal dark:text-zinc-400">{dateFormatter(releaseDate, 'D MMM YY', 'pt-br')}</span>
                    <div className="size-1 rounded-lg bg-slate-300" />
                    <span className="text-slate-500 font-normal truncate dark:text-zinc-400">{length}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-full sm:flex-col">
                <button 
                  onClick={() => {
                    setTrack(id)
                    setTimeout(() => {
                      if(!isPlaying) {
                        handlePlayer()
                      }
                    }, 100)
                  }}  
                  className="flex items-center order-1 justify-center rounded-xl size-10 dark:border-zinc-800 md:border md:border-slate-300"
                >
                  {!isPlaying ? (
                    <Play className="text-lime fill-current" />
                  ) : (
                    trackIndex == id ? (
                      <Pause className="text-lime fill-current" />
                    ) : (
                      <Play className="text-lime fill-current" />
                    )
                  )} 
                </button>
                <button 
                  onClick={() => {
                    openAbout()
                    setAboutIndex(id)
                  }} 
                  className="flex items-center justify-center rounded-xl size-10 dark:border-zinc-800 sm:order-2 md:border lg:border-slate-300"
                >
                  <Ellipsis className="text-lime fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-music-small items-center w-full cursor-pointer md:grid md:grid-cols-music">
          <div className="flex items-center gap-4">
            <img className="size-10 rounded-lg" src={image} alt="img" />
            <h3 className="font-semibold truncate dark:text-zinc-300">{title}</h3>
          </div>
          <span className="font-normal text-left text-slate-500 text-sm truncate dark:text-zinc-400">{artist}</span>
          <span className="hidden font-normal text-left text-slate-500 text-sm dark:text-zinc-400 md:block">{dateFormatter(releaseDate, 'D MMM YY', 'pt-br')}</span>
          <span className="hidden font-normal text-left text-slate-500 text-sm dark:text-zinc-400 md:block">{length}</span>
          <div className="flex gap-2 justify-self-end lg:mr-3">
            <button 
              onClick={() => {
                openAbout()
                setAboutIndex(id)
              }} 
              className="flex items-center justify-center border border-slate-300 rounded-lg size-8 p-1.5 dark:border-zinc-700"
            >
              <Ellipsis className="text-lime fill-current" />
            </button>
            <button 
              onClick={() => {
                setTrack(id)
                setTimeout(() => {
                  if(!isPlaying) {
                    handlePlayer()
                  }
                }, 100)
              }}  
              className="flex items-center justify-center border border-slate-300 rounded-lg size-8 p-1.5 dark:border-zinc-700"
            >
              {!isPlaying ? (
                <Play className="text-lime fill-current" />
              ) : (
                trackIndex == id ? (
                  <Pause className="text-lime fill-current" />
                ) : (
                  <Play className="text-lime fill-current" />
                )
              )} 
            </button>
          </div>
        </div>
      )}
    </>
  )
}