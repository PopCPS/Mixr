import { TracksInterface } from "../lib/tracks"
import { Podcast } from "./podcast";

interface AllReleasesProps {
  isPlaying: boolean,
  trackIndex: number | undefined
  tracksList: TracksInterface[],
  setTrack: (arg0: number) => void,
  setAboutIndex: (arg0: number) => void,
  openAbout: () => void,
  handlePlayer: () => void,
}

export function AllReleases({ 
  isPlaying,
  tracksList,
  trackIndex,
  openAbout,
  setTrack,
  setAboutIndex,
  handlePlayer,
}: AllReleasesProps) {

  return (
    <div className="space-y-8 ">

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold dark:text-zinc-300">Todos os episódios</h2>
        <span className="font-normal text-sm text-slate-500 dark:text-zinc-400">{tracksList.length} ao total</span>
      </div>

      <div>
        <div>
          <div className="grid grid-cols-music mr-1">
            <span className="font-normal text-slate-500 text-ss dark:text-zinc-400">PODCAST</span>
            <span className="font-normal text-slate-500 text-sm dark:text-zinc-400">INTEGRANTES</span>
            <span className="font-normal text-slate-500 text-sm dark:text-zinc-400">DATA</span>
            <span className="font-normal text-slate-500 text-sm dark:text-zinc-400">DURAÇÃO</span>
          </div>
          <div className="h-px mt-3 mb-3 w-full bg-slate-300 dark:bg-zinc-400" />
        </div>

        <div className="overflow-y-scroll max-h-[438px]">
          {tracksList.map((track, index) => {
            return (
              <div key={index}>
                <Podcast 
                  type="grid"
                  track={track}
                  trackIndex={trackIndex}
                  isPlaying={isPlaying}
                  openAbout={openAbout}
                  handlePlayer={handlePlayer}
                  setTrack={setTrack}
                  setAboutIndex={setAboutIndex}
                />
                <div className="h-px mt-3 mb-3 w-full bg-slate-300 dark:bg-zinc-400" />
              </div>
            )
          })}
        </div>

      </div>

    </div>
  )
}

{/* <PodcastListed
  index={track.id}
  title={track.title}
  artist={track.artist}
  image={track.image}
  audioSrc={track.audioSrc}
  releaseDate={track.releaseDate}
  setTrack={setTrack}
  openAbout={openAbout}
/>   */}