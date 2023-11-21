<template>
  <Transition>
    <div v-if="isOpened" class="cover">
      <div>
        <div class="modal-content">
          <div class="absolute right-2" @click="$modal.close()">
            <slot name="close">
              <button>close</button>
            </slot>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useModalStore } from '~/store/modal'

interface Props {
  name: string
}

const props = defineProps<Props>()

const { openedList } = storeToRefs(useModalStore())

const isOpened = computed(() => {
  return openedList.value.includes(props.name)
})
</script>

<style scoped>
.cover {
  @apply bg-black fixed inset-0 bg-opacity-70;
  @apply flex items-center justify-center;
}

.modal-content {
  @apply w-100 h-50 bg-white rounded-md relative;
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
