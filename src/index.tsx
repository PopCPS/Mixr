import { Header } from "./components/header";
import { LastReleases } from "./components/last-releases";
import { AudioPlayer } from "./components/audio-player";
import { createRef, useEffect, useState } from "react";
import { AllReleases } from "./components/all-releases";
import { tracksList } from "./lib/musicas";
import { TracksInterface } from "./lib/tracks"
import { Headphones } from "./components/headphones";
import { PlayerMusicDisplay } from "./components/player-music-display";
import { AboutSection } from "./components/about-section";

export function Index() {

  const [ isDarkModeActive, setIsDarkModeActive ] = useState(false)
  const [ isAboutOpen, setIsAboutOpen ] = useState(false)
  const [ isPlaying, setIsPlaying ] = useState(false)
  const [ aboutIndex, setAboutIndex ] = useState<number>(0);  
  const [ trackIndex, setTrackIndex ] = useState<number>();  
  const [ tracks, setTracks ] = useState<TracksInterface[]>([])
  const [ audioRef ] = useState(createRef<HTMLAudioElement>());

  function openAbout() {
    setIsAboutOpen(true)
  }

  function closeAbout() {
    setIsAboutOpen(false)
  }

  function setTrack(index: number) {
    setTrackIndex(index)
  }

  function handlePlayer() {
    if(audioRef.current) {
      setIsPlaying(!isPlaying)
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
      {/* flex flex-col bg-neutral-50 min-w-[70%] w-[75%] */}
        <Header
          setIsDarkModeActive={setIsDarkModeActive}
          isDarkModeActive={isDarkModeActive}
        />

        <main className="flex-1 px-4 pb-[90px] space-y-5 bg-gradient-to-t from-neutral-200 from-75% to-neutral-50 dark:bg-gradient-to-t dark:from-zinc-800 dark:from-50% dark:to-zinc-950 md:py-6 lg:px-16 lg:h-full">

        {/* bg-gradient-to-t from-neutral-200 from-75%  to-neutral-50 px-16 py-8 h-full space-y-8 dark:bg-gradient-to-t dark:from-zinc-800 dark:from-50% dark:to-zinc-950 */}

          {!isAboutOpen ? (
            <>
              <LastReleases 
                tracksList={tracksList}
                trackIndex={trackIndex}
                setTrack={setTrack}
                openAbout={openAbout}
                isPlaying={isPlaying}
                handlePlayer={handlePlayer}
                setAboutIndex={setAboutIndex}
              />
              <AllReleases
                tracksList={tracksList}
                trackIndex={trackIndex}
                setTrack={setTrack}
                openAbout={openAbout}
                isPlaying={isPlaying}
                handlePlayer={handlePlayer}
                setAboutIndex={setAboutIndex}
              />
            </>
          ) : (
            <AboutSection 
              aboutIndex={aboutIndex}
              trackIndex={trackIndex}
              isPlaying={isPlaying}
              trackList={tracks}
              handlePlayer={handlePlayer}
              setTrack={setTrack}
              closeAbout={closeAbout}
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
          trackIndex={trackIndex}
          tracks={tracksList}
        />

        <AudioPlayer 
          isPlaying={isPlaying}
          trackIndex={trackIndex}
          tracks={tracksList}
          audioRef={audioRef}
          handlePlayer={handlePlayer}
          setTrackIndex={setTrackIndex}
          setAboutIndex={setAboutIndex}
          openAbout={openAbout}
        />

        
      </aside>



    </div>
  )
}