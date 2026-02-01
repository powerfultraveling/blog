<template>
  <div>
    <h1>Categories</h1>
    <div v-for="category in categories" :key="category.id">
      <h2>{{ category.name }}</h2>
    </div>
  </div>
</template>

<script setup>
const client = useAppSupabase()

const { data: categories } = await useAsyncData('categories', async () => {
  const { data } = await client.from('post_categories').select('*')
  return data
})
</script>
