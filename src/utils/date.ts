export function formatDate(date: string) {
  const noteDate = new Date(date)
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  if (noteDate.toDateString() === today.toDateString()) {
    return 'Today'
  }
  if (noteDate.toDateString() === yesterday.toDateString()) {
    return 'Yesterday'
  }

  return noteDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
