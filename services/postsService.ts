// services/postService.ts
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '~/libs/supabase/database.types'

export const postService = (client: SupabaseClient) => {
  return {
    async getAllPosts() {
      const { data, error } = await client.from('posts').select('*, post_categories(name)')
      if (error) throw error
      return data
    },

    async getAllPublishedPosts() {
      const { data, error } = await client
        .from('posts')
        .select('*, post_categories(name)')
        .eq('status', 'published')
      if (error) throw error
      return data
    },

    // 獲取單篇文章 (原本你寫在 component 的)
    async getPostById(id: string) {
      const { data, error } = await client
        .from('posts')
        .select('*, post_categories(name)')
        .eq('id', id)
        .single()

      if (error) throw error
      return data
    },
    async createPost(post: Database['public']['Tables']['posts']['Insert']) {
      const { data, error } = await client.from('posts').insert(post).select().single()
      if (error) throw error
      return { data, error }
    },
    async updatePost(id: string, post: Database['public']['Tables']['posts']['Update']) {
      const { data, error } = await client.from('posts').update(post).eq('id', id).select().single()
      if (error) throw error
      return { data, error }
    }
  }
}
