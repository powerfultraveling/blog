<template>
  <Transition>
    <div v-if="isOpened" class="cover">
      <div>
        <div class="modal-content relative">
          <div class="absolute right-10 top-6" @click="$modal.close()">
            <slot name="close">
              <SClose :active="isOpened" />
            </slot>
          </div>
          <slot>
            <div class="w-100 h-50 flex items-center justify-center">This is Modal</div>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import _ from 'lodash'
import { useModalStore } from '~/store/modal'

interface Props {
  name: string
}

const props = defineProps<Props>()

const { openedList } = storeToRefs(useModalStore())

const isOpened = computed(() => {
  return openedList.value.includes(props.name)
})

const hasModalOpened = computed(() => {
  return !_.isEmpty(openedList.value)
})

const { $scroll } = useNuxtApp()

function manageScrollState() {
  if (hasModalOpened.value) {
    $scroll.lock()
    return
  }

  $scroll.unlock()
}

watch(isOpened, () => {
  manageScrollState()
})
</script>

<style scoped>
.cover {
  @apply bg-black fixed inset-0 bg-opacity-70;
  @apply flex items-center justify-center;
}

.modal-content {
  @apply bg-white rounded-md relative;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
