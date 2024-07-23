import { Header } from "./components/header";
import { LastReleases } from "./components/last-releases";
import { AudioPlayer } from "./components/audio-player";
import { useEffect, useState } from "react";
import { AllReleases } from "./components/all-releases";
import { tracksList } from "./lib/podcasts";
import { TracksInterface } from "./lib/tracks"

export function Index() {

  const [ isDarkModeActive, setIsDarkModeActive ] = useState(false)
  const [ isPlaying, setIsPlaying ] = useState(false)
  const [ trackIndex, setTrackIndex ] = useState<number>(0);  
  const [ tracks, setTracks ] = useState<TracksInterface[]>([])

  useEffect(() => {
    setTracks(tracksList)
  }, [tracks])

  console.log(tracks)

  return (
    <div className="flex">
      <div className="flex flex-col bg-neutral-50 w-[1400px]">
        
        <Header
          setIsDarkModeActive={setIsDarkModeActive}
          isDarkModeActive={isDarkModeActive}
        />

        <main className="bg-light-gray px-16 py-8 h-full space-y-8 dark:bg-gradient-to-t dark:from-zinc-800 dark:to-zinc-950">

          <LastReleases 
            tracksList={tracksList}
          />

          <AllReleases
            tracksList={tracksList}
          />

        </main>
      </div>

      {tracks.length > 0 && (
        <AudioPlayer 
          tracks={tracks}
          isPlaying={isPlaying}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          setIsPlaying={setIsPlaying}
        />
      )}

    </div>
  )
}