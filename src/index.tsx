import { Header } from "./components/header";
import { LastReleases } from "./components/last-releases";
import { AudioPlayer } from "./components/audio-player";
import { createRef, useEffect, useState } from "react";
import { AllReleases } from "./components/all-releases";
import { tracksList } from "./lib/musicas";
import { TracksInterface } from "./utils/interfaces/tracks"
import { Headphones } from "./components/headphones";
import { PlayerMusicDisplay } from "./components/player-music-display";
import { AboutSection } from "./components/about-section";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { set_isPlaying } from "./store/reducers/dataReducer";

export function Index() {

  const dispatch = useAppDispatch()
  
  const [ tracks, setTracks ] = useState<TracksInterface[]>([])
  const [ audioRef ] = useState(createRef<HTMLAudioElement>());

  const isPlaying = useAppSelector(state => state.apiData.isPlaying)
  const isAboutOpen = useAppSelector(state => state.apiData.isAboutOpen)

  function handlePlayer() {
    if(audioRef.current) {
      dispatch(set_isPlaying(!isPlaying))
      if(!isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }

  useEffect(() => {
    setTracks(tracksList)
  }, [tracks])

  return (
    <div className="flex flex-col w-screen lg:h-screen xl:flex-row">
      <div className="flex min-h-screen w-full max-h-full flex-shrink-1 flex-col lg:h-screen xl:w-[75%]">
        
        <Header />

        <main className="flex-1 px-4 pb-[90px] space-y-5 bg-gradient-to-t from-neutral-200 from-75% to-neutral-50 dark:bg-gradient-to-t dark:from-zinc-800 dark:from-50% dark:to-zinc-950 md:py-6 lg:px-16 lg:h-full">

          {!isAboutOpen ? (
            <>
              <LastReleases 
                tracksList={tracksList}
                handlePlayer={handlePlayer}
              />
              <AllReleases
                tracksList={tracksList}
                handlePlayer={handlePlayer}
              />
            </>
          ) : (
            <AboutSection 
              trackList={tracks}
              handlePlayer={handlePlayer}
            />
          )}

        </main>
      </div>

      <aside className="fixed bottom-0 px-4 h-[80px] flex items-center justify-between bg-lilac w-full xl:w-[25%] xl:flex-col xl:py-8 xl:static xl:h-full">
        <div className="hidden items-center gap-4 xl:flex">
          <Headphones />
          <span className="font-semibold text-neutral-50">Tocando agora</span>
        </div>

        <PlayerMusicDisplay 
          tracks={tracksList}
        />

        <AudioPlayer 
          tracks={tracksList}
          audioRef={audioRef}
          handlePlayer={handlePlayer}
        />

      </aside>

    </div>
  )
}