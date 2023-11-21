<template>
  <div class="container">
    <button class="btn" @click="isOpened = true">click to open</button>
    <FModal :is-opened="isOpened" @close="isOpened = false" />
  </div>
</template>

<script lang="ts" setup>
const isOpened = ref(false)
</script>
