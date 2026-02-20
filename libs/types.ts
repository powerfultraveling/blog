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

export interface Post {
  id: string
  title: string
  content: string
  created_at: string
  updated_at: string
  status: string
  post_category_id: string
  profile_id: string
  published_at: string
  deleted_at: string
  subtitle: string
}
