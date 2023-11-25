<template>
  <div class="pt-10">
    <!-- TODO: need to modify style -->
    <div v-for="{ title, link } in articleList" :key="link">
      <a :href="link" target="_blank">{{ title }}</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { articleList } from '~/libs/article/articleList'
</script>
