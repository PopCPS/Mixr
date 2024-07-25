import { TracksInterface } from "../lib/tracks";
import { PodcastLatest } from "./podcast-latest";

interface LastReleasesProps {
  tracksList: TracksInterface[]
  setTrack: (arg0 :number) => void
  openAbout: () => void
}

export function LastReleases({ 
  tracksList, 
  setTrack,
  openAbout,
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
            <PodcastLatest
              key={track.id}
              index={track.id}
              title={track.title}
              artist={track.artist}
              image={track.image}
              releaseDate={track.releaseDate}
              audioSrc={track.audioSrc}
              setTrack={setTrack}
            />
          )
        })}

      </div>
    </div>
  )
}