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
    <div className="space-y-3 lg:space-y-8">

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold dark:text-zinc-300">Todas as músicas</h2>
        <span className="font-normal text-sm text-slate-500 dark:text-zinc-400">{tracksList.length} ao total</span>
      </div>

      <div className="h-full">
        <div>
          <div className="grid grid-cols-music-small items-center md:mr-1 md:grid-cols-music">
            <span className="font-normal text-slate-500 text-ss dark:text-zinc-400">PODCAST</span>
            <span className="font-normal text-slate-500 text-sm dark:text-zinc-400">INTEGRANTES</span>
            <span className="hidden font-normal text-slate-500 text-sm dark:text-zinc-400 md:block">DATA</span>
            <span className="hidden font-normal text-slate-500 text-sm dark:text-zinc-400  md:block">DURAÇÃO</span>
          </div>
          <div className="h-px mt-3 mb-3 w-full bg-slate-300 dark:bg-zinc-400" />
        </div>

        <div className="lg:overflow-y-scroll lg:max-h-[438px]">
          {tracksList.map((track, index) => {
            return (
              <div key={index}>
                {index !== 0 && (
                  <div className="h-px mt-3 mb-3 w-full bg-slate-300 dark:bg-zinc-400" />
                )}
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