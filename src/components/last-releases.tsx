import { TracksInterface } from "../lib/tracks";
import { Podcast } from "./podcast";

interface LastReleasesProps {
  isPlaying: boolean
  trackIndex: number | undefined
  tracksList: TracksInterface[]
  setTrack: (arg0 :number) => void
  setAboutIndex: (arg0 :number) => void
  handlePlayer: () => void
  openAbout: () => void
}

export function LastReleases({ 
  isPlaying,
  tracksList,
  trackIndex,
  setTrack,
  handlePlayer,
  openAbout, 
  setAboutIndex,
}: LastReleasesProps) {

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold dark:text-zinc-300">Ultimos lançamentos</h2>

      <div className="flex gap-x-10">

        {tracksList.map((track, index) => {
          if(index == 2) {
            return
          }
          return (
            <Podcast
              key={index}
              type="flex"
              track={track}
              trackIndex={trackIndex}
              isPlaying={isPlaying}
              openAbout={openAbout}
              handlePlayer={handlePlayer}
              setTrack={setTrack}
              setAboutIndex={setAboutIndex}
            />
          )
        })}

      </div>
    </div>
  )
}
