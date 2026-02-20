export const useAddNewPost = () => {
  const client = useAppSupabase()

  const handleNewPost = async () => {
    const { data, error } = await client
      .from('posts')
      .insert({
        title: '新文章',
        content: '',
        post_category_id: '1c9e3bcc-b890-4d1e-b57a-190670b6d21a'
      })
      .select()
      .single()

    if (error) {
      console.error(error)
    } else {
      console.log(data)
      navigateTo(`/editor/${data.id}`)
    }
  }

  return {
    handleNewPost
  }
}
