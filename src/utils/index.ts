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

export function generateUniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export function checkCatOwner(catOwnerId: string, userId: string): string {
  return catOwnerId === userId ? 'Your cat :)' : 'Not your cat :('
}
