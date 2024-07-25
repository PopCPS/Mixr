import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration);

export function formatTrackLength(trackLength: number) {

  const hours = Math.floor(trackLength / 3600);
  const minutes = Math.floor(trackLength / 60)
  const seconds = Math.floor(trackLength - minutes * 60)
  
  if(hours !== 0) {
    const length = dayjs.duration({ hours, minutes, seconds })
    return length.format('H:mm:ss').toString()
  } else {
    const length = dayjs.duration({ minutes, seconds })
    return length.format('mm:ss').toString()
  }
  
   
}