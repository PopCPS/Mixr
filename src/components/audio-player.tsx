import { Shuffle, SkipBack, Play, SkipForward, Repeat, Pause } from "lucide-react";
import { Headphones } from "./headphones";
import { useEffect, useRef, useState } from "react";
import { TracksInterface } from "../lib/tracks"

interface AudioPlayerProps {
  tracks: TracksInterface[],
  isPlaying: boolean | undefined,
  trackIndex: number,
  setTrackIndex: (arg0: number) => void,
  setIsPlaying: (arg0: boolean) => void
}

export function AudioPlayer({
  tracks, 
  isPlaying,
  trackIndex, 
  setIsPlaying,
  setTrackIndex,
}: AudioPlayerProps) {

  const { title, artist, audioSrc, image } = tracks[trackIndex]
  const [trackProgress, setTrackProgress] = useState(0);

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef<number | undefined>();
  const isReady = useRef(false);

  const { duration } = audioRef.current

  // const currentPercentage = duration 
  //   ? `${(trackProgress / duration) * 100}%`
  //   : '0%'

  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor(duration / 60)
  const seconds = duration - minutes * 60

  const startTimer = () => {
    if(intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    if(intervalRef) {
      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
          toNextTrack();
        } else {
          setTrackProgress(audioRef.current.currentTime);
        }
      }, 1000);
    }
  }

  // const onScrub = (value: number) => {
  //   if(intervalRef.current) {
  //     clearInterval(intervalRef.current)
  //   }
  //   audioRef.current.currentTime = value
  //   setTrackProgress(audioRef.current.currentTime)
  // }

  // const onScrubEnd = () => {
  //   if (!isPlaying) {
  //     setIsPlaying(true);
  //   }
  //   startTimer();
  // }

  function handlePlayer() {
    setIsPlaying(!isPlaying)
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
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
      audioRef.current.pause()

      audioRef.current = new Audio(audioSrc)
      setTrackProgress(audioRef.current.currentTime)

      if (isReady.current) {
        audioRef.current.play()
        setIsPlaying(true)
        startTimer()
      } else {
        isReady.current = true
      }
  }, [trackIndex])

  useEffect(() => {
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <aside className="flex flex-col items-center justify-between bg-lilac py-8 w-[520px]">
      <div className="flex items-center gap-4">
        <Headphones />
        <span className="font-semibold text-neutral-50">Tocando agora</span>
      </div>

        {trackIndex != null ? (
          <div className="flex flex-col items-center justify-center gap-8">
            {image ? (
              <div className={`flex items-center justify-center w-80 h-96 rounded-3xl bg-center bg-cover bg-no-repeat`} style={{backgroundImage: `url(${image})`}} />
            ) : (
              <div className="flex items-center justify-center border-2 border-lilac-border border-dashed w-80 h-96 rounded-3xl bg-gradient-to-t from-lilac to-lilac-light" />
            )}
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-zinc-300 text-2xl font-semibold">{title}</h2>
              <span className="text-zinc-300">{artist}</span> 
            </div>
          </div>

        ) : (
          <div className="flex items-center justify-center border-2 border-lilac-border border-dashed w-80 h-96 rounded-3xl bg-gradient-to-t from-lilac to-lilac-light">
            <span className="text-center text-neutral-50 font-semibold w-40">Selecione um <br /> podcast para ouvir</span>
          </div>    
        )}
      
      <div className="flex flex-col justify-center items-center p-3 space-y-10 w-full">
        <div className="flex w-96 justify-center items-center gap-4">
          <span className="text-slate-300 text-sm">{Math.round(trackProgress)}</span>
          <div className="w-40 bg-violet-400 h-1 rounded-sm" />
          <span className="text-slate-300 text-sm">{!isNaN(hours) ? `${hours != 0 ? `${hours}:` : ''}${minutes}:${Math.round(seconds)}` : '0:00:00'}</span>
        </div>

        <div className="flex items-center justify-between w-64">
          <button>
            <Shuffle className="size-6 text-slate-300" />
          </button>
          <button>
            <SkipBack onClick={toPreviousTrack} className="size-6 text-slate-300" />
          </button>
          <button onClick={handlePlayer} className="p-4 bg-violet-400 rounded-2xl">
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
    </aside>
  )
}