type Options = {
  hour: 'numeric' | '2-digit' | undefined
  minute: 'numeric' | '2-digit' | undefined
  hour12: boolean | undefined
  timeZone: string | undefined
}

export function formatDateToHMM(date: Date | number | string): string {
  const options: Options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'UTC'
  }

  return new Intl.DateTimeFormat('default', options).format(new Date(date))
}
