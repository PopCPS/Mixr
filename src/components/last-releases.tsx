import { TracksInterface } from "../lib/tracks";
import { PodcastLatest } from "./podcast-latest";

interface LastReleasesProps {
  tracksList: TracksInterface[]
}

export function LastReleases({ tracksList }: LastReleasesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold dark:text-zinc-300">Ultimos lançamentos</h2>

      <div className="flex gap-x-6">

        {tracksList.map((track) => {
          return (
            <PodcastLatest
              artist={track.artist}
              image={track.image}
              id={track.id}
              title={track.title}
            />
          )
        })}

      </div>
    </div>
  )
}