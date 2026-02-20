export const useAddNewPost = () => {
  const client = useAppSupabase()

  const handleNewPost = async () => {
    const { data, error } = await client
      .from('posts')
      .insert({
        title: '新文章',
        content: '',
        post_category_id: '1c9e3bcc-b890-4d1e-b57a-190670b6d21a',
        status: 'draft'
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

  const handleSavePost = async (id: string, content: string) => {
    const { data, error } = await client
      .from('posts')
      .update({ content })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error(error)
    } else {
      console.log(data)
    }
  }

  return {
    handleNewPost,
    handleSavePost
  }
}
