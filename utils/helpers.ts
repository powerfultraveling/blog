export const formatDate = (date: string | Date) => {
  const d = new Date(date)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}
