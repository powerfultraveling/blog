<template>
  <button class="btn border-btn">
    <span>click</span>
  </button>
</template>

<script lang="ts" setup></script>

<style scoped>
.border-btn {
  @apply relative rounded-none;

  &::after,
  &::before {
    content: '';

    @apply absolute top-0 left-0 w-[1px] h-[1px] bg-black transitable opacity-0;
  }

  span::after,
  span::before {
    content: '';

    @apply absolute bottom-0 right-0 w-[1px] h-[1px] bg-black transitable opacity-0;
  }

  &:hover::after,
  &:hover span::after {
    @apply w-full opacity-100;
  }

  &:hover::before,
  &:hover span::before {
    @apply h-full opacity-100;
  }
}
</style>
