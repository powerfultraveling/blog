<template>
  <div v-if="post">
    <Article :title="post.data.title" :content="post.content" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import frontMatter from 'markdown-it-front-matter'

const route = useRoute()
const slug = route.params.slug
const md = new MarkdownIt()

const post = ref({ data: {}, content: '' })

function parseFrontmatter(raw) {
  const data = {}
  raw.split('\n').forEach((line) => {
    const [key, value] = line.split(':').map((s) => s.trim())
    if (key && value) data[key] = value
  })
  return data
}

md.use(frontMatter, (data) => {
  post.value.data = parseFrontmatter(data)
})

onMounted(async () => {
  const res = await fetch(`/posts/${slug}.md`)
  const raw = await res.text()
  post.value.content = md.render(raw)
})
</script>
