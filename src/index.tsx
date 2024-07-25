import { Header } from "./components/header";
import { LastReleases } from "./components/last-releases";
import { AudioPlayer } from "./components/audio-player";
import { createRef, useEffect, useState } from "react";
import { AllReleases } from "./components/all-releases";
import { tracksList } from "./lib/podcasts";
import { TracksInterface } from "./lib/tracks"
import { Headphones } from "./components/headphones";
import { PlayerMusicDisplay } from "./components/player-music-display";

export function Index() {

  const [ isDarkModeActive, setIsDarkModeActive ] = useState(false)
  const [ isPlaying, setIsPlaying ] = useState(false)
  const [ trackIndex, setTrackIndex ] = useState<number>();  
  const [ tracks, setTracks ] = useState<TracksInterface[]>([])
  const [ audioRef ] = useState(createRef<HTMLAudioElement>());

  function setTrack(index: number) {
    setTrackIndex(index)
  }

  useEffect(() => {
    setTracks(tracksList)
    
  }, [tracks])

  return (
    <div className="flex h-screen">
      <div className="flex flex-col bg-neutral-50 min-w-[70%] w-[75%]">
        
        <Header
          setIsDarkModeActive={setIsDarkModeActive}
          isDarkModeActive={isDarkModeActive}
        />

        <main className="bg-light-gray px-16 py-8 h-full space-y-8 dark:bg-gradient-to-t dark:from-zinc-800 dark:to-zinc-950">

          <LastReleases 
            tracksList={tracksList}
            setTrack={setTrack}
          />

          <AllReleases
            tracksList={tracksList}
            setTrack={setTrack}
          />

        </main>
      </div>

      <aside className="flex flex-col items-center justify-between bg-lilac py-8 w-full max-w-[25%] dark:bg-aPurple">
        <div className="flex items-center gap-4">
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
          setIsPlaying={setIsPlaying}
          setTrackIndex={setTrackIndex}
        />

        
      </aside>



    </div>
  )
}