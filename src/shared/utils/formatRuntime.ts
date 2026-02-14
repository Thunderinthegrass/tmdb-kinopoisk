export function formatRuntime(runtime?: number | null): string {
  if (!runtime) return "0:00"

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  return `${hours}:${minutes.toString().padStart(2, '0')}`
}