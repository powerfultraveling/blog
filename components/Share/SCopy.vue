<template>
  <button type="button" class="" @click="onClick">
    <SIcon name="clipboard" />
  </button>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

interface Props {
  value: string
}

const props = defineProps<Props>()
const { value } = toRefs(props)

const { isSupported, text, copy } = useClipboard({ source: value })

const { $snackbar } = useNuxtApp()

async function onClick() {
  if (!isSupported) {
    $snackbar.danger('your browser does not support')
    return
  }

  await copy()
  $snackbar.success(`copied: ${text.value}`)
}
</script>

<style scoped>
:deep(path) {
  @apply transitable hover:fill-gray;
}
</style>
