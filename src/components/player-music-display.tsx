import { TracksInterface } from "../lib/tracks";

interface PlayerMusicDisplayProps {
  trackIndex?: number | undefined,
  tracks: TracksInterface[],
}

export function PlayerMusicDisplay({ trackIndex, tracks }: PlayerMusicDisplayProps) {
  return (
    <>
      {trackIndex !== undefined ? (
          <div className="flex items-center gap-4 xl:justify-center xl:gap-8 xl:flex-col">
            {tracks[trackIndex].image ? (
              <div className={`size-12 flex items-center justify-center rounded-xl bg-center bg-cover bg-no-repeat xl:w-64 xl:h-80 xl:rounded-3xl`} style={{backgroundImage: `url(${tracks[trackIndex].image})`}} />
            ) : (
              <div className="flex items-center justify-center border-2 border-lilac-border border-dashed w-80 h-96 rounded-3xl bg-gradient-to-t from-lilac to-lilac-light" />
            )}
            <div className="flex flex-col gap-1 xl:items-center xl:justify-center xl:gap-2">
              <h2 className="text-zinc-300 text-lg xl:text-2xl font-semibold">{tracks[trackIndex].title}</h2>
              <span className="text-zinc-300 text-md">{tracks[trackIndex].artist}</span> 
            </div>
          </div>
        ) : (
          <div className="size-12 rounded-xl xl:flex xl:items-center xl:justify-center border-2 border-lilac-border border-dashed xl:rounded-3xl bg-gradient-to-t from-lilac to-lilac-light xl:w-64 xl:h-80" />    
        )}
    </>
  )
}