<template>
  <!-- TODO: 這邊是測試用，之後要修掉 -->
  <div class="container">
    <button class="btn" @click="$modal.open('test')">open</button>
    <FModal name="test" />
  </div>
</template>

<script lang="ts" setup></script>
