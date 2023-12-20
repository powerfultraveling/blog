<template>
  <Transition name="slide">
    <div
      v-if="isShow"
      class="s-snackbar"
      :class="activeMessageClass"
      @mouseenter="clearHideTimer"
      @mouseleave="setHideTimer"
    >
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

const SHOWING_TIMEAMOUNT = 5000

const props = defineProps<Props>()
const emits = defineEmits(['hide'])

const activeMessageClass = computed(() => messageClassDic[props.type])

const isShow = ref(false)
const timer = ref<ReturnType<typeof setTimeout> | null>(null)

function setHideTimer() {
  timer.value = window.setTimeout(hide, SHOWING_TIMEAMOUNT)
}

function clearHideTimer() {
  window.clearTimeout(timer.value)
}

function show() {
  isShow.value = true
}

function hide() {
  const DELAY_TIME_FOR_TRANSITION = 300

  setTimeout(() => {
    emits('hide')
  }, DELAY_TIME_FOR_TRANSITION)

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
