<template>
  <div v-if="pending">Loading...</div>
  <div v-else-if="error">Error loading article.</div>
  <div v-else-if="post">
    <Article :title="post.data.title" :content="post.content" />
  </div>
</template>

<script setup>
import MarkdownIt from 'markdown-it'
import frontMatter from 'markdown-it-front-matter'

import { getArticle } from '~/apis/article'

const route = useRoute()
const slug = route.params.slug
const md = new MarkdownIt()

async function getArticleHandler() {
  const category = route.query.category
  const fileName = route.params.slug
  if (!category || !fileName) {
    console.error('Category or slug is missing from route')
    return null
  }
  const path = `${category}/${fileName}`

  return await getArticle(path)
}

const {
  data: rawContent,
  pending,
  error
} = await useAsyncData(`article-${slug}`, getArticleHandler)

const post = computed(() => {
  if (!rawContent.value) {
    return { data: {}, content: '' }
  }

  let attributes = {}
  md.use(frontMatter, (fm) => {
    // A simple front-matter parser
    const data = {}
    fm.split('\n').forEach((line) => {
      const [key, value] = line.split(':').map((s) => s.trim())
      if (key && value) {
        data[key] = value
      }
    })
    attributes = data
  })

  const content = md.render(rawContent.value)

  return {
    data: attributes,
    content
  }
})
</script>
