import { API_BASE_URL, ARTICLES_META_URL } from '~/libs/const'

export async function getArticlesByCategory(category: string) {
  try {
    const result = await fetch(`${API_BASE_URL}/${category}`)
    const data = await result.json()
    console.log('data', data)

    return data
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export async function getArticle(path: string) {
  try {
    const result = await fetch(`${API_BASE_URL}/${path}`)
    const data = await result.json()
    console.log('data', data)

    return data
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export async function getAllArticlesMeta() {
  try {
    const result = await fetch(ARTICLES_META_URL)
    const data = await result.json()

    return data
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}
