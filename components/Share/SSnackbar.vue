<template>
  <Transition name="slide">
    <div v-if="isShow" class="s-snackbar" :class="activeMessageClass">
      <div>{{ content }}</div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { MessageType } from '~/libs/support/types'

interface Props {
  content: string
  type: MessageType
}

const messageClassDic = {
  [MessageType.success]: 'bg-success',
  [MessageType.danger]: 'bg-danger',
  [MessageType.warn]: 'bg-info'
}

const props = defineProps<Props>()
const emits = defineEmits(['hide'])

const activeMessageClass = computed(() => messageClassDic[props.type])

const isShow = ref(false)

function show() {
  isShow.value = true
}

function hide() {
  setTimeout(() => {
    emits('hide')
  }, 5000)

  isShow.value = false
}

defineExpose({ hide, show })
</script>

<style scoped>
.s-snackbar {
  @apply fixed left-half top-10 -translate-x-half;
  @apply p-4 rounded-md bg-info text-white font-medium;
}

.slide-enter-active,
.slide-leave-active {
  @apply transitable !important;
}

.slide-enter-from,
.slide-leave-to {
  @apply opacity-0 -translate-y-full;
}
</style>
