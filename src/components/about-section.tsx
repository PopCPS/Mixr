import { ChevronLeft, Pause, Play } from "lucide-react";
import { TracksInterface } from "../utils/interfaces/tracks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { set_isAboutOpen, set_trackIndex } from "../store/reducers/dataReducer";

interface AboutSectionProps {
  trackList: TracksInterface[],
  handlePlayer: () => void,
}

export function AboutSection({ 
  trackList,
  handlePlayer,
}: AboutSectionProps) {

  const dispatch = useAppDispatch()

  const trackIndex = useAppSelector(state => state.apiData.trackIndex)
  const isPlaying = useAppSelector(state => state.apiData.isPlaying)
  const aboutIndex = useAppSelector(state => state.apiData.aboutIndex)
  
  const { id, title, artist, image, length, releaseDate, desc } = trackList[aboutIndex]

  const setTrack = (index: number) => {
    dispatch(set_trackIndex(index))
  }

  const closeAbout = () => {
    dispatch(set_isAboutOpen(false))
  }

  return (
    <div className="flex justify-center pt-4 xl:pt-0">

      <div className="flex flex-col gap-8 items-center py-3 w-[800px]">
        <div className="flex items-center w-4/5 h-40 rounded-3xl bg-gradient-to-r from-lime to-lilac relative bg-center bg-no-repeat lg:w-full" style={{backgroundImage: `url(${image})`, backgroundSize: '800px 800px'}}>
          <button onClick={closeAbout} className="bg-lilac p-3 rounded-2xl absolute left-[-1.5rem]">
            <ChevronLeft className="size-6 text-slate-300" />
          </button>
          <button 
            onClick={() => {
              if(trackIndex == id) {
                handlePlayer()
              } else {
                setTrack(id)
                setTimeout(() => {
                  if(!isPlaying) {
                    handlePlayer()
                  }
                }, 100)
              }
            }} 
            className="bg-lime p-3 rounded-2xl absolute right-[-1.5rem]"
          >
            {!isPlaying ? (
              <Play className="text-slate-300 fill-current" />
            ) : (
              trackIndex == id ? (
                <Pause className="text-slate-300 fill-current" />
              ) : (
                <Play className="text-slate-300 fill-current" />
              )
            )} 
          </button>
        </div>

        <div className="w-full px-4 space-y-6">
          <h1 className="text-4xl font-bold text-left text-font-dark dark:text-zinc-300">{title}</h1>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <span className="text-slate-500 font-normal dark:text-zinc-400">{artist}</span>
              <div className="size-1 rounded-lg bg-slate-300" />
              <span className="text-slate-500 font-normal dark:text-zinc-400">{releaseDate}</span>
              <div className="size-1 rounded-lg bg-slate-300" />
              <span className="text-slate-500 font-normal dark:text-zinc-400">{length}</span>
            </div>
            <div className="h-px w-full bg-slate-300 dark:bg-zinc-400" />
          </div>
        </div>

        <p className="px-4 text-font-dark dark:text-zinc-400">{desc}</p>

      </div>
    </div>
  )
}