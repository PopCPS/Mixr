import { TracksInterface } from "../lib/tracks";

interface PlayerMusicDisplayProps {
  trackIndex?: number | undefined,
  tracks: TracksInterface[],
}

export function PlayerMusicDisplay({ trackIndex, tracks }: PlayerMusicDisplayProps) {
  return (
    <>
      {trackIndex !== undefined ? (
          <div className="flex flex-col items-center justify-center gap-8">
            {tracks[trackIndex].image ? (
              <div className={`flex items-center justify-center w-80 h-96 rounded-3xl bg-center bg-cover bg-no-repeat`} style={{backgroundImage: `url(${tracks[trackIndex].image})`}} />
            ) : (
              <div className="flex items-center justify-center border-2 border-lilac-border border-dashed w-80 h-96 rounded-3xl bg-gradient-to-t from-lilac to-lilac-light" />
            )}
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-zinc-300 text-2xl font-semibold">{tracks[trackIndex].title}</h2>
              <span className="text-zinc-300">{tracks[trackIndex].artist}</span> 
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center border-2 border-lilac-border border-dashed w-80 h-96 rounded-3xl bg-gradient-to-t from-lilac to-lilac-light dark:bg-gradient-to-t dark:from-aPurple dark:to-aPurple-light dark:border-aPurple-border">
            <span className="text-center text-neutral-50 font-semibold w-40">Selecione um <br /> podcast para ouvir</span>
          </div>    
        )}
    </>
  )
}