<template>
  <nav
    v-if="totalPages > 1"
    class="flex flex-col items-center gap-4 pt-8 pb-10 border-t border-gray-500"
    aria-label="分頁"
  >
    <div class="flex items-center gap-1.5 text-sm tracking-wide">
      <label class="relative inline-flex items-center">
        <select
          class="appearance-none bg-white border border-black rounded-sm pl-2.5 pr-7 py-1 text-sm cursor-pointer focus:outline-none"
          :value="modelValue"
          @change="onSelect"
        >
          <option v-for="page in totalPages" :key="page" :value="page">
            {{ page }}
          </option>
        </select>
        <span
          class="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px] leading-none"
        >
          ▼
        </span>
      </label>
      <span>/ {{ totalPages }}</span>
    </div>

    <div class="flex items-center gap-3 w-full max-w-md">
      <button
        type="button"
        class="flex-1 flex items-center justify-center gap-2 border border-black rounded-lg px-4 py-3 text-sm hoverable disabled:opacity-40 disabled:cursor-not-allowed"
        :disabled="modelValue <= 1"
        @click="goTo(modelValue - 1)"
      >
        <span>上一頁</span>
      </button>
      <button
        type="button"
        class="flex-1 flex items-center justify-center gap-2 border border-black rounded-lg px-4 py-3 text-sm hoverable disabled:opacity-40 disabled:cursor-not-allowed"
        :disabled="modelValue >= totalPages"
        @click="goTo(modelValue + 1)"
      >
        <span>下一頁</span>
      </button>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: number
  totalPages: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', page: number): void
}>()

function goTo(page: number) {
  if (page < 1 || page > props.totalPages) return
  emit('update:modelValue', page)
}

function onSelect(event: Event) {
  const value = Number((event.target as HTMLSelectElement).value)
  goTo(value)
}
</script>
