<template>
  <!-- TODO: 這邊是測試用，之後要修掉 -->
  <div class="container">
    <button class="btn" @click="isOpened = true">click to open</button>
    <button @click="$modal.open('hallo')">modal test</button>
    <button class="btn" @click="$modal.close()">close</button>
    <FModal :is-opened="isOpened" @close="isOpened = false" />
  </div>
</template>

<script lang="ts" setup>
const isOpened = ref(false)
</script>
