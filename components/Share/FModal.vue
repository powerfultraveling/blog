<template>
  <Transition>
    <div v-if="isOpened" class="cover">
      <div>
        <div class="modal-content">
          <div class="absolute right-2" @click="close">
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
interface Props {
  isOpened: boolean
}

defineProps<Props>()

const emits = defineEmits(['close'])

function close() {
  emits('close')
}
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
