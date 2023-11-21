<template>
  <div>
    <HomeAbout />
    {{ query }}
    <HomeProjects />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const query = computed(() => {
  return route.query
})
</script>
