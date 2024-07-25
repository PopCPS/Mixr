import { TracksInterface } from "../lib/tracks";
import { PodcastLatest } from "./podcast-latest";

interface LastReleasesProps {
  tracksList: TracksInterface[]
  setTrack: (arg0 :number) => void
}

export function LastReleases({ 
  tracksList, 
  setTrack 
}: LastReleasesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold dark:text-zinc-300">Ultimos lançamentos</h2>

      <div className="flex gap-x-6">

        {tracksList.map((track) => {
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