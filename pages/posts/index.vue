<template>
  <div class="pt-10">
    <PageTitleWithLayout title="文章列表" />

    <!-- <div class="container">
      <ListLink
        v-for="{ title, link } in articleList"
        :key="link"
        :title="title"
        :to="link"
        is-external
      />
    </div> -->
  </div>
</template>

<script lang="ts" setup>
// const articleList = [
//   {
//     link: '/posts/1',
//     title: '文章1'
//   },
//   {
//     link: '/posts/2',
//     title: '文章2'
//   }
// ]
</script>

<style scoped>
.list-link {
  &:nth-child(odd) {
    @apply bg-white;
  }
}
</style>
