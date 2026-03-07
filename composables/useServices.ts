import { postService } from '~/services/postsService'
import { postsCategoriesService } from '~/services/postsCategoriesService'

// composables/useApi.ts
export const useServices = () => {
  const client = useAppSupabase()

  return {
    postsService: postService(client),
    postsCategoriesService: postsCategoriesService(client)
  }
}
