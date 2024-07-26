import { Shuffle, SkipBack, Play, SkipForward, Repeat, Pause, Volume2, Ellipsis } from "lucide-react";
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
  const [ currVolume, setCurrVolume ] = useState(50)
  const [ isVolumeModalOpen, setIsVolumeModalOpen ] = useState(false)

  function handleProgress(e : ChangeEvent<HTMLInputElement>) {
    if(audioRef.current) {
      const progress = (Number(e.target.value) * duration) / 100
      setCurr(progress)
      audioRef.current.currentTime = progress
    }
  } 
  
  function getProgressValue() {
    const value = (curr * 100) / duration;
    return !Number.isNaN(value) ? value : 0;
  }

  function handleVolume(e : ChangeEvent<HTMLInputElement>) {
    if(audioRef.current) {
      const volume = Number(e.target.value) / 100
      setCurrVolume(volume)
      audioRef.current.volume = volume
    }
  }

  function getVolumeValue() {
    const value = currVolume * 100
    return value
  }

  function handleVolumeModal() {
    setIsVolumeModalOpen(!isVolumeModalOpen)
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
        <div className="flex flex-col xl:justify-center items-center xl:space-y-10">
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
              className="custom-range absolute top-0 left-0 w-full h-1 bg-lilac-light accent-lime xl:w-40 xl:rounded-sm xl:static xl:h-1 xl:border-none"
              type="range"
              onChange={handleProgress}
              value={getProgressValue()}
            />
            
            <span className="text-slate-300 text-sm hidden xl:block">{audioRef.current && formatTrackLength(audioRef.current.duration)}</span>
          </div>

          <div className="flex items-center justify-between xl:flex-1 xl:gap-2">
            <button className="hidden p-2 md:block">
              <Ellipsis className="size-6 text-slate-300 lg:size-8" />
            </button>
            <button className="hidden items-center p-2 justify-center md:flex">
              <SkipBack onClick={toPreviousTrack} className="size-8 text-slate-300 fill-current md:size-6 lg:size-8" />
            </button>
            <button onClick={handlePlayer} className="p-2 xl:p-4 xl:bg-violet-400 xl:rounded-2xl">
              {isPlaying ? (
                <Pause className="size-8 text-slate-300 fill-current xl:size-10" />
                ) : (
                <Play className="size-8 text-slate-300 fill-current xl:size-10" />
              )}
            </button>
            <button className=" hidden items-center p-2 justify-center md:flex">
              <SkipForward onClick={toNextTrack} className="size-8 text-slate-300 fill-current md:size-6 lg:size-8" />
            </button>
            <div className="relative order-first md:-order-none">
              {isVolumeModalOpen && (
                  <div className="bg-lilac absolute rounded-lg p-5 top-[-120px] xl:left-0 xl:top-[-130px] xl:bg-lilac-light xl:p-5">
                    <input 
                      type="range"
                      className="custom-range h-20 w-1 bg-lilac-light accent-lime xl:h-20 xl:rounded-sm xl:w-1 xl:border-none"
                      style={{writingMode: "vertical-lr", direction: "rtl"}}
                      onChange={handleVolume}
                      value={getVolumeValue()} 
                    />
                  </div>
                )}
              <button onClick={handleVolumeModal} className="flex items-center justify-center p-2">
                <Volume2 className="size-8 text-slate-300 fill-current md:size-6 lg:size-8" />
              </button>
            </div>
            
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