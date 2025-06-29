const BASE_URL = 'https://api.github.com/repos/powerfultraveling/blog-content/contents/articles'

export async function getArticlesByCategory(category: string) {
  try {
    const result = await fetch(`${BASE_URL}/${category}`)
    const data = await result.json()
    console.log('data', data)

    return data
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}
