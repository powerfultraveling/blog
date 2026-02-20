export interface ArticleMetaData {
  title: string
  path: string
  fileName: string
  category: string
  tags: string[]
  date: string
  description: string
}

export interface ProjectItem {
  image: string
  title: string
  description: string
  tags: string[]
  projectLink?: string
  articleLink?: string
}

export interface Option {
  value: string | number
  label: string
}
