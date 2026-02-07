<template>
  <div class="pt-10 container">
    <PageTitleWithLayout title="專案列表" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :image="project.image"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :article-link="project.articleLink"
        :project-link="project.projectLink"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { projects } from '~/libs/projects/projectsList'
</script>

<style scoped>
:deep(.list-link) {
  &:last-child:not(:first-child) {
    .link-list-item {
      @apply border-b-0;
    }
  }
}
</style>
