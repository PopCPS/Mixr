import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import { dateFormatter } from "../lib/date-formatter"

interface HeaderProps {
  isDarkModeActive: boolean,
  setIsDarkModeActive: (arg0: boolean) => void,
}

export function Header({
  isDarkModeActive,
  setIsDarkModeActive,
}: HeaderProps) {

  const [ date, setDate ] = useState<string>()

  const weekDay = dateFormatter(dayjs().toString(), 'ddd[,] D', 'pt-br')
  const dayAndMonth = dateFormatter(dayjs().toString(), 'MMMM', 'pt-br')

  function darkModeHandler() {
    setIsDarkModeActive(!isDarkModeActive)
    document.body.classList.toggle("dark");
  }
  
  useEffect(() => {
    setDate(weekDay.concat(' ').concat(dayAndMonth))
  }, [weekDay, dayAndMonth])

  return (
    <nav className="flex items-center px-16 h-28 justify-between dark:bg-zinc-950">
      <div className="flex items-center gap-x-8">
        {!isDarkModeActive ? (
          <img className="h-10" src="/light-mode-logo.svg" alt="img" />
        ) : (
          <img className="h-10" src="/dark-mode-logo.svg" alt="img" />
        )}
        <div className="w-px h-6 bg-slate-300 dark:bg-zinc-400" />
        <p className="text-slate-500 text-sm font-normal dark:text-zinc-400">O melhor para você ouvir, sempre</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={darkModeHandler} className="p-2 rounded-3xl transition-all hover:bg-slate-200 hover:transition-colors dark:hover:bg-zinc-800">
          {isDarkModeActive ? (
              <Sun className="size-5 text-slate-500 dark:text-zinc-400" />
          ) : (
              <Moon className="size-5 text-slate-500 dark:text-zinc-400" />
          )}
        </button>
        <span className="text-slate-500 text-sm font-normal dark:text-zinc-400">{date}</span>
      </div>
    </nav>
  )
}