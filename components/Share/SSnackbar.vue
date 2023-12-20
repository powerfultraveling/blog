<template>
  <Transition name="slide">
    <div
      v-if="isShow"
      class="s-snackbar"
      :class="activeMessageClass"
      @mouseenter="clearHideTimer"
      @mouseleave="setHideTimer"
    >
      <div class="mr-2">{{ content }}</div>
      <button class="relative inline-block" @click.prevent="hide">
        <!-- FIXME: The icon could not be loaded when using render function"
        <SIcon name="close-outline" /> -->
        <!-- <div>dsds</div> -->
        <SClose :active="isShow" />
      </button>
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

const SHOWING_TIME_AMOUNT = 5000

const props = defineProps<Props>()
const emits = defineEmits(['hide'])

const activeMessageClass = computed(() => messageClassDic[props.type])

const isShow = ref(false)
const timer = ref<ReturnType<typeof setTimeout> | null>(null)

function setHideTimer() {
  timer.value = window.setTimeout(hide, SHOWING_TIME_AMOUNT)
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
  @apply px-6 py-4 rounded-md bg-info text-white font-medium;
  @apply flex items-center space-x-2;
}

:deep(.close) {
  .stick {
    @apply w-3 bg-white !important;
  }

  &:hover .stick {
    @apply bg-gray !important;
  }
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
