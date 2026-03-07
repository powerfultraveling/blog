import { PAGE_LINK } from '~/libs/const'

export const useAddNewPost = () => {
  const { postsService } = useServices()

  const handleNewPost = async () => {
    // TODO: this need refactor in future
    const DEFAULT_POST_CATEGORY_ID = '1c9e3bcc-b890-4d1e-b57a-190670b6d21a'
    const DEFAULT_STATUS = 'draft'
    const DEFAULT_TITLE = '新文章'

    const { data, error } = await postsService.createPost({
      title: DEFAULT_TITLE,
      content: '',
      post_category_id: DEFAULT_POST_CATEGORY_ID,
      status: DEFAULT_STATUS
    })

    if (error) {
      console.error(error)
    } else {
      console.log(data)
      navigateTo(`${PAGE_LINK.ADMIN_POSTS}/${data.id}`)
    }
  }

  const handleDeletePost = async (id: string) => {
    await postsService.deletePost(id)
    navigateTo(PAGE_LINK.ADMIN_POSTS)
  }

  const handleSavePost = async (
    id: string,
    postData: {
      title: string
      content: string
      status: string
      cover_image_path?: string | null
    }
  ) => {
    const { data, error } = await postsService.updatePost(id, {
      content: postData.content,
      title: postData.title,
      status: postData.status,
      ...(postData.cover_image_path !== undefined && {
        cover_image_path: postData.cover_image_path
      })
    })

    if (error) {
      console.error(error)
    } else {
      alert('儲存成功')
    }
  }

  return {
    handleNewPost,
    handleSavePost,
    handleDeletePost
  }
}
