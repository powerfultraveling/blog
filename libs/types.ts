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

export interface PostCategory {
  id: string
  name: string
  slug: string
}

export interface Option {
  value: string | number
  label: string
}

export interface Post {
  id: string
  title: string
  content: string | null
  created_at: string | null
  status: string | null
  post_category_id: string
  profile_id: string | null
  published_at: string | null
  deleted_at: string | null
  subtitle: string | null
  post_categories?: { name: string; id: string } | null
}
