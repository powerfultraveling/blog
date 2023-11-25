<template>
  <div>
    <ChallengePageTitle title="文章列表" />
    <div class="container">
      <LinkListItem v-for="{ title, link } in articleList" :key="link" :title="title" :to="link" />
      <!-- {{ articleList }} -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { articleList } from '~/libs/article/articleList'
</script>

<style scoped>
.link-list-item {
  &:nth-child(odd) {
    @apply bg-white;
  }
}
</style>
