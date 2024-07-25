import dayjs from "dayjs"
import 'dayjs/locale/pt-br'

export function dateFormatter(date:string, format: string, locale: string): string {

  const formattedDate = dayjs(date).locale(locale).format(format)

  return formattedDate
}