
import { TracksInterface } from "../utils/interfaces/tracks";
import { Podcast } from "./podcast";

interface LastReleasesProps {
  tracksList: TracksInterface[]
  handlePlayer: () => void
}

export function LastReleases({ 
  tracksList,
  handlePlayer,
}: LastReleasesProps) {
  return (
    <div className="space-y-3 lg:space-y-6">
      <h2 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300">Ultimos lançamentos</h2>

      <div className="flex gap-4 lg:gap-10">

        {tracksList.map((track, index) => {
          if(index >= 2) {
            return
          }
          return (
            <Podcast
              key={index}
              type="flex"
              track={track}
              handlePlayer={handlePlayer}
            />
          )
        })}

      </div>
    </div>
  )
}
