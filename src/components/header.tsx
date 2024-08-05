import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import { dateFormatter } from "../lib/date-formatter"

export function Header() {
  
  const [ isDarkModeActive, setIsDarkModeActive ] = useState(false)

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
    <nav className=" flex items-center justify-between p-4 w-full dark:bg-zinc-950 lg:px-16 lg:h-28">
      <div className="flex items-center gap-4 mg:gap-8">
        <div className="flex items-center gap-4">
          <img className="h-10" src="/logo.svg" alt="img" />
          <h1 className="text-3xl font-bold text-zinc-700 dark:text-zinc-300">Mixr</h1>
        </div>
        <div className="hidden w-px h-6 bg-slate-300 dark:bg-zinc-400 md:block" />
        <p className="hidden text-slate-500 text-sm font-normal dark:text-zinc-400 md:block">O melhor para você ouvir, sempre</p>
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