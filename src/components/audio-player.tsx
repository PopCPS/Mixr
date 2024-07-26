import { Shuffle, SkipBack, Play, SkipForward, Repeat, Pause } from "lucide-react";
import { TracksInterface } from "../lib/tracks"
import { ChangeEvent, RefObject, useEffect, useState } from "react";
import { formatTrackLength } from "../lib/format-track-length";

interface AudioPlayerProps {
  tracks: TracksInterface[],
  isPlaying: boolean | undefined,
  trackIndex: number | undefined,
  audioRef: RefObject<HTMLAudioElement>,
  setTrackIndex: (arg0: number) => void,
  handlePlayer: () => void
}

export function AudioPlayer({
  tracks, 
  isPlaying,
  trackIndex, 
  audioRef,
  handlePlayer,
  setTrackIndex,
}: AudioPlayerProps) {

  const [ audioSource, setAudioSource ] = useState<string>()
  const [ duration, setDuration ] = useState(0);
  const [ curr, setCurr ] = useState(0);

  const handleProgress = (e : ChangeEvent<HTMLInputElement>) => {
    if(audioRef.current) {
      const progress = (Number(e.target.value) * duration) / 100
      setCurr(progress)
      audioRef.current.currentTime = progress
    }
  } 
  
  const getProgressValue = () => {
    const value = (curr * 100) / duration;
    return !Number.isNaN(value) ? value : 0;
  };

  function toNextTrack() {
    if(trackIndex === undefined){
      setTrackIndex(0)
    } else {
      trackIndex < tracks.length - 1 ? setTrackIndex(trackIndex + 1) : setTrackIndex(0)
    }
    
  }
        
  function toPreviousTrack() {
    if(trackIndex === undefined) {
      setTrackIndex(0)
    } else {
      trackIndex - 1 < 0 ? setTrackIndex(tracks.length - 1) : setTrackIndex(trackIndex - 1)
    }
  }

  useEffect(() => {
    if(audioRef.current) {
      if(!isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      if(trackIndex !== undefined) {
        const { audioSrc } = tracks[trackIndex]
        setAudioSource(audioSrc)
      }
    }

  }, [audioSource, trackIndex, audioRef, isPlaying, tracks])

  return (
    <>
      {trackIndex !== undefined ? (
        <div className="flex flex-col xl:justify-center items-center p-3 xl:space-y-10">
          <div className="flex justify-center items-center xl:gap-4 xl:fit">
            <audio 
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onTimeUpdate={e => setCurr((e.target as any).currentTime)}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onCanPlay={e => setDuration((e.target as any).duration)}
              ref={audioRef}
              src={audioSource ?? ''} 
            />
            <span className="text-slate-300 text-sm hidden xl:block">{formatTrackLength(curr)}</span>
            <input 
              className="custom-range absolute top-0 left-0 w-full h-1 bg-lilac-light xl:w-40 xl:rounded-sm xl:static"
              type="range"
              onChange={handleProgress}
              value={getProgressValue()}
            />
            <span className="text-slate-300 text-sm hidden xl:block">{audioRef.current && formatTrackLength(audioRef.current.duration)}</span>
          </div>
      
          <div className="flex items-center justify-between xl:w-44">
            <button className="hidden">
              <Shuffle className="size-6 text-slate-300" />
            </button>
            <button>
              <SkipBack onClick={toPreviousTrack} className="size-6 text-slate-300 fill-current" />
            </button>
            <button onClick={handlePlayer} className="p-2 xl:p-4 xl:bg-violet-400 xl:rounded-2xl">
              {isPlaying ? (
                <Pause className="size-8 text-slate-300 fill-current" />
                ) : (
                <Play className="size-8 text-slate-300 fill-current" />
              )}
            </button>
            <button>
              <SkipForward onClick={toNextTrack} className="size-6 text-slate-300 fill-current" />
            </button>
            <button className="hidden">
              <Repeat className="size-6 text-slate-300" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center xl:p-3 xl:space-y-10 xl:w-full">
          <div className="flex justify-center items-center gap-4 xl:w-fit">
            <span className="hidden text-slate-300 text-sm xl:block">00:00</span>
            <div className="hidden custom-range xl:block xl:w-40 xl:rounded-sm xl:bg-lilac-light xl:h-1" />
            <span className="hidden text-slate-300 text-sm xl:block">00:00</span>
          </div>

          <div className="flex items-center justify-between xl:w-44">
            <button className="hidden cursor-default">
              <Shuffle className="size-6 text-slate-300" />
            </button>
            <button className="hidden cursor-default xl:block">
              <SkipBack className="size-6 text-slate-300 fill-current" />
            </button>
            <button className="p-2  cursor-default xl:bg-violet-400 xl:rounded-2xl xl:p-4">
              <Play className="size-8 text-slate-300 fill-current" />
            </button>
            <button className="hidden cursor-default xl:block">
              <SkipForward className="size-6 text-slate-300 fill-current" /> 
            </button>
            <button className="hidden cursor-default">
              <Repeat className="size-6 text-slate-300" />
            </button>
          </div>
        </div>
      )
      }    
    </>
  )
}