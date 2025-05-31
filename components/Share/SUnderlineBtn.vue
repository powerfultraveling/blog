<template>
  <div
    class="flex items-center space-x-10 justify-between border-b border-black pb-2 w-fit font-sans transitable hover:border-b-2 hover:border-black"
  >
    <div>{{ props.label }}</div>
    <img src="@/assets/icons/shared/right-arrow.png" alt="underline" class="w-4 h-4" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  label: string
}

const props = defineProps<Props>()
</script>
