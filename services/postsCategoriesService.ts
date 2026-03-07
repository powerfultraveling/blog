// services/postService.ts
import type { SupabaseClient } from '@supabase/supabase-js'

export const postsCategoriesService = (client: SupabaseClient) => {
  return {
    async getAllCategories() {
      const { data, error } = await client.from('post_categories').select('*')
      if (error) throw error
      return data
    },

    // 獲取單篇文章 (原本你寫在 component 的)
    async getCategoryById(id: string) {
      const { data, error } = await client.from('post_categories').select('*').eq('id', id).single()

      if (error) throw error
      return data
    }
  }
}
