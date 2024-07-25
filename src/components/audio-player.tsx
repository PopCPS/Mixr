import { Shuffle, SkipBack, Play, SkipForward, Repeat, Pause } from "lucide-react";
import { TracksInterface } from "../lib/tracks"
import { RefObject, useEffect, useState } from "react";
import { formatTrackLength } from "../lib/format-track-length";

interface AudioPlayerProps {
  tracks: TracksInterface[],
  isPlaying: boolean | undefined,
  trackIndex: number | undefined,
  audioRef: RefObject<HTMLAudioElement>,
  setTrackIndex: (arg0: number) => void,
  setIsPlaying: (arg0: boolean) => void
}

export function AudioPlayer({
  tracks, 
  isPlaying,
  trackIndex, 
  audioRef,
  setIsPlaying,
  setTrackIndex,
}: AudioPlayerProps) {

  const [ audioSource, setAudioSource ] = useState<string>()
  const [ duration, setDuration ] = useState(0);
  const [ curr, setCurr ] = useState(0);
  const handleProgress = (e : any) => {
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

  function handlePlayer() {
    if(audioRef.current) {
      setIsPlaying(!isPlaying)
      if(!isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }

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
    if(trackIndex !== undefined) {
      const { audioSrc } = tracks[trackIndex]
      setAudioSource(audioSrc)
    }
  }, [])

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
    
  }, [audioSource, trackIndex])

  return (
    <>
      {trackIndex !== undefined ? (
        <div className="flex flex-col justify-center items-center p-3 space-y-10 w-full">
          <div className="flex w-96 justify-center items-center gap-4">
            <audio 
              onTimeUpdate={e => setCurr((e.target as any).currentTime)}
              onCanPlay={e => setDuration((e.target as any).duration)}
              ref={audioRef}
              src={audioSource ?? ''} 
            />
            <span className="text-slate-300 text-sm">{formatTrackLength(curr)}</span>
            <input 
              className="custom-range dark:bg-aPurple-light"
              type="range"
              onChange={handleProgress}
              value={getProgressValue()}
            />
            <span className="text-slate-300 text-sm">{audioRef.current && formatTrackLength(audioRef.current.duration)}</span>
          </div>
      
          <div className="flex items-center justify-between w-64">
            <button>
              <Shuffle className="size-6 text-slate-300" />
            </button>
            <button>
              <SkipBack onClick={toPreviousTrack} className="size-6 text-slate-300" />
            </button>
            <button onClick={handlePlayer} className="p-4 bg-violet-400 rounded-2xl dark:bg-aPurple-light">
              {isPlaying ? (
                <Pause className="size-8 text-slate-300" />
                ) : (
                <Play className="size-8 text-slate-300" />
              )}
            </button>
            <button>
              <SkipForward onClick={toNextTrack} className="size-6 text-slate-300" />
            </button>
            <button>
              <Repeat className="size-6 text-slate-300" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center p-3 space-y-10 w-full">
          <div className="flex w-96 justify-center items-center gap-4">
            <audio/>
            <span className="text-slate-300 text-sm">00:00</span>
            <div className="custom-range dark:bg-aPurple-light" />
            <span className="text-slate-300 text-sm">00:00</span>
          </div>

          <div className="flex items-center justify-between w-64">
            <button className="cursor-default">
              <Shuffle className="size-6 text-slate-300" />
            </button>
            <button className="cursor-default">
              <SkipBack className="size-6 text-slate-300" />
            </button>
            <button className="p-4 bg-violet-400 rounded-2xl cursor-default dark:bg-aPurple-light">
              <Play className="size-8 text-slate-300" />
            </button>
            <button className="cursor-default">
              <SkipForward className="size-6 text-slate-300" />
            </button>
            <button className="cursor-default">
              <Repeat className="size-6 text-slate-300" />
            </button>
          </div>
        </div>
      )
      }    
    </>
  )
}